import { slugify } from '@/shared/lib';
import { TagLink } from '@/shared/ui';

export function PostTagList({ tags }: { tags?: string[] }) {
  return (
    <ul className="flex gap-2">
      {tags?.map((tag) => (
        <li key={tag}>
          <TagLink href={`/tags/${slugify(tag)}`}>{tag}</TagLink>
        </li>
      ))}
    </ul>
  );
}
