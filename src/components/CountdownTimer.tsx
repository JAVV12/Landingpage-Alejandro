'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // 16 minutos = 16 * 60 segundos = 960 segundos
  const [timeLeft, setTimeLeft] = useState(16 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  if (timeLeft <= 0) {
    return (
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold animate-pulse">
        ¡Tiempo agotado!
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 px-4 shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-lg">
          Oferta especial termina en: {formatTime(minutes)}:{formatTime(seconds)}
        </span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-sm mt-1 opacity-90">
        ¡No pierdas esta oportunidad única!
      </p>
    </div>
  );
}
