import React, { useState } from 'react';
import { X, Trophy, Crown, Swords, Gamepad2, CheckCircle2, Music2, Star, User, Globe, Calendar, LogOut, Camera, Upload, Check } from 'lucide-react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
];

export default function PlayerProfileModal({ player, isOpen, onClose }) {
  const { user, setUser, logoutUser } = useGame();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user.name || '');

  const handleSaveName = () => {
    if (nameInput.trim()) {
      setUser(prev => ({ ...prev, name: nameInput.trim() }));
    }
    setIsEditingName(false);
  };

  if (!isOpen || !player) return null;

  const isCurrentUser = player.name === user.name;
  const currentAvatar = isCurrentUser ? user.avatar : (player.avatar || PRESET_AVATARS[0]);
  const rankInfo = getUserRankAndClasse(player.totalScore || 0);

  const handleLogoutClick = () => {
    onClose();
    logoutUser();
  };

  const handleSelectAvatar = (url) => {
    setUser(prev => ({ ...prev, avatar: url }));
    setIsPickerOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          handleSelectAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Avatar & Basic Info */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative shrink-0 group">
            <img
              src={currentAvatar}
              alt={player.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-lg"
            />
            
            {isCurrentUser && (
              <button
                onClick={() => setIsPickerOpen(!isPickerOpen)}
                className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                title="Cambia Foto Profilo"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            )}

            {rankInfo.classe > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full text-xs font-bold" title={`Classe ${rankInfo.classe}`}>
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
            )}
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {isCurrentUser && isEditingName ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="bg-white/10 border border-emerald-400/50 rounded-lg px-2 py-0.5 text-sm font-bold text-white focus:outline-none w-32"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-xs font-bold"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 min-w-0">
                  <h3 className="text-xl font-black font-display text-white leading-tight truncate">{player.name}</h3>
                  {isCurrentUser && (
                    <button
                      onClick={() => { setNameInput(user.name); setIsEditingName(true); }}
                      className="text-slate-400 hover:text-emerald-400 text-xs font-bold shrink-0"
                      title="Modifica Nome Profilo"
                    >
                      ✏️
                    </button>
                  )}
                  <span className="text-base shrink-0" title={player.nationality || 'Italia'}>{player.flag || '🇮🇹'}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1 font-semibold">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> {player.nationality || 'Italia'}
              </span>
            </div>

            <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-mono font-bold">
              <span>Liv. {rankInfo.level} • {rankInfo.name}</span>
            </div>
          </div>
        </div>

        {/* AVATAR PICKER SECTION (Expanded when editing profile picture) */}
        {isCurrentUser && isPickerOpen && (
          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> Scegli Foto Profilo
              </span>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="text-[10px] text-slate-400 hover:text-white"
              >
                Annulla
              </button>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-4 gap-2">
              {PRESET_AVATARS.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectAvatar(url)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                    currentAvatar === url ? 'border-emerald-400 ring-2 ring-emerald-400/40' : 'border-white/10 hover:border-white/40'
                  }`}
                >
                  <img src={url} alt={`Avatar ${idx + 1}`} className="w-full h-12 object-cover" />
                  {currentAvatar === url && (
                    <div className="absolute inset-0 bg-emerald-500/30 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* File Upload Option */}
            <div className="pt-2 border-t border-white/10">
              <label
                htmlFor="avatar-file-input"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Upload className="w-4 h-4" /> Carica foto dal telefono
              </label>
              <input
                id="avatar-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        )}

        {/* Total Score Banner */}
        <div className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-between font-mono">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Punteggio Totale</div>
            <div className="text-2xl font-black text-emerald-400">{(player.totalScore || 0).toLocaleString('it-IT')} PT</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400">Streak Note</div>
            <div className="text-base font-black text-cyan-300 flex items-center justify-end gap-1">
              <Music2 className="w-4 h-4 fill-current" /> {player.noteStreak || 1}
            </div>
          </div>
        </div>

        {/* Trophies & Stats Breakdown Grid */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> Palmarès & Statistiche
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            
            {/* Partite Giocate */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.totalGamesPlayed || player.totalGames || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Partite Giocate</div>
              </div>
            </div>

            {/* Partite Perfette */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.perfectGamesCount || player.perfectGames || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Partite Perfette</div>
              </div>
            </div>

            {/* Sfide 1v1 Vinte */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                <Swords className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.challengesWon || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Sfide 1v1 Vinte</div>
              </div>
            </div>

            {/* Tornei Vinti */}
            <div className="bg-white/5 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                <Crown className="w-4 h-4 text-amber-400 fill-current" />
              </div>
              <div>
                <div className="text-amber-300 font-black text-sm font-mono">{player.tournamentsWon || 0}</div>
                <div className="text-[10px] text-amber-400/80 font-bold">Tornei Vinti</div>
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-2 pt-1">
          {isCurrentUser && (
            <button
              onClick={handleLogoutClick}
              className="w-full py-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-400 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <LogOut className="w-4 h-4" /> Disconnettiti (Logout)
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            CHIUDI PROFILO
          </button>
        </div>

      </div>
    </div>
  );
}
