import type { Tag } from '@/entities/tag';
import { cn } from '@/shared/lib';
import { Tag as TagComponent } from '@/shared/ui';

interface TagFilterProps {
  tags: Tag[];
  tag?: string;
  className?: string;
}

export function TagFilter({ tags, tag, className }: TagFilterProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {tags.map(({ name, count }) => (
        <li key={name}>
          <TagComponent href={tag === name ? '/tags' : `/tags/${name}`} isActive={tag === name}>
            {name} {count && `(${count})`}
          </TagComponent>
        </li>
      ))}
    </ul>
  );
}
