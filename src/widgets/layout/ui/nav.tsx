'use client';
import Link from 'next/link';
import { FaListUl, FaRss, FaSearch, FaTags } from 'react-icons/fa';
import { Icon } from '@/shared/ui';
import { ThemeToggle } from './theme-toggle';

const icons = [
  { icon: FaSearch, href: '/search' },
  { icon: FaTags, href: '/tags' },
  { icon: FaListUl, href: '/series' },
  { icon: ThemeToggle, href: null },
  { icon: FaRss, href: '/rss.xml' },
];

export function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-[15px]">
        {icons.map(({ icon, href }, index) => (
          <li
            key={href}
            className="size-5 animate-fade-in-down"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {href ? (
              <Link href={href}>
                <Icon Icon={icon} />
              </Link>
            ) : (
              <Icon Icon={icon} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
