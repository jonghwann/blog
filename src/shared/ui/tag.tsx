import Link from 'next/link';
import { cn } from '@/shared/lib';

interface TagProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  className?: string;
}

export function Tag({ children, href, isActive, className }: TagProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block rounded-full bg-secondary px-[10px] py-[6px] font-nanum-square-round text-sm hover:bg-secondary-hover',
        isActive && 'bg-inverse text-inverse-foreground hover:bg-inverse',
        className,
      )}
    >
      {children}
    </Link>
  );
}
