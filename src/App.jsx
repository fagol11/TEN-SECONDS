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

function MainContent() {
  const { activeScreen, isLivesModalOpen, setIsLivesModalOpen, isConfettiActive, comboEvent } = useGame();

  return (
    <main className={activeScreen === 'GAME' ? 'pb-2 sm:pb-4' : 'pb-12'}>
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
    </main>
  );
}

export default function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-[#09090d] text-slate-100 flex flex-col antialiased relative">
        <Navbar />
        <MainContent />
      </div>
    </GameProvider>
  );
}
