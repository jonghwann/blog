import Link from 'next/link';
import type { Post } from '@/entities/post';
import { PostTagList } from '@/entities/post';

export function PostItem({ slug, title, date, description, tags }: Post) {
  return (
    <article>
      <Link href={`/${slug}`} className="mb-6 inline-block">
        <h2 className="font-bold text-[32px] leading-[1.2]">{title}</h2>
      </Link>

      <time className="mb-4 block text-secondary-foreground text-sm leading-[1]">{date}</time>
      <p className="mb-8 leading-[1.7]">{description}</p>

      <PostTagList tags={tags} />
    </article>
  );
}
