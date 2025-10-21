import { cn } from '@/shared/lib';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  classNames?: {
    container?: string;
    input?: string;
    icon?: string;
  };
}

export function Input({ icon, classNames, ...rest }: InputProps) {
  return (
    <div className={cn('group relative', classNames?.container)}>
      {icon && (
        <div
          className={cn(
            '-translate-y-1/2 absolute top-1/2 text-tertiary-foreground',
            classNames?.icon,
          )}
        >
          {icon}
        </div>
      )}

      <input
        autoComplete="off"
        className={cn(
          'h-[46px] w-full min-w-0 rounded-lg bg-transparent px-3 text-base outline-none ring-1 ring-border placeholder:text-tertiary-foreground',
          classNames?.input,
        )}
        {...rest}
      />
    </div>
  );
}
