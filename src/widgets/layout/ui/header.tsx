'use client';
import Link from 'next/link';
import { useScrollVisibility } from '@/shared/lib';
import { Nav } from './nav';

export function Header() {
  const marginTop = useScrollVisibility(64);

  return (
    <header
      className="fixed top-0 z-[var(--z-header)] w-full border-b bg-background/80 px-4 backdrop-blur-[5px]"
      style={{ marginTop }}
    >
      <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-[-1px]">
          jonghwan.blog
        </Link>

        <Nav />
      </div>
    </header>
  );
}
