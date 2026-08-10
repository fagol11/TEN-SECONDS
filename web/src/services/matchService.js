/**
 * matchService.js
 * Real-time 1v1 Room & Challenge Session Management via Supabase Realtime Broadcast.
 *
 * Events:
 *   PLAYER_READY  - player joined the room / lobby
 *   MATCH_START   - host started the match, transmits playlist & track list
 *   SCORE_UPDATE  - live score + track index + streak during game
 *   GAME_OVER     - final score + stats
 */
import { supabase } from './supabaseClient';

export const MATCH_EVENTS = {
  PLAYER_READY: 'player_ready',
  MATCH_START: 'match_start',
  SCORE_UPDATE: 'score_update',
  GAME_OVER: 'game_over',
};

export function createMatchSession(matchCode, playerInfo, initialCallbacks = {}) {
  const cleanCode = (matchCode || 'TS-ROOM').replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
  const channelName = `match_room_${cleanCode}`;

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
    .on('broadcast', { event: MATCH_EVENTS.MATCH_START }, ({ payload }) => {
      if (callbacks.onMatchStart) callbacks.onMatchStart(payload);
    })
    .on('broadcast', { event: MATCH_EVENTS.SCORE_UPDATE }, ({ payload }) => {
      if (callbacks.onOpponentScore) callbacks.onOpponentScore(payload);
    })
    .on('broadcast', { event: MATCH_EVENTS.GAME_OVER }, ({ payload }) => {
      if (callbacks.onOpponentGameOver) callbacks.onOpponentGameOver(payload);
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        // Broadcast arrival to the room
        channel.send({
          type: 'broadcast',
          event: MATCH_EVENTS.PLAYER_READY,
          payload: { player: playerInfo, timestamp: Date.now() },
        });
      }
    });

  return {
    matchCode: cleanCode,
    channelName,

    _setCallbacks: (newCallbacks) => {
      callbacks = { ...callbacks, ...newCallbacks };
    },

    sendReady: () => {
      channel.send({
        type: 'broadcast',
        event: MATCH_EVENTS.PLAYER_READY,
        payload: { player: playerInfo, timestamp: Date.now() },
      });
    },

    sendMatchStart: ({ playlist, customTracks, songLimit }) => {
      channel.send({
        type: 'broadcast',
        event: MATCH_EVENTS.MATCH_START,
        payload: {
          host: playerInfo,
          playlist,
          customTracks,
          songLimit: songLimit || 10,
          timestamp: Date.now()
        },
      });
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
