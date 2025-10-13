import type { Tag } from '@/entities/tag';
import { cn } from '@/shared/lib';
import { TagLink } from '@/shared/ui';

interface TagFilterProps {
  tags: Tag[];
  tag?: string;
  className?: string;
}

export function TagFilter({ tags, tag, className }: TagFilterProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {tags.map(({ name, count }) => {
        const isActive = tag === name;
        const href = isActive ? '/tags' : `/tags/${name}`;

        return (
          <li key={name}>
            <TagLink href={href} isActive={isActive}>
              {name} {count && `(${count})`}
            </TagLink>
          </li>
        );
      })}
    </ul>
  );
}
