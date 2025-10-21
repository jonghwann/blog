import Link from 'next/link';
import type { Tag } from '@/entities/tag';
import { cn } from '@/shared/lib';

interface TagListProps {
  tags: Tag[];
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  return (
    <aside className={cn('w-[170px]', className)}>
      <nav>
        <h3 className="mb-3 font-bold">TAG</h3>

        <ul className="flex flex-col gap-3">
          {tags.map(({ name, slug, count }) => (
            <li key={slug} className="truncate">
              <Link href={`/tags/${slug}`}>
                {name} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
