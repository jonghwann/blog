import dayjs from 'dayjs';
import removeMd from 'remove-markdown';
import { parseMdxFiles } from '@/shared/lib/mdx-parser';
import type { MdxFile } from '@/shared/types';
import type { Post, PostNavigation } from './types';

/**
 * MDX 파일을 Post 객체로 변환합니다.
 */
function mdxFileToPost(mdxFile: MdxFile): Post {
  const {
    slug,
    data: { title, date, tags },
    content,
  } = mdxFile;

  return {
    slug,
    title,
    date: dayjs(date).format('MMMM DD, YYYY'),
    description: generateDescription(content),
    tags,
  };
}

/**
 * 코드 블록과 마크다운 문법을 제거하고 description을 생성합니다.
 * @param content - MDX 콘텐츠
 * @param maxLength - 최대 길이 (기본값: 150)
 */
function generateDescription(content: string, maxLength = 150): string {
  const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  const text = removeMd(withoutCode).replace(/\s+/g, ' ').trim();

  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

/**
 * 포스트를 최신순으로 정렬합니다.
 */
function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 포스트 목록을 조회합니다.
 * @param tag - 특정 태그로 필터링 (선택사항)
 * @returns 최신순으로 정렬된 포스트 배열
 */
export function getPosts(tag?: string): Post[] {
  const mdxFiles = parseMdxFiles();

  const posts = mdxFiles.map(mdxFileToPost);

  const filteredPosts = tag ? posts.filter(({ tags }) => tags?.includes(tag)) : posts;

  return sortPostsByDate(filteredPosts);
}

/**
 * 단일 포스트를 조회합니다.
 * @param slug - 조회할 포스트의 slug
 */
export function getPost(slug: string): Post {
  const mdxFiles = parseMdxFiles();
  const post = mdxFiles.find((mdxFile) => mdxFile.slug === slug);

  if (!post) throw new Error('Post not found');

  const {
    data: { title, date, tags },
  } = post;

  return {
    slug,
    title,
    date: dayjs(date).format('MMMM DD, YYYY'),
    tags,
  };
}

/**
 * 이전/다음 포스트 정보를 조회합니다.
 * @param slug - 현재 포스트의 slug
 * @returns 최신순 기준 이전/다음 포스트 정보
 */
export function getPostNavigation(slug: string): PostNavigation {
  const mdxFiles = parseMdxFiles();

  const posts = sortPostsByDate(
    mdxFiles.map(({ slug, data: { title, date } }) => ({
      slug,
      title,
      date: dayjs(date).format('MMMM DD, YYYY'),
    })),
  );

  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) throw new Error('Post not found');

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

/**
 * 포스트를 검색합니다.
 * @param query - 검색어 (제목, 본문 검색)
 * @returns 최신순으로 정렬된 포스트 배열
 */
export function searchPosts(query: string): Post[] {
  query = query.toLowerCase().trim();
  const mdxFiles = parseMdxFiles();

  const filteredFiles = query
    ? mdxFiles.filter(
        ({ data: { title }, content }) =>
          title.toLowerCase().includes(query) || content.toLowerCase().includes(query),
      )
    : mdxFiles;

  return sortPostsByDate(filteredFiles.map(mdxFileToPost));
}
