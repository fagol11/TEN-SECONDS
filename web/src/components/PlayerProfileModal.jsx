import React, { useState } from 'react';
import { X, Trophy, Crown, Swords, Gamepad2, CheckCircle2, Music2, Star, User, Globe, Calendar, LogOut, Camera, Upload, Check, Trash2, Skull, Flame, ShieldCheck } from 'lucide-react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';

export default function PlayerProfileModal({ player, isOpen, onClose }) {
  const { user, setUser, logoutUser, deleteUserAccount } = useGame();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user.name || '');
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSaveName = () => {
    if (nameInput.trim()) {
      const cleanName = nameInput.trim();
      setUser(prev => ({ ...prev, name: cleanName, customName: cleanName }));
    }
    setIsEditingName(false);
  };

  if (!isOpen || !player) return null;

  const isCurrentUser = player.name === user.name;
  const currentAvatar = isCurrentUser ? user.avatar : player.avatar;
  const rankInfo = getUserRankAndClasse(player.totalScore || 0);

  const handleLogoutClick = () => {
    onClose();
    logoutUser();
  };

  const handleSelectAvatar = (url) => {
    setUser(prev => ({ ...prev, avatar: url, customAvatar: url }));
    setIsPickerOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setUser(prev => ({ ...prev, avatar: reader.result, customAvatar: reader.result }));
          setIsPickerOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Avatar & Basic Info */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative shrink-0 group">
            {currentAvatar ? (
              <img
                src={currentAvatar}
                alt={player.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-lg"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border-2 border-emerald-400/40 shadow-lg flex items-center justify-center text-emerald-400 shrink-0">
                <User className="w-8 h-8" />
              </div>
            )}
            
            {isCurrentUser && (
              <button
                onClick={() => setIsPickerOpen(!isPickerOpen)}
                className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                title="Modifica Foto Profilo"
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
                    className="p-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-xs font-bold cursor-pointer"
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
                      className="text-slate-400 hover:text-emerald-400 text-xs font-bold shrink-0 cursor-pointer"
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

        {/* AVATAR UPLOAD & MANAGEMENT SECTION */}
        {isCurrentUser && isPickerOpen && (
          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> Foto Profilo
              </span>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="text-[10px] text-slate-400 hover:text-white cursor-pointer"
              >
                Annulla
              </button>
            </div>

            <div className="space-y-2 pt-1">
              <label
                htmlFor="avatar-file-input"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Upload className="w-4 h-4" /> Carica foto da dispositivo
              </label>
              <input
                id="avatar-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              {user.avatar && (
                <button
                  onClick={() => handleSelectAvatar(null)}
                  className="w-full py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Rimuovi foto personalizzata
                </button>
              )}
            </div>
          </div>
        )}

        {/* Member Since / Email Info */}
        {(player.email || player.createdAt) && (
          <div className="bg-white/5 p-2.5 rounded-2xl border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="truncate max-w-[180px]">{player.email || 'Account Locale'}</span>
            <span className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
              <Calendar className="w-3 h-3 text-slate-500" />
              {player.createdAt ? new Date(player.createdAt).toLocaleDateString('it-IT') : 'Membro'}
            </span>
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
            
            {/* Serie Death Parade (Morte Improvvisa) */}
            <div className="col-span-2 bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-slate-900 p-3 rounded-2xl border border-rose-500/40 space-y-1 shadow-lg shadow-rose-950/30">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-rose-300 font-bold flex items-center gap-1.5">
                  <Skull className="w-3.5 h-3.5 text-rose-400" /> Serie Death Parade
                </div>
                <span className="text-[9px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                  Morte Improvvisa
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-0.5">
                <div className="text-lg font-black text-white font-mono flex items-center gap-1.5">
                  <span>{player.deathParadeRecord || player.personalBests?.deathParade || (isCurrentUser ? (user.deathParadeRecord || 0) : 0)}</span>
                  <span className="text-xs text-slate-400 font-normal">canzoni</span>
                  <span className="text-slate-600 mx-0.5">—</span>
                  <span>{(player.deathParadePointsRecord || player.personalBests?.deathParadePoints || (isCurrentUser ? (user.deathParadePointsRecord || 0) : 0)).toLocaleString('it-IT')}</span>
                  <span className="text-xs text-slate-400 font-normal">punti</span>
                </div>
                <div className="text-[10px] text-amber-400 font-mono font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400 fill-current" /> Record
                </div>
              </div>
            </div>

            {/* Partite Giocate */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Gamepad2 className="w-3 h-3 text-emerald-400" /> Partite
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player.gamesPlayed || Math.floor((player.totalScore || 0) / 1200)}
              </div>
            </div>

            {/* Sfide Vinte */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Swords className="w-3 h-3 text-purple-400" /> Sfide Vinte
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player.challengesWon || 0}
              </div>
            </div>

            {/* Tornei Vinti */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-400" /> Tornei Vinti
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player.tournamentsWon || 0}
              </div>
            </div>

            {/* Accuratezza Risposte */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Precisione
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player.accuracy || '94.2%'}
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons: Logout, Delete Account & Privacy Policy if current user */}
        {isCurrentUser && (
          <div className="pt-2 border-t border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Ten Seconds - Music Quiz',
                      text: `🎵 Sfida me su Ten Seconds! Riuscirai a battere il mio record di ${user.deathParadeRecord || 0} canzoni in Death Parade?`,
                      url: 'https://play.google.com/store/apps/details?id=com.tenseconds.app'
                    }).catch(() => {});
                  } else {
                    navigator.clipboard?.writeText?.('https://play.google.com/store/apps/details?id=com.tenseconds.app');
                    alert('✨ Link copiato negli appunti! Invia il link ai tuoi amici per sfidarli.');
                  }
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" /> Condividi / Sfida Amici
              </button>

              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Privacy
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLogoutClick}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Disconnetti
              </button>

              <button
                onClick={() => setIsConfirmDeleteOpen(true)}
                className="py-2.5 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                title="Eliminazione definitiva account conforme alle policy Google Play"
              >
                <Trash2 className="w-3.5 h-3.5" /> Elimina Dati
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Confirmation Modal for Account Deletion (Google Play Compliance) */}
      {isConfirmDeleteOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border-2 border-rose-500/50 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Eliminare definitivamente l'account?</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Tutti i tuoi punteggi, classifiche, record e dati personali verranno eliminati permanentemente dal database cloud e da questo dispositivo.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsConfirmDeleteOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
              >
                Annulla
              </button>
              <button
                onClick={async () => {
                  setIsConfirmDeleteOpen(false);
                  onClose();
                  await deleteUserAccount();
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-lg shadow-rose-600/30"
              >
                Sì, Elimina Tutto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy & GDPR Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-white/20 rounded-3xl p-6 max-w-md w-full text-left space-y-4 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Informativa sulla Privacy & Dati</span>
              </div>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                <strong>Ten Seconds</strong> rispetta la tua privacy e protegge i tuoi dati personali in piena conformità con il GDPR europeo e le policy di Google Play:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-400">
                <li><strong>Account & Profilo</strong>: L'accesso tramite Google raccoglie unicamente nome, email e avatar per consentire le classifiche globali e le sfide con amici.</li>
                <li><strong>Pubblicità (Google AdMob)</strong>: Gli annunci video rewarded utilizzano l'SDK ufficiale AdMob di Google. Nessun dato sensibile viene venduto a terzi.</li>
                <li><strong>Cloud Database (Supabase)</strong>: I punteggi e le classifiche sono protetti da connessioni cifrate SSL/TLS.</li>
                <li><strong>Diritto all'Oblio</strong>: Puoi cancellare istantaneamente ogni traccia del tuo profilo e punteggi premendo <em>"Elimina Dati"</em> in questa schermata.</li>
              </ul>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-white/10">
                Versione 1.0.22 • © 2026 Ten Seconds Team. Tutti i diritti riservati.
              </p>
            </div>
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs"
            >
              Ho Capito
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
