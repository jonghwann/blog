import { getPosts, getTags } from '@/lib/posts';

export default function Page() {
  const posts = getPosts();
  const tags = getTags();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.date}</p>
          <p>{post.tags?.map((tag) => tag.name)}</p>
        </div>
      ))}

      {tags.map((tag) => (
        <div key={tag.name}>
          <h2>{tag.name}</h2>
          <p>{tag.count}</p>
        </div>
      ))}
    </div>
  );
}
