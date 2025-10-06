import type { Post } from '@/entities/post';
import { PostItem } from './post-item';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug} className="mb-8 border-b pb-12 last:mb-0 last:border-none last:pb-0">
          <PostItem {...post} />
        </li>
      ))}
    </ul>
  );
}
