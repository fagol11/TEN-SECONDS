import React, { useEffect, useState } from 'react';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#f43f5e'];

export default function ConfettiBurst({ active }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      // Generate 16 lightweight GPU particles
      const newParticles = Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 360 + (Math.random() * 20 - 10);
        const velocity = 60 + Math.random() * 80;
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * velocity;
        const ty = Math.sin(rad) * velocity - 20; // slight upwards bias
        const rot = Math.random() * 360;
        const color = COLORS[i % COLORS.length];
        const size = 6 + Math.random() * 4;

        return { id: i, tx, ty, rot, color, size };
      });

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 650);

      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!particles.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm animate-gpuConfetti"
          style={{
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            backgroundColor: p.color,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--rot': `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  );
}
