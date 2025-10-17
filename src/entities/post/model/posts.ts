import dayjs from 'dayjs';
import readingTime from 'reading-time';
import removeMd from 'remove-markdown';
import { parseMdxFiles } from '@/shared/lib/server';
import type { GetPostsOptions, Navigation, Post } from './types';

/**
 * MDX 콘텐츠에서 코드 블록과 마크다운 문법을 제거하고 순수 텍스트를 생성합니다.
 * @param content - MDX 콘텐츠
 * @param maxLength - 텍스트 최대 길이 (선택, 지정하지 않으면 전체 텍스트 반환)
 */
function extractPlainText(content: string, maxLength?: number): string {
  const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  const text = removeMd(withoutCode).replace(/\s+/g, ' ').trim();

  return maxLength && text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

/**
 * 포스트를 최신순으로 정렬합니다.
 */
function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 포스트 목록을 조회합니다.
 * @param options - 필터링 및 조회 옵션
 * @returns 최신순으로 정렬된 포스트 배열
 */
export function getPosts(options: GetPostsOptions = {}): Post[] {
  const { tag, series, includeContent = false } = options;

  const mdxFiles = parseMdxFiles();

  const posts = mdxFiles.map(({ slug, data: { title, date, tags, series }, content }) => ({
    slug,
    title,
    date: dayjs(date).format('MMMM DD, YYYY'),
    description: extractPlainText(content, 150),
    ...(includeContent && { content: extractPlainText(content) }),
    tags,
    ...(series && { series }),
  }));

  let filteredPosts = posts;

  if (tag) {
    filteredPosts = filteredPosts.filter(({ tags }) => tags?.includes(tag));
  }

  if (series) {
    filteredPosts = filteredPosts.filter(({ series: postSeries }) => postSeries === series);
  }

  return sortPostsByDate(filteredPosts);
}

/**
 * 단일 포스트를 조회합니다.
 * @param slug - 조회할 포스트의 slug
 */
export function getPost(slug: string): Post {
  const mdxFiles = parseMdxFiles();
  const post = mdxFiles.find((mdxFile) => mdxFile.slug === slug);

  if (!post) throw new Error(`Post not found: ${slug}`);

  const {
    data: { title, date, tags },
    content,
  } = post;

  return {
    slug,
    title,
    date: dayjs(date).format('MMMM DD, YYYY'),
    description: extractPlainText(content, 150),
    content: content,
    readingTime: Math.ceil(readingTime(content).minutes),
    tags,
  };
}

/**
 * 이전/다음 포스트 정보를 조회합니다.
 * @param slug - 현재 포스트의 slug
 * @returns 최신순 기준 이전/다음 포스트 정보
 */
export function getPostNavigation(slug: string): Navigation {
  const mdxFiles = parseMdxFiles();

  const posts = sortPostsByDate(
    mdxFiles.map(({ slug, data: { title, date } }) => ({
      slug,
      title,
      date: dayjs(date).format('MMMM DD, YYYY'),
    })),
  );

  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) throw new Error(`Post not found: ${slug}`);

  return {
    prev:
      currentIndex > 0
        ? { slug: posts[currentIndex - 1].slug, title: posts[currentIndex - 1].title }
        : null,
    next:
      currentIndex < posts.length - 1
        ? { slug: posts[currentIndex + 1].slug, title: posts[currentIndex + 1].title }
        : null,
  };
}
