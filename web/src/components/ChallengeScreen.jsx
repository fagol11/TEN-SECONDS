import React, { useState } from 'react';
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
  ArrowLeft,
  Shuffle,
  Music2,
  Hourglass,
  Flame,
  Award,
  Share2,
  Plus,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Medal,
  ExternalLink,
  Shield,
  Gamepad2,
  X,
  RotateCw
} from 'lucide-react';

// Helper per formattare e ripulire i nomi dei giocatori (rimozione domini email e capitalizzazione)
export function formatPlayerDisplayName(identifier, currentUser = null, fallback = 'Giocatore') {
  if (!identifier) return fallback;
  if (typeof identifier === 'object') {
    identifier = identifier.name || identifier.email || fallback;
  }
  let str = String(identifier).trim();
  if (!str) return fallback;

  // Se corrisponde all'utente loggato, usa il suo nome registrato
  if (currentUser) {
    const userEmail = (currentUser.email || '').trim().toLowerCase();
    const userId = String(currentUser.id || '').trim().toLowerCase();
    const cleanId = str.toLowerCase();
    if ((userEmail && cleanId === userEmail) || (userId && cleanId === userId)) {
      if (currentUser.name && currentUser.name !== 'Ospite') {
        return currentUser.name;
      }
    }
  }

  // Se è un'email, estrai e ripulisci la parte prima della chiocciola
  if (str.includes('@')) {
    const beforeAt = str.split('@')[0].trim();
    const words = beforeAt.replace(/[._+-]+/g, ' ').split(' ').filter(Boolean);
    if (words.length > 0) {
      return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    }
    return beforeAt;
  }

  return str;
}

export function formatCardDate(timestamp) {
  if (!timestamp) return '';
  const d = new Date(Number(timestamp) || timestamp);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' });
}

