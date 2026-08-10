import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { getDownloadedPlaylists, syncOfflineScores } from '../services/offlineStorage';
import { Download, Wifi, WifiOff, RefreshCw, HardDrive, Play, CheckCircle2 } from 'lucide-react';

export default function OfflineScreen() {
  const { startGame, isOfflineMode } = useGame();
  const [downloadedPackages, setDownloadedPackages] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedCount, setSyncedCount] = useState(null);

  useEffect(() => {
    loadDownloadedPlaylists();
  }, []);

  const loadDownloadedPlaylists = async () => {
    const pkgs = await getDownloadedPlaylists();
    setDownloadedPackages(pkgs);
  };

  const handleSyncScores = async () => {
    setIsSyncing(true);
    const count = await syncOfflineScores();
    setSyncedCount(count);
    setIsSyncing(false);
  };

  const totalSizeBytes = downloadedPackages.reduce((acc, p) => acc + (p.sizeBytes || 1200000), 0);
  const totalSizeMB = (totalSizeBytes / (1024 * 1024)).toFixed(1);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <HardDrive className="w-3.5 h-3.5" /> Modalità Offline & Pacchetti Scaricati
        </div>
        <h2 className="text-3xl font-black font-display text-white">
          ASCOLTO <span className="text-cyan-400">OFFLINE</span>
        </h2>
        <p className="text-xs text-slate-400">
          Scarica prima di partire: gli estratti audio compressi pesano solo ~1.2MB per playlist!
        </p>
      </div>

      {/* Network Status Card */}
      <div className={`glass-panel p-5 rounded-2xl border flex items-center justify-between ${
        isOfflineMode ? 'border-amber-500/40 bg-amber-500/5' : 'border-emerald-500/40 bg-emerald-500/5'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
            isOfflineMode ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
          }`}>
            {isOfflineMode ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
          </div>
          <div>
            <div className="font-bold text-white text-sm">
              Stato Connessione: {isOfflineMode ? 'Disconnesso (Offline)' : 'Online'}
            </div>
            <div className="text-xs text-slate-400">
              {isOfflineMode ? 'Stai giocando con i pacchetti salvati sul dispositivo.' : 'Connessione attiva. Puoi sincronizzare i tuoi punteggi offline.'}
            </div>
          </div>
        </div>

        {!isOfflineMode && (
          <button
            onClick={handleSyncScores}
            disabled={isSyncing}
            className="px-3.5 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-1.5 shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            Sincronizza Punteggi
          </button>
        )}
      </div>

      {syncedCount !== null && (
        <div className="bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Sincronizzati con successo {syncedCount} punteggi ottenuti offline!
        </div>
      )}

      {/* Storage Metrics */}
      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-slate-400" />
          <span className="text-slate-300">Spazio Occupato in Cache:</span>
        </div>
        <span className="font-mono font-bold text-emerald-400 text-sm">{totalSizeMB} MB</span>
      </div>

      {/* Downloaded Packages List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
          Playlist Salvate sul Dispositivo ({downloadedPackages.length})
        </h3>

        {downloadedPackages.length === 0 ? (
          <div className="glass-card p-8 rounded-2xl text-center space-y-3 border-dashed border-white/10">
            <Download className="w-8 h-8 text-slate-500 mx-auto" />
            <div className="text-sm font-bold text-slate-300">Nessuna playlist scaricata per l'offline</div>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Vai nella schermata Cataloghi e premi l'icona del download su qualunque playlist prima di disconnetterti!
            </p>
          </div>
        ) : (
          downloadedPackages.map(pkg => (
            <div
              key={pkg.id}
              className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:border-cyan-500/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <img src={pkg.cover} alt={pkg.title} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <div className="font-bold text-white text-sm">{pkg.title}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5 font-mono">
                    <span>{pkg.tracks?.length || 20} Brani</span>
                    <span>•</span>
                    <span className="text-cyan-400">~1.2 MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => startGame(pkg)}
                className="py-2 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-display flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> GIOCA OFFLINE
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
