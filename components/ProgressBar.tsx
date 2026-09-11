import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.min(100, (current / total) * 100);

  return (
    <div className="w-full">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-1.5 text-xs">
        <span className="font-mono text-accent font-medium">{current}</span>
        <span className="font-mono text-gray-600">{total}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
