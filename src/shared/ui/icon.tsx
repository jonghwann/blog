import { cn } from '@/shared/lib';

interface IconProps {
  Icon: React.ElementType;
  className?: string;
}

export function Icon({ Icon, className }: IconProps) {
  return (
    <Icon className={cn('size-5 text-tertiary-foreground hover:text-foreground', className)} />
  );
}
