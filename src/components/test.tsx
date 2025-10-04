'use client';
import { useQuery } from '@tanstack/react-query';
import { useQueryState } from 'nuqs';
import { searchPostsAction } from '@/actions/search';

export default function Test() {
  const [search, setSearch] = useQueryState('q', { defaultValue: '' });

  const { data: posts = [] } = useQuery({
    queryKey: ['search', search],
    queryFn: () => searchPostsAction(search),
  });

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      {posts?.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
