/**
 * matchService.js
 * Real-time 1v1 Challenge session management via Supabase Realtime Broadcast.
 *
 * Events:
 *   player_ready  - player joined and ready
 *   score_update  - live score + track index during game
 *   game_over     - final result
 */
import { supabase } from './supabaseClient';

export const MATCH_EVENTS = {
  PLAYER_READY: 'player_ready',
  SCORE_UPDATE: 'score_update',
  GAME_OVER: 'game_over',
};

export function createMatchSession(matchCode, playerInfo, initialCallbacks = {}) {
  const channelName = `match_${matchCode.replace(/[^a-zA-Z0-9]/g, '_')}`;

  // Mutable callbacks so HUD can update them after mount
  let callbacks = { ...initialCallbacks };

  const channel = supabase.channel(channelName, {
    config: {
      broadcast: { self: false },
    },
  });

  channel
    .on('broadcast', { event: MATCH_EVENTS.PLAYER_READY }, ({ payload }) => {
      if (callbacks.onOpponentReady) callbacks.onOpponentReady(payload);
    })
    .on('broadcast', { event: MATCH_EVENTS.SCORE_UPDATE }, ({ payload }) => {
      if (callbacks.onOpponentScore) callbacks.onOpponentScore(payload);
    })
    .on('broadcast', { event: MATCH_EVENTS.GAME_OVER }, ({ payload }) => {
      if (callbacks.onOpponentGameOver) callbacks.onOpponentGameOver(payload);
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        // Announce presence once connected
        channel.send({
          type: 'broadcast',
          event: MATCH_EVENTS.PLAYER_READY,
          payload: { player: playerInfo, timestamp: Date.now() },
        });
      }
    });

  return {
    matchCode,
    channelName,

    /** Update callbacks after creation (used by LiveChallengeHUD) */
    _setCallbacks: (newCallbacks) => {
      callbacks = { ...callbacks, ...newCallbacks };
    },

    sendScoreUpdate: ({ score, trackIndex, streak }) => {
      channel.send({
        type: 'broadcast',
        event: MATCH_EVENTS.SCORE_UPDATE,
        payload: { player: playerInfo, score, trackIndex, streak, timestamp: Date.now() },
      });
    },

    sendGameOver: ({ score, correctAnswers, totalTracks }) => {
      channel.send({
        type: 'broadcast',
        event: MATCH_EVENTS.GAME_OVER,
        payload: { player: playerInfo, score, correctAnswers, totalTracks, timestamp: Date.now() },
      });
    },

    unsubscribe: () => {
      supabase.removeChannel(channel);
    },
  };
}
