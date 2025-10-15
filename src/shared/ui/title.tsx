import { cn } from '../lib';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return <h1 className={cn('mb-6 font-bold text-lg', className)}>{children}</h1>;
}
