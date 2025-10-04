'use server';
import { searchPosts } from '@/lib/posts';

export async function searchPostsAction(query: string) {
  return searchPosts(query);
}
