'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { cn } from '@/shared/lib';
import { Icon } from '@/shared/ui';

const icons = [
  { icon: FaSun, theme: 'light' },
  { icon: FaMoon, theme: 'dark' },
];

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  const handleClick = () => {
    document.documentElement.classList.add('no-color-transitions');
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

    setTimeout(() => {
      document.documentElement.classList.remove('no-color-transitions');
    }, 120);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group size-5 cursor-pointer overflow-hidden"
    >
      {icons.map(({ icon, theme }) => (
        <Icon
          key={theme}
          Icon={icon}
          className={cn(
            'transition-transform duration-300 ease-in-out group-hover:text-foreground',
            resolvedTheme === 'light' ? '-translate-y-5' : 'translate-y-0',
          )}
        />
      ))}
    </button>
  );
}
