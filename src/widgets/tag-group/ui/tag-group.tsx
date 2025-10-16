import type { Tag } from '@/entities/tag';
import { cn } from '@/shared/lib';
import { TagLink } from '@/shared/ui';

interface TagGroupProps {
  tags: Tag[];
  activeSlug?: string;
  className?: string;
}

export function TagGroup({ tags, activeSlug, className }: TagGroupProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {tags.map(({ name, slug, count }) => {
        const isActive = slug === activeSlug;
        const href = isActive ? '/tags' : `/tags/${slug}`;

        return (
          <li key={slug}>
            <TagLink href={href} isActive={isActive}>
              {name} {count && `(${count})`}
            </TagLink>
          </li>
        );
      })}
    </ul>
  );
}
