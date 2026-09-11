import React, { useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, setTimeRemaining, onTimeUp, isActive }) => {
  useEffect(() => {
    if (!isActive) return;

    if (timeRemaining <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isActive, timeRemaining, onTimeUp, setTimeRemaining]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining < 300; // Less than 5 mins
  const isCritical = timeRemaining < 60; // Less than 1 min

  return (
    <div className={`timer ${isLowTime ? 'warning' : 'normal'}`}>
      {isLowTime ? (
        <AlertTriangle className={`w-4 h-4 ${isCritical ? 'animate-pulse' : ''}`} />
      ) : (
        <Clock className="w-4 h-4 text-accent" />
      )}
      <span className={`font-mono text-lg ${isCritical ? 'animate-pulse' : ''}`}>
        {formatTime(timeRemaining)}
      </span>
    </div>
  );
};

export default Timer;
