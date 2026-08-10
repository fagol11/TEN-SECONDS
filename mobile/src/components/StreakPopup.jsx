import React, { useEffect, useState } from 'react';
import { Flame, Zap, Award, Crown, Trophy, Sparkles, Star } from 'lucide-react';

export default function StreakPopup({ comboEvent }) {
  const [visibleEvent, setVisibleEvent] = useState(null);

  useEffect(() => {
    if (comboEvent && comboEvent.id) {
      setVisibleEvent(comboEvent);

      const timer = setTimeout(() => {
        setVisibleEvent(null);
      }, 1100);

      return () => clearTimeout(timer);
    }
  }, [comboEvent]);

  if (!visibleEvent) return null;

  const { streak, title, points } = visibleEvent;

  // Determine color theme based on streak
  let bgGradient = 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30';
  let borderColor = 'border-emerald-400/60';
  let textColor = 'text-emerald-300';
  let shadowColor = 'shadow-emerald-500/40';
  let IconComponent = Sparkles;

  if (streak === 2 || streak === 3) {
    bgGradient = 'from-cyan-500/35 via-teal-500/35 to-emerald-500/35';
    borderColor = 'border-cyan-400/70';
    textColor = 'text-cyan-300';
    shadowColor = 'shadow-cyan-500/40';
    IconComponent = Zap;
  } else if (streak >= 4 && streak <= 6) {
    bgGradient = 'from-amber-500/35 via-orange-500/35 to-rose-500/35';
    borderColor = 'border-amber-400/80';
    textColor = 'text-amber-300';
    shadowColor = 'shadow-amber-500/50';
    IconComponent = Flame;
  } else if (streak >= 7 && streak <= 9) {
    bgGradient = 'from-purple-600/40 via-fuchsia-500/40 to-pink-500/40';
    borderColor = 'border-fuchsia-400/90';
    textColor = 'text-fuchsia-300';
    shadowColor = 'shadow-fuchsia-500/50';
    IconComponent = Crown;
  } else if (streak >= 10) {
    bgGradient = 'from-amber-400/50 via-yellow-400/50 to-orange-500/50';
    borderColor = 'border-amber-300';
    textColor = 'text-amber-200';
    shadowColor = 'shadow-amber-400/60';
    IconComponent = Trophy;
  }

  return (
    <div className="fixed inset-x-0 top-1/3 -translate-y-1/2 pointer-events-none z-50 flex flex-col items-center justify-center p-4">
      {/* Background Radial Glow */}
      <div className={`absolute w-48 h-48 rounded-full blur-3xl opacity-60 animate-pulse ${
        streak >= 10 ? 'bg-amber-400' : streak >= 7 ? 'bg-fuchsia-500' : streak >= 4 ? 'bg-amber-500' : 'bg-emerald-400'
      }`} />

      {/* Main Arcade Badge */}
      <div
        className={`relative px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${bgGradient} backdrop-blur-xl border-2 ${borderColor} shadow-2xl ${shadowColor} flex items-center gap-2.5 sm:gap-3 animate-arcadePop transform-gpu`}
      >
        <div className={`p-1.5 sm:p-2 rounded-xl bg-white/10 ${textColor}`}>
          <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 fill-current animate-bounce" />
        </div>

        <div className="text-left">
          <div className={`font-display font-black text-lg sm:text-2xl tracking-wide uppercase leading-none drop-shadow-md ${textColor}`}>
            {title}
          </div>
          {points && (
            <div className="text-[10px] sm:text-xs font-mono font-bold text-white/90 mt-0.5 flex items-center gap-1">
              <span>+{points.toLocaleString('it-IT')} PT</span>
              {streak > 1 && <span className="text-amber-300 font-black">• {streak}X COMBO</span>}
            </div>
          )}
        </div>
      </div>

      {/* Floating Sparkle Dots around badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white animate-sparkleFly"
            style={{
              '--deg': `${deg}deg`,
              '--delay': `${i * 0.05}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
