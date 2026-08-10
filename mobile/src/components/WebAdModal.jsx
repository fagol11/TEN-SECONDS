import React, { useState, useEffect, useRef } from 'react';
import { Tv, Sparkles, CheckCircle2, Heart, X, Volume2, VolumeX, Flame, Disc, Radio, ShieldCheck, Zap } from 'lucide-react';

export default function WebAdModal({ isOpen, onClose, onRewardClaimed }) {
  const [countdown, setCountdown] = useState(5);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const rewardClaimedRef = useRef(false);

  // Play pleasant arcade promo synth beat during ad playback
  const playAdAudioBeat = (secLeft) => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      const now = ctx.currentTime;

      if (secLeft > 0) {
        // Melodic promo tick
        const freqs = [440, 554.37, 659.25, 880];
        const freq = freqs[(5 - secLeft) % freqs.length];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.36);
      } else {
        // Completion triumph chord
        [523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
          const t = now + idx * 0.08;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(t);
          osc.stop(t + 0.42);
        });
      }
    } catch (e) {}
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      setCountdown(5);
      setIsCompleted(false);
      rewardClaimedRef.current = false;
      playAdAudioBeat(5);

      // Trigger Google AdSense if available
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.warn('AdSense push notice:', e);
      }

      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsCompleted(true);
            playAdAudioBeat(0);
            
            // AUTOMATIC REWARD: Automatically grant +1 Life immediately without requiring any button click!
            if (!rewardClaimedRef.current) {
              rewardClaimedRef.current = true;
              if (onRewardClaimed) onRewardClaimed();
            }

            // Automatically close modal after 1.5s
            setTimeout(() => {
              onClose();
            }, 1500);

            return 0;
          }
          const nextSec = prev - 1;
          playAdAudioBeat(nextSec);
          return nextSec;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = Math.min(100, Math.max(0, ((5 - countdown) / 5) * 100));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-md p-6 rounded-3xl border border-amber-500/40 text-center relative overflow-hidden space-y-5 bg-slate-950/95 shadow-2xl">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wider uppercase">
            <Tv className="w-4 h-4 animate-pulse text-amber-400" />
            <span>SPOT GOOGLE ADSENSE SPONSORIZZATO</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
              title={isMuted ? 'Attiva Audio Spot' : 'Disattiva Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Google AdSense / Video Frame Container */}
        <div className="w-full min-h-[220px] rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/40 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl p-4">
          
          {/* Google AdSense Unit Render Container */}
          <div className="w-full flex items-center justify-center min-h-[160px] z-10 my-auto">
            {/* Google AdSense Ad Ins */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', height: '100%', minHeight: '150px' }}
              data-ad-client="ca-pub-1867031805275219"
              data-ad-slot="8803089751"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>

          {/* Fallback & Timer Overlay Content Display */}
          {!isCompleted ? (
            <div className="z-10 space-y-2 w-full my-auto pointer-events-none">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <Disc className="w-14 h-14 text-emerald-400 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 flex items-center justify-center font-mono font-black text-lg text-white drop-shadow-md">
                  {countdown}s
                </div>
              </div>

              <div>
                <div className="font-display font-black text-sm text-white tracking-wide flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
                  SPOT GOOGLE ADSENSE IN CORSO
                </div>
                <div className="text-[11px] text-amber-300/90 font-medium">
                  Riproduzione spot in corso • Riscatto automatico in 5s
                </div>
              </div>

              {/* Soundwaves Visualizer Bar */}
              <div className="flex items-center justify-center gap-1 h-4 pt-1">
                {[60, 100, 45, 80, 100, 60, 90, 40].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-emerald-400 to-amber-300 rounded-full animate-pulse"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '0.6s'
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="z-10 space-y-2 my-auto animate-fadeIn w-full py-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/50 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-9 h-9 animate-bounce" />
              </div>
              <div>
                <div className="text-base font-black text-emerald-400 font-display flex items-center justify-center gap-1.5">
                  <Heart className="w-5 h-5 fill-current text-rose-500 animate-pulse" />
                  +1 VITA ACCREDITATA AUTOMATICAMENTE!
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  Spot completato. Chiusura automatica in corso...
                </div>
              </div>
            </div>
          )}

          {/* Bottom Video Progress Bar */}
          <div className="w-full z-10 space-y-1 mt-2">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 px-0.5">
              <span>0:0{5 - countdown}</span>
              <span className="text-emerald-400 font-bold">{isCompleted ? 'ACCREDITATA ❤️' : `0:0${countdown}`}</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/10">
              <div
                className="bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-500 h-full transition-all duration-1000 ease-linear shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

        </div>

        {/* Automatic Info Notice (No Manual Claim Button) */}
        {isCompleted ? (
          <div className="py-2.5 px-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black font-display text-xs flex items-center justify-center gap-2 animate-pulse">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            VITA ACCREDITATA! CHIUSURA IN CORSO...
          </div>
        ) : (
          <div className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Attendi il completamento dello spot di 5s per l'accredito automatico della vita.
          </div>
        )}

      </div>
    </div>
  );
}
