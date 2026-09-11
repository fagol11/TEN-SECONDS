import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Heart, Tv, Crown, X, Check, Sparkles } from 'lucide-react';

// Lista ristretta di tester autorizzati per la simulazione PRO durante il closed testing
const AUTHORIZED_TEST_EMAILS = [
  'fabrizio.gosce@gmail.com',
  'fabriziomi9se@gmail.com',
  'ferruccioparente@gmail.com',
  'rosa.maritato@gmail.com',
  'g.gosce@gmail.com',
  'paolomorelli2008@gmail.com',
  'candiani.emma@gmail.com'
];

export default function LivesModal({ isOpen, onClose }) {
  const { user, watchRewardAd, toggleProStatus } = useGame();
  const [selectedPlan, setSelectedPlan] = useState('yearly'); // 'monthly' | 'yearly'

  if (!isOpen) return null;

  const isTestMode = import.meta.env.VITE_TEST_MODE === 'true';
  const userEmail = (user?.email || '').toLowerCase().trim();
  // Visibile ESCLUSIVAMENTE se la modalità test è attiva AND l'utente ha effettuato l'accesso con un'email in whitelist
  const isAuthorizedTester = isTestMode && !!userEmail && AUTHORIZED_TEST_EMAILS.includes(userEmail);

  const handleWatchAdClick = async () => {
    await watchRewardAd();
    onClose();
  };

  // TEMPORANEO — rimuovere o disabilitare prima della release pubblica, sostituire con vera integrazione Google Play Billing
  const handleToggleProTest = () => {
    toggleProStatus();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-lg p-6 rounded-3xl border border-rose-500/30 text-center relative overflow-hidden space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

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
              ? 'Stai usufruendo di Vite Illimitate ❤️♾️, Zero Pubblicità e Playlist in Omaggio.'
              : 'Sblocca le vite necessarie per continuare la partita o passa a PRO:'}
          </p>
        </div>

        {!user.isPro && (
          <>
            {/* 1. Free Option: Watch Ad */}
            <button
              onClick={handleWatchAdClick}
              className="w-full p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-between transition-all active:scale-[0.98] shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <Tv className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-left min-w-0 flex-1">
                  <div className="font-black text-amber-300 text-sm leading-tight">
                    GUARDA SPOT
                  </div>
                  <div className="text-[11px] text-amber-400/80 font-medium mt-0.5 leading-tight truncate">
                    Sblocca subito +1 Vita ❤️
                  </div>
                </div>
              </div>
              <span className="bg-amber-400 text-slate-950 px-3 py-1.5 rounded-xl text-xs font-mono font-black shrink-0 ml-2 shadow-sm">
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
                <li className="flex items-center gap-2 text-amber-300 font-bold bg-amber-400/10 p-2 rounded-xl border border-amber-400/25">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>2 Playlist in OMAGGIO</strong>: <em>"Anime OST & Sigle Cult"</em> + <em>"Rock Classics & Hard Rock"</em> sbloccate subito! 🎁</span>
                </li>
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

              {/* Subscribe CTA Button / Test Mode Simulation */}
              {isAuthorizedTester ? (
                /* TEMPORANEO — rimuovere o disabilitare prima della release pubblica, sostituire con vera integrazione Google Play Billing */
                <button
                  onClick={handleToggleProTest}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:brightness-110 text-slate-950 font-black font-display text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Crown className="w-4 h-4 fill-current" />
                  🧪 MODALITÀ TEST — PRO simulato ({selectedPlan === 'yearly' ? 'Attiva Annuale' : 'Attiva Mensile'})
                </button>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-medium text-xs flex items-center justify-center gap-2">
                  <span>🔒 Acquisto In-App via Google Play in arrivo con il lancio pubblico</span>
                </div>
              )}
            </div>
          </>
        )}

        {/* TEMPORANEO — rimuovere o disabilitare prima della release pubblica, sostituire con vera integrazione Google Play Billing */}
        {user.isPro && isAuthorizedTester && (
          <button
            onClick={handleToggleProTest}
            className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            🧪 MODALITÀ TEST — PRO simulato (Disattiva PRO)
          </button>
        )}

        {/* Legal Disclaimer */}
        <p className="text-[10px] text-slate-500 pt-1 border-t border-white/5 leading-tight">
          La pubblicità sblocca esclusivamente i punti energia del gioco e non è legata ai contenuti musicali.
        </p>

      </div>
    </div>
  );
}
