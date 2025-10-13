'use client';
import { useEffect, useState } from 'react';
import type { Toc } from '@/shared/types';

export function useActiveHeadings(tableOfContents: Toc[]) {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const headerPositions = tableOfContents.map(({ link, id }) => {
      const element = document.getElementById(link.slice(1));
      return { id, top: element?.offsetTop || 0 };
    });

    const handleScroll = () => {
      const scrollY = window.scrollY + 1;
      let currentActiveId = null;

      headerPositions.forEach(({ id, top }) => {
        if (top < scrollY) {
          currentActiveId = id;
        }
      });

      setActiveId(currentActiveId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tableOfContents]);

  return activeId;
}
