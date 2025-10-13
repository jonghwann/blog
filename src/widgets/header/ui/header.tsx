'use client';
import Link from 'next/link';
import { useScrollVisibility } from '@/shared/lib';
import { Nav } from './nav';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const marginTop = useScrollVisibility(56);

  return (
    <header
      className="fixed top-0 z-[var(--z-header)] w-full bg-background/80 px-4 shadow-[var(--shadow)] backdrop-blur-[5px]"
      style={{ marginTop }}
    >
      <div className="mx-0 flex h-14 items-center justify-between min-[860px]:mx-16">
        <Link href="/" className="font-source-code-pro tracking-[-1px] sm:text-2xl">
          jonghwan.blog
        </Link>

        <div className="flex items-center gap-[15px]">
          <ThemeToggle />
          <Nav />
        </div>
      </div>
    </header>
  );
}
