import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface PostNavigationItemProps {
  variant?: 'prev' | 'next';
  slug?: string;
  title?: string;
}

const config = {
  prev: {
    label: 'Previous Post',
    icon: BiLeftArrowAlt,
  },
  next: {
    label: 'Next Post',
    icon: BiRightArrowAlt,
  },
};

const linkVariants = cva(
  'group relative flex w-full items-center rounded-sm bg-secondary px-4 py-5 font-nanum-square-round hover:bg-secondary-hover lg:w-[282px]',
  {
    variants: {
      variant: {
        prev: 'justify-start pl-14',
        next: 'justify-end pr-14',
      },
    },
  },
);

const iconVariants = cva('absolute size-6 transition-transform duration-200 ease-in-out', {
  variants: {
    variant: {
      prev: 'group-hover:-translate-x-0.5 left-4',
      next: 'right-4 group-hover:translate-x-0.5',
    },
  },
});

const labelVariants = cva('flex w-full text-xs', {
  variants: {
    variant: {
      prev: 'justify-start',
      next: 'justify-end',
    },
  },
});

export function PostNavigationItem({ variant = 'prev', slug, title }: PostNavigationItemProps) {
  const { label, icon: Icon } = config[variant];

  if (!slug) return <div />;

  return (
    <Link href={`/${slug}`} className={linkVariants({ variant })}>
      <Icon className={iconVariants({ variant })} />

      <div className="flex min-w-0 flex-col justify-end gap-1">
        <span className={labelVariants({ variant })}>{label}</span>
        <h4 className="truncate">{title}</h4>
      </div>
    </Link>
  );
}
