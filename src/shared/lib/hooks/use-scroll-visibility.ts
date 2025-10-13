'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollVisibility(elemHeight: number) {
  const lastScrollPosition = useRef(0);
  const isLastScrollingUp = useRef(false);
  const scrollTransitionPoint = useRef(0);

  const [marginTop, setMarginTop] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;

    const isScrollingUp = lastScrollPosition.current > currentScrollPosition;

    const isUpTransition = !isLastScrollingUp.current && isScrollingUp;
    const isDownTransition = isLastScrollingUp.current && !isScrollingUp;

    const nextElementBottomPosition = currentScrollPosition + elemHeight;

    if (isUpTransition && scrollTransitionPoint.current < currentScrollPosition) {
      scrollTransitionPoint.current = lastScrollPosition.current;
    }

    if (isDownTransition && nextElementBottomPosition < scrollTransitionPoint.current) {
      scrollTransitionPoint.current = lastScrollPosition.current + elemHeight;
    }

    const calculatedMargin = Math.min(
      0,
      Math.max(-elemHeight, scrollTransitionPoint.current - nextElementBottomPosition),
    );
    setMarginTop(calculatedMargin);

    isLastScrollingUp.current = isScrollingUp;
    lastScrollPosition.current = currentScrollPosition;
  }, [elemHeight]);

  useEffect(() => {
    const currentScrollPosition = window.scrollY;
    scrollTransitionPoint.current = currentScrollPosition + elemHeight;
    lastScrollPosition.current = currentScrollPosition;
  }, [elemHeight]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return marginTop;
}
