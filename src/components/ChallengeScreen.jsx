import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { PLAYLISTS } from '../services/curatedCatalog';
import { Users, Share2, Copy, Check, Play, Trophy, Swords, Crown, Plus, UserCheck, Zap, Shuffle, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

const RANDOM_OPPONENTS = [
  { name: 'Luca_Beat', flag: '🇮🇹', nationality: 'Italia', age: 24, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', level: 8, score: 260000 },
  { name: 'Sara_Vibe', flag: '🇪🇸', nationality: 'Spagna', age: 27, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', level: 11, score: 580000 },
  { name: 'Alex_Guitar', flag: '🇬🇧', nationality: 'Regno Unito', age: 29, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80', level: 9, score: 350000 },
  { name: 'Giulia_Pop', flag: '🇫🇷', nationality: 'Francia', age: 22, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', level: 7, score: 180000 },
  { name: 'Davide_Synth', flag: '🇩🇪', nationality: 'Germania', age: 31, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', level: 12, score: 720000 },
];

export default function ChallengeScreen() {
  const { startGame, startMatchSession, user, recordWin, openPlayerProfile } = useGame();
  const [activeTab, setActiveTab] = useState('1v1'); // '1v1' | 'random' | 'tournament'
  const [songCount, setSongCount] = useState(10); // 10 | 15 | 20
  
  // 1v1 State
  const [selectedPlaylist1v1, setSelectedPlaylist1v1] = useState(PLAYLISTS[0]);
  const [selectedFriend, setSelectedFriend] = useState(user.friends?.[0] || 'Marco_90');
  const [challengeCode, setChallengeCode] = useState('TEN-ROCK90-8820');
  const [copiedCode1v1, setCopiedCode1v1] = useState(false);

  // Random Matchmaking State
  const [isSearchingMatch, setIsSearchingMatch] = useState(false);
  const [randomOpponent, setRandomOpponent] = useState(RANDOM_OPPONENTS[0]);
  const [randomPlaylist, setRandomPlaylist] = useState(PLAYLISTS[1]);
  const [randomCode, setRandomCode] = useState('RANDOM-8492');

  // Tournament State
  const [tournamentName, setTournamentName] = useState('Torneo Rock 2026');
  const [selectedPlaylistTournament, setSelectedPlaylistTournament] = useState(PLAYLISTS[0]);
  const [invitedParticipants, setInvitedParticipants] = useState(user.friends || ['Marco_90', 'Elena_Rock', 'Giuseppe_Bass']);
  const [tournamentCode, setTournamentCode] = useState('TEN-TORNEO-ROCK-9920');
  const [copiedCodeTournament, setCopiedCodeTournament] = useState(false);

  const completedSet = new Set(user.completedChallenges || []);

  const triggerNotification = (title, body) => {
    try {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          new Notification(title, { body, icon: '/favicon.ico' });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification(title, { body, icon: '/favicon.ico' });
            }
          });
        }
      }
    } catch (e) {
      console.warn('Notification trigger warning:', e);
    }
  };

  const [isPlaylistModalOpen1v1, setIsPlaylistModalOpen1v1] = useState(false);
  const [isPlaylistModalOpenTournament, setIsPlaylistModalOpenTournament] = useState(false);

  const handleGenerate1v1 = () => {
    const code = `TEN-${selectedPlaylist1v1.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setChallengeCode(code);
    triggerNotification('TEN SECONDS - Sfida Pronta! ⚔️', `Codice Sfida generato per ${selectedFriend}: ${code}`);
  };

  const handleCopy1v1 = () => {
    const inviteText = `🎵 TEN SECONDS - Ti ho sfidato a indovinare le canzoni! ⚔️\nAmico sfidato: ${selectedFriend}\nPlaylist: ${selectedPlaylist1v1.title}\nCodice Sfida: ${challengeCode}\nInserisci il codice nell'app per accettare la sfida!`;
    navigator.clipboard.writeText(inviteText);
    setCopiedCode1v1(true);
    setTimeout(() => setCopiedCode1v1(false), 2000);
  };

  const handleShare1v1 = async () => {
    const inviteText = `🎵 TEN SECONDS - Ti ho sfidato a indovinare le canzoni! ⚔️\nAmico sfidato: ${selectedFriend}\nPlaylist: ${selectedPlaylist1v1.title}\nCodice Sfida: ${challengeCode}\nInserisci il codice nell'app per accettare la sfida!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sfida 1v1 TEN SECONDS',
          text: inviteText,
        });
      } catch (err) {}
    } else {
      handleCopy1v1();
    }
  };

  const handlePlay1v1 = () => {
    if (completedSet.has(challengeCode)) return;
    recordWin('CHALLENGE');
    triggerNotification('TEN SECONDS - Sfida Avviata 🚀', `Hai sfidato ${selectedFriend} sulla playlist ${selectedPlaylist1v1.title}!`);
    // Start real-time session — broadcasts scores live to opponent
    if (startMatchSession) {
      startMatchSession(challengeCode, selectedPlaylist1v1, 'CHALLENGE', null, challengeCode, songCount);
    } else {
      startGame(selectedPlaylist1v1, 'CHALLENGE', null, challengeCode, songCount);
    }
  };

  const handleSearchRandomMatch = () => {
    setIsSearchingMatch(true);
    setTimeout(() => {
      const opp = RANDOM_OPPONENTS[Math.floor(Math.random() * RANDOM_OPPONENTS.length)];
      const plist = PLAYLISTS[Math.floor(Math.random() * PLAYLISTS.length)];
      const code = `RANDOM-${Math.floor(1000 + Math.random() * 9000)}`;

      setRandomOpponent(opp);
      setRandomPlaylist(plist);
      setRandomCode(code);
      setIsSearchingMatch(false);
    }, 1200);
  };

  const handlePlayRandomMatch = () => {
    if (completedSet.has(randomCode)) return;
    recordWin('CHALLENGE');
    startGame(randomPlaylist, 'CHALLENGE', null, randomCode, songCount);
  };

  const handleGenerateTournament = () => {
    const code = `TEN-TORNEO-${selectedPlaylistTournament.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTournamentCode(code);
  };

  const handleCopyTournament = () => {
    const inviteText = `🏆 TEN SECONDS - Partecipa al Torneo "${tournamentName}"!\nPlaylist: ${selectedPlaylistTournament.title}\nCodice Torneo: ${tournamentCode}\nInserisci il codice nell'app TEN SECONDS!`;
    navigator.clipboard.writeText(inviteText);
    setCopiedCodeTournament(true);
    setTimeout(() => setCopiedCodeTournament(false), 2000);
  };

  const handlePlayTournament = () => {
    if (completedSet.has(tournamentCode)) return;
    recordWin('TOURNAMENT');
    startGame(selectedPlaylistTournament, 'CHALLENGE', null, tournamentCode, songCount);
  };

  const toggleParticipant = (friendName) => {
    setInvitedParticipants(prev => 
      prev.includes(friendName) ? prev.filter(f => f !== friendName) : [...prev, friendName]
    );
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
          <Swords className="w-3.5 h-3.5" /> Modalità Sfide 1v1, Random & Tornei
        </div>
        <h2 className="text-3xl font-black font-display text-white">
          SFIDE & <span className="text-purple-400">TORNEI</span>
        </h2>
        <p className="text-xs text-slate-400">
          Sfida un amico in 1v1, trova un avversario casuale online o organizza un torneo multiplayer! (Ogni sfida è monouso)
        </p>
      </div>

      {/* 3 Mode Tabs */}
      <div className="flex gap-1.5 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
        <button
          onClick={() => setActiveTab('1v1')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === '1v1'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Swords className="w-3.5 h-3.5" /> 1vs1
        </button>

        <button
          onClick={() => setActiveTab('random')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'random'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5 fill-current" /> Match Random
        </button>

        <button
          onClick={() => setActiveTab('tournament')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'tournament'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Crown className="w-3.5 h-3.5" /> Torneo
        </button>
      </div>

      {/* Join Challenge / Tournament by Code Box */}
      <div className="glass-card p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 space-y-3">
        <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-emerald-400 fill-current" /> Hai ricevuto un Codice Sfida o Torneo?
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const code = e.target.challengeInput?.value?.trim()?.toUpperCase();
            if (code) {
              const playlist = PLAYLISTS[Math.floor(Math.random() * PLAYLISTS.length)];
              // Join real-time session using the same code as the host
              if (startMatchSession) {
                startMatchSession(code, playlist, 'CHALLENGE', null, code, songCount);
              } else {
                startGame(playlist, 'CHALLENGE', null, code, songCount);
              }
            }
          }}
          className="flex gap-2"
        >
          <input
            name="challengeInput"
            type="text"
            placeholder="Incolla Codice (es. TEN-ROCK-9920)"
            className="flex-1 bg-black/50 border border-emerald-500/30 px-3 py-2.5 rounded-xl text-xs text-white placeholder-slate-500 font-mono font-bold focus:outline-none focus:border-emerald-400"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs font-display flex items-center gap-1 shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> ENTRA
          </button>
        </form>
      </div>

      {/* Song Count Mode Selector (10, 15, or 20 Songs) */}
      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 space-y-2">
        <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Trophy className="w-4 h-4" /> Durata Partita (Numero di Canzoni):
          </span>
          <span className="font-mono text-xs font-black text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
            {songCount} CANZONI
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[10, 15, 20].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setSongCount(count)}
              className={`py-2 rounded-xl text-xs font-bold font-mono transition-all border ${
                songCount === count
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {count} Canzoni
            </button>
          ))}
        </div>
      </div>

      {/* --- MODE 1: SFIDA 1VS1 CON UN AMICO --- */}
      {activeTab === '1v1' && (
        <div className="glass-card p-6 rounded-2xl border border-purple-500/30 space-y-5 animate-fadeIn">
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Seleziona l'Amico da Sfidare</label>
              <select
                value={selectedFriend}
                onChange={(e) => setSelectedFriend(e.target.value)}
                className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-xs text-white focus:outline-none focus:border-purple-400 font-semibold"
              >
                {(user.friends || ['Marco_90', 'Elena_Rock', 'Giuseppe_Bass']).map(f => (
                  <option key={f} value={f} className="bg-slate-900 text-white">
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Styled Playlist Selector Dropdown / Card */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Playlist Selezionata per la Sfida 1vs1</label>
              
              <div
                onClick={() => setIsPlaylistModalOpen1v1(true)}
                className="p-3 bg-black/60 border border-purple-500/40 hover:border-purple-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPlaylist1v1.cover}
                    alt={selectedPlaylist1v1.title}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="font-display font-black text-sm text-white group-hover:text-purple-300 transition-colors">
                      {selectedPlaylist1v1.title}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span className="font-mono text-purple-400 font-bold">{selectedPlaylist1v1.tracks.length} Brani</span>
                      <span>•</span>
                      <span className="bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">{selectedPlaylist1v1.badge}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3 py-1.5 rounded-xl bg-purple-600/30 text-purple-300 font-bold text-xs group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0"
                >
                  CAMBIA 🎵
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate1v1}
            className="w-full py-3 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-300 font-bold text-xs rounded-xl transition-all"
          >
            GENERA CODICE SFIDA 1VS1
          </button>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-2">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Codice Sfida 1vs1 ({selectedFriend})</div>
              <div className="font-mono font-black text-lg text-purple-300">{challengeCode}</div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleShare1v1}
                className="flex items-center gap-1.5 px-3 py-2 bg-purple-600/40 hover:bg-purple-600 rounded-lg text-xs font-bold text-white transition-all shadow-md"
              >
                <Share2 className="w-4 h-4" /> Condividi
              </button>
              
              <button
                onClick={handleCopy1v1}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-all"
              >
                {copiedCode1v1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedCode1v1 ? 'Copiato!' : 'Copia'}
              </button>
            </div>
          </div>

          {/* One-Time Play Rule Notice */}
          {completedSet.has(challengeCode) ? (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>Questa sfida 1vs1 è già stata giocata e completata! Non è possibile ripeterla.</span>
            </div>
          ) : (
            <button
              onClick={handlePlay1v1}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Play className="w-5 h-5 fill-current" /> AVVIA SFIDA 1VS1 ORA
            </button>
          )}

        </div>
      )}

      {/* --- PLAYLIST SELECTOR MODAL FOR 1V1 & TOURNAMENT --- */}
      {(isPlaylistModalOpen1v1 || isPlaylistModalOpenTournament) && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-purple-500/40 rounded-3xl p-5 max-w-lg w-full space-y-4 max-h-[85vh] flex flex-col shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-display font-black text-lg text-white">SCEGLI LA PLAYLIST</h3>
                <p className="text-xs text-slate-400">Seleziona la lista brani per la tua sfida</p>
              </div>
              <button
                onClick={() => {
                  setIsPlaylistModalOpen1v1(false);
                  setIsPlaylistModalOpenTournament(false);
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto space-y-2.5 pr-1 flex-1 scrollbar-none">
              {PLAYLISTS.map((plist) => {
                const isSelected = isPlaylistModalOpen1v1 
                  ? selectedPlaylist1v1.id === plist.id
                  : selectedPlaylistTournament.id === plist.id;

                return (
                  <div
                    key={plist.id}
                    onClick={() => {
                      if (isPlaylistModalOpen1v1) {
                        setSelectedPlaylist1v1(plist);
                        setIsPlaylistModalOpen1v1(false);
                      } else {
                        setSelectedPlaylistTournament(plist);
                        setIsPlaylistModalOpenTournament(false);
                      }
                    }}
                    className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-purple-600/30 border-purple-400 shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={plist.cover}
                        alt={plist.title}
                        className="w-12 h-12 rounded-xl object-cover border border-white/10"
                      />
                      <div>
                        <div className="font-display font-bold text-sm text-white">{plist.title}</div>
                        <div className="text-[11px] text-slate-400">{plist.description}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/30 shrink-0">
                        {plist.tracks.length} Brani
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-purple-400 shrink-0" />}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* --- MODE 2: MATCH CASUAL RANDOM ONLINE --- */}
      {activeTab === 'random' && (
        <div className="glass-card p-6 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/20 via-slate-900 to-slate-900 space-y-5 animate-fadeIn">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-lg font-black font-display text-white">MATCH CASUAL RANDOM ONLINE</h3>
            <p className="text-xs text-slate-400">Trova istantaneamente un avversario casuale connesso per sfidarti sui 10 secondi.</p>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearchRandomMatch}
            disabled={isSearchingMatch}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
          >
            {isSearchingMatch ? (
              <>
                <Search className="w-4 h-4 animate-spin" /> Ricerca Avversario in corso...
              </>
            ) : (
              <>
                <Shuffle className="w-4 h-4" /> TROVA AVVERSARIO CASUALE
              </>
            )}
          </button>

          {/* Opponent Preview Box */}
          {randomOpponent && !isSearchingMatch && (
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
              <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Avversario Trovato</div>
              
              <div
                onClick={() => openPlayerProfile(randomOpponent)}
                className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all"
                title="Clicca per aprire la Scheda Profilo dell'Avversario"
              >
                <div className="flex items-center gap-3">
                  <img src={randomOpponent.avatar} alt={randomOpponent.name} className="w-12 h-12 rounded-xl object-cover border border-cyan-400/40" />
                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-1.5">
                      {randomOpponent.name} <span>{randomOpponent.flag}</span>
                    </div>
                    <div className="text-xs text-slate-400">Livello {randomOpponent.level} • {randomOpponent.nationality} ({randomOpponent.age} anni)</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-300 font-bold bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                  {randomOpponent.score.toLocaleString('it-IT')} PT
                </div>
              </div>

              <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs text-slate-300">
                <span>Playlist di Gioco: <strong className="text-white">{randomPlaylist.title}</strong></span>
                <span className="font-mono text-[10px] text-slate-500">{randomCode}</span>
              </div>
            </div>
          )}

          {/* One-Time Play Rule Notice for Random Match */}
          {completedSet.has(randomCode) ? (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>Questo Match Random è già stato giocato e completato! Clicca su "Trova Avversario Casuale" per cercare un nuovo match.</span>
            </div>
          ) : (
            <button
              onClick={handlePlayRandomMatch}
              disabled={isSearchingMatch}
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all"
            >
              <Play className="w-5 h-5 fill-current" /> GIOCA MATCH RANDOM ORA
            </button>
          )}

        </div>
      )}

      {/* --- MODE 3: TORNEO MULTI-GIOCATORE --- */}
      {activeTab === 'tournament' && (
        <div className="glass-card p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 space-y-5 animate-fadeIn">
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-amber-300 mb-1">Nome del Torneo</label>
              <input
                type="text"
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}
                placeholder="Es. Torneo Rock Estate 2026"
                className="w-full bg-black/50 border border-amber-500/30 p-3 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Invita Amici al Torneo (Seleziona Partecipanti)</label>
              <div className="flex flex-wrap gap-2">
                {(user.friends || ['Marco_90', 'Elena_Rock', 'Giuseppe_Bass']).map(f => {
                  const isSelected = invitedParticipants.includes(f);
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleParticipant(f)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border border-amber-400 shadow-md'
                          : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                      }`}
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Styled Playlist Selector Dropdown / Card for Tournament */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Playlist del Torneo</label>
              
              <div
                onClick={() => setIsPlaylistModalOpenTournament(true)}
                className="p-3 bg-black/60 border border-amber-500/40 hover:border-amber-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPlaylistTournament.cover}
                    alt={selectedPlaylistTournament.title}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="font-display font-black text-sm text-white group-hover:text-amber-300 transition-colors">
                      {selectedPlaylistTournament.title}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span className="font-mono text-amber-400 font-bold">{selectedPlaylistTournament.tracks.length} Brani</span>
                      <span>•</span>
                      <span className="bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">{selectedPlaylistTournament.badge}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shrink-0"
                >
                  CAMBIA 🏆
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerateTournament}
            className="w-full py-3 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs rounded-xl transition-all"
          >
            CREA LINK DI INVITO AL TORNEO
          </button>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-300">Codice Torneo: "{tournamentName}"</div>
              <div className="font-mono font-black text-lg text-white">{tournamentCode}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{invitedParticipants.length} Amici Partecipanti</div>
            </div>

            <button
              onClick={handleCopyTournament}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-all"
            >
              {copiedCodeTournament ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copiedCodeTournament ? 'Copiato!' : 'Copia Link'}
            </button>
          </div>

          {/* Winner Tag Preview */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
            <span className="font-semibold flex items-center gap-1">
              <Crown className="w-4 h-4 text-amber-400 fill-current" /> Premio Vincitore Torneo:
            </span>
            <span className="font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 fill-current" /> +1
            </span>
          </div>

          {/* One-Time Play Rule Notice for Tournament */}
          {completedSet.has(tournamentCode) ? (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>Questo Torneo è già stato giocato e completato! I tornei possono essere disputati una sola volta.</span>
            </div>
          ) : (
            <button
              onClick={handlePlayTournament}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-slate-950 font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Crown className="w-5 h-5 fill-current" /> AVVIA TORNEO "{tournamentName}"
            </button>
          )}

        </div>
      )}

      {/* Recent Matchups Head-to-Head Card */}
      <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
        <h4 className="text-xs font-bold text-slate-300 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" /> Ultime Sfide e Tornei Completati
        </h4>

        {/* Match 1: User Won */}
        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
          {/* Winner (Left) */}
          <div className="flex items-center gap-2.5">
            <img src={user.avatar} alt={user.name} className="w-8.5 h-8.5 rounded-lg object-cover border border-amber-400/40" />
            <div>
              <div className="font-black text-amber-300 text-xs">
                {user.name}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">14.200 PT</div>
            </div>
          </div>
          
          {/* Middle VS Badge */}
          <div className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-400 font-mono text-[10px] font-bold border border-white/10">
            VS
          </div>

          {/* Loser (Right - Grayed Out) */}
          <div className="flex items-center gap-2.5">
            <div className="text-right">
              <div className="font-medium text-slate-500 text-xs">Marco_90</div>
              <div className="text-[10px] text-slate-600 font-mono">11.800 PT</div>
            </div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Marco_90" className="w-8.5 h-8.5 rounded-lg object-cover opacity-50 grayscale" />
          </div>
        </div>

        {/* Match 2: Elena Won */}
        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
          {/* Winner (Left) */}
          <div className="flex items-center gap-2.5">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Elena_Rock" className="w-8.5 h-8.5 rounded-lg object-cover border border-amber-400/40" />
            <div>
              <div className="font-black text-amber-300 text-xs">
                Elena_Rock
              </div>
              <div className="text-[10px] text-slate-400 font-mono">18.500 PT</div>
            </div>
          </div>
          
          {/* Middle VS Badge */}
          <div className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-400 font-mono text-[10px] font-bold border border-white/10">
            VS
          </div>

          {/* Loser (Right - Grayed Out) */}
          <div className="flex items-center gap-2.5">
            <div className="text-right">
              <div className="font-medium text-slate-500 text-xs">{user.name}</div>
              <div className="text-[10px] text-slate-600 font-mono">15.100 PT</div>
            </div>
            <img src={user.avatar} alt={user.name} className="w-8.5 h-8.5 rounded-lg object-cover opacity-50 grayscale" />
          </div>
        </div>

      </div>

    </div>
  );
}
