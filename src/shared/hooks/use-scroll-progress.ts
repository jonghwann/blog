'use client';
import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (currentScrollY / scrollableHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPercentage;
}
