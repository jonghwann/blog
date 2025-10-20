'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib';
import { AnimateIcon, Moon, Sun } from '@/shared/ui';

const icons = [
  { icon: Sun, theme: 'light' },
  { icon: Moon, theme: 'dark' },
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
    <button type="button" onClick={handleClick} className="relative size-5 cursor-pointer">
      {icons.map(({ icon: Icon, theme }) => (
        <AnimateIcon key={theme} animateOnHover>
          <Icon
            size={20}
            className={cn(
              'absolute inset-0 transition-opacity duration-300 ease-in-out',
              resolvedTheme === theme ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          />
        </AnimateIcon>
      ))}
    </button>
  );
}
