import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { searchPostsAction } from '@/entities/post';

interface PageProps {
  searchParams: Promise<{ q: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const search = q ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['search', search],
    queryFn: () => searchPostsAction(search),
  });

  return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>;
}
