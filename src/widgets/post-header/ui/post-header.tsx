import type { Post } from '@/entities/post';
import { PostTagList } from '@/entities/post';

export function PostHeader({ title, date, readingTime, tags }: Post) {
  return (
    <div className="mt-3 mb-12 border-b pb-6">
      <h1 className="mb-[26px] font-bold text-[44px] leading-[1.2]">{title}</h1>

      <div className="mb-8 flex items-center gap-2 font-nanum-square-round text-secondary-foreground">
        <time>{date}</time>
        <span>·</span>
        <span>{readingTime} min read</span>
      </div>

      <PostTagList tags={tags} />
    </div>
  );
}
