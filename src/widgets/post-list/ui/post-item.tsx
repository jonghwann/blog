import Link from 'next/link';
import type { Post } from '@/entities/post';
import { Tag } from '@/shared/ui';

export function PostItem({ slug, title, date, description, tags }: Post) {
  return (
    <article>
      <Link href={`/${slug}`} className="mb-6 inline-block hover:text-accent-foreground">
        <h2 className="font-bold text-[32px] leading-[1.2]">{title}</h2>
      </Link>

      <time className="mb-4 block font-nanum-square-round text-secondary-foreground text-sm leading-[1]">
        {date}
      </time>
      <p className="mb-8 font-nanum-square-round leading-[1.7]">{description}</p>

      <ul className="flex gap-2">
        {tags?.map((tag) => (
          <li key={tag}>
            <Tag href={`/tags/${tag}`}>{tag}</Tag>
          </li>
        ))}
      </ul>
    </article>
  );
}
