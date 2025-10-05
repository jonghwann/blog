'use server';
import { searchPosts } from '@/entities/post';

export async function searchPostsAction(query: string) {
  return searchPosts(query);
}
