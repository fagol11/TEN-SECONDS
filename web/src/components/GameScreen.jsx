import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { SkipForward, Flame, Award, CheckCircle, XCircle, RotateCcw, Home, Sparkles, Volume2, LogOut, AlertTriangle, X, Zap, Disc3, Skull, Trophy, Swords, Crown } from 'lucide-react';
import LiveChallengeHUD from './LiveChallengeHUD';

export default function GameScreen() {
  const {
    currentPlaylist,
    gameMode,
    trackList,
    trackIndex,
    currentTrack,
    currentChoices,
    remainingTime,
    isAudioLoading,
    prepCountdown,
    scoreDetails,
    maxStreak,
    roundStatus,
    selectedChoice,
    answerFeedback,
    roundScore,
    streak,
    stats,
    user,
    submitAnswer,
    skipRound,
    nextRound,
    startDeathParade,
    setActiveScreen,
    stopAudio,
    playAudio,
    restartGame,
    quitGame,
    matchSession,
  } = useGame();

  const [confirmModal, setConfirmModal] = useState(null); // null | 'RESTART' | 'QUIT'

  // Handle hardware / gesture back button while in game screen
  useEffect(() => {
    const handleGameBack = () => {
      if (roundStatus === 'SUMMARY') {
        if (gameMode === 'CHALLENGE' || gameMode === 'TOURNAMENT') {
          setActiveScreen('CHALLENGE');
        } else {
          setActiveScreen('CATALOG');
        }
      } else {
        setConfirmModal(prev => (prev ? null : 'QUIT'));
      }
    };
    window.addEventListener('ten_seconds_game_back_press', handleGameBack);
    return () => {
      window.removeEventListener('ten_seconds_game_back_press', handleGameBack);
    };
  }, [roundStatus, gameMode, setActiveScreen]);

  // Ensure audio and timers stop if component unmounts
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  if (!currentTrack && roundStatus !== 'SUMMARY') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin mb-4" />
        <p className="text-slate-400 text-sm">Caricamento brano in corso...</p>
      </div>
    );
  }

  // Calculate SVG circular timer offset
  const circumference = 2 * Math.PI * 52; // r=52
  const strokeDashoffset = circumference - (remainingTime / 10.0) * circumference;

  const isAnswered = roundStatus === 'ANSWERED';

  const handleConfirmRestart = () => {
    setConfirmModal(null);
    restartGame();
  };

  const handleConfirmQuit = () => {
    setConfirmModal(null);
    quitGame();
  };

  // Render Round Summary if completed
  if (roundStatus === 'SUMMARY') {
    const isDeathParade = gameMode === 'DEATH_PARADE';
    const isNewDeathRecord = isDeathParade && stats.correct >= (user.deathParadeRecord || 0) && stats.correct > 0;

    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 max-w-md mx-auto text-center animate-fadeIn">
        
        {isDeathParade ? (
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-600 via-purple-600 to-amber-500 flex items-center justify-center shadow-2xl shadow-rose-600/50 mb-6 scale-110 p-0.5 animate-pulse">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
              <span className="text-4xl">💀</span>
            </div>
          </div>
        ) : (
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-2xl shadow-emerald-500/40 mb-6 scale-110">
            <Sparkles className="w-10 h-10 text-slate-950 fill-current" />
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-2 leading-tight">
          {isDeathParade
            ? (isNewDeathRecord ? '👑 NUOVO RECORD DEATH PARADE!' : '💀 SEI STATO ELIMINATO!')
            : (gameMode === 'CALIBRATION' ? 'CALIBRAZIONE COMPLETATA!' : 'PARTITA COMPLETATA!')}
        </h2>
        
        <p className="text-slate-400 text-sm mb-6">
          {isDeathParade ? 'Modalità Morte Improvvisa • 1 Errore e Sei Fuori' : (currentPlaylist?.title || 'Playlist di Gioco')}
        </p>

        {/* Score Breakdown Card */}
        <div className="w-full glass-card p-5 rounded-2xl border border-white/10 mb-6 text-left space-y-3 shadow-xl">
          <div className="text-center pb-2 border-b border-white/10">
            <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
              {isDeathParade ? 'Death Parade • Risultato' : 'Punteggio Finale Calcolato'}
            </div>
            {isDeathParade ? (
              <div className="flex items-center justify-center gap-4 mt-1">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black font-mono text-rose-400">{stats.correct}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Canzoni</div>
                </div>
                <div className="text-slate-600 text-2xl font-thin">|</div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">{(scoreDetails?.finalTotalScore || roundScore).toLocaleString('it-IT')}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Punti</div>
                </div>
              </div>
            ) : (
              <div className={`text-4xl sm:text-5xl font-black font-mono mt-1 text-emerald-400`}>
                {(scoreDetails?.finalTotalScore || roundScore).toLocaleString('it-IT')} PT
              </div>
            )}
          </div>

          {isDeathParade ? (
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="text-slate-300 font-medium">🎯 Risposte Corrette ({scoreDetails?.correctCount || stats.correct}x)</span>
                <span className="font-mono font-bold text-emerald-400">+{(scoreDetails?.basePoints || (stats.correct * 100)).toLocaleString('it-IT')} PT</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-cyan-500/20">
                <div className="flex flex-col">
                  <span className="text-cyan-300 font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" /> Coeff. Rapidità (x{scoreDetails?.speedMultiplier || 1.0})
                  </span>
                  <span className="text-[10px] text-slate-400">Tempo medio: {scoreDetails?.avgCorrectTimeSec || 0}s</span>
                </div>
                <span className="font-mono font-bold text-cyan-400">+{(scoreDetails?.speedBonusPoints || 0).toLocaleString('it-IT')} PT</span>
              </div>
              {(scoreDetails?.streakBonusPoints > 0 || maxStreak > 0) && (
                <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-amber-500/20">
                  <span className="text-amber-300 font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Bonus Serie Max ({maxStreak}x)
                  </span>
                  <span className="font-mono font-bold text-amber-400">+{(scoreDetails?.streakBonusPoints || (maxStreak * 20)).toLocaleString('it-IT')} PT</span>
                </div>
              )}
              <div className="flex items-center justify-between bg-amber-500/10 p-3 rounded-xl border border-amber-500/30">
                <span className="text-amber-300 font-bold flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400 fill-current" /> Record Personale
                </span>
                <span className="font-mono font-black text-white text-sm">
                  {Math.max(stats.correct, user.deathParadeRecord || 0)} canzoni • {Math.max(scoreDetails?.finalTotalScore || roundScore, user.deathParadePointsRecord || 0).toLocaleString('it-IT')} PT
                </span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl text-slate-300">
                <span>⏱️ Tempo Medio per Canzone</span>
                <span className="font-mono font-bold text-slate-200">
                  {stats.correct > 0 ? (stats.totalTimeMs / stats.correct / 1000).toFixed(1) : 0}s
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="text-slate-300 font-medium">🎯 Risposte Corrette ({scoreDetails?.correctCount || stats.correct}x)</span>
                <span className="font-mono font-bold text-emerald-400">+{(scoreDetails?.basePoints || (stats.correct * 1000)).toLocaleString('it-IT')} PT</span>
              </div>

              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-cyan-500/20">
                <div className="flex flex-col">
                  <span className="text-cyan-300 font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" /> Coeff. Rapidità (x{scoreDetails?.speedMultiplier || 1.0})
                  </span>
                  <span className="text-[10px] text-slate-400">Tempo medio risposte esatte: {scoreDetails?.avgCorrectTimeSec || 0}s</span>
                </div>
                <span className="font-mono font-bold text-cyan-400">+{(scoreDetails?.speedBonusPoints || 0).toLocaleString('it-IT')} PT</span>
              </div>

              {(scoreDetails?.streakBonusPoints > 0 || maxStreak > 0) && (
                <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-amber-500/20">
                  <span className="text-amber-300 font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Bonus Serie Max ({maxStreak}x)
                  </span>
                  <span className="font-mono font-bold text-amber-400">+{(scoreDetails?.streakBonusPoints || (maxStreak * 100)).toLocaleString('it-IT')} PT</span>
                </div>
              )}

              {gameMode === 'DAILY' && stats.correct >= 10 && (
                <div className="flex items-center justify-between bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/30">
                  <span className="text-amber-300 font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Bonus 10/10 Sfida Daily
                  </span>
                  <span className="font-mono font-bold text-amber-400">+1.000 PT</span>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-xs text-center">
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-emerald-400 font-bold text-base">{stats.correct}</div>
              <div className="text-slate-400 text-[10px]">Corrette</div>
            </div>
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-rose-400 font-bold text-base">{stats.wrong}</div>
              <div className="text-slate-400 text-[10px]">Sbagliate</div>
            </div>
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-amber-400 font-bold text-base">{(stats.totalTimeMs / 1000).toFixed(1)}s</div>
              <div className="text-slate-400 text-[10px]">Tempo Totale</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3">
          {isDeathParade && (
            <button
              onClick={startDeathParade}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 hover:brightness-110 text-white font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 transition-all active:scale-[0.98]"
            >
              <RotateCcw className="w-5 h-5" /> RIGIOCA DEATH PARADE 🔥
            </button>
          )}

          {gameMode === 'TOURNAMENT' ? (
            <button
              onClick={() => {
                try {
                  localStorage.setItem('ten_seconds_pending_challenge', JSON.stringify({
                    screen: 'challenges',
                    tournamentId: 'tournament_tab',
                    ts: Date.now()
                  }));
                } catch (_) {}
                setActiveScreen('CHALLENGE');
              }}
              className="w-full py-4 rounded-xl font-black font-display text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98] bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 hover:brightness-110 text-slate-950 shadow-yellow-500/25 cursor-pointer"
            >
              <Crown className="w-5 h-5" /> TORNA AI MIEI TORNEI
            </button>
          ) : gameMode === 'CHALLENGE' ? (
            <button
              onClick={() => setActiveScreen('CHALLENGE')}
              className="w-full py-4 rounded-xl font-black font-display text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:brightness-110 text-slate-950 shadow-amber-500/25 cursor-pointer"
            >
              <Swords className="w-5 h-5" /> TORNA ALLE SFIDE
            </button>
          ) : (
            <button
              onClick={() => setActiveScreen('CATALOG')}
              className={`w-full py-4 rounded-xl font-black font-display text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] cursor-pointer ${
                isDeathParade
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25'
              }`}
            >
              <Home className="w-5 h-5" /> TORNA AI CATALOGHI
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-full flex flex-col justify-between px-3 py-1.5 max-w-lg w-full mx-auto relative overflow-hidden select-none touch-none">
      
      {/* Real-time 1v1 Live Challenge HUD */}
      {gameMode === 'CHALLENGE' && matchSession && (
        <LiveChallengeHUD
          myScore={roundScore}
          myStreak={streak}
          matchSession={matchSession}
          totalTracks={trackList.length}
          trackIndex={trackIndex}
        />
      )}

      {/* Album Blur Background Effect */}
      {currentTrack?.artworkUrl && (
        <div
          className="absolute inset-0 opacity-15 blur-3xl scale-125 transition-all duration-700 pointer-events-none"
          style={{ backgroundImage: `url(${currentTrack.artworkUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
      )}

      {/* Top Header info & Game Control Actions */}
      <div className="flex items-center justify-between z-10 gap-2 shrink-0 pt-0.5 pb-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          {gameMode === 'DEATH_PARADE' ? (
            <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1">
              <Skull className="w-3.5 h-3.5 text-rose-400" /> DEATH PARADE • Brano {trackIndex + 1}
            </span>
          ) : (
            <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-bold">
              Brano {trackIndex + 1} / {trackList.length}
            </span>
          )}
          <span className="text-slate-500">•</span>
          {gameMode === 'DEATH_PARADE' ? (
            <span className="text-emerald-400 font-mono font-black text-base">{roundScore} PT</span>
          ) : (
            <span className="text-emerald-400 font-mono font-black text-base">{roundScore} PT</span>
          )}
        </div>

        {/* Action Controls: Restart & Quit buttons */}
        <div className="flex items-center gap-1.5">
          {streak > 1 && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 px-2.5 py-1 rounded-full text-amber-300 text-xs font-bold mr-1">
              <Flame className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>{streak}x</span>
            </div>
          )}

          <button
            onClick={() => setConfirmModal('RESTART')}
            className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 text-xs font-bold flex items-center gap-1 transition-all"
            title="Riavvia la partita corrente (-1 vita)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Riavvia</span>
          </button>

          <button
            onClick={() => setConfirmModal('QUIT')}
            className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-white/10 text-xs font-bold flex items-center gap-1 transition-all"
            title="Esci al catalogo principale"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Esci</span>
          </button>
        </div>
      </div>

      {/* Center 10s Timer & Album Art on Answered */}
      <div className="my-auto flex flex-col items-center justify-center z-10 py-1 shrink-0">
        {!isAnswered ? (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center select-none">
            {/* SVG Ring Concentrico Unico per tutte le fasi */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
              {/* Sfondo cerchio scuro */}
              <circle
                cx="60"
                cy="60"
                r="52"
                className="stroke-slate-800/60 fill-slate-950/90"
                strokeWidth="10"
              />

              {/* FASE 1: DIGGING / BUFFERING (quando l'audio sta precaricando) */}
              {isAudioLoading ? (
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  className="stroke-cyan-400 origin-center animate-spin"
                  strokeWidth="10"
                  strokeDasharray="90 236"
                  strokeLinecap="round"
                  fill="transparent"
                  style={{ animationDuration: '1.2s' }}
                />
              ) : prepCountdown > 0 ? (
                /* FASE 2: CONTO ALLA ROVESCIA FLUIDO 3..2..1 (Anello Amber fluido con massima priorità) */
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  className="stroke-amber-400 transition-all duration-300 ease-linear"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (prepCountdown / 3.0) * circumference}
                  strokeLinecap="round"
                  fill="transparent"
                />
              ) : (
                /* FASE 3: TIMER 10S GIOCO ATTIVO (Smeraldo -> Amber -> Rosa) */
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  className={`transition-all duration-75 ease-linear ${
                    remainingTime <= 3 ? 'stroke-rose-500' : remainingTime <= 5 ? 'stroke-amber-400' : 'stroke-emerald-400'
                  }`}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              )}
            </svg>

            {/* Contenuto interno al cerchio perfettamente centrato */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              {isAudioLoading ? (
                <div className="flex flex-col items-center justify-center gap-1.5 animate-pulse">
                  <Disc3 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 animate-spin" style={{ animationDuration: '2.5s' }} />
                  <div className="text-xs sm:text-sm font-black tracking-widest text-cyan-400 uppercase font-display drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] flex items-center justify-center">
                    <span>DIGGING</span>
                    <span className="inline-flex tracking-tighter w-4 text-left ml-0.5 font-mono">
                      <span className="animate-pulse">.</span>
                      <span className="animate-pulse delay-150">.</span>
                      <span className="animate-pulse delay-300">.</span>
                    </span>
                  </div>
                </div>
              ) : prepCountdown > 0 ? (
                <div key={prepCountdown} className="flex flex-col items-center justify-center animate-numberPop">
                  <span className="text-5xl sm:text-6xl font-black font-display text-amber-400 tracking-tighter drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                    {prepCountdown}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase text-amber-300 tracking-widest mt-0.5 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> PREPARATI!
                  </span>
                </div>
              ) : (
                <span className={`font-mono font-black text-3xl sm:text-5xl tracking-tighter ${
                  remainingTime <= 3 ? 'text-rose-400 animate-ping' : remainingTime <= 5 ? 'text-amber-300' : 'text-amber-400'
                }`}>
                  {remainingTime.toFixed(1)}s
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Album Cover Art & Song Info immediately below circle */
          <div className="flex flex-col items-center animate-fadeIn text-center">
            {/* Album Cover Art */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/30 mb-2 relative group bg-slate-900 flex items-center justify-center">
              {currentTrack?.artworkUrl ? (
                <img
                  src={currentTrack.artworkUrl}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 bg-slate-950/80">
                  <Sparkles className="w-8 h-8 mb-1 text-slate-500" />
                  <span className="text-[10px] font-bold">10 SECONDS</span>
                </div>
              )}
            </div>

            {/* Feedback badge */}
            <div className={`mb-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase inline-flex items-center gap-1 shadow-md ${
              answerFeedback === 'CORRECT'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : answerFeedback === 'SKIPPED'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
            }`}>
              {answerFeedback === 'CORRECT' && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
              {answerFeedback === 'WRONG' && <XCircle className="w-3.5 h-3.5 text-rose-400" />}
              {answerFeedback === 'CORRECT' ? 'RISPOSTA ESATTA!' : answerFeedback === 'SKIPPED' ? 'BRANO SALTATO' : 'SBAGLIATO!'}
            </div>

            <div className="text-white font-black text-base sm:text-lg leading-tight max-w-xs truncate">{currentTrack?.title}</div>
            <div className="text-slate-300 text-xs font-semibold max-w-xs truncate">{currentTrack?.artist}</div>
          </div>
        )}
      </div>

      {/* 4 Choices Grid & Salta Brano subito sotto l'ultima canzone a destra */}
      <div className="z-10 w-full shrink-0 space-y-2 pb-1">
        {currentChoices && currentChoices.length > 0 ? (
          currentChoices.map((choice, idx) => {
            const isSelected = selectedChoice?.title === choice.title && selectedChoice?.artist === choice.artist;
            const isCorrectChoice = currentTrack && choice.title === currentTrack.title && choice.artist === currentTrack.artist;

            let cardStyle = 'glass-card text-slate-100 hover:border-emerald-500/50';

            if (isAudioLoading || prepCountdown > 0) {
              cardStyle = 'glass-card text-slate-400 opacity-60 border-white/5 pointer-events-none';
            } else if (isAnswered) {
              if (isCorrectChoice) {
                cardStyle = 'bg-emerald-500/25 border-emerald-500 text-emerald-200 font-bold shadow-lg shadow-emerald-500/20';
              } else if (isSelected && !isCorrectChoice) {
                cardStyle = 'bg-rose-500/25 border-rose-500 text-rose-200 font-bold';
              } else {
                cardStyle = 'opacity-40 glass-card border-transparent';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered || isAudioLoading || prepCountdown > 0}
                onClick={() => submitAnswer(choice)}
                className={`w-full py-2.5 px-3.5 sm:py-3.5 sm:px-4 rounded-xl sm:rounded-2xl border text-left flex items-center justify-between transition-all active:scale-[0.98] ${cardStyle}`}
              >
                <div className="pr-2 min-w-0 flex-1">
                  <div className="font-black text-sm sm:text-base leading-tight truncate text-white tracking-wide">{choice.title}</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5 truncate">{choice.artist}</div>
                </div>
                <span className="w-6 h-6 shrink-0 rounded-full border border-white/20 text-xs flex items-center justify-center font-mono font-bold opacity-75">
                  {String.fromCharCode(65 + idx)}
                </span>
              </button>
            );
          })
        ) : (
          <div className="text-center text-xs text-slate-400 py-4">Generazione opzioni in corso...</div>
        )}

        {/* Salta Brano - Posizionato subito sotto la 4a canzone, in evidenza */}
        <div className="flex justify-end pt-1">
          <button
            onClick={skipRound}
            disabled={isAnswered || isAudioLoading || prepCountdown > 0}
            className="text-xs font-black tracking-wider text-slate-950 hover:text-white flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 border border-emerald-300 transition-all disabled:opacity-30 shadow-lg shadow-emerald-500/25 active:scale-95"
          >
            <SkipForward className="w-4 h-4 text-slate-950 fill-current" /> SALTA IL BRANO
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Restart / Quit */}
      {confirmModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center relative shadow-2xl">
            <button
              onClick={() => setConfirmModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black font-display text-white">
                {confirmModal === 'RESTART' ? 'RIAVVIARE PARTITA?' : 'USCIRE DAL GIOCO?'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {confirmModal === 'RESTART'
                  ? user.isPro
                    ? 'La partita corrente verrà riavviata dal primo brano.'
                    : 'Riavviando la partita dal primo brano verrà consumata -1 Vita ❤️.'
                  : 'Tornando al catalogo i progressi della partita corrente andranno persi.'}
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setConfirmModal(null)}
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
              >
                ANNULLA
              </button>
              <button
                onClick={confirmModal === 'RESTART' ? handleConfirmRestart : handleConfirmQuit}
                className={`flex-1 py-3 rounded-xl font-bold text-xs text-white transition-all shadow-lg ${
                  confirmModal === 'RESTART'
                    ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20'
                    : 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
                }`}
              >
                {confirmModal === 'RESTART' ? 'RIAVVIA ORA' : 'ESCI ORA'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
