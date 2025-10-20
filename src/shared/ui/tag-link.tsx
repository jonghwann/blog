import Link from 'next/link';
import { cn } from '@/shared/lib';

interface TagLinkProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  className?: string;
}

export function TagLink({ children, href, isActive, className }: TagLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block rounded-full bg-secondary px-[10px] py-[6px] text-sm hover:bg-secondary-hover',
        isActive && 'bg-inverse text-inverse-foreground hover:bg-inverse',
        className,
      )}
    >
      {children}
    </Link>
  );
}
