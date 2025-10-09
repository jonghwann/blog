'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { searchPostsAction } from '@/entities/post';
import { Input, Title } from '@/shared/ui';
import { PostList } from '@/widgets/post-list';

export function SearchPage() {
  const [search, setSearch] = useState('');

  const { data: posts = [] } = useQuery({
    queryKey: ['search', search],
    queryFn: () => searchPostsAction(search),
  });

  return (
    <section className="w-full">
      <Title>There are {posts.length} posts.</Title>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        icon={<FiSearch />}
        classNames={{ container: 'mb-[70px]', input: 'pl-10', icon: 'left-3' }}
      />

      <PostList posts={posts} />
    </section>
  );
}
