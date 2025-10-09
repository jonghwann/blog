'use server';
import { searchPosts } from '@/entities/post/model/posts';

export async function searchPostsAction(search: string) {
  return searchPosts(search);
}
