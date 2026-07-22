import React, { useState } from 'react';
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
import { Smartphone, Tablet, Monitor, QrCode, X, Copy, Check } from 'lucide-react';

function MainContent() {
  const { activeScreen, isLivesModalOpen, setIsLivesModalOpen } = useGame();

  return (
    <main className="pb-12">
      {activeScreen === 'ONBOARDING' && <OnboardingScreen />}
      {activeScreen === 'CALIBRATION' && <CalibrationScreen />}
      {activeScreen === 'GAME' && <GameScreen />}
      {activeScreen === 'CATALOG' && <CatalogScreen />}
      {activeScreen === 'CHALLENGE' && <ChallengeScreen />}
      {activeScreen === 'LEADERBOARD' && <LeaderboardScreen />}
      {activeScreen === 'OFFLINE' && <OfflineScreen />}

      <LivesModal isOpen={isLivesModalOpen} onClose={() => setIsLivesModalOpen(false)} />
    </main>
  );
}

export default function App() {
  const [deviceMode, setDeviceMode] = useState('responsive'); // 'responsive' | 'mobile' | 'tablet'
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const localIp = '192.168.1.139';
  const mobileUrl = `http://${localIp}:5173/`;
  const qrCodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(mobileUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mobileUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <GameProvider>
      <div className="min-h-screen bg-[#09090d] text-slate-100 flex flex-col antialiased relative">
        
        {/* Top Viewport Switcher & Mobile Link Bar */}
        <div className="bg-slate-950/90 backdrop-blur border-b border-white/5 py-2 px-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 z-50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200 flex items-center gap-1">
              📱 Anteprima Dispositivo:
            </span>
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-semibold transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Simula Mobile (390px)
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-semibold transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" /> Tablet (768px)
              </button>
              <button
                onClick={() => setDeviceMode('responsive')}
                className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-semibold transition-all ${
                  deviceMode === 'responsive'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" /> Fullscreen
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 font-bold flex items-center gap-1.5 transition-all"
            >
              <QrCode className="w-3.5 h-3.5" /> Apri su Smartphone Reale (QR Code)
            </button>
          </div>
        </div>

        {/* Device Frame Wrapper */}
        <div className={`flex-1 flex flex-col mx-auto w-full transition-all duration-300 ${
          deviceMode === 'mobile'
            ? 'max-w-[410px] my-6 rounded-[48px] border-[10px] border-slate-800 ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10 overflow-hidden bg-[#09090d] relative'
            : deviceMode === 'tablet'
            ? 'max-w-[768px] my-6 rounded-[36px] border-[10px] border-slate-800 ring-1 ring-white/10 shadow-2xl overflow-hidden bg-[#09090d] relative'
            : 'max-w-full'
        }`}>
          
          {/* Dynamic Island / Speaker Notch for Mobile Mode Preview */}
          {deviceMode === 'mobile' && (
            <div className="w-full bg-[#09090d] pt-3 pb-1 flex justify-center items-center shrink-0 border-b border-white/5">
              <div className="w-28 h-4 rounded-full bg-slate-950 border border-white/10 flex items-center justify-between px-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-10 h-1.5 rounded-full bg-slate-800" />
              </div>
            </div>
          )}

          <Navbar />
          <MainContent />

          {/* Bottom Home Bar for Mobile Mode Preview */}
          {deviceMode === 'mobile' && (
            <div className="w-full bg-[#09090d] py-2 flex justify-center items-center shrink-0 border-t border-white/5">
              <div className="w-32 h-1 bg-slate-700 rounded-full" />
            </div>
          )}
        </div>

        {/* Floating Quick Device Toggle Button (Bottom Right) */}
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setDeviceMode(prev => prev === 'mobile' ? 'responsive' : 'mobile')}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black font-display text-xs flex items-center gap-2 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all border border-emerald-400/30"
          >
            <Smartphone className="w-4 h-4" />
            <span>{deviceMode === 'mobile' ? 'Disattiva Anteprima Mobile' : 'Vista Mobile'}</span>
          </button>
        </div>

        {/* Real Mobile Access QR Code Modal */}
        {isQrModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-5 text-center relative shadow-2xl">
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black font-display text-white">APRI SU SMARTPHONE</h3>
                <p className="text-xs text-slate-400">
                  Scansiona il codice QR con la fotocamera del tuo telefono o apri il link sulla stessa rete Wi-Fi.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-2xl inline-block shadow-inner">
                <img
                  src={qrCodeApi}
                  alt="QR Code per mobile"
                  className="w-48 h-48 mx-auto object-contain"
                />
              </div>

              {/* Network IP Link Box */}
              <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-left flex items-center justify-between gap-2">
                <div className="truncate">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Indirizzo Rete Locale Wi-Fi</div>
                  <div className="font-mono text-xs font-bold text-cyan-300 truncate">{mobileUrl}</div>
                </div>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1 shrink-0"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedLink ? 'Copiato' : 'Copia'}
                </button>
              </div>

              <button
                onClick={() => setIsQrModalOpen(false)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                CHIUDI
              </button>
            </div>
          </div>
        )}

      </div>
    </GameProvider>
  );
}
