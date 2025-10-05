import { getPosts } from '@/entities/post';
import { getTags } from '@/entities/tag';

export default function Page() {
  const posts = getPosts();
  const tags = getTags();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2 className="font-nanum-square-round">{post.title}</h2>
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
