import React, { useEffect } from 'react';
import { Swords, Crown, UserPlus, Trophy, X, Play, ArrowRight, Bell } from 'lucide-react';

export default function InAppNotificationToast({ notification, onDismiss, onAction }) {
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 6500);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  if (!notification) return null;

  const getIcon = () => {
    switch (notification.type) {
      case 'challenge':
      case 'challenge_received':
      case 'challenge_completed':
        return <Swords className="w-5 h-5 text-amber-400" />;
      case 'tournament':
      case 'tournament_received':
      case 'tournament_completed':
      case 'tournament_updated':
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 'friend_request':
      case 'friend_accepted':
        return <UserPlus className="w-5 h-5 text-cyan-400" />;
      case 'rank_up':
      case 'badge_unlocked':
      case 'playlist_unlocked':
        return <Trophy className="w-5 h-5 text-emerald-400" />;
      default:
        return <Bell className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBorderGradient = () => {
    switch (notification.type) {
      case 'challenge':
      case 'challenge_received':
        return 'border-amber-500/50 shadow-amber-500/20';
      case 'tournament':
      case 'tournament_received':
      case 'tournament_completed':
        return 'border-yellow-500/50 shadow-yellow-500/20';
      case 'friend_request':
      case 'friend_accepted':
        return 'border-cyan-500/50 shadow-cyan-500/20';
      case 'rank_up':
      case 'badge_unlocked':
      case 'playlist_unlocked':
        return 'border-emerald-500/50 shadow-emerald-500/20';
      default:
        return 'border-emerald-500/50 shadow-emerald-500/20';
    }
  };

  return (
    <div className="fixed top-3 left-3 right-3 sm:left-auto sm:right-4 sm:w-96 z-50 animate-bounce-in">
      <div className={`p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border-2 ${getBorderGradient()} shadow-2xl flex items-start gap-3 text-white transition-all`}>
        
        {/* Icon container */}
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center justify-between gap-1">
            <h4 className="font-bold font-display text-sm tracking-wide text-white truncate">
              {notification.title || 'Notifica'}
            </h4>
            <button
              onClick={onDismiss}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed line-clamp-2">
            {notification.message || notification.body || ''}
          </p>

          {/* Action button if applicable */}
          {onAction && (
            <button
              onClick={() => {
                onAction(notification);
                onDismiss();
              }}
              className="mt-2.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <span>{notification.actionLabel || 'VISUALIZZA'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
