import dayjs from 'dayjs';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import removeMd from 'remove-markdown';
import type { Post } from '@/types/post';

const POSTS_PATH = 'src/content';
const POSTS_DIRECTORY = path.join(process.cwd(), POSTS_PATH);

/**
 * MDX 콘텐츠에서 description을 생성합니다.
 * @param content - MDX 콘텐츠
 * @param maxLength - 최대 길이 (기본값: 150)
 * @returns 정제된 description 문자열
 */
function generateDescription(content: string, maxLength = 150): string {
  const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  const text = removeMd(withoutCode).replace(/\s+/g, ' ').trim();
  return text.slice(0, maxLength) + (text.length > maxLength ? '…' : '');
}

/**
 * 포스트 목록을 조회합니다.
 * @param tag - 특정 태그로 필터링 (선택사항)
 * @returns 날짜순으로 정렬된 포스트 배열
 */
export function getPosts(tag?: string): Post[] {
  const files = readdirSync(POSTS_DIRECTORY);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  const posts = mdxFiles.map((mdxFile) => {
    const slug = mdxFile.replace(/\.mdx$/, '');

    const fullPath = path.join(POSTS_DIRECTORY, mdxFile);
    const file = readFileSync(fullPath, 'utf8');

    const { data, content } = matter(file);
    const { title, date, tags } = data;

    return {
      slug,
      title,
      date: dayjs(date).format('MMMM DD, YYYY'),
      description: generateDescription(content),
      tags,
    };
  });

  const filteredPosts = tag ? posts.filter((post) => post.tags?.includes(tag)) : posts;
  return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
