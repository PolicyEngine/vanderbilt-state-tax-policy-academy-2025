'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: string; // Format: "HH:MM" in 24-hour format
  eventDate?: string; // Format: "YYYY-MM-DD", defaults to today
}

export default function CountdownTimer({ targetTime, eventDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Parse target time
      const [hours, targetMinutes] = targetTime.split(':').map(Number);

      // Create target date
      const target = eventDate ? new Date(eventDate) : new Date();
      target.setHours(hours, targetMinutes, 0, 0);

      // If target time has passed today, set to tomorrow
      if (!eventDate && target < now) {
        target.setDate(target.getDate() + 1);
      }

      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { minutes: 0, seconds: 0 };
      }

      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { minutes, seconds };
    };

    // Update immediately
    const newTimeLeft = calculateTimeLeft();
    setTimeLeft(newTimeLeft);

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, eventDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (isExpired) {
    return (
      <div className="text-6xl font-bold text-white animate-pulse">
        Time to resume!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-8 leading-none">
      <div className="text-9xl font-bold text-white/70 tabular-nums leading-none">
        {formatNumber(timeLeft.minutes)}
      </div>
      <div className="text-9xl font-bold text-white/50 leading-none">:</div>
      <div className="text-9xl font-bold text-white/70 tabular-nums leading-none">
        {formatNumber(timeLeft.seconds)}
      </div>
    </div>
  );
}
