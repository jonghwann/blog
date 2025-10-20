import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SITE_CONFIG } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Icon } from '@/shared/ui';

const icons = [
  { icon: FaGithub, href: SITE_CONFIG.social.github },
  { icon: FaLinkedin, href: SITE_CONFIG.social.linkedin },
];

export function Bio({ className }: { className?: string }) {
  return (
    <aside className={cn('flex items-center gap-4', className)}>
      <Image
        src={SITE_CONFIG.author.avatar}
        alt="avatar"
        width={128}
        height={128}
        priority
        className="size-32 flex-shrink-0 rounded-full object-cover"
      />

      <div>
        <h2 className="mb-1 font-bold text-2xl leading-6">@{SITE_CONFIG.author.username}</h2>
        <p className="mb-3 text-base">{SITE_CONFIG.author.tagline}</p>

        <nav>
          <ul className="flex items-center gap-2">
            {icons.map(({ icon, href }) => (
              <li key={href}>
                <Link href={href} target="_blank">
                  <Icon Icon={icon} className="size-6" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
