import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Navbar from './components/Navbar';
import OnboardingScreen from './components/OnboardingScreen';
import CalibrationScreen from './components/CalibrationScreen';
import GameScreen from './components/GameScreen';
import CatalogScreen from './components/CatalogScreen';
import ChallengeScreen from './components/ChallengeScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import OfflineScreen from './components/OfflineScreen';
import LivesModal from './components/LivesModal';

import ConfettiBurst from './components/ConfettiBurst';
import StreakPopup from './components/StreakPopup';

import PlayGamesSidekick from './components/PlayGamesSidekick';

function MainContent() {
  const { activeScreen, isLivesModalOpen, setIsLivesModalOpen, isConfettiActive, comboEvent } = useGame();

  return (
    <main className={activeScreen === 'GAME' ? 'flex-1 flex flex-col justify-between overflow-hidden pb-1' : 'pb-12'}>
      {activeScreen === 'ONBOARDING' && <OnboardingScreen />}
      {activeScreen === 'CALIBRATION' && <CalibrationScreen />}
      {activeScreen === 'GAME' && <GameScreen />}
      {activeScreen === 'CATALOG' && <CatalogScreen />}
      {activeScreen === 'CHALLENGE' && <ChallengeScreen />}
      {activeScreen === 'LEADERBOARD' && <LeaderboardScreen />}
      {activeScreen === 'OFFLINE' && <OfflineScreen />}

      <StreakPopup comboEvent={comboEvent} />
      <ConfettiBurst active={isConfettiActive} />
      <LivesModal isOpen={isLivesModalOpen} onClose={() => setIsLivesModalOpen(false)} />
      {activeScreen !== 'ONBOARDING' && <PlayGamesSidekick />}
    </main>
  );
}

function AppInner() {
  const { activeScreen } = useGame();
  return (
    <div className={`bg-[#09090d] text-slate-100 flex flex-col antialiased relative ${
      activeScreen === 'GAME' ? 'h-dvh max-h-dvh overflow-hidden' : 'min-h-screen'
    }`}>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppInner />
    </GameProvider>
  );
}
