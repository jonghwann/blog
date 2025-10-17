import { type Post, PostItem } from '@/entities/post';

interface PostListProps {
  posts: Post[];
  className?: string;
}

export function PostList({ posts, className }: PostListProps) {
  return (
    <ul className={className}>
      {posts.map((post) => (
        <li key={post.slug} className="mb-8 border-b pb-12 last:mb-0 last:border-none last:pb-0">
          <PostItem {...post} />
        </li>
      ))}
    </ul>
  );
}
