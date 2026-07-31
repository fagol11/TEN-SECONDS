import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Heart, Tv, Crown, X, Check, Clock, AlertCircle } from 'lucide-react';

export default function LivesModal({ isOpen, onClose }) {
  const { user, watchRewardAd, toggleProStatus } = useGame();
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adCountdown, setAdCountdown] = useState(5);
  const [selectedPlan, setSelectedPlan] = useState('yearly'); // 'monthly' | 'yearly'
  
  // Track ad watched count in current session to increase friction
  const [adWatchCount, setAdWatchCount] = useState(0);

  if (!isOpen) return null;

  // Calculate dynamic ad duration based on session friction
  const getAdDuration = () => {
    if (adWatchCount < 2) return 5;
    if (adWatchCount < 4) return 10;
    return 15;
  };

  const requiredDuration = getAdDuration();

  const handleWatchAdClick = async () => {
    setIsWatchingAd(true);
    setAdCountdown(requiredDuration);

    let adCompleted = false;
    const interval = setInterval(() => {
      setAdCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!adCompleted) {
            adCompleted = true;
            watchRewardAd();
            setIsWatchingAd(false);
            setAdWatchCount(c => c + 1);
            onClose();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubscribePro = () => {
    toggleProStatus();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-lg p-6 rounded-3xl border border-rose-500/30 text-center relative overflow-hidden space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ad Player Simulator Screen */}
        {isWatchingAd ? (
          <div className="py-2 space-y-4 text-center animate-fadeIn">
            {/* Header Badge */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
              <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Tv className="w-3.5 h-3.5" /> SPONSOR PROMOZIONALE
              </span>
              <span className="bg-amber-500/20 text-amber-300 font-mono font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                0:0{adCountdown}
              </span>
            </div>

            {/* Video Player Display Window */}
            <div className="relative h-44 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
              {/* Background Animated Sound Waves */}
              <div className="absolute inset-0 opacity-20 flex items-center justify-center gap-1 pointer-events-none">
                <div className="w-2 bg-emerald-400 h-16 animate-pulse" />
                <div className="w-2 bg-cyan-400 h-28 animate-pulse delay-75" />
                <div className="w-2 bg-purple-400 h-20 animate-pulse delay-150" />
                <div className="w-2 bg-amber-400 h-32 animate-pulse delay-100" />
                <div className="w-2 bg-rose-400 h-14 animate-pulse delay-200" />
              </div>

              {/* Pulsing Brand Graphic */}
              <div className="relative z-10 space-y-2 text-center p-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 animate-bounce">
                  <Tv className="w-8 h-8 fill-current" />
                </div>
                <h4 className="font-display font-black text-lg text-white tracking-wide">
                  🎧 Beats Sound Studio Pro
                </h4>
                <p className="text-xs text-amber-300/90 font-semibold">
                  Musica ad Alta Fedeltà • Zero Distorsione
                </p>
              </div>

              {/* Video Playhead Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10">
                <div
                  className="bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400 h-full transition-all duration-1000 ease-linear shadow-lg"
                  style={{ width: `${((requiredDuration - adCountdown) / requiredDuration) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 font-semibold">
              Riproduzione spot in corso... Attendi <span className="font-mono font-black text-amber-400 text-sm">{adCountdown}s</span> per ricevere la tua Vita ❤️
            </p>
          </div>
        ) : (
          <>
            {/* Header Icon */}
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/40 shadow-lg shadow-rose-500/20">
              <Heart className="w-7 h-7 fill-current" />
            </div>

            {/* Title */}
            <div>
              <h3 className="font-display font-black text-2xl text-white">
                {user.isPro ? 'TEN SECONDS PRO ATTIVO 👑' : user.lives <= 0 ? 'VITE ESAURITE! 💔' : 'GESTISCI VITE & ABBONAMENTO'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {user.isPro
                  ? 'Stai usufruendo di Vite Illimitate ❤️♾️ e Zero Pubblicità.'
                  : 'Sblocca le vite necessarie per continuare la partita o passa a PRO:'}
              </p>
            </div>

            {!user.isPro && (
              <>
                {/* 1. Free Option: Watch Ad */}
                <button
                  onClick={handleWatchAdClick}
                  className="w-full p-3 sm:p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-between transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <Tv className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="text-left min-w-0 flex-1">
                      <div className="font-black text-amber-300 flex flex-wrap items-center gap-1.5 leading-tight">
                        <span>GUARDA SPOT ({requiredDuration} SECONDI)</span>
                        {requiredDuration > 5 && (
                          <span className="text-[10px] text-amber-400 bg-amber-400/20 border border-amber-400/30 px-1.5 py-0.5 rounded-md font-semibold whitespace-nowrap">
                            + Tempo
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-amber-400/80 font-normal mt-0.5 leading-tight truncate">
                        {adWatchCount >= 2 ? 'Tempo di attesa cresciuto • Passa a PRO per zero attese' : 'Sblocca subito +1 Vita ❤️ per giocare ora'}
                      </div>
                    </div>
                  </div>
                  <span className="bg-amber-400 text-slate-950 px-2.5 py-1 rounded-lg text-xs font-mono font-black shrink-0 ml-2 shadow-sm">
                    +1 Vita
                  </span>
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-1">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
                  <span className="relative px-3 bg-[#09090d] text-[10px] uppercase font-bold text-slate-500">OPPURE PASSA A TEN SECONDS PRO</span>
                </div>

                {/* 2. PRO Pricing Selector Card */}
                <div className="glass-panel p-4 rounded-2xl border border-purple-500/30 text-left space-y-3 bg-purple-950/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-amber-400 fill-current" />
                      <span className="font-display font-black text-base text-white">Vantaggi Ten Seconds PRO</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full">
                      🔥 Più Popolare
                    </span>
                  </div>

                  <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Vite ed Energia Illimitate</strong> ❤️♾️ (giochi all'infinito)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Zero Pubblicità</strong> (nessuna interruzione spot o attesa)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Badge & Cornice Dorata Esclusiva</strong> per la Classe 🌟</span>
                    </li>
                  </ul>

                  {/* Plan Cards */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    
                    {/* Monthly Plan */}
                    <div
                      onClick={() => setSelectedPlan('monthly')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedPlan === 'monthly'
                          ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold text-slate-400">Piano Mensile</div>
                      <div className="font-display font-black text-lg text-white mt-0.5">2,90 €</div>
                      <div className="text-[10px] text-slate-400 font-mono">/ mese</div>
                    </div>

                    {/* Yearly Plan */}
                    <div
                      onClick={() => setSelectedPlan('yearly')}
                      className={`p-3 rounded-xl border cursor-pointer relative transition-all ${
                        selectedPlan === 'yearly'
                          ? 'bg-gradient-to-br from-purple-600/40 to-indigo-600/40 border-amber-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="absolute -top-2 right-2 bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded text-[9px] font-black uppercase">
                        2 Mesi Gratis 🎁
                      </span>
                      <div className="text-[10px] uppercase font-bold text-amber-300">Piano Annuale</div>
                      <div className="font-display font-black text-lg text-amber-400 mt-0.5">29,90 €</div>
                      <div className="text-[10px] text-slate-400 font-mono">/ anno (2,49€/m)</div>
                    </div>

                  </div>

                  {/* Subscribe CTA Button */}
                  <button
                    onClick={handleSubscribePro}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:brightness-110 text-slate-950 font-black font-display text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all"
                  >
                    <Crown className="w-4 h-4 fill-current" />
                    ATTIVA ABBONAMENTO {selectedPlan === 'yearly' ? 'ANNUALE (29,90€)' : 'MENSILE (2,90€)'}
                  </button>
                </div>
              </>
            )}

            {user.isPro && (
              <button
                onClick={toggleProStatus}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-xs border border-white/10 transition-all"
              >
                Disattiva PRO per testare versione Free (3 Vite)
              </button>
            )}

            {/* Legal Disclaimer Note for Compliance */}
            <p className="text-[10px] text-slate-500 pt-1 border-t border-white/5 leading-tight">
              La pubblicità sblocca esclusivamente i punti energia del gioco e non è legata ai contenuti musicali. Anteprime audio fornite da iTunes & Deezer per scopi promozionali. Abbonamento PRO cancellabile in qualsiasi momento da Google Play.
            </p>
          </>
        )}

      </div>
    </div>
  );
}
