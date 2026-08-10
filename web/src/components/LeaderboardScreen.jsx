import React, { useState, useEffect } from 'react';
import { useGame, getUserRankAndClasse, LISTENER_RANKS } from '../context/GameContext';
import { getLeaderboardFromSupabase } from '../services/supabaseClient';
import { Trophy, Globe, Star, Music2, Award, Crown, Swords, User, Skull } from 'lucide-react';

export default function LeaderboardScreen() {
  const { user, openPlayerProfile } = useGame();
  const [tab, setTab] = useState('global'); // 'global' | 'trophies'
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    getLeaderboardFromSupabase().then(realData => {
      let list = [];
      if (realData && realData.length > 0) {
        list = realData.map((item) => ({
          name: item.user_name || item.user_email?.split('@')[0] || 'Giocatore',
          email: item.user_email || null,
          avatar: item.avatar_url || null,
          score: item.total_score || 0,
          avgTime: '1.8s',
          isFriend: false,
          isCurrentUser: item.user_name === user.name || (user.email && item.user_email === user.email),
          title: getUserRankAndClasse(item.total_score || 0).name,
          classe: getUserRankAndClasse(item.total_score || 0).classe,
          tournamentsWon: item.tournaments_won || 0,
          challengesWon: item.challenges_won || 0,
          deathParadeRecord: item.death_parade_record || 0,
        }));
      }

      // If user is not yet in the supabase list, ensure they are displayed
      if (user) {
        const found = list.some(p => p.isCurrentUser);
        if (!found) {
          list.push({
            name: user.name || 'Ospite',
            email: user.email || null,
            avatar: user.avatar || null,
            score: user.totalScore || 0,
            avgTime: '1.8s',
            isFriend: false,
            isCurrentUser: true,
            title: getUserRankAndClasse(user.totalScore || 0).name,
            classe: getUserRankAndClasse(user.totalScore || 0).classe,
            tournamentsWon: user.tournamentsWon || 0,
            challengesWon: user.challengesWon || 0,
            deathParadeRecord: user.deathParadeRecord || 0,
          });
        }
      }

      // Sort by total score descending & assign rank
      list.sort((a, b) => b.score - a.score);
      const rankedList = list.map((item, idx) => ({ ...item, rank: idx + 1 }));
      setLeaderboardData(rankedList);
    }).catch(() => {
      if (user) {
        setLeaderboardData([{
          rank: 1,
          name: user.name || 'Ospite',
          email: user.email || null,
          avatar: user.avatar || null,
          score: user.totalScore || 0,
          avgTime: '1.8s',
          isFriend: false,
          isCurrentUser: true,
          title: getUserRankAndClasse(user.totalScore || 0).name,
          classe: getUserRankAndClasse(user.totalScore || 0).classe,
          tournamentsWon: user.tournamentsWon || 0,
          challengesWon: user.challengesWon || 0,
          deathParadeRecord: user.deathParadeRecord || 0,
        }]);
      }
    });
  }, [user.totalScore, user.name, user.avatar, user.friends]);

  const userRankInfo = getUserRankAndClasse(user.totalScore);
  const userRankPosition = leaderboardData.filter(p => p.score > user.totalScore).length + 1;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-black font-display text-white flex items-center justify-center gap-2">
          <Trophy className="w-7 h-7 text-amber-400" /> CLASSIFICA GLOBALE
        </h2>
        <p className="text-xs text-slate-400">Punteggi in tempo reale dei migliori giocatori di Ten Seconds</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
        <button
          onClick={() => setTab('global')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            tab === 'global' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" /> Classifica Generale ({leaderboardData.length})
        </button>
        <button
          onClick={() => setTab('trophies')}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
            tab === 'trophies' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" /> Livelli & Trofei ({LISTENER_RANKS.length})
        </button>
      </div>

      {/* User Current Rank Banner */}
      <div
        onClick={() => openPlayerProfile(user)}
        className="glass-panel p-4 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 cursor-pointer hover:border-emerald-400 transition-all group"
        title="Clicca per aprire la tua Scheda Profilo e Trofei"
      >
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative shrink-0">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40 group-hover:scale-105 transition-transform" />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <User className="w-6 h-6" />
              </div>
            )}
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
              <span className="h-5 px-2 py-0.5 rounded text-[10px] text-amber-300 bg-amber-400/10 border border-amber-400/30 font-bold flex items-center justify-center gap-1" title="Tornei Vinti">
                <Crown className="w-3 h-3 text-amber-400 fill-current" />
                {user.tournamentsWon || 0}
              </span>
              <span className="h-5 px-2 py-0.5 rounded text-[10px] text-purple-300 bg-purple-500/10 border border-purple-500/30 font-bold flex items-center justify-center gap-1" title="Sfide 1vs1 Vinte">
                <Swords className="w-3 h-3 text-purple-400" />
                {user.challengesWon || 0}
              </span>
              <span className="h-5 px-2 py-0.5 rounded text-[10px] text-rose-300 bg-rose-500/10 border border-rose-500/30 font-bold flex items-center justify-center gap-1" title="Record Serie Death Parade">
                <Skull className="w-3 h-3 text-rose-400" />
                {user.deathParadeRecord || user.personalBests?.deathParade || 0} 🎵 • {(user.deathParadePointsRecord || user.personalBests?.deathParadePoints || 0).toLocaleString('it-IT')} PT
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <span>Posizione: <span className="text-white font-bold font-mono">#{userRankPosition}</span></span>
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

      {/* --- TAB 1: CLASSIFICA GLOBALE --- */}
      {tab === 'global' && (
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
          {leaderboardData.map((player) => {
            const isMe = player.isCurrentUser;
            return (
              <div
                key={player.name + player.rank}
                onClick={() => openPlayerProfile(player)}
                className={`p-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                  isMe ? 'bg-emerald-500/10 border-l-4 border-emerald-500' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Rank badge */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 ${
                    player.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30' :
                    player.rank === 2 ? 'bg-slate-300 text-slate-950' :
                    player.rank === 3 ? 'bg-amber-700 text-white' :
                    'bg-white/5 text-slate-400 border border-white/10'
                  }`}>
                    {player.rank}
                  </div>

                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-white/10 flex items-center justify-center">
                    {player.avatar ? (
                      <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  {/* Player info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`font-bold text-sm truncate ${isMe ? 'text-emerald-400 font-black' : 'text-white'}`}>
                        {player.name} {isMe && '(Tu)'}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span>{player.title}</span>
                      {player.classe > 0 && <span className="text-amber-400 font-mono">Cl. {player.classe}</span>}
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right shrink-0">
                  <div className="font-mono font-black text-sm text-white">
                    {player.score.toLocaleString('it-IT')} <span className="text-[10px] text-slate-500">PT</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- TAB 2: LIVELLI & TROFEI --- */}
      {tab === 'trophies' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LISTENER_RANKS.map((rank) => {
              const isUnlocked = user.totalScore >= rank.minScore;
              return (
                <div
                  key={rank.level}
                  className={`glass-panel p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                    isUnlocked
                      ? 'border-emerald-500/40 bg-emerald-950/20'
                      : 'border-white/5 opacity-50 bg-black/30'
                  }`}
                >
                  <div className="text-2xl shrink-0 p-2 rounded-xl bg-white/5 border border-white/10">
                    {rank.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black font-display ${rank.color}`}>
                        Liv. {rank.level} • {rank.name}
                      </span>
                      {isUnlocked && <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-full">Sbloccato</span>}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      Richiede {rank.minScore.toLocaleString('it-IT')} PT
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
