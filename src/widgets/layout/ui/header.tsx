'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMediaQuery, useScrollVisibility, useVisible } from '@/shared/lib';
import { Menu } from './menu';
import { Nav } from './nav';

export function Header() {
  const { isVisible, toggle, hide } = useVisible();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const marginTop = useScrollVisibility(65, isDesktop);

  useEffect(() => {
    if (isDesktop && isVisible) {
      hide();
    }
  }, [isDesktop, isVisible, hide]);

  return (
    <header
      className="fixed top-0 z-[var(--z-header)] w-full border-b bg-background/80 px-4 backdrop-blur-[5px]"
      style={{ marginTop: isDesktop ? marginTop : 0 }}
    >
      <nav className="mx-auto max-w-[900px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-[-1px]">
            jonghwan.blog
          </Link>

          <Nav isOpen={isVisible} onClick={toggle} />
        </div>

        <Menu isOpen={isVisible} onClick={hide} />
      </nav>
    </header>
  );
}
