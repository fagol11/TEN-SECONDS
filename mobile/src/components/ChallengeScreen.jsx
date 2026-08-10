import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { PLAYLISTS } from '../services/curatedCatalog';
import { 
  Swords, 
  Crown, 
  Users, 
  Play, 
  Clock, 
  Trophy, 
  Sparkles, 
  Search, 
  User, 
  Check, 
  Copy, 
  Trash2, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Shuffle,
  Music2,
  Hourglass,
  Flame,
  Award
} from 'lucide-react';

export default function ChallengeScreen() {
  const { 
    user, 
    asyncChallenges, 
    createAndStartAsyncChallenge, 
    respondToAsyncChallenge, 
    claimForfeitVictory,
    friendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
    inviteFriend,
    startGame
  } = useGame();

  // Tabs in requested order: 1vs1, Torneo, Amici
  const [activeTab, setActiveTab] = useState('1vs1'); // '1vs1' | 'tournament' | 'friends'
  
  // --- 1vs1 State ---
  const [oneVsOneSubTab, setOneVsOneSubTab] = useState('create'); // 'create' | 'my_challenges'
  const [opponentType, setOpponentType] = useState('friend'); // 'friend' | 'random'
  const [selectedFriendName, setSelectedFriendName] = useState(user.friends?.[0] || '');
  const [manualFriendInput, setManualFriendInput] = useState('');
  const [playlistCategory, setPlaylistCategory] = useState('all'); // 'all' | 'official' | 'imported'
  const [selectedPlaylist, setSelectedPlaylist] = useState(PLAYLISTS[0]);
  const [songCount, setSongCount] = useState(10); // 10 | 15 | 20
  const [isSearchingRandom, setIsSearchingRandom] = useState(false);

  // --- Friends Tab State ---
  const [friendInput, setFriendInput] = useState('');
  const [friendNotice, setFriendNotice] = useState(null);
  const [friendToRemove, setFriendToRemove] = useState(null);
  const [copiedInvite, setCopiedInvite] = useState(false);

  // --- Tournament State ---
  const [tournamentName, setTournamentName] = useState('Torneo Estivo');
  const [tournamentPlaylist, setTournamentPlaylist] = useState(PLAYLISTS[0]);

  // Combine official playlists and imported Spotify playlists
  const importedPlaylists = user.importedPlaylists || [];
  const allAvailablePlaylists = [...PLAYLISTS, ...importedPlaylists];

  const filteredPlaylists = allAvailablePlaylists.filter(pl => {
    if (playlistCategory === 'ten_seconds') return pl.category !== 'imported' && !pl.id?.startsWith('spotify-');
    if (playlistCategory === 'imported') return pl.category === 'imported' || pl.id?.startsWith('spotify-');
    return true;
  });

  // Calculate my challenges categorized
  const myIdentifier = (user.email || user.name || 'Ospite').trim().toLowerCase();
  const userNameLower = (user.name || 'Ospite').trim().toLowerCase();

  // 1. Challenges received from someone else waiting for me to play
  const receivedChallenges = asyncChallenges.filter(ch => {
    const target = typeof ch.challenged === 'string' ? ch.challenged.toLowerCase() : (ch.challenged?.name || '').toLowerCase();
    const challengerName = ch.challenger?.name?.toLowerCase() || '';
    return (target === myIdentifier || target === userNameLower) && challengerName !== userNameLower && ch.status === 'pending';
  });

  // 2. Challenges sent by me waiting for opponent
  const sentChallenges = asyncChallenges.filter(ch => {
    const challengerName = ch.challenger?.name?.toLowerCase() || '';
    return challengerName === userNameLower && ch.status === 'pending';
  });

  // 3. Completed challenges
  const completedChallenges = asyncChallenges.filter(ch => ch.status === 'completed' || ch.status === 'forfeited');

  // Launch New Challenge
  const handleLaunchChallenge = () => {
    let target = 'Giocatore Casuale';
    if (opponentType === 'friend') {
      target = selectedFriendName || manualFriendInput.trim() || 'Amico';
    }

    if (opponentType === 'random') {
      setIsSearchingRandom(true);
      setTimeout(() => {
        setIsSearchingRandom(false);
        createAndStartAsyncChallenge({
          targetFriend: 'Avversario Casuale 🎲',
          playlist: selectedPlaylist,
          songCount,
          customTracks: selectedPlaylist.tracks
        });
      }, 1200);
      return;
    }

    createAndStartAsyncChallenge({
      targetFriend: target,
      playlist: selectedPlaylist,
      songCount,
      customTracks: selectedPlaylist.tracks
    });
  };

  // Helper formatting remaining time (48h countdown)
  const formatTimeLeft = (expiresAt) => {
    const now = Date.now();
    const diff = expiresAt - now;
    if (diff <= 0) return 'Scaduta';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m rimaste`;
  };

  // Friend Request Actions
  const handleSendFriendRequestSubmit = async (e) => {
    e.preventDefault();
    if (!friendInput.trim()) return;
    const res = await sendFriendRequest(friendInput.trim());
    if (res?.error) {
      setFriendNotice(`⚠️ ${res.error}`);
    } else {
      setFriendNotice(`✨ Richiesta di amicizia inviata con successo a "${friendInput.trim()}"!`);
      setFriendInput('');
    }
    setTimeout(() => setFriendNotice(null), 4000);
  };

  const handleCopyInviteLink = () => {
    const link = `${window.location.origin}?ref=${encodeURIComponent(user.name || 'Amico')}`;
    navigator.clipboard.writeText(link);
    setCopiedInvite(true);
    if (inviteFriend) inviteFriend('Nuovo Amico');
    setTimeout(() => setCopiedInvite(false), 2500);
  };

  const handleChallengeFriendDirectly = (friendName) => {
    setSelectedFriendName(friendName);
    setOpponentType('friend');
    setActiveTab('1vs1');
    setOneVsOneSubTab('create');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      
      {/* Header Title */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-black font-display text-white flex items-center justify-center gap-2">
          <Swords className="w-7 h-7 text-purple-400" /> SFIDE & COMPETIZIONI
        </h2>
        <p className="text-xs text-slate-400">Sfida a turni in 48 ore: gioca la tua manche quando vuoi</p>
      </div>

      {/* Main Tabs (Order: 1vs1, Torneo, Amici) */}
      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
        
        {/* 1. 1vs1 */}
        <button
          onClick={() => setActiveTab('1vs1')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === '1vs1' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Swords className="w-4 h-4" /> 1vs1
          {receivedChallenges.length > 0 && (
            <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.2 rounded-full font-mono font-black animate-pulse">
              {receivedChallenges.length}
            </span>
          )}
        </button>

        {/* 2. Torneo */}
        <button
          onClick={() => setActiveTab('tournament')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'tournament' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Crown className="w-4 h-4" /> Torneo
        </button>

        {/* 3. Amici */}
        <button
          onClick={() => setActiveTab('friends')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'friends' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" /> Amici ({user.friends?.length || 0})
          {friendRequests.length > 0 && (
            <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono animate-bounce">
              {friendRequests.length}
            </span>
          )}
        </button>

      </div>

      {/* ======================================================== */}
      {/* TAB 1: 1vs1 (TURN-BASED 48H ASYNC CHALLENGES)            */}
      {/* ======================================================== */}
      {activeTab === '1vs1' && (
        <div className="space-y-6">
          
          {/* Sub-Navigation: Crea Nuova Sfida vs Le Mie Sfide */}
          <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-purple-500/20 gap-2">
            <button
              onClick={() => setOneVsOneSubTab('create')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black font-display transition-all ${
                oneVsOneSubTab === 'create'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CREA NUOVA SFIDA ⚔️
            </button>
            <button
              onClick={() => setOneVsOneSubTab('my_challenges')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black font-display transition-all relative ${
                oneVsOneSubTab === 'my_challenges'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              LE MIE SFIDE 📥 ({receivedChallenges.length + sentChallenges.length})
              {receivedChallenges.length > 0 && (
                <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>
          </div>

          {/* --- SUB-TAB 1: CREA NUOVA SFIDA --- */}
          {oneVsOneSubTab === 'create' && (
            <div className="glass-panel p-6 rounded-3xl border border-purple-500/30 space-y-6 bg-gradient-to-b from-purple-950/20 to-slate-900 shadow-2xl">
              
              <div className="text-center space-y-1">
                <h3 className="text-lg font-black font-display text-white flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" /> CREA NUOVA SFIDA 1VS1
                </h3>
                <p className="text-xs text-slate-400">Gioca subito la tua manche. L'avversario avrà 48 ore di tempo per rispondere!</p>
              </div>

              {/* 1. Scegli Avversario: Amico o Giocatore Casuale */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Scegli Tipo di Avversario</label>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Option: Amico */}
                  <div
                    onClick={() => setOpponentType('friend')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      opponentType === 'friend'
                        ? 'bg-purple-600/30 border-purple-400 text-white shadow-lg shadow-purple-600/20'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Sfida un Amico</div>
                      <div className="text-[10px] text-slate-400">Dalla tua lista amici</div>
                    </div>
                  </div>

                  {/* Option: Matchmaking Random */}
                  <div
                    onClick={() => setOpponentType('random')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      opponentType === 'random'
                        ? 'bg-emerald-600/30 border-emerald-400 text-white shadow-lg shadow-emerald-600/20'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Shuffle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Giocatore Casuale</div>
                      <div className="text-[10px] text-slate-400">Matchmaking automatico</div>
                    </div>
                  </div>

                </div>

                {/* Friend Picker Selector (if friend selected) */}
                {opponentType === 'friend' && (
                  <div className="pt-1 space-y-2">
                    {user.friends && user.friends.length > 0 ? (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {user.friends.map(fname => (
                          <button
                            key={fname}
                            type="button"
                            onClick={() => { setSelectedFriendName(fname); setManualFriendInput(''); }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all shrink-0 flex items-center gap-2 ${
                              selectedFriendName === fname && !manualFriendInput
                                ? 'bg-purple-500 text-white border-purple-400 shadow-md'
                                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            <User className="w-3.5 h-3.5" />
                            <span>{fname}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Nessun amico nella lista. Inserisci sotto il nome/email oppure aggiungilo dalla scheda Amici.</span>
                      </div>
                    )}

                    <input
                      type="text"
                      value={manualFriendInput}
                      onChange={(e) => setManualFriendInput(e.target.value)}
                      placeholder="Oppure digita username/email amico..."
                      className="w-full bg-black/50 border border-white/15 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                )}
              </div>

              {/* 2. Scegli Playlist (Catalogo Ufficiale + Playlist Importate da Spotify!) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    2. Scegli Playlist ({filteredPlaylists.length})
                  </label>
                  
                  {/* Category filter tabs */}
                  <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 text-[10px] font-bold">
                    <button
                      onClick={() => setPlaylistCategory('all')}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        playlistCategory === 'all' ? 'bg-white/20 text-white' : 'text-slate-400'
                      }`}
                    >
                      Tutte
                    </button>
                    <button
                      onClick={() => setPlaylistCategory('ten_seconds')}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        playlistCategory === 'ten_seconds' ? 'bg-white/20 text-white' : 'text-slate-400'
                      }`}
                    >
                      Ten Seconds
                    </button>
                    <button
                      onClick={() => setPlaylistCategory('imported')}
                      className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                        playlistCategory === 'imported' ? 'bg-[#1DB954] text-black font-black' : 'text-slate-400'
                      }`}
                    >
                      Importate ({importedPlaylists.length})
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {filteredPlaylists.map((pl) => {
                    const isSelected = selectedPlaylist.id === pl.id;
                    const isSpotify = pl.category === 'imported' || pl.id?.startsWith('spotify-');
                    return (
                      <div
                        key={pl.id}
                        onClick={() => setSelectedPlaylist(pl)}
                        className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 relative ${
                          isSelected
                            ? 'bg-purple-500/20 border-purple-400 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <img src={pl.cover} alt={pl.title} className="w-9 h-9 rounded-lg object-cover shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{pl.title}</div>
                          <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                            {isSpotify ? (
                              <span className="text-[#1DB954] font-bold">Spotify • {pl.tracks?.length || 0} brani</span>
                            ) : (
                              <span>{pl.tracks?.length || 30} brani</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Numero di Brani */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">3. Durata della Sfida</label>
                <div className="flex gap-2">
                  {[10, 15, 20].map(count => (
                    <button
                      key={count}
                      onClick={() => setSongCount(count)}
                      className={`flex-1 py-2.5 rounded-xl font-mono font-bold text-xs border transition-all ${
                        songCount === count
                          ? 'bg-purple-500 text-white border-purple-400 shadow-md'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {count} Brani
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Regola 48 Ore Banner Informativo */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-purple-500/30 flex items-start gap-3">
                <Hourglass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Regola Turno 48 Ore:</strong> Giochi subito la tua manche. Il tuo avversario riceverà la notifica e avrà <strong>48 ore</strong> per giocare con gli stessi brani. Se non gioca in tempo, la vittoria ti viene assegnata a tavolino!
                </div>
              </div>

              {/* 5. Start Challenge Button */}
              <button
                onClick={handleLaunchChallenge}
                disabled={isSearchingRandom}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white font-black font-display text-sm tracking-wide shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isSearchingRandom ? (
                  <>
                    <Search className="w-5 h-5 animate-spin" />
                    <span>RICERCA AVVERSARIO MATCHMAKING...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current" />
                    <span>GIOCA E LANCIA SFIDA ({songCount} BRANI) 🚀</span>
                  </>
                )}
              </button>

            </div>
          )}

          {/* --- SUB-TAB 2: LE MIE SFIDE ATTIVE & RICEVUTE --- */}
          {oneVsOneSubTab === 'my_challenges' && (
            <div className="space-y-6">
              
              {/* 1. Sfide Ricevute da Giocare (INBOX) */}
              <div className="space-y-3">
                <h3 className="font-black font-display text-sm text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" /> SFIDE RICEVUTE DA GIOCARE ({receivedChallenges.length})
                </h3>

                {receivedChallenges.length === 0 ? (
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center text-xs text-slate-500">
                    Nessuna sfida ricevuta al momento.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {receivedChallenges.map((ch) => {
                      const isExpired = Date.now() > ch.expiresAt;
                      return (
                        <div key={ch.id} className="glass-panel p-4 rounded-2xl border border-amber-500/40 bg-amber-950/20 space-y-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold">
                                {ch.challenger?.name?.charAt(0).toUpperCase() || 'A'}
                              </div>
                              <div>
                                <div className="font-bold text-sm text-white flex items-center gap-1.5">
                                  <span>{ch.challenger?.name} ti ha sfidato!</span>
                                  <span className="text-[10px] text-amber-300 font-mono font-bold bg-amber-400/20 px-2 py-0.5 rounded-full">
                                    {ch.songCount || ch.tracks?.length || 10} Brani
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-300 flex items-center gap-2 mt-0.5">
                                  <span>Playlist: <strong>{ch.playlist?.title}</strong></span>
                                  <span>•</span>
                                  <span className="text-amber-400 font-mono flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {formatTimeLeft(ch.expiresAt)}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => respondToAsyncChallenge(ch)}
                              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                            >
                              <Play className="w-4 h-4 fill-current" /> GIOCA ORA
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 2. Sfide Inviate in Attesa (OUTBOX) */}
              <div className="space-y-3">
                <h3 className="font-black font-display text-sm text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" /> SFIDE INVIATE IN ATTESA ({sentChallenges.length})
                </h3>

                {sentChallenges.length === 0 ? (
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center text-xs text-slate-500">
                    Nessuna sfida inviata in attesa.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {sentChallenges.map((ch) => {
                      const isExpired = Date.now() > ch.expiresAt;
                      const targetName = typeof ch.challenged === 'string' ? ch.challenged : (ch.challenged?.name || 'Amico');
                      return (
                        <div key={ch.id} className="glass-panel p-4 rounded-2xl border border-purple-500/30 bg-slate-900/90 space-y-2">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-bold text-sm text-white flex items-center gap-2">
                                <span>Sfida inviata a <strong>{targetName}</strong></span>
                                <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                                  Tuo Punteggio: {ch.challengerScore?.toLocaleString('it-IT')} PT
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-1">
                                <span>Playlist: {ch.playlist?.title}</span>
                                <span>•</span>
                                <span className="text-purple-300 font-mono">
                                  {isExpired ? 'Scaduta (48h superata)' : formatTimeLeft(ch.expiresAt)}
                                </span>
                              </div>
                            </div>

                            {isExpired && (
                              <button
                                onClick={() => claimForfeitVictory(ch.id)}
                                className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md shadow-amber-400/20 active:scale-95 transition-all shrink-0 flex items-center gap-1"
                              >
                                <Trophy className="w-3.5 h-3.5 fill-current" /> RISCATTA VITTORIA
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. Storico Sfide Concluse */}
              {completedChallenges.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-black font-display text-sm text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-emerald-400" /> STORICO SFIDE CONCLUSE ({completedChallenges.length})
                  </h3>

                  <div className="glass-panel rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
                    {completedChallenges.map((ch) => {
                      const isMeChallenger = (ch.challenger?.name || '').toLowerCase() === userNameLower;
                      const myScore = isMeChallenger ? ch.challengerScore : ch.challengedScore;
                      const oppScore = isMeChallenger ? ch.challengedScore : ch.challengerScore;
                      const oppName = isMeChallenger ? (typeof ch.challenged === 'string' ? ch.challenged : ch.challenged?.name) : ch.challenger?.name;
                      const didIWin = ch.winner === user.name || (isMeChallenger && ch.winner === 'challenger') || (!isMeChallenger && ch.winner === 'challenged');

                      return (
                        <div key={ch.id} className="p-3.5 flex items-center justify-between gap-3">
                          <div>
                            <div className="font-bold text-sm text-white flex items-center gap-2">
                              <span>Vs {oppName}</span>
                              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                                didIWin ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              }`}>
                                {ch.status === 'forfeited' ? 'Vinto a Tavolino 🏆' : didIWin ? 'Vittoria 🎉' : 'Sconfitta'}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                              Tu: {myScore?.toLocaleString('it-IT') || 0} PT • {oppName}: {oppScore?.toLocaleString('it-IT') || 0} PT
                            </div>
                          </div>

                          <div className="text-[10px] text-slate-500 font-mono">
                            {ch.playlist?.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: TORNEO                                            */}
      {/* ======================================================== */}
      {activeTab === 'tournament' && (
        <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-6 bg-gradient-to-b from-amber-950/20 to-slate-900 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-black font-display text-white flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" /> TORNEO A CLASSIFICA
              </h3>
              <p className="text-xs text-slate-400">Crea un torneo a eliminazione o classifica con i tuoi amici</p>
            </div>
            <span className="text-xs text-amber-300 bg-amber-500/20 border border-amber-400/30 px-3 py-1.5 rounded-xl font-bold font-mono">
              15 Brani per Manche
            </span>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase">Nome Torneo</label>
              <input
                type="text"
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}
                className="w-full bg-black/50 border border-white/15 px-3.5 py-2.5 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase">Scegli Playlist del Torneo</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-40 overflow-y-auto pr-1">
                {allAvailablePlaylists.map(pl => (
                  <div
                    key={pl.id}
                    onClick={() => setTournamentPlaylist(pl)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
                      tournamentPlaylist.id === pl.id
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <img src={pl.cover} alt={pl.title} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{pl.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{pl.tracks?.length || 30} brani</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                startGame(tournamentPlaylist, 'CHALLENGE', tournamentPlaylist.tracks?.slice(0, 15) || [], null, 15);
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Play className="w-5 h-5 fill-current" /> GIOCA MANCHE TORNEO (15 BRANI) 🏆
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: AMICI                                             */}
      {/* ======================================================== */}
      {activeTab === 'friends' && (
        <div className="space-y-6">
          
          {friendNotice && (
            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold p-3.5 rounded-2xl flex items-center justify-center gap-2 animate-fadeIn shadow-lg">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{friendNotice}</span>
            </div>
          )}

          {/* 1. Richieste di Amicizia Ricevute */}
          {friendRequests.length > 0 && (
            <div className="glass-panel p-5 rounded-2xl border border-rose-500/40 bg-rose-950/20 space-y-3 shadow-xl">
              <h3 className="font-black font-display text-sm text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" /> RICHIESTE DI AMICIZIA RICEVUTE ({friendRequests.length})
              </h3>

              <div className="divide-y divide-white/10">
                {friendRequests.map((req) => (
                  <div key={req.id} className="py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        {req.sender_avatar ? (
                          <img src={req.sender_avatar} alt={req.sender_name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{req.sender_name}</div>
                        <div className="text-[10px] text-slate-400">{req.sender_email || 'Giocatore Ten Seconds'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={async () => {
                          await acceptFriendRequest(req);
                          setFriendNotice(`🎉 Ora sei amico di ${req.sender_name}!`);
                          setTimeout(() => setFriendNotice(null), 4000);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all active:scale-95 shadow-md shadow-emerald-500/20"
                      >
                        ACCETTA
                      </button>
                      <button
                        onClick={async () => {
                          await rejectFriendRequest(req.id);
                          setFriendNotice(`Richiesta rifiutata.`);
                          setTimeout(() => setFriendNotice(null), 3000);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 font-bold text-xs transition-all"
                      >
                        RIFIUTA
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Invia Richiesta di Amicizia */}
          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/90 space-y-3 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Aggiungi Amico</h3>
                <p className="text-xs text-slate-400">Invia una richiesta di amicizia inserendo l'username o l'email dell'utente</p>
              </div>
            </div>

            <form onSubmit={handleSendFriendRequestSubmit} className="flex gap-2">
              <input
                type="text"
                value={friendInput}
                onChange={(e) => setFriendInput(e.target.value)}
                placeholder="Es. fabrizio.gosce@gmail.com oppure Marco_90"
                className="flex-1 bg-black/50 border border-white/15 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black font-display text-xs shadow-md shadow-cyan-500/20 transition-all active:scale-95"
              >
                INVIA RICHIESTA
              </button>
            </form>
          </div>

          {/* 3. Lista Amici */}
          <div className="space-y-3">
            <h3 className="font-black font-display text-sm text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" /> I MIEI AMICI ({user.friends?.length || 0})
            </h3>

            {(!user.friends || user.friends.length === 0) ? (
              <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center space-y-2">
                <Users className="w-10 h-10 text-slate-600 mx-auto" />
                <div className="font-bold text-slate-300 text-sm">Nessun amico aggiunto</div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Invia una richiesta di amicizia per iniziare a sfidare i tuoi amici!
                </p>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
                {user.friends.map((friendName) => (
                  <div key={friendName} className="p-3.5 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-emerald-400">
                        {friendName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{friendName}</div>
                        <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Amico
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleChallengeFriendDirectly(friendName)}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                      >
                        <Swords className="w-3.5 h-3.5" /> SFIDA 1VS1
                      </button>
                      <button
                        onClick={() => setFriendToRemove(friendName)}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-all"
                        title="Rimuovi Amico"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. Link Invito (+5 Vite) */}
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-white text-sm flex items-center justify-center sm:justify-start gap-1.5">
                <span>Invita Nuovi Amici</span>
                <span className="text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">+5 Vite ❤️</span>
              </h4>
              <p className="text-xs text-slate-400">Condividi il tuo link: per ogni amico ottieni 5 vite extra</p>
            </div>

            <button
              onClick={handleCopyInviteLink}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black font-display text-xs flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-95 shrink-0"
            >
              {copiedInvite ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedInvite ? 'LINK COPIATO!' : 'COPIA LINK INVITO'}</span>
            </button>
          </div>

          {/* Delete Friend Modal */}
          {friendToRemove && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center">
                <Trash2 className="w-10 h-10 text-rose-400 mx-auto" />
                <h3 className="text-lg font-black text-white">RIMUOVI AMICO</h3>
                <p className="text-xs text-slate-300">
                  Vuoi rimuovere <strong className="text-rose-400">{friendToRemove}</strong> dalla tua lista amici?
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setFriendToRemove(null)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold"
                  >
                    ANNULLA
                  </button>
                  <button
                    onClick={() => {
                      removeFriend(friendToRemove);
                      setFriendToRemove(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-black"
                  >
                    RIMUOVI
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
