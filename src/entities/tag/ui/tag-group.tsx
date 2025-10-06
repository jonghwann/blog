import { Tag } from '@/shared/ui';

export function TagGroup({ tags }: { tags?: string[] }) {
  return (
    <ul className="flex gap-2">
      {tags?.map((tag) => (
        <li key={tag}>
          <Tag href={`/tags/${tag}`}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
