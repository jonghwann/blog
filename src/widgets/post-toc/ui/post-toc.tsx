'use client';
import Link from 'next/link';
import { cn, useActiveHeadings } from '@/shared/lib';
import type { Toc } from '@/shared/types';

interface PostTocProps {
  toc: Toc[];
  className?: string;
}

export function PostToc({ toc, className }: PostTocProps) {
  const activeId = useActiveHeadings(toc);

  return (
    <aside className={cn('block w-[240px] shrink-0', className)}>
      <nav className="sticky top-[100px] font-medium text-sm">
        <ul className="flex flex-col gap-2">
          {toc.map(({ id, title, link, depth }) => (
            <li key={title} className={depth ? 'ml-4' : ''}>
              <Link
                href={link}
                className={cn(
                  'block font-nanum-round transition-transform',
                  id === (activeId ?? 0)
                    ? '-translate-x-[10px] text-accent-foreground'
                    : 'translate-x-0',
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
