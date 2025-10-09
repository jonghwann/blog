import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { searchPosts } from '@/entities/post/model/posts';
import { SearchPage } from '@/pages/search';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['search', ''],
    queryFn: () => searchPosts(''),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchPage />
    </HydrationBoundary>
  );
}
