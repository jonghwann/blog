'use client';
import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import type { Post } from '@/entities/post';
import { Input, Title } from '@/shared/ui';
import { PostList } from '@/widgets/post-list';

export function SearchPage({ posts }: { posts: Post[] }) {
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    if (!search) return posts;

    const lowerSearch = search.toLowerCase();

    return posts.filter(({ title, content }) => {
      return (
        title.toLowerCase().includes(lowerSearch) || content?.toLowerCase().includes(lowerSearch)
      );
    });
  }, [posts, search]);

  return (
    <div>
      <Title>There are {filteredPosts.length} posts.</Title>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        icon={<FiSearch />}
        classNames={{ container: 'mb-[70px]', input: 'pl-10', icon: 'left-3' }}
      />

      <PostList posts={filteredPosts} />
    </div>
  );
}
