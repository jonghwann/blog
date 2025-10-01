import { getPosts } from '@/lib/posts';

export default function Page() {
  const posts = getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.date}</p>
          <p>{post.tags?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
