'use client';
import { useState } from 'react';

export function useVisible(initialValue = false) {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return { isVisible, toggle, show, hide };
}
