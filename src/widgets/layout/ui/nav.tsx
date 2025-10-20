'use client';
import Link from 'next/link';
import { cn } from '@/shared/lib';
import { AnimateIcon, List, Menu, Search, Tag, Wifi } from '@/shared/ui';
import { ThemeToggle } from './theme-toggle';

interface NavProps {
  isOpen: boolean;
  onClick: () => void;
}

const visibility = {
  desktop: 'absolute lg:relative invisible lg:visible pointer-events-none lg:pointer-events-auto',
  mobile: 'relative lg:absolute visible lg:invisible pointer-events-auto lg:pointer-events-none',
};

export function Nav({ isOpen, onClick }: NavProps) {
  const icons = [
    {
      id: 'search',
      href: '/search',
      icon: (
        <AnimateIcon animateOnHover animation="path">
          <Search size={20} />
        </AnimateIcon>
      ),
    },
    {
      id: 'tags',
      href: '/tags',
      icon: (
        <AnimateIcon animateOnHover animation="path">
          <Tag size={20} />
        </AnimateIcon>
      ),
      className: visibility.desktop,
    },
    {
      id: 'series',
      href: '/series',
      icon: (
        <AnimateIcon animateOnHover>
          <List size={20} />
        </AnimateIcon>
      ),
      className: visibility.desktop,
    },
    {
      id: 'theme',
      icon: <ThemeToggle />,
      href: null,
    },
    {
      id: 'rss',
      href: '/rss.xml',
      icon: (
        <AnimateIcon animateOnHover>
          <Wifi size={20} className="mt-0.5 ml-[-2px] rotate-50" />
        </AnimateIcon>
      ),
      className: visibility.desktop,
    },
    {
      id: 'menu',
      href: null,
      icon: (
        <AnimateIcon animate={isOpen}>
          <Menu size={20} onClick={onClick} className="cursor-pointer" />
        </AnimateIcon>
      ),
      className: visibility.mobile,
    },
  ];

  return (
    <ul className="flex items-center gap-[15px]">
      {icons.map(({ id, href, icon, className }, index) => (
        <li
          key={id}
          className={cn('size-5 animate-fade-in-down', className)}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {href ? <Link href={href}>{icon}</Link> : icon}
        </li>
      ))}
    </ul>
  );
}