export default function ChallengeScreen() {
  const { 
    user, 
    asyncChallenges, 
    createAndStartAsyncChallenge, 
    respondToAsyncChallenge, 
    claimForfeitVictory,
    acceptForfeitDefeat,
    deleteAsyncChallenge,
    syncSocialData,
    asyncTournaments,
    createAsyncTournament,
    startTournamentMatch,
    friendRequests,
    sentFriendRequests,
    sendFriendRequest,
    cancelFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
    inviteFriend,
    startGame,
    activeScreen,
    hasUnreadTournamentInvites,
    markAllTournamentInvitesAsRead
  } = useGame();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    try {
      if (syncSocialData) await syncSocialData(user);
    } catch(e) {}
    finally {
      setTimeout(() => setIsRefreshing(false), 600);
    }
  };

  // Tabs: 1vs1, Torneo, Amici
  const [activeTab, setActiveTab] = useState('1vs1'); // '1vs1' | 'tournament' | 'friends'
  
  // --- 1vs1 State & Step Wizard ---
  const [oneVsOneSubTab, setOneVsOneSubTab] = useState('create'); // 'create' | 'my_challenges'
  const [oneVsOneStep, setOneVsOneStep] = useState(1); // 1 to 5
  const [opponentType, setOpponentType] = useState('friend'); // 'friend' | 'random'
  const [selectedFriendName, setSelectedFriendName] = useState(user.friends?.[0] || '');
  const [manualFriendInput, setManualFriendInput] = useState('');
  const [playlistCategory, setPlaylistCategory] = useState('all');
  const [selectedPlaylist, setSelectedPlaylist] = useState(PLAYLISTS[0]);
  const [songCount, setSongCount] = useState(10); // 5 | 10 | 15
  const [isSearchingRandom, setIsSearchingRandom] = useState(false);
  const [challengeWizardNotice, setChallengeWizardNotice] = useState(null);

  // --- Friends Tab State ---
  const [friendInput, setFriendInput] = useState('');
  const [friendNotice, setFriendNotice] = useState(null);
  const [friendToRemove, setFriendToRemove] = useState(null);
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [copiedMyCode, setCopiedMyCode] = useState(false);

  const handleCopyMyPlayerCode = async () => {
    try {
      await navigator.clipboard.writeText(user.playerCode || 'TS-PLAYER');
      setCopiedMyCode(true);
      setTimeout(() => setCopiedMyCode(false), 2500);
    } catch(e) {}
  };

  // --- Tournament State & Step Wizard ---
  const [tournamentSubTab, setTournamentSubTab] = useState('my_tournaments'); // 'create' | 'my_tournaments'
  const [tournamentStep, setTournamentStep] = useState(1); // 1 to 5
  const [tournamentName, setTournamentName] = useState('Torneo del Weekend 🎸');
  const [tournamentPlaylistCategory, setTournamentPlaylistCategory] = useState('all');
  const [tournamentPlaylist, setTournamentPlaylist] = useState(PLAYLISTS[0]);
  const [tournamentSongCount, setTournamentSongCount] = useState(10); // 5 | 10 | 15
  const [selectedTournamentFriends, setSelectedTournamentFriends] = useState(user.friends || []);
  const [manualTournamentEmail, setManualTournamentEmail] = useState('');
  const [expandedTournamentId, setExpandedTournamentId] = useState(null);
  const [tournamentNotice, setTournamentNotice] = useState(null);

  // Combine official playlists and imported Spotify playlists
  const importedPlaylists = user.importedPlaylists || [];
  const allAvailablePlaylists = [...PLAYLISTS, ...importedPlaylists];

  // --- DEEP LINK / SCREEN SWITCH: apri la sfida/torneo specifico al mount/switch ---
  useEffect(() => {
    try {
      const raw = localStorage.getItem('ten_seconds_pending_challenge');
      if (!raw) return;
      const pending = JSON.parse(raw);
      if (!pending || (Date.now() - (pending.ts || 0)) > 30000) {
        localStorage.removeItem('ten_seconds_pending_challenge');
        return;
      }
      localStorage.removeItem('ten_seconds_pending_challenge');

      const { screen, challengeId, tournamentId } = pending;
      const targetId = challengeId || tournamentId;

      if (screen === 'challenge_result' || screen === 'challenges') {
        if (tournamentId) {
          // Naviga al tab torneo, apri il torneo specifico
          setActiveTab('tournament');
          setTournamentSubTab('my_tournaments');
          if (targetId && targetId !== 'tournament_tab' && targetId !== 'all') {
            setExpandedTournamentId(targetId);
          }
        } else {
          // Naviga al tab 1vs1, mostra le sfide in corso
          setActiveTab('1vs1');
          setOneVsOneSubTab('my_challenges');
        }
      }
    } catch(e) {}
  }, [activeScreen]);

  // Quando l'utente apre Sfide -> Tornei, marca come letti gli inviti relativi ai tornei visualizzati
  useEffect(() => {
    if (activeTab === 'tournament' && markAllTournamentInvitesAsRead && myTournamentsList.length > 0) {
      markAllTournamentInvitesAsRead(myTournamentsList.map(t => t.id));
    }
  }, [activeTab, myTournamentsList.length, markAllTournamentInvitesAsRead]);

  const filteredPlaylists = allAvailablePlaylists.filter(pl => {
    if (playlistCategory === 'ten_seconds') return pl.category !== 'imported' && !pl.id?.startsWith('spotify-');
    if (playlistCategory === 'imported') return pl.category === 'imported' || pl.id?.startsWith('spotify-');
    return true;
  });

  const filteredTournamentPlaylists = allAvailablePlaylists.filter(pl => {
    if (tournamentPlaylistCategory === 'ten_seconds') return pl.category !== 'imported' && !pl.id?.startsWith('spotify-');
    if (tournamentPlaylistCategory === 'imported') return pl.category === 'imported' || pl.id?.startsWith('spotify-');
    return true;
  });

  // Calculate my challenges categorized
  const myIdentifiers = [
    user.email?.trim().toLowerCase(),
    user.name?.trim().toLowerCase(),
    user.playerCode?.trim().toLowerCase(),
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const userNameLower = (user.name || 'Ospite').trim().toLowerCase();

  // 1. Challenges received from someone else waiting for me to play
  const receivedChallenges = (asyncChallenges || []).filter(ch => {
    if (ch.status !== 'pending') return false;

    // Check if I created this challenge
    const challengerName = ch.challenger?.name?.trim().toLowerCase() || '';
    const challengerEmail = ch.challenger?.email?.trim().toLowerCase() || '';
    const challengerCode = ch.challenger?.playerCode?.trim().toLowerCase() || '';
    const isMeChallenger = myIdentifiers.some(id => id === challengerName || id === challengerEmail || id === challengerCode);
    if (isMeChallenger) return false;

    // Check if I am the challenged party or if it's an open random challenge
    const rawTarget = typeof ch.challenged === 'string'
      ? ch.challenged
      : (ch.challenged?.email || ch.challenged?.playerCode || ch.challenged?.name || '');
    const targetClean = rawTarget.trim().toLowerCase();

    const isDirectlyForMe = myIdentifiers.some(id => id === targetClean);
    const isOpenRandom = targetClean === '__random_opponent__';

    return isDirectlyForMe || isOpenRandom;
  });

  // 2. Challenges sent by me waiting for opponent
  const sentChallenges = (asyncChallenges || []).filter(ch => {
    if (ch.status !== 'pending') return false;
    const challengerName = ch.challenger?.name?.trim().toLowerCase() || '';
    const challengerEmail = ch.challenger?.email?.trim().toLowerCase() || '';
    const challengerCode = ch.challenger?.playerCode?.trim().toLowerCase() || '';
    return myIdentifiers.some(id => id === challengerName || id === challengerEmail || id === challengerCode);
  });

  // 3. Completed challenges where I was a participant
  const completedChallenges = (asyncChallenges || []).filter(ch => {
    if (ch.status !== 'completed' && ch.status !== 'forfeited') return false;
    const challengerName = ch.challenger?.name?.trim().toLowerCase() || '';
    const challengerEmail = ch.challenger?.email?.trim().toLowerCase() || '';
    const challengerCode = ch.challenger?.playerCode?.trim().toLowerCase() || '';
    const rawTarget = typeof ch.challenged === 'string'
      ? ch.challenged
      : (ch.challenged?.email || ch.challenged?.playerCode || ch.challenged?.name || '');
    const targetClean = rawTarget.trim().toLowerCase();

    return myIdentifiers.some(id => id === challengerName || id === challengerEmail || id === challengerCode || id === targetClean);
  });

  // Filter My Tournaments (Created by me, where I am a participant, OR where I am invited)
  const myTournamentsList = (asyncTournaments || []).filter(t => {
    if (t.creator?.userId && user.id && String(t.creator.userId).toLowerCase() === String(user.id).toLowerCase()) return true;
    if (t.creator?.email && user.email && t.creator.email.toLowerCase() === user.email.toLowerCase()) return true;
    if (t.creator?.name && user.name && t.creator.name.toLowerCase() === userNameLower) return true;
    if (t.creator?.playerCode && user.playerCode && t.creator.playerCode.toLowerCase() === user.playerCode.toLowerCase()) return true;
    if (Array.isArray(t.participants) && t.participants.some(p => {
      const pUserId = p.userId ? String(p.userId).toLowerCase() : '';
      const pEmail = p.email ? String(p.email).toLowerCase() : '';
      return (user.id && pUserId === String(user.id).toLowerCase()) || (user.email && pEmail === user.email.toLowerCase());
    })) return true;
    const invited = t.invited_identifiers || [];
    return myIdentifiers.some(id => id && invited.map(i => String(i).toLowerCase()).includes(id));
  });

  // Launch New Challenge from Step 5
  const handleLaunchChallenge = () => {
    let target = '__RANDOM_OPPONENT__';
    if (opponentType === 'friend') {
      target = selectedFriendName || manualFriendInput.trim() || 'Amico';
    }

    if (opponentType === 'random') {
      setIsSearchingRandom(true);
      setTimeout(() => {
        setIsSearchingRandom(false);
        createAndStartAsyncChallenge({
          targetFriend: '__RANDOM_OPPONENT__',
          playlist: selectedPlaylist,
          songCount,
          customTracks: selectedPlaylist.tracks
        });
      }, 1000);
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
    if (!expiresAt) return 'Tempo indefinito';
    const targetMs = typeof expiresAt === 'number' ? expiresAt : new Date(expiresAt).getTime();
    if (!targetMs || isNaN(targetMs)) return 'Tempo indefinito';
    const now = Date.now();
    const diff = targetMs - now;
    if (diff <= 0) return 'Scaduta';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m rimaste`;
  };

  // Quick action: Challenge an friend directly from friends list
  const handleQuickChallengeFriend = (friendName) => {
    setSelectedFriendName(friendName);
    setOpponentType('friend');
    setActiveTab('1vs1');
    setOneVsOneSubTab('create');
    setOneVsOneStep(3); // Jump directly to playlist selection
  };

  // Tournament Friend toggle
  const handleToggleTournamentFriend = (friendName) => {
    setSelectedTournamentFriends(prev => {
      if (prev.includes(friendName)) {
        return prev.filter(f => f !== friendName);
      } else {
        return [...prev, friendName];
      }
    });
  };

  const handleAddTournamentEmail = (e) => {
    e.preventDefault();
    const email = manualTournamentEmail.trim();
    if (!email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCode = email.toUpperCase().startsWith('TS-') || email.length >= 5;
    if (!emailRegex.test(email) && !isCode) {
      setTournamentNotice('⚠️ Inserisci un indirizzo email o Codice Giocatore valido');
      setTimeout(() => setTournamentNotice(null), 3500);
      return;
    }
    if (!selectedTournamentFriends.includes(email)) {
      setSelectedTournamentFriends(prev => [...prev, email]);
      setManualTournamentEmail('');
      setTournamentNotice(`✨ ${email} aggiunto ai partecipanti!`);
      setTimeout(() => setTournamentNotice(null), 3000);
    }
  };

  const handleCreateTournamentSubmit = async (e) => {
    if (e) e.preventDefault();
    const name = tournamentName.trim() || 'Torneo Musicale';
    if (selectedTournamentFriends.length === 0) {
      setTournamentNotice('⚠️ Seleziona o aggiungi almeno 1 amico partecipante al torneo');
      setTimeout(() => setTournamentNotice(null), 4000);
      return;
    }

    const res = await createAsyncTournament({
      name,
      playlist: tournamentPlaylist,
      songCount: tournamentSongCount,
      customTracks: tournamentPlaylist.tracks,
      invitedFriends: selectedTournamentFriends
    });

    if (res?.success) {
      setTournamentNotice(`🎉 Torneo "${name}" creato con successo! Inviti inviati.`);
      setTournamentSubTab('my_tournaments');
      setTournamentStep(1);
      setTimeout(() => setTournamentNotice(null), 4500);
    } else {
      setTournamentNotice(`⚠️ Impossibile creare il torneo: ${res?.error?.message || 'Riprova più tardi'}`);
      setTimeout(() => setTournamentNotice(null), 5000);
    }
  };

  // Friend Request Actions
  const handleSendFriendRequestSubmit = async (e) => {
    e.preventDefault();
    const input = friendInput.trim();
    if (!input) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCode = input.toUpperCase().startsWith('TS-') || input.length >= 5;

    if (!emailRegex.test(input) && !isCode) {
      setFriendNotice('⚠️ Inserisci un indirizzo email Google o Codice Giocatore valido (es. TS-XXXXX)');
      setTimeout(() => setFriendNotice(null), 4000);
      return;
    }

    if (user.email && user.email.toLowerCase() === input.toLowerCase()) {
      setFriendNotice('⚠️ Non puoi inviare una richiesta di amicizia alla tua stessa email');
      setTimeout(() => setFriendNotice(null), 4000);
      return;
    }
    if (user.playerCode && user.playerCode.toLowerCase() === input.toLowerCase()) {
      setFriendNotice('⚠️ Non puoi inviare una richiesta al tuo stesso Codice Giocatore');
      setTimeout(() => setFriendNotice(null), 4000);
      return;
    }

    const res = await sendFriendRequest(input);
    if (res?.error) {
      setFriendNotice(`⚠️ ${res.error}`);
    } else {
      setFriendNotice(`✨ Richiesta inviata a "${input}". Comparirà in attesa finché non accetta!`);
      setFriendInput('');
    }
    setTimeout(() => setFriendNotice(null), 4500);
  };

  const handleShareInvite = async () => {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.tenseconds.app';
    const userName = user.name || 'Un tuo amico';
    const shareTitle = 'Ten Seconds - Music Quiz';
    const shareText = `🎵 ${userName} ti ha sfidato su Ten Seconds! Riuscirai a riconoscere le canzoni in soli 10 secondi? Scarica l'app e gioca subito:`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: playStoreUrl
        });
        setCopiedInvite(true);
        setTimeout(() => setCopiedInvite(false), 3000);
      } catch (err) {}
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${playStoreUrl}`);
        setCopiedInvite(true);
        setTimeout(() => setCopiedInvite(false), 3000);
      } catch(e) {}
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      
      {/* 3 Main Tabs */}
      <div className="flex rounded-2xl bg-black/40 p-1.5 border border-white/10 backdrop-blur-md">
        <button
          onClick={() => setActiveTab('1vs1')}
          className={`flex-1 py-3 rounded-xl font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === '1vs1'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-[1.02]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>SFIDA 1VS1</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('tournament');
            if (markAllTournamentInvitesAsRead) {
              markAllTournamentInvitesAsRead(myTournamentsList.map(t => t.id));
            }
          }}
          className={`flex-1 py-3 rounded-xl font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'tournament'
              ? 'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-yellow-500/20 scale-[1.02]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Crown className="w-4 h-4" />
          <span>TORNEO</span>
          {hasUnreadTournamentInvites && (
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('friends')}
          className={`flex-1 py-3 rounded-xl font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'friends'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-[1.02]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>AMICI</span>
          {(friendRequests.length > 0 || (sentFriendRequests && sentFriendRequests.length > 0)) && (
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: SFIDA 1VS1 (GUIDED 5-STEP WIZARD) */}
      {/* ========================================================================= */}
      {activeTab === '1vs1' && (
        <div className="space-y-5">
          
          {/* Subtabs: Crea Sfida / Le Mie Sfide + Refresh Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => setOneVsOneSubTab('create')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  oneVsOneSubTab === 'create'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                Nuova Sfida 1vs1
              </button>

              <button
                onClick={() => setOneVsOneSubTab('my_challenges')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  oneVsOneSubTab === 'my_challenges'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <span>Le Mie Sfide</span>
                {receivedChallenges.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-black">
                    {receivedChallenges.length}
                  </span>
                )}
              </button>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              title="Aggiorna sfide e inviti in tempo reale"
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
              <span className="hidden sm:inline">Aggiorna</span>
            </button>
          </div>

          {/* Subtab Content: STEP-BY-STEP WIZARD */}
          {oneVsOneSubTab === 'create' && (
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-amber-500/30 bg-slate-900/90 shadow-2xl space-y-4">
              
              {/* Wizard Step Progress Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 font-mono">
                    Passo {oneVsOneStep} di 5
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {oneVsOneStep === 1 && 'Modalità di Sfida'}
                    {oneVsOneStep === 2 && 'Scelta dell\'Avversario'}
                    {oneVsOneStep === 3 && 'Scelta della Playlist'}
                    {oneVsOneStep === 4 && 'Numero Brani'}
                    {oneVsOneStep === 5 && 'Lancia la Sfida'}
                  </span>
                </div>

                {/* Progress Bar with Steps */}
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map(stepNum => (
                    <div 
                      key={stepNum}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        stepNum === oneVsOneStep
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-md shadow-amber-500/40'
                          : stepNum < oneVsOneStep
                          ? 'bg-emerald-500'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Notice Banner */}
              {challengeWizardNotice && (
                <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold animate-fade-in">
                  {challengeWizardNotice}
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STEP 1: Modalità di Sfida (Sfida un Amico / Giocatore Casuale) */}
              {/* ------------------------------------------------------------- */}
              {oneVsOneStep === 1 && (
                <div className="space-y-3 animate-fade-in">
                  <div className="text-center sm:text-left space-y-0.5">
                    <h3 className="font-display font-black text-base sm:text-lg text-white">1. Scegli la Modalità di Sfida</h3>
                    <p className="text-xs text-slate-400">Seleziona come vuoi giocare:</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {/* Card: Sfida un Amico */}
                    <div
                      onClick={() => setOpponentType('friend')}
                      className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        opponentType === 'friend'
                          ? 'bg-gradient-to-br from-amber-500/25 via-slate-900 to-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40 scale-[1.01]'
                          : 'bg-black/40 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-md">
                          <Users className="w-5 h-5" />
                        </div>
                        {opponentType === 'friend' && (
                          <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-display font-black text-sm sm:text-base text-white">Sfida un Amico</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Scegli un amico da sfidare
                        </p>
                      </div>
                    </div>

                    {/* Card: Giocatore Casuale */}
                    <div
                      onClick={() => setOpponentType('random')}
                      className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        opponentType === 'random'
                          ? 'bg-gradient-to-br from-cyan-500/25 via-slate-900 to-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/40 scale-[1.01]'
                          : 'bg-black/40 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shadow-md">
                          <Shuffle className="w-5 h-5" />
                        </div>
                        {opponentType === 'random' && (
                          <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-display font-black text-sm sm:text-base text-white">Giocatore Casuale</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Cerca un avversario casuale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(opponentType === 'friend' ? 2 : 3)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STEP 2: Scelta dell'Amico (Solo se Sfida un Amico) */}
              {/* ------------------------------------------------------------- */}
              {oneVsOneStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">2. Scegli chi Sfidare</h3>
                    <p className="text-xs text-slate-400">Seleziona un amico dalla tua lista per lanciare la sfida:</p>
                  </div>

                  {/* Lista Amici */}
                  {user.friends && user.friends.length > 0 ? (
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                      <label className="text-[11px] uppercase font-bold text-slate-400">I tuoi Amici:</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {user.friends.map(friendName => {
                          const isSelected = selectedFriendName === friendName;
                          return (
                            <div
                              key={friendName}
                              onClick={() => setSelectedFriendName(friendName)}
                              className={`p-3 rounded-xl border flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-amber-500/20 border-amber-400 text-white font-black ring-1 ring-amber-400/40'
                                  : 'bg-black/40 border-white/10 text-slate-300 hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0">
                                  {friendName[0]?.toUpperCase()}
                                </div>
                                <span className="text-xs truncate">{friendName}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-center space-y-3">
                      <Users className="w-10 h-10 text-slate-500 mx-auto" />
                      <p className="text-xs text-slate-300 font-bold">Nessun amico presente nella tua lista.</p>
                      <p className="text-xs text-slate-400">Puoi aggiungere amici tramite email nella sezione Amici prima di lanciare la sfida!</p>
                      <button
                        type="button"
                        onClick={() => {
                          setOneVsOneSubTab('my_challenges');
                          setActiveTab('friends');
                        }}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs cursor-pointer shadow-md shadow-cyan-500/20"
                      >
                        VAI ALLA SEZIONE AMICI 👥
                      </button>
                    </div>
                  )}

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(1)}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!selectedFriendName) {
                          setChallengeWizardNotice('⚠️ Seleziona un amico prima di proseguire');
                          setTimeout(() => setChallengeWizardNotice(null), 3500);
                          return;
                        }
                        setOneVsOneStep(3);
                      }}
                      className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-amber-500/30 flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STEP 3: Scelta della Playlist */}
              {/* ------------------------------------------------------------- */}
              {oneVsOneStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">3. Scegli la Playlist</h3>
                    <p className="text-xs text-slate-400">Seleziona i brani con cui vi sfiderete a duello:</p>
                  </div>

                  {/* Filtri Categoria Playlist */}
                  <div className="flex gap-2 pb-1 overflow-x-auto custom-scrollbar">
                    {['all', 'ten_seconds', 'imported'].map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setPlaylistCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                          playlistCategory === cat
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {cat === 'all' ? 'Tutte' : cat === 'ten_seconds' ? 'Ten Seconds' : 'Importate'}
                      </button>
                    ))}
                  </div>

                  {/* Griglia Playlist Touch Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                    {filteredPlaylists.map(playlist => {
                      const isSelected = selectedPlaylist?.id === playlist.id;
                      return (
                        <div
                          key={playlist.id}
                          onClick={() => setSelectedPlaylist(playlist)}
                          className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 relative overflow-hidden ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/40 scale-[1.02]'
                              : 'bg-black/40 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="relative h-20 rounded-xl overflow-hidden">
                            <img src={playlist.cover} alt={playlist.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <span className="absolute bottom-1.5 left-1.5 text-[9px] font-black px-1.5 py-0.5 rounded bg-black/70 text-emerald-400">
                              {playlist.badge || 'Playlist'}
                            </span>
                            {isSelected && (
                              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h5 className={`font-bold text-xs line-clamp-1 ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                              {playlist.title}
                            </h5>
                            <span className="text-[10px] text-slate-400 font-mono">{playlist.tracks?.length || 30} brani</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(opponentType === 'friend' ? 2 : 1)}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!selectedPlaylist) {
                          setChallengeWizardNotice('⚠️ Seleziona una playlist per continuare');
                          setTimeout(() => setChallengeWizardNotice(null), 3500);
                          return;
                        }
                        setOneVsOneStep(4);
                      }}
                      className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-amber-500/30 flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STEP 4: Numero di Brani (5 / 10 / 15 Brani) - COMPACT */}
              {/* ------------------------------------------------------------- */}
              {oneVsOneStep === 4 && (
                <div className="space-y-3 animate-fade-in">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-black text-base sm:text-lg text-white">4. Quanti Brani volete Giocare?</h3>
                    <p className="text-xs text-slate-400">Scegli la durata della sfida tra voi due:</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                    {[
                      { count: 5, title: '5 Brani', desc: 'Sprint (1m)', icon: '⚡' },
                      { count: 10, title: '10 Brani', desc: 'Classica ⭐', icon: '🎵' },
                      { count: 15, title: '15 Brani', desc: 'Maratona', icon: '🔥' },
                    ].map(item => {
                      const isSelected = songCount === item.count;
                      return (
                        <button
                          key={item.count}
                          type="button"
                          onClick={() => setSongCount(item.count)}
                          className={`p-2.5 sm:p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-1 min-h-[82px] ${
                            isSelected
                              ? 'bg-amber-500/25 border-amber-400 text-white shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/40 scale-[1.02]'
                              : 'bg-black/40 border-white/10 hover:border-white/20 text-slate-300'
                          }`}
                        >
                          <span className="text-xl leading-none">{item.icon}</span>
                          <span className="font-display font-black text-xs sm:text-sm leading-tight">{item.title}</span>
                          <span className="text-[10px] text-slate-400 leading-tight">{item.desc}</span>
                          {isSelected && (
                            <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black leading-none mt-0.5">
                              SCELTO
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(3)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(5)}
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black font-display text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/30 flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>AVANTI AL RIEPILOGO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STEP 5: Riepilogo & LANCIA LA SFIDA */}
              {/* ------------------------------------------------------------- */}
              {oneVsOneStep === 5 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">5. Riepilogo & Lancio Sfida</h3>
                    <p className="text-xs text-slate-400">Verifica i dettagli prima di iniziare a giocare:</p>
                  </div>

                  {/* Box Riepilogo Chiaro */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Avversario:</span>
                      <span className="text-xs font-black text-amber-300 font-display">
                        {opponentType === 'random' ? '🎲 Giocatore Casuale' : (selectedFriendName || manualFriendInput || 'Amico')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Playlist:</span>
                      <span className="text-xs font-black text-white flex items-center gap-1.5">
                        <span>{selectedPlaylist?.title}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Numero Brani:</span>
                      <span className="text-xs font-black text-emerald-400 font-mono">
                        {songCount} Canzoni (48h di tempo)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 leading-relaxed">
                      💡 <strong>Come funziona:</strong> Giocherai la tua manche adesso. Il tuo punteggio e tempo rimarranno registrati e l'avversario riceverà una notifica per giocare gli stessi identici brani. Chi fa più punti vince!
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOneVsOneStep(4)}
                      className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>MODIFICA</span>
                    </button>

                    {/* EXACT REQUESTED BUTTON: solo "Lancia la sfida" con simbolo play */}
                    <button
                      type="button"
                      onClick={handleLaunchChallenge}
                      disabled={isSearchingRandom}
                      className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-black font-display text-sm tracking-wider shadow-2xl shadow-amber-500/40 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>{isSearchingRandom ? 'RICERCA AVVERSARIO...' : 'Lancia la sfida'}</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Subtab Content: LE MIE SFIDE (RICEVUTE / INVIATE / CONCLUSE) */}
          {oneVsOneSubTab === 'my_challenges' && (
            <div className="space-y-5">
              
              {/* 1. Sfide Ricevute in attesa di risposta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-black text-sm text-amber-400 flex items-center gap-2">
                    <Swords className="w-4 h-4" />
                    <span>Sfide Ricevute ({receivedChallenges.length})</span>
                  </h4>
                  {receivedChallenges.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-black animate-pulse">
                      Tocca a te!
                    </span>
                  )}
                </div>

                {receivedChallenges.length > 0 ? (
                  <div className="space-y-2.5">
                    {receivedChallenges.map(ch => {
                      const isExpired = Boolean(ch.expiresAt && typeof ch.expiresAt === 'number' && ch.expiresAt > 0 && Date.now() > ch.expiresAt);
                      return (
                        <div key={ch.id} className={`glass-panel p-4 rounded-2xl border ${
                          isExpired ? 'border-rose-500/40 bg-gradient-to-r from-rose-950/30 via-slate-900 to-slate-950' : 'border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950'
                        } flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg`}>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm">{ch.challenger?.name}</span>
                              <span className={`text-[10px] ${
                                isExpired ? 'text-rose-400 bg-rose-500/20' : 'text-amber-400 bg-amber-500/20'
                              } px-2 py-0.5 rounded-full font-mono font-bold`}>
                                {isExpired ? 'TEMPO SCADUTO ⌛' : formatTimeLeft(ch.expiresAt)}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300">
                              Playlist: <strong className="text-amber-300">{ch.playlist?.title}</strong> ({ch.songCount || 10} brani)
                            </p>
                          </div>
                          {isExpired ? (
                            <button
                              onClick={() => acceptForfeitDefeat(ch.id)}
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black font-display text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/30 active:scale-95 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" /> ACCETTA SCONFITTA
                            </button>
                          ) : (
                            <button
                              onClick={() => respondToAsyncChallenge(ch)}
                              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black font-display text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 hover:brightness-110 active:scale-95 cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5 fill-current" /> GIOCA ORA
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/5 text-center text-xs text-slate-400 flex flex-col items-center justify-center gap-2">
                    <span>Nessuna sfida ricevuta in attesa.</span>
                    <button
                      onClick={() => setOneVsOneSubTab('create')}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all cursor-pointer"
                    >
                      Lancia una sfida a un amico ⚔️
                    </button>
                  </div>
                )}
              </div>

              {/* 2. Sfide Inviate in attesa dell'avversario */}
              {sentChallenges.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display font-black text-sm text-slate-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Sfide Inviate in Attesa ({sentChallenges.length})</span>
                  </h4>
                  <div className="space-y-2.5">
                    {sentChallenges.map(ch => {
                      const isExpired = Boolean(ch.expiresAt && typeof ch.expiresAt === 'number' && ch.expiresAt > 0 && Date.now() > ch.expiresAt);
                      const opponentName = formatPlayerDisplayName(ch.challenged, user, 'Amico');
                      return (
                        <div key={ch.id} className="glass-panel p-4 rounded-2xl border border-white/10 bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm">Contro: {opponentName}</span>
                              <span className={`text-[10px] ${isExpired ? 'text-rose-400 bg-rose-500/20' : 'text-slate-400'} font-mono font-bold px-2 py-0.5 rounded-full`}>
                                {isExpired ? 'TEMPO SCADUTO ⌛' : formatTimeLeft(ch.expiresAt)}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">
                              Il tuo punteggio: <strong className="text-emerald-400">{(ch.challengerScore ?? ch.challenger_score ?? 0).toLocaleString('it-IT')} PT</strong> ({(ch.challengerCorrect ?? ch.challenger_correct ?? 0)}/{(ch.songCount ?? ch.song_count ?? 10)} corrette)
                            </p>
                          </div>
                          {isExpired ? (
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <button
                                onClick={() => claimForfeitVictory(ch.id)}
                                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black font-display text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/30 active:scale-95 cursor-pointer"
                              >
                                <Trophy className="w-3.5 h-3.5" /> RISCATTA VITTORIA A TAVOLINO 🏆
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (deleteAsyncChallenge) deleteAsyncChallenge(ch.id);
                                }}
                                title="Rimuovi sfida scaduta"
                                className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                              <span className="text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl font-bold">
                                In attesa del turno ⏳
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (deleteAsyncChallenge) deleteAsyncChallenge(ch.id);
                                }}
                                title="Rimuovi sfida dalla lista"
                                className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3. Sfide Concluse */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-black text-sm text-slate-300 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>Sfide Concluse ({completedChallenges.length})</span>
                  </h4>
                  {completedChallenges.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        completedChallenges.forEach(c => {
                          if (deleteAsyncChallenge) deleteAsyncChallenge(c.id);
                        });
                      }}
                      className="text-[11px] text-slate-400 hover:text-rose-400 font-bold flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-rose-500/10 cursor-pointer"
                      title="Cancella tutte le sfide concluse dalla lista"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Pulisci concluse</span>
                    </button>
                  )}
                </div>

                {completedChallenges.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-black/30 border border-white/10 text-center text-xs text-slate-500">
                    Nessuna sfida completata al momento. Lancia una nuova sfida per iniziare!
                  </div>
                ) : (
                  <div className="space-y-2">
                    {completedChallenges.map(ch => {
                      const rawChallenger = ch.challenger?.name || ch.challenger?.email || 'Challenger';
                      const challengerName = formatPlayerDisplayName(rawChallenger, user, 'Challenger');
                      const challengerScore = Number(ch.challengerScore ?? ch.challenger_score ?? 0);
                      const challengerCorrect = Number(ch.challengerCorrect ?? ch.challenger_correct ?? 0);

                      const rawChallenged = typeof ch.challenged === 'object'
                        ? (ch.challenged?.name || ch.challenged?.email || 'Amico')
                        : (ch.challenged || 'Amico');
                      const challengedLabel = formatPlayerDisplayName(rawChallenged, user, 'Amico');
                      const challengedScore = Number(ch.challengedScore ?? ch.challenged_score ?? 0);
                      const challengedCorrect = Number(ch.challengedCorrect ?? ch.challenged_correct ?? 0);
                      const totalSongs = Number(ch.songCount || ch.song_count || 10);

                      const winnerStr = String(ch.winner || '').trim().toLowerCase();
                      const isTie = winnerStr === 'tie';
                      const isForfeited = ch.status === 'forfeited';

                      // Identifica chi è il vincitore
                      const isChallengerWinner = !isTie && (
                        challengerScore > challengedScore ||
                        winnerStr === String(rawChallenger).toLowerCase() ||
                        winnerStr === String(ch.challenger?.email || '').toLowerCase()
                      );

                      const isChallengedWinner = !isTie && (
                        challengedScore > challengerScore ||
                        winnerStr === String(rawChallenged).toLowerCase() ||
                        winnerStr === String(ch.challenged?.email || '').toLowerCase() ||
                        (typeof ch.challenged === 'string' && winnerStr === ch.challenged.toLowerCase())
                      );

                      // Risultato per l'utente loggato
                      const myName = (user.name || '').trim().toLowerCase();
                      const myEmail = (user.email || '').trim().toLowerCase();
                      const myCode = (user.playerCode || '').trim().toLowerCase();

                      const isMeChallenger = (myEmail && ch.challenger?.email?.toLowerCase() === myEmail) || (rawChallenger.toLowerCase() === myName);
                      const isMeChallenged = (myEmail && String(rawChallenged).toLowerCase() === myEmail) || (String(rawChallenged).toLowerCase() === myName);

                      const isMeWinner = !isTie && (
                        (isMeChallenger && isChallengerWinner) ||
                        (isMeChallenged && isChallengedWinner) ||
                        (!!winnerStr && (winnerStr === myName || (myEmail && winnerStr === myEmail) || (myCode && winnerStr === myCode)))
                      );

                      return (
                        <div
                          key={ch.id}
                          className={`px-3 py-2 rounded-xl border flex flex-col gap-1 shadow-sm transition-all ${
                            isMeWinner
                              ? 'bg-emerald-950/20 border-emerald-500/30'
                              : isTie
                              ? 'bg-slate-900/60 border-white/10'
                              : 'bg-rose-950/20 border-rose-500/25'
                          }`}
                        >
                          {/* RIGA 1: Data | Playlist | Esito */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                              <span className="text-[10px] text-slate-400 font-mono bg-white/5 px-1.5 py-0.5 rounded shrink-0">
                                {formatCardDate(ch.completedAt || ch.completed_at || ch.createdAt)}
                              </span>
                              <div className="flex items-center gap-1 min-w-0">
                                <span className="text-emerald-400 text-[10px] shrink-0">🎵</span>
                                <span className="truncate text-[11px] font-medium text-slate-300" title={ch.playlist?.title || 'Playlist'}>
                                  {ch.playlist?.title || 'Playlist'}
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-black font-display uppercase tracking-wider shrink-0 ${
                              isMeWinner
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : isTie
                                ? 'bg-white/10 text-slate-300 border border-white/10'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }`}>
                              {isMeWinner ? 'VITTORIA 🏆' : isTie ? 'PAREGGIO 🤝' : 'SCONFITTA'}
                            </span>
                          </div>

                          {/* RIGA 2: Nomi + Punteggi | Cestino */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 min-w-0 flex-1 text-[11px] sm:text-xs font-display tracking-wide">
                              <span className={`truncate ${isChallengerWinner ? 'text-emerald-400 font-bold' : 'text-slate-400 font-normal'}`}>
                                {challengerName}
                              </span>
                              <span className={`font-mono text-[10px] shrink-0 ${isChallengerWinner ? 'text-emerald-300 font-bold' : 'text-slate-500 font-normal'}`}>
                                {challengerScore.toLocaleString('it-IT')}
                              </span>

                              <span className="text-[10px] text-slate-600 font-bold shrink-0">—</span>

                              <span className={`truncate ${isChallengedWinner ? 'text-emerald-400 font-bold' : 'text-slate-400 font-normal'}`}>
                                {challengedLabel}
                              </span>
                              {isForfeited && challengedScore === 0 ? (
                                <span className="text-[9px] text-rose-400 font-normal shrink-0">Forfait</span>
                              ) : (
                                <span className={`font-mono text-[10px] shrink-0 ${isChallengedWinner ? 'text-emerald-300 font-bold' : 'text-slate-500 font-normal'}`}>
                                  {challengedScore.toLocaleString('it-IT')}
                                </span>
                              )}
                              {isForfeited && (
                                <span className="text-[7px] text-amber-400 font-bold bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/30 shrink-0">
                                  A TAVOLINO
                                </span>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (deleteAsyncChallenge) deleteAsyncChallenge(ch.id);
                              }}
                              title="Elimina sfida dalla cronologia"
                              className="p-1 rounded-md text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TORNEO (GUIDED 5-STEP WIZARD) */}
      {/* ========================================================================= */}
      {activeTab === 'tournament' && (
        <div className="space-y-5">
          
          <div className="flex gap-2">
            <button
              onClick={() => setTournamentSubTab('my_tournaments')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                tournamentSubTab === 'my_tournaments'
                  ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 font-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              I Miei Tornei ({myTournamentsList.length})
            </button>

            <button
              onClick={() => setTournamentSubTab('create')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                tournamentSubTab === 'create'
                  ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 font-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              Crea Torneo
            </button>
          </div>

          {/* Subtab: I Miei Tornei */}
          {tournamentSubTab === 'my_tournaments' && (
            <div className="space-y-4">
              {myTournamentsList.length === 0 ? (
                <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center space-y-3 bg-slate-900/60">
                  <Crown className="w-12 h-12 text-yellow-400/50 mx-auto" />
                  <h4 className="font-display font-black text-base text-white">Nessun Torneo Attivo</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Crea un torneo multi-utente e invita fino a decine di amici per sfidarvi sulla stessa classifica!
                  </p>
                  <button
                    onClick={() => setTournamentSubTab('create')}
                    className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/20 hover:brightness-110 cursor-pointer"
                  >
                    CREA IL TUO PRIMO TORNEO 👑
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {myTournamentsList.map(tourn => {
                    const myParticipant = tourn.participants?.find(p => {
                      const pUserId = (p.userId || p.user_id || '').trim();
                      if (pUserId && user.id && pUserId === user.id) return true;
                      const pEmail = (p.email || '').trim().toLowerCase();
                      const pName = (p.name || '').trim().toLowerCase();
                      const pId = (p.identifier || '').trim().toLowerCase();
                      const isMatch = myIdentifiers.some(id => id && (id === pEmail || id === pName || id === pId));
                      const isCreatorMatch = p.isCreator && (
                        (tourn.creator?.id && user.id && tourn.creator.id === user.id) ||
                        (tourn.creator?.email && user.email && tourn.creator.email.toLowerCase() === user.email.toLowerCase()) ||
                        (tourn.creator?.name && user.name && tourn.creator.name.toLowerCase() === userNameLower) ||
                        (tourn.creator?.playerCode && user.playerCode && tourn.creator.playerCode.toLowerCase() === (user.playerCode || '').toLowerCase())
                      );
                      return isMatch || isCreatorMatch;
                    });
                    const hasPlayed = myParticipant?.hasPlayed;
                    const isExpanded = expandedTournamentId === tourn.id;

                    return (
                      <div key={tourn.id} className="glass-panel p-5 rounded-2xl border border-yellow-500/30 bg-slate-900/80 shadow-lg space-y-3">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-black text-white text-base">{tourn.name}</span>
                              <span className="text-[10px] text-yellow-400 bg-yellow-500/20 px-2 py-0.5 rounded-full font-mono font-bold">
                                {formatTimeLeft(tourn.expiresAt)}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">
                              Creatore: <strong className="text-white">{tourn.creator?.name}</strong> • Playlist: <strong className="text-amber-300">{tourn.playlist?.title}</strong> ({tourn.songCount} brani)
                            </p>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            {!hasPlayed ? (
                              <button
                                onClick={() => startTournamentMatch(tourn)}
                                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-yellow-500/20 hover:brightness-110 cursor-pointer"
                              >
                                <Play className="w-3.5 h-3.5 fill-current" /> GIOCA MANCHE
                              </button>
                            ) : (
                              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                                ✓ Giocato ({myParticipant?.score?.toLocaleString('it-IT')} PT)
                              </span>
                            )}

                            <button
                              onClick={() => setExpandedTournamentId(isExpanded ? null : tourn.id)}
                              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Standings table when expanded */}
                        {isExpanded && (
                          <div className="pt-3 border-t border-white/10 space-y-2 animate-fade-in">
                            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wide">Classifica Partecipanti:</h5>
                            <div className="space-y-1.5">
                              {tourn.participants?.map((p, idx) => (
                                <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-bold text-slate-400">#{idx + 1}</span>
                                    <span className="font-bold text-white">{p.name || p.identifier}</span>
                                    {p.isCreator && <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.2 rounded font-bold">Host</span>}
                                  </div>
                                  <div>
                                    {p.hasPlayed ? (
                                      <strong className="text-emerald-400 font-mono">{p.score?.toLocaleString('it-IT')} PT</strong>
                                    ) : (
                                      <span className="text-slate-500 font-mono text-[11px]">In attesa</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Subtab: GUIDED TOURNAMENT WIZARD */}
          {tournamentSubTab === 'create' && (
            <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-yellow-500/30 bg-slate-900/90 shadow-2xl space-y-6">
              
              {/* Wizard Header */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-yellow-400 font-mono">
                    Passo {tournamentStep} di 5
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {tournamentStep === 1 && 'Nome del Torneo'}
                    {tournamentStep === 2 && 'Invito Partecipanti'}
                    {tournamentStep === 3 && 'Scelta Playlist'}
                    {tournamentStep === 4 && 'Numero Brani'}
                    {tournamentStep === 5 && 'Crea & Invia Inviti'}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map(stepNum => (
                    <div 
                      key={stepNum}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        stepNum === tournamentStep
                          ? 'bg-gradient-to-r from-yellow-400 to-amber-500 shadow-md shadow-yellow-500/40'
                          : stepNum < tournamentStep
                          ? 'bg-emerald-500'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {tournamentNotice && (
                <div className={`p-3 rounded-2xl border text-xs font-bold animate-fade-in ${
                  tournamentNotice.startsWith('⚠️')
                    ? 'bg-rose-500/20 border-rose-400/40 text-rose-300'
                    : 'bg-yellow-500/20 border-yellow-400/40 text-yellow-300'
                }`}>
                  {tournamentNotice}
                </div>
              )}

              {/* Step 1: Nome del Torneo */}
              {tournamentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">1. Assegna un Titolo al Torneo</h3>
                    <p className="text-xs text-slate-400">Scegli un nome accattivante per la competizione:</p>
                  </div>

                  <input
                    type="text"
                    value={tournamentName}
                    onChange={(e) => setTournamentName(e.target.value)}
                    placeholder="Es. Torneo del Weekend 🎸"
                    className="w-full bg-black/50 border border-white/15 px-4 py-3.5 rounded-xl text-sm font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400"
                  />

                  {/* Suggestion pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Torneo del Weekend 🎸', 'Coppa Campioni 🏆', 'Sfida tra Amici ⚡', 'Hit & Run Party 🎵'].map(sugg => (
                      <button
                        key={sugg}
                        type="button"
                        onClick={() => setTournamentName(sugg)}
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 text-xs font-bold border border-white/10 transition-all cursor-pointer"
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setTournamentStep(2)}
                      className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-yellow-500/30 flex items-center gap-2 hover:brightness-110 cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Partecipanti */}
              {tournamentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">2. Seleziona i Partecipanti</h3>
                    <p className="text-xs text-slate-400">Scegli gli amici da invitare al torneo:</p>
                  </div>

                  {user.friends && user.friends.length > 0 ? (
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase font-bold text-slate-400">Seleziona dalla tua lista amici:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                        {user.friends.map(friendName => {
                          const isSelected = selectedTournamentFriends.includes(friendName);
                          return (
                            <button
                              key={friendName}
                              type="button"
                              onClick={() => handleToggleTournamentFriend(friendName)}
                              className={`p-3 rounded-xl border flex items-center justify-between gap-2 text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 ring-1 ring-yellow-400/40'
                                  : 'bg-black/40 border-white/10 text-slate-400 hover:bg-white/5'
                              }`}
                            >
                              <span className="truncate">{friendName}</span>
                              {isSelected ? <Check className="w-4 h-4 text-yellow-400" /> : <Plus className="w-4 h-4 text-slate-500" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-center space-y-3">
                      <Users className="w-10 h-10 text-slate-500 mx-auto" />
                      <p className="text-xs text-slate-300 font-bold">Nessun amico presente nella tua lista.</p>
                      <p className="text-xs text-slate-400">Aggiungi i tuoi amici nella sezione Amici prima di creare un torneo!</p>
                      <button
                        type="button"
                        onClick={() => {
                          setTournamentSubTab('my_tournaments');
                          setActiveTab('friends');
                        }}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs cursor-pointer shadow-md shadow-cyan-500/20"
                      >
                        VAI ALLA SEZIONE AMICI 👥
                      </button>
                    </div>
                  )}

                  {/* Invited preview */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs">
                    <span className="text-slate-400">Partecipanti selezionati: </span>
                    <strong className="text-yellow-300">
                      {selectedTournamentFriends.length > 0 ? selectedTournamentFriends.join(', ') : 'Nessuno selezionato'}
                    </strong>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setTournamentStep(1)}
                      className="px-5 py-3 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (selectedTournamentFriends.length === 0) {
                          setTournamentNotice('⚠️ Seleziona o aggiungi almeno 1 amico per continuare');
                          setTimeout(() => setTournamentNotice(null), 3500);
                          return;
                        }
                        setTournamentStep(3);
                      }}
                      className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-yellow-500/30 flex items-center gap-2 hover:brightness-110 cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Playlist */}
              {tournamentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">3. Scegli la Playlist del Torneo</h3>
                    <p className="text-xs text-slate-400">Tutti i partecipanti giocheranno su questa selezione:</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                    {filteredTournamentPlaylists.map(playlist => {
                      const isSelected = tournamentPlaylist?.id === playlist.id;
                      return (
                        <div
                          key={playlist.id}
                          onClick={() => setTournamentPlaylist(playlist)}
                          className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 relative overflow-hidden ${
                            isSelected
                              ? 'bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-500/20 ring-2 ring-yellow-400/40 scale-[1.02]'
                              : 'bg-black/40 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="relative h-20 rounded-xl overflow-hidden">
                            <img src={playlist.cover} alt={playlist.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            {isSelected && (
                              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h5 className={`font-bold text-xs line-clamp-1 ${isSelected ? 'text-yellow-300' : 'text-white'}`}>
                              {playlist.title}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setTournamentStep(2)}
                      className="px-5 py-3 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTournamentStep(4)}
                      className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-yellow-500/30 flex items-center gap-2 hover:brightness-110 cursor-pointer"
                    >
                      <span>AVANTI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Numero Brani - COMPACT */}
              {tournamentStep === 4 && (
                <div className="space-y-3 animate-fade-in">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-black text-base sm:text-lg text-white">4. Numero Brani per la Manche</h3>
                    <p className="text-xs text-slate-400">Quante canzoni comporranno la prova del torneo?</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                    {[
                      { count: 5, title: '5 Brani', desc: 'Sfida Rapida', icon: '⚡' },
                      { count: 10, title: '10 Brani', desc: 'Standard ⭐', icon: '🎵' },
                      { count: 15, title: '15 Brani', desc: 'Gran Finale', icon: '👑' },
                    ].map(item => {
                      const isSelected = tournamentSongCount === item.count;
                      return (
                        <button
                          key={item.count}
                          type="button"
                          onClick={() => setTournamentSongCount(item.count)}
                          className={`p-2.5 sm:p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-1 min-h-[82px] ${
                            isSelected
                              ? 'bg-yellow-500/25 border-yellow-400 text-white shadow-lg ring-2 ring-yellow-400/40 scale-[1.02]'
                              : 'bg-black/40 border-white/10 text-slate-300'
                          }`}
                        >
                          <span className="text-xl leading-none">{item.icon}</span>
                          <span className="font-display font-black text-xs sm:text-sm leading-tight">{item.title}</span>
                          <span className="text-[10px] text-slate-400 leading-tight">{item.desc}</span>
                          {isSelected && (
                            <span className="px-1.5 py-0.5 rounded-full bg-yellow-400 text-slate-950 text-[9px] font-black leading-none mt-0.5">
                              SCELTO
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setTournamentStep(3)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>INDIETRO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTournamentStep(5)}
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black font-display text-xs sm:text-sm tracking-wide shadow-lg shadow-yellow-500/30 flex items-center gap-2 hover:brightness-110 active:scale-95 cursor-pointer"
                    >
                      <span>AVANTI AL RIEPILOGO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Riepilogo & Crea */}
              {tournamentStep === 5 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg text-white">5. Riepilogo Torneo</h3>
                    <p className="text-xs text-slate-400">Verifica i dettagli e crea il torneo:</p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-yellow-500/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Nome:</span>
                      <span className="text-xs font-black text-yellow-300 font-display">{tournamentName}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Partecipanti:</span>
                      <span className="text-xs font-bold text-white">{selectedTournamentFriends.length} Invitati</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs text-slate-400">Playlist:</span>
                      <span className="text-xs font-black text-white">{tournamentPlaylist?.title}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Brani & Tempo:</span>
                      <span className="text-xs font-black text-emerald-400 font-mono">{tournamentSongCount} Canzoni • Finestra 48 ore</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setTournamentStep(4)}
                      className="px-5 py-3.5 rounded-2xl bg-white/10 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>MODIFICA</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCreateTournamentSubmit}
                      className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-slate-950 font-black font-display text-sm tracking-wider shadow-2xl shadow-yellow-500/40 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Crown className="w-5 h-5 text-black fill-black" />
                      <span>Inizia Torneo</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: AMICI (CODICE GIOCATORE, RICHIESTE INVIATE, RICEVUTE, LISTA AMICI) */}
      {/* ========================================================================= */}
      {activeTab === 'friends' && (
        <div className="space-y-5 animate-fade-in">
          
          {/* Friend Notice Banner */}
          {friendNotice && (
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold animate-fade-in">
              {friendNotice}
            </div>
          )}

          {/* 1. Il Tuo Codice Giocatore Univoco */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
            <div className="space-y-0.5 min-w-0">
              <div className="text-[10px] uppercase font-bold text-cyan-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Il Tuo Codice Giocatore
              </div>
              <div className="font-mono font-black text-xl text-white tracking-wider truncate">
                #{user.playerCode || 'TS-PLAYER'}
              </div>
              <p className="text-xs text-slate-400">
                Condividi questo codice per farti aggiungere facilmente dagli amici senza bisogno dell'email!
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyMyPlayerCode}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black font-display text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              {copiedMyCode ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>COPIATO!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  <span>COPIA CODICE</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Invia Richiesta di Amicizia (Email o Codice Giocatore) */}
          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/90 space-y-3 shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Aggiungi amico</h3>
                <p className="text-xs text-slate-400">Inserisci l'email Google o il Codice Giocatore (es. TS-XXXXX)</p>
              </div>
            </div>

            <form onSubmit={handleSendFriendRequestSubmit} className="flex flex-col gap-2.5 w-full">
              <input
                type="text"
                value={friendInput}
                onChange={(e) => setFriendInput(e.target.value)}
                placeholder="Email Google o Codice Giocatore (es. TS-XXXXX)"
                className="w-full bg-black/50 border border-white/15 px-4 py-3 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:brightness-110 text-slate-950 font-black font-display text-xs shadow-md shadow-cyan-500/20 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>INVIA RICHIESTA DI AMICIZIA</span>
              </button>
            </form>
          </div>

          {/* 3. RICHIESTE INVIATE (IN ATTESA DI ACCETTAZIONE) */}
          {sentFriendRequests && sentFriendRequests.length > 0 && (
            <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-950 space-y-3 shadow-lg">
              <div className="flex items-center gap-2">
                <Hourglass className="w-4 h-4 text-amber-400" />
                <h3 className="font-display font-black text-sm text-white">
                  Richieste Inviate in Attesa ({sentFriendRequests.length})
                </h3>
              </div>

              <div className="space-y-2">
                {sentFriendRequests.map(req => (
                  <div key={req.id} className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">
                        @
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-white truncate">{req.target_identifier}</div>
                        <span className="text-[10px] text-amber-300 font-mono flex items-center gap-1">
                          <Hourglass className="w-2.5 h-2.5" /> In attesa di accettazione
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => cancelFriendRequest(req.id, req.target_identifier)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 text-xs font-bold border border-white/10 transition-all cursor-pointer"
                    >
                      Annulla
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Richieste Ricevute in attesa di risposta */}
          {friendRequests.length > 0 && (
            <div className="glass-panel p-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/20 space-y-3 shadow-lg">
              <h3 className="font-display font-black text-sm text-cyan-300 flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Richieste Ricevute ({friendRequests.length})</span>
              </h3>

              <div className="space-y-2">
                {friendRequests.map(req => (
                  <div key={req.id} className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white truncate">{req.sender_name || req.sender_email}</div>
                      <div className="text-[10px] text-slate-400">Vuole aggiungerti agli amici</div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => acceptFriendRequest(req)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer"
                      >
                        Accetta
                      </button>
                      <button
                        onClick={() => rejectFriendRequest(req.id)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-rose-500/20 text-slate-300 text-xs font-bold cursor-pointer"
                      >
                        Rifiuta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Lista Amici */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-slate-900/60 space-y-3">
            <h3 className="font-display font-black text-sm text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>I Tuoi Amici ({user.friends?.length || 0})</span>
            </h3>

            {(!user.friends || user.friends.length === 0) ? (
              <div className="p-6 rounded-2xl bg-black/30 border border-white/5 text-center space-y-2">
                <Users className="w-10 h-10 text-slate-600 mx-auto" />
                <div className="font-bold text-slate-300 text-sm">Nessun amico aggiunto</div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Invia una richiesta di amicizia inserendo l'email Google o il Codice Giocatore del tuo amico per iniziare a sfidarlo!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {user.friends.map(friendName => (
                  <div
                    key={friendName}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                        {friendName[0]?.toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <span className="font-bold text-xs text-white truncate block">{friendName}</span>
                        <span className="text-[10px] text-slate-400">Amico connesso</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleQuickChallengeFriend(friendName)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Swords className="w-3 h-3" />
                        <span>Sfida</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFriendToRemove(friendName)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 border border-white/5 cursor-pointer transition-colors"
                        title="Rimuovi amico"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 6. Invita Amici & Condividi Link */}
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-white text-sm flex items-center justify-center sm:justify-start gap-1.5">
                <span>Invita Amici</span>
                <span className="text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">+5 Vite ❤️</span>
              </h4>
              <p className="text-xs text-slate-400">Condividi l'invito completo con il link al Google Play Store</p>
            </div>

            <button
              onClick={handleShareInvite}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black font-display text-xs flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-95 shrink-0 cursor-pointer"
            >
              {copiedInvite ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedInvite ? 'CONDIVISO / COPIATO!' : 'CONDIVIDI INVITO'}</span>
            </button>
          </div>

        </div>
      )}

      {/* Confirmation Modal for Removing a Friend */}
      {friendToRemove && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-white/20 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-black text-white font-display">
                Rimuovere dagli amici?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sei sicuro di voler rimuovere <strong className="text-white">"{friendToRemove}"</strong> dalla tua lista amici? L'amicizia verrà eliminata definitivamente.
              </p>
            </div>
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setFriendToRemove(null)}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs cursor-pointer transition-colors"
              >
                Annulla
              </button>
              <button
                type="button"
                onClick={async () => {
                  const target = friendToRemove;
                  setFriendToRemove(null);
                  await removeFriend(target);
                  setFriendNotice(`🗑️ "${target}" è stato rimosso dai tuoi amici.`);
                  setTimeout(() => setFriendNotice(null), 3500);
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-lg shadow-rose-600/30 cursor-pointer transition-all active:scale-95"
              >
                Conferma Rimozione
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
