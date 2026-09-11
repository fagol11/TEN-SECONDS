import React, { useEffect, useState } from 'react';
import { Swords, Wifi, WifiOff, Trophy } from 'lucide-react';

/**
 * LiveChallengeHUD — Real-time in-game scoreboard overlay.
 * Shows during CHALLENGE mode when a Supabase Realtime match session is active.
 */
export default function LiveChallengeHUD({ myScore, myStreak, matchSession, totalTracks, trackIndex }) {
  const [opponent, setOpponent] = useState(null);
  const [opponentScore, setOpponentScore] = useState(0);
  const [opponentStreak, setOpponentStreak] = useState(0);
  const [opponentTrackIndex, setOpponentTrackIndex] = useState(0);
  const [opponentFinished, setOpponentFinished] = useState(false);
  const [connected, setConnected] = useState(false);
  const [pulseDiff, setPulseDiff] = useState(null);

  useEffect(() => {
    if (!matchSession) return;

    // Register callbacks on the already-active session
    matchSession._setCallbacks({
      onOpponentReady: (payload) => {
        setOpponent(payload.player);
        setConnected(true);
      },
      onOpponentScore: (payload) => {
        setOpponent(payload.player);
        setConnected(true);
        const diff = payload.score - opponentScore;
        setOpponentScore(payload.score);
        setOpponentStreak(payload.streak || 0);
        setOpponentTrackIndex(payload.trackIndex || 0);
        if (diff > 0) setPulseDiff(diff);
        setTimeout(() => setPulseDiff(null), 1200);
      },
      onOpponentGameOver: (payload) => {
        setOpponent(payload.player);
        setOpponentScore(payload.score);
        setOpponentFinished(true);
      },
    });
  }, [matchSession]);

  const scoreDiff = myScore - opponentScore;
  const isLeading = scoreDiff >= 0;
  const progress = totalTracks > 0 ? Math.round((opponentTrackIndex / totalTracks) * 100) : 0;

  if (!matchSession) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-lg mx-auto px-3 pt-2">
        <div className="glass-panel rounded-2xl border border-purple-500/30 bg-purple-950/40 backdrop-blur-md px-3 py-2 flex items-center gap-3">

          {/* Connection Status */}
          <div className="shrink-0">
            {connected ? (
              <Wifi className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            ) : (
              <WifiOff className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            )}
          </div>

          {/* Opponent Info */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {opponent?.avatar ? (
              <img
                src={opponent.avatar}
                alt={opponent.name}
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-lg object-cover border border-purple-400/30 shrink-0"
              />
            ) : (
              <div className="w-7 h-7 rounded-lg bg-purple-500/30 border border-purple-400/30 flex items-center justify-center shrink-0">
                <Swords className="w-3.5 h-3.5 text-purple-300" />
              </div>
            )}
            <div className="min-w-0">
              <div className="text-[10px] font-black text-purple-200 truncate">
                {opponent ? `${opponent.flag || ''} ${opponent.name}` : connected ? 'Avversario Connesso' : 'In attesa avversario...'}
              </div>
              {opponent && (
                <div className="text-[9px] text-slate-400 font-mono">
                  {opponentFinished ? '✅ Ha Finito' : `Brano ${Math.min(opponentTrackIndex + 1, totalTracks)}/${totalTracks}`}
                </div>
              )}
            </div>
          </div>

          {/* VS Divider */}
          <div className="text-[10px] font-black text-slate-500 shrink-0">VS</div>

          {/* Score Comparison */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Opponent Score */}
            <div className="text-right">
              <div className={`text-[11px] font-mono font-black transition-all ${opponentFinished ? 'text-slate-400' : 'text-rose-300'}`}>
                {opponentScore.toLocaleString('it-IT')}
                {pulseDiff && (
                  <span className="ml-1 text-[9px] text-rose-400 animate-bounce">+{pulseDiff}</span>
                )}
              </div>
            </div>

            {/* Diff Badge */}
            <div className={`px-2 py-0.5 rounded-lg text-[10px] font-black font-mono border transition-all ${
              isLeading
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
            }`}>
              {isLeading ? '+' : ''}{scoreDiff.toLocaleString('it-IT')}
            </div>

            {/* My Score */}
            <div className="text-left">
              <div className="text-[11px] font-mono font-black text-amber-300">
                {myScore.toLocaleString('it-IT')}
              </div>
            </div>

            {/* Trophy if leading */}
            {isLeading && scoreDiff > 0 && (
              <Trophy className="w-3.5 h-3.5 text-amber-400 fill-current shrink-0" />
            )}
          </div>
        </div>

        {/* Opponent Progress Bar */}
        {opponent && !opponentFinished && (
          <div className="mt-1 mx-1 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-rose-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
