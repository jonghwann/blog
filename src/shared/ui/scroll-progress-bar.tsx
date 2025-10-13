'use client';
import { useScrollProgress } from '@/shared/lib';

export function ScrollProgressBar() {
  const scrollPercentage = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-[var(--z-scroll-progress-bar)] z-header h-1 w-full backdrop-blur-[5px]">
      <div className="h-full bg-accent-foreground" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
}
