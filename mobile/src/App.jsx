import React, { useState, useEffect } from 'react';
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
import RanksProgressionModal from './components/RanksProgressionModal';
import InAppNotificationToast from './components/InAppNotificationToast';

import ConfettiBurst from './components/ConfettiBurst';
import StreakPopup from './components/StreakPopup';

function LaunchSplashScreen({ onFinished }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFade(true), 1300);
    const timer2 = setTimeout(() => onFinished(), 1750);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#090A10] flex flex-col items-center justify-between py-16 px-6 transition-opacity duration-500 select-none pointer-events-none ${
      fade ? 'opacity-0' : 'opacity-100'
    }`}>
      <div />
      
      {/* Center Logo with glowing aura */}
      <div className="flex flex-col items-center gap-4 animate-scaleUp">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.4)] border border-emerald-400/30 p-1 bg-gradient-to-b from-emerald-500/20 to-transparent">
          <img
            src="/icon.png"
            alt="Ten Seconds"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-black tracking-wider text-white font-display">TEN SECONDS</span>
          <span className="text-[11px] text-emerald-400 font-bold tracking-widest uppercase font-mono">Music Quiz</span>
        </div>
      </div>

      {/* Minimal subtle developer brand */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-medium font-sans">
          Gojo's Developers
        </span>
      </div>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[TenSeconds ErrorBoundary caught error]:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center space-y-4 max-w-md mx-auto my-12 glass-panel rounded-3xl border border-rose-500/30 bg-slate-900/90 text-white">
          <div className="text-3xl">⚠️</div>
          <h3 className="font-display font-black text-lg text-rose-400">Si è verificato un errore imprevisto</h3>
          <p className="text-xs text-slate-300">
            {this.state.error?.message || 'Si è verificato un problema nel caricamento di questa sezione.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              if (this.props.onReset) this.props.onReset();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:brightness-110 cursor-pointer"
          >
            Torna alla Collezione
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainContent() {
  const { 
    activeScreen, 
    setActiveScreen,
    isLivesModalOpen, 
    setIsLivesModalOpen, 
    isRanksLadderOpen, 
    setIsRanksLadderOpen, 
    inAppNotification, 
    dismissInAppNotification, 
    isConfettiActive, 
    comboEvent, 
    user 
  } = useGame();

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'ONBOARDING':
        return <OnboardingScreen />;
      case 'CALIBRATION':
        return <CalibrationScreen />;
      case 'GAME':
        return <GameScreen />;
      case 'CATALOG':
        return <CatalogScreen />;
      case 'CHALLENGE':
        return <ChallengeScreen />;
      case 'LEADERBOARD':
        return <LeaderboardScreen />;
      case 'OFFLINE':
        return <OfflineScreen />;
      default:
        return user?.hasCompletedCalibration ? <CatalogScreen /> : <OnboardingScreen />;
    }
  };

  return (
    <main className={activeScreen === 'GAME' ? 'flex-1 flex flex-col justify-between overflow-hidden pb-1' : 'pb-12'}>
      <ErrorBoundary key={activeScreen} onReset={() => setActiveScreen('CATALOG')}>
        {renderActiveScreen()}
      </ErrorBoundary>

      <StreakPopup comboEvent={comboEvent} />
      <ConfettiBurst active={isConfettiActive} />
      <LivesModal isOpen={isLivesModalOpen} onClose={() => setIsLivesModalOpen(false)} />
      <RanksProgressionModal isOpen={isRanksLadderOpen} onClose={() => setIsRanksLadderOpen(false)} />
      <InAppNotificationToast
        notification={inAppNotification}
        onDismiss={dismissInAppNotification}
        onAction={(notif) => {
          if (notif.onAction) notif.onAction();
        }}
      />
    </main>
  );
}

function AppInner() {
  const { activeScreen, handleHardwareBackAction, exitToast } = useGame();
  const [showSplash, setShowSplash] = useState(true);

  // Setup Capacitor & Web hardware/gesture back button handling
  useEffect(() => {
    let capListener = null;
    let isMounted = true;

    import('@capacitor/app').then(({ App: CapApp }) => {
      if (!isMounted) return;
      CapApp.addListener('backButton', () => {
        handleHardwareBackAction();
      }).then(l => {
        capListener = l;
      }).catch(() => {});
    }).catch(() => {});

    // Web popstate / Keyboard Escape handler fallback
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleHardwareBackAction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      isMounted = false;
      if (capListener && typeof capListener.remove === 'function') {
        capListener.remove();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleHardwareBackAction]);

  return (
    <div className={`bg-[#09090d] text-slate-100 flex flex-col antialiased relative ${
      activeScreen === 'GAME' ? 'h-dvh max-h-dvh overflow-hidden' : 'min-h-screen'
    }`}>
      {showSplash && <LaunchSplashScreen onFinished={() => setShowSplash(false)} />}
      {activeScreen !== 'ONBOARDING' && <Navbar />}
      <MainContent />

      {/* Toast Avviso Doppio Tocco per Uscire */}
      {exitToast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[9999] bg-slate-900/95 text-white border border-slate-700/80 px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2.5 animate-fadeIn backdrop-blur-md pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse" />
          <span>Premi di nuovo indietro per uscire dal gioco</span>
        </div>
      )}
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
