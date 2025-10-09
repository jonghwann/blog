import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib';

const buttonVariants = cva('inline-flex cursor-pointer items-center justify-center font-medium', {
  variants: {
    variant: {
      default: 'bg-inverse text-inverse-foreground hover:bg-inverse-hover',
    },
    size: {
      default: 'h-10 rounded-md text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  variant,
  size,
  asChild = false,
  className,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
