import React from 'react';
import { useGame } from '../context/GameContext';
import { Volume2, Check, X, Music, Sparkles, Disc, Gamepad2, VolumeX, Guitar, Layers } from 'lucide-react';

export const SOUND_VARIANTS = [
  {
    id: 1,
    name: 'Soft Vinyl Scratch',
    tag: 'Moderna & Elegante (Default)',
    desc: 'Banda passante attenuata stile freno vinile DJ. Zero toni sgradevoli.',
    icon: Disc,
    color: 'emerald',
  },
  {
    id: 2,
    name: 'Retro Arcade Double-Bip',
    tag: 'Simpatica & Chiara',
    desc: 'Doppio bip discendente pulito a forma d\'onda triangolare.',
    icon: Gamepad2,
    color: 'amber',
  },
  {
    id: 3,
    name: 'Sub-Bass Thud',
    tag: 'Deep & Minimalista',
    desc: 'Impatto sordo da 90Hz a 35Hz senza acuti o frequenze fastidiose.',
    icon: Layers,
    color: 'cyan',
  },
  {
    id: 4,
    name: 'Accordo Out-of-Tune',
    tag: 'Musicale & Ironica',
    desc: 'Dissonanza di Seconda Minore C4+C#4 stile "stecca" musicale.',
    icon: Guitar,
    color: 'rose',
  },
  {
    id: 5,
    name: 'Woodblock Click',
    tag: 'Ultra-Discreta',
    desc: 'Un click percussivo neutrale di 70ms. Zero sensazione di punizione.',
    icon: VolumeX,
    color: 'purple',
  },
];

export default function SoundSelectorModal({ isOpen, onClose }) {
  const { playSoundEffect, wrongSoundVariant, setWrongSoundVariant } = useGame();

  if (!isOpen) return null;

  const handlePreview = (variantId) => {
    playSoundEffect(`wrong_${variantId}`);
  };

  const handleSelect = (variantId) => {
    setWrongSoundVariant(variantId);
    playSoundEffect(`wrong_${variantId}`);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pr-8">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Volume2 className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black font-display text-white leading-tight">
              Suono Errore Game
            </h3>
            <p className="text-xs text-slate-400">
              Ascolta e scegli il tuo effetto sonoro preferito
            </p>
          </div>
        </div>

        {/* 5 Sound Options Grid */}
        <div className="space-y-2.5 pt-2">
          {SOUND_VARIANTS.map((variant) => {
            const isSelected = wrongSoundVariant === variant.id;
            const Icon = variant.icon;

            return (
              <div
                key={variant.id}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col gap-2 ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-300'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-1.5">
                        <span>{variant.id}. {variant.name}</span>
                        {isSelected && (
                          <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-mono font-bold">
                            ATTIVO
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-amber-400 font-semibold">{variant.tag}</div>
                    </div>
                  </div>

                  {/* Play & Select buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handlePreview(variant.id)}
                      className="px-2.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                      title="Ascolta prova audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>PROVA</span>
                    </button>

                    <button
                      onClick={() => handleSelect(variant.id)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all active:scale-95 ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                          : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                      <span>{isSelected ? 'IN USO' : 'USA'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-snug pl-1">
                  {variant.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black font-display text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            SALVA E CHIUDI
          </button>
        </div>

      </div>
    </div>
  );
}
