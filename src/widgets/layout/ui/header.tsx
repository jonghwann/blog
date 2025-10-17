'use client';
import Link from 'next/link';
import { useScrollVisibility } from '@/shared/lib';
import { Nav } from './nav';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const marginTop = useScrollVisibility(56);

  return (
    <header
      className="fixed top-0 z-[var(--z-header)] w-full border-b bg-background/80 px-4 backdrop-blur-[5px]"
      style={{ marginTop }}
    >
      <div className="mx-auto flex h-14 max-w-[900px] items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-[-1px]">
          Jonghwan.blog
        </Link>

        <div className="flex items-center gap-[15px]">
          <ThemeToggle />
          <Nav />
        </div>
      </div>
    </header>
  );
}
