/**
 * Google Play Games Services & Sidekick Integration for Ten Seconds
 */

export const PLAY_GAMES_ACHIEVEMENTS = [
  {
    id: 'first_win',
    title: 'Primo Passo 🎵',
    description: 'Completa la tua prima partita su Ten Seconds.',
    xp: 50,
    icon: '🎯',
    isUnlocked: (user) => (user.gamesPlayed || 0) >= 1
  },
  {
    id: 'streak_5',
    title: 'Musico Prodigio 🔥',
    description: 'Indovina 5 brani di fila senza commettere errori.',
    xp: 150,
    icon: '🔥',
    isUnlocked: (user) => (user.maxStreak || 0) >= 5
  },
  {
    id: 'streak_10',
    title: 'Orecchio Assoluto ⚡',
    description: 'Raggiungi una serie di 10 risposte esatte consecutive.',
    xp: 300,
    icon: '⚡',
    isUnlocked: (user) => (user.maxStreak || 0) >= 10
  },
  {
    id: 'score_10k',
    title: 'Campione del Quiz 👑',
    description: 'Accumula un punteggio totale superiore a 10.000 punti.',
    xp: 500,
    icon: '👑',
    isUnlocked: (user) => (user.totalScore || 0) >= 10000
  },
  {
    id: 'score_50k',
    title: 'Leggenda della Musica 🌟',
    description: 'Supera la soglia di 50.000 punti totali.',
    xp: 1000,
    icon: '🌟',
    isUnlocked: (user) => (user.totalScore || 0) >= 50000
  }
];

export async function checkPlayGamesAchievements(user) {
  const unlockedList = PLAY_GAMES_ACHIEVEMENTS.filter(ach => ach.isUnlocked(user));
  const totalXp = unlockedList.reduce((acc, curr) => acc + curr.xp, 0);
  return {
    unlockedCount: unlockedList.length,
    totalCount: PLAY_GAMES_ACHIEVEMENTS.length,
    totalXp,
    unlockedList
  };
}
