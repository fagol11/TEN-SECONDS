import React from 'react';
import { useGame } from '../context/GameContext';
import GameScreen from './GameScreen';

export default function CalibrationScreen() {
  return (
    <div>
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-2 px-4 text-center text-xs font-semibold text-emerald-400">
        ⚡ Test di Calibrazione Iniziale — Brano 1 di 10
      </div>
      <GameScreen />
    </div>
  );
}
