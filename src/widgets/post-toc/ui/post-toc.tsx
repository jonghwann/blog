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
    <aside className={cn('block min-w-[200px]', className)}>
      <nav className="sticky top-[100px] mr-4 border-l pl-4 font-medium text-xs">
        <ul className="flex flex-col gap-2">
          {toc.map(({ id, title, link, depth }) => (
            <li key={title} className={depth ? 'ml-4' : ''}>
              <Link
                href={link}
                className={cn(
                  'block break-words font-nanum-round text-tertiary-foreground',
                  id === (activeId ?? 0) && 'text-foreground',
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
