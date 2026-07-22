import React, { useState } from 'react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';
import { Trophy, Users, Globe, Star, Music2, Award, Heart, Share2, Copy, Check, Swords, Crown, Gamepad2, CheckCircle2, UserPlus } from 'lucide-react';

const MOCK_LEADERBOARD = [
  { rank: 1, name: 'Elena_Rock', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', score: 2840000, avgTime: '1.2s', isFriend: true, title: 'Legend of Sound', classe: 1, tournamentsWon: 5, challengesWon: 14 },
  { rank: 2, name: 'Matteo_Audio', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', score: 2150000, avgTime: '1.5s', isFriend: false, title: 'Shazam Umano', classe: 0, tournamentsWon: 2, challengesWon: 8 },
  { rank: 3, name: 'Giuseppe_Bass', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80', score: 1750000, avgTime: '1.8s', isFriend: true, title: 'Rockstar Prodigy', classe: 0, tournamentsWon: 3, challengesWon: 11 },
  { rank: 4, name: 'Sofia_Indie', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', score: 1150000, avgTime: '2.1s', isFriend: false, title: 'Vinyl Wizard', classe: 0, tournamentsWon: 1, challengesWon: 5 },
  { rank: 5, name: 'Marco_90', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', score: 820000, avgTime: '2.4s', isFriend: true, title: 'Producer da Salotto', classe: 0, tournamentsWon: 0, challengesWon: 4 },
];

export default function LeaderboardScreen() {
  const { user, inviteFriend } = useGame();
  const [tab, setTab] = useState('global'); // 'global' | 'friends' | 'trophies'
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [invitedNotice, setInvitedNotice] = useState(false);

  const userRankInfo = getUserRankAndClasse(user.totalScore);
  const inviteLink = `${window.location.origin}?ref=${encodeURIComponent(user.name)}`;

  const handleCopyInvite = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopiedInvite(true);
    setTimeout(() => setCopiedInvite(false), 2000);
  };

  const handleSimulateInvite = () => {
    const randomFriend = `Amico_${Math.floor(1000 + Math.random() * 9000)}`;
    inviteFriend(randomFriend);
    setInvitedNotice(true);
    setTimeout(() => setInvitedNotice(false), 3000);
  };

  const displayList = tab === 'friends' 
    ? MOCK_LEADERBOARD.filter(item => item.isFriend)
    : MOCK_LEADERBOARD;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-black font-display text-white flex items-center justify-center gap-2">
          <Trophy className="w-7 h-7 text-amber-400" /> CLASSIFICHE & TROFEI
        </h2>
        <p className="text-xs text-slate-400">I migliori ascoltatori, le sfide con gli amici e i trofei conquistati</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
        <button
          onClick={() => setTab('global')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
            tab === 'global' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" /> Globale
        </button>
        <button
          onClick={() => setTab('friends')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
            tab === 'friends' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" /> Amici ({user.friends?.length || 0})
        </button>
        <button
          onClick={() => setTab('trophies')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
            tab === 'trophies' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" /> Trofei Vinti
        </button>
      </div>

      {/* User Current Rank & Trophy Tag Banner */}
      <div
        onClick={() => openPlayerProfile(user)}
        className="glass-panel p-4 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 cursor-pointer hover:border-emerald-400 transition-all group"
        title="Clicca per aprire la tua Scheda Profilo e Trofei"
      >
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative shrink-0">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40 group-hover:scale-105 transition-transform" />
            {userRankInfo.classe > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 p-0.5 rounded-full text-[10px] font-bold" title={`Classe ${userRankInfo.classe}`}>
                <Star className="w-3 h-3 fill-current" />
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{user.name}</span>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                Liv. {userRankInfo.level} • {userRankInfo.name}
              </span>
              {/* Tournaments Won Tag */}
              <span className="h-5 px-2 py-0.5 rounded text-[10px] text-amber-300 bg-amber-400/10 border border-amber-400/30 font-bold flex items-center justify-center gap-1" title="Tornei Vinti">
                <Crown className="w-3 h-3 text-amber-400 fill-current" />
                {user.tournamentsWon || 0}
              </span>
              {/* Challenges Won Tag */}
              <span className="h-5 px-2 py-0.5 rounded text-[10px] text-purple-300 bg-purple-500/10 border border-purple-500/30 font-bold flex items-center justify-center gap-1" title="Sfide 1v1 Vinte">
                <Swords className="w-3 h-3 text-purple-400" />
                {user.challengesWon || 0}
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <span>Posizione: <span className="text-white font-bold font-mono">#14</span></span>
              <span>•</span>
              <span className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5 fill-current" />
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white font-mono font-black text-[11px] flex items-center justify-center shadow-sm shrink-0">
                  {user.noteStreak || 1}
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">Note di Fila</span>
              </span>
            </div>
          </div>
        </div>

        <div className="text-right font-mono shrink-0">
          <div className="text-xl font-black text-emerald-400">{user.totalScore.toLocaleString('it-IT')}</div>
          <div className="text-[10px] uppercase text-slate-400 font-bold">Punti Totali</div>
        </div>
      </div>

      {/* --- TAB 1 & 2: LEADERBOARD LIST / FRIENDS INVITE --- */}
      {tab !== 'trophies' && (
        <div className="space-y-4">
          
          {/* Invite Friends Reward Box (Visible in Friends tab) */}
          {tab === 'friends' && (
            <div className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Invita Nuovi Amici</h3>
                    <p className="text-xs text-purple-300">Ottieni <span className="font-black text-rose-400 font-mono">+5 Vite Extra ❤️</span> per ogni amico che si iscrive!</p>
                  </div>
                </div>

                <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-400" /> +5 Vite
                </span>
              </div>

              {invitedNotice && (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold p-2.5 rounded-xl flex items-center justify-center gap-2 animate-bounce">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 🎉 Amico registrato! +5 Vite Extra aggiunte al tuo account!
                </div>
              )}

              <div className="flex gap-2">
                <div className="flex-1 bg-black/40 border border-white/10 px-3 py-2 rounded-xl text-xs text-slate-300 font-mono truncate flex items-center">
                  {inviteLink}
                </div>
                <button
                  onClick={handleCopyInvite}
                  className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1 transition-all shrink-0"
                >
                  {copiedInvite ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedInvite ? 'Copiato' : 'Copia Link'}
                </button>
                <button
                  onClick={handleSimulateInvite}
                  className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all shrink-0"
                  title="Simula iscrizione amico per testare il bonus vite"
                >
                  <UserPlus className="w-3.5 h-3.5" /> Simula Invito
                </button>
              </div>
            </div>
          )}

          {/* Table List */}
          <div className="space-y-2">
            {displayList.map((item) => (
              <div
                key={item.name}
                onClick={() => openPlayerProfile(item)}
                className={`glass-card p-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer hover:border-emerald-500/50 group ${
                  item.rank === 1 ? 'border-amber-500/50 bg-amber-500/10' :
                  item.rank === 2 ? 'border-slate-300/40 bg-slate-300/5' :
                  item.rank === 3 ? 'border-amber-700/40 bg-amber-700/5' :
                  'border-white/5'
                }`}
                title={`Clicca per visualizzare il Profilo di ${item.name}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl font-mono font-black text-sm flex items-center justify-center ${
                    item.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30' :
                    item.rank === 2 ? 'bg-slate-300 text-slate-950' :
                    item.rank === 3 ? 'bg-amber-700 text-white' :
                    'bg-white/5 text-slate-400'
                  }`}>
                    #{item.rank}
                  </div>

                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-xl object-cover border border-white/10" />

                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-1.5 flex-wrap">
                      {item.name}
                      {item.isFriend && (
                        <span className="h-5 px-2 py-0.5 rounded text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-bold flex items-center justify-center">
                          Amico
                        </span>
                      )}
                      {item.tournamentsWon > 0 && (
                        <span className="h-5 px-2 py-0.5 rounded text-[10px] text-amber-300 bg-amber-400/10 border border-amber-400/30 font-bold flex items-center justify-center gap-1" title="Tornei Vinti">
                          <Crown className="w-3 h-3 text-amber-400 fill-current" /> {item.tournamentsWon}
                        </span>
                      )}
                      {item.challengesWon > 0 && (
                        <span className="h-5 px-2 py-0.5 rounded text-[10px] text-purple-300 bg-purple-500/10 border border-purple-500/30 font-bold flex items-center justify-center gap-1" title="Sfide 1v1 Vinte">
                          <Swords className="w-3 h-3 text-purple-400" /> {item.challengesWon}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span>{item.title}</span>
                      <span>•</span>
                      <span className="font-mono text-slate-300">Med. {item.avgTime}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="font-black text-base text-white">{item.score.toLocaleString('it-IT')}</div>
                  <div className="text-[10px] text-slate-400 font-bold">PT</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 3: SEZIONE TROFEI (3 Categorie Trofei Vinti) --- */}
      {tab === 'trophies' && (
        <div className="space-y-4 animate-fadeIn">
          
          {/* Trofei 1: Partite Giocate e Partite Perfette */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Gamepad2 className="w-5 h-5" />
              <span>1. Partite Giocate & Partite Perfette</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-[11px] uppercase font-bold text-slate-400">Partite Totali Giocate</div>
                <div className="text-3xl font-black font-mono text-white">
                  {user.totalGamesPlayed || 0}
                </div>
                <div className="text-[10px] text-slate-400">Partite completate nel catalogo</div>
              </div>

              <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 space-y-1">
                <div className="text-[11px] uppercase font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Partite Perfette (10/10)
                </div>
                <div className="text-3xl font-black font-mono text-emerald-300">
                  {user.perfectGamesCount || 0}
                </div>
                <div className="text-[10px] text-emerald-400/80">Partite concluse senza alcun errore</div>
              </div>
            </div>
          </div>

          {/* Trofei 2: Sfide 1v1 con Amici Vinte */}
          <div className="glass-card p-5 rounded-2xl border border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Swords className="w-5 h-5" />
              <span>2. Sfide 1v1 con Amici Vinte</span>
            </div>

            <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase font-bold text-purple-300">Sfide Singole Vinte</div>
                <div className="text-3xl font-black font-mono text-white mt-1">
                  {user.challengesWon || 0} <span className="text-xs font-normal text-slate-400">Vittorie 1v1</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                <Swords className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Trofei 3: Tornei a Più Giocatori Vinti */}
          <div className="glass-card p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Crown className="w-5 h-5 text-amber-400" />
              <span>3. Tornei con Amici Vinti</span>
            </div>

            <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase font-bold text-amber-300 flex items-center gap-1">
                  <Trophy className="w-4 h-4 fill-current text-amber-400" /> Tag Campione Tornei
                </div>
                <div className="text-3xl font-black font-mono text-amber-300 mt-1">
                  {user.tournamentsWon || 0} <span className="text-xs font-normal text-slate-300">Tornei Vinti</span>
                </div>
              </div>
              <div className="h-5 px-2.5 py-0.5 rounded text-[10px] bg-amber-400 text-slate-950 font-black flex items-center gap-1 shadow-lg shadow-amber-400/20">
                <Crown className="w-3 h-3 fill-current" /> {user.tournamentsWon || 0}
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
