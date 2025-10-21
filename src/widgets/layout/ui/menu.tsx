'use client';
import Link from 'next/link';
import { cn } from '@/shared/lib';

const links = [
  { href: '/tags', text: 'Tags' },
  { href: '/series', text: 'Series' },
  { href: '/rss.xml', text: 'Rss' },
];

interface MenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Menu({ isOpen, onClick }: MenuProps) {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-[200px] pb-3 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
      )}
    >
      <ul className="flex flex-col gap-1">
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className="block rounded-md px-3 py-2 font-bold text-sm hover:bg-secondary"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
