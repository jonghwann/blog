import dayjs from 'dayjs';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import removeMd from 'remove-markdown';
import type { Frontmatter, MdxFile } from '@/types/mdx';
import type { Post, Tag } from '@/types/post';

const BASE_PATH = process.cwd();
const POSTS_PATH = path.join(BASE_PATH, 'src/content');

/**
 * 모든 MDX 파일을 파싱합니다.
 * @returns slug, frontmatter, content를 포함한 배열
 */
function parseMdxFiles(): MdxFile[] {
  const files = readdirSync(POSTS_PATH);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  return mdxFiles.map((mdxFile) => {
    const slug = mdxFile.replace(/\.mdx$/, '');
    const fullPath = path.join(POSTS_PATH, mdxFile);
    const file = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(file);

    return { slug, data: data as Frontmatter, content };
  });
}

/**
 * 콘텐츠에서 마크다운을 제거하고 description을 생성합니다.
 * @param content - MDX 콘텐츠
 * @param maxLength - 최대 길이 (기본값: 150)
 */
function generateDescription(content: string, maxLength = 150): string {
  const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  const text = removeMd(withoutCode).replace(/\s+/g, ' ').trim();
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

/**
 * 포스트 목록을 조회합니다.
 * @param tag - 필터링할 태그 (선택사항)
 * @returns 날짜순으로 정렬된 포스트 배열
 */
export function getPosts(tag?: string): Post[] {
  const mdxFiles = parseMdxFiles();

  const posts = mdxFiles.map(({ slug, data: { title, date, tags }, content }) => {
    return {
      slug,
      title,
      date: dayjs(date).format('MMMM DD, YYYY'),
      description: generateDescription(content),
      tags: tags?.map((tag) => ({ name: tag })),
    };
  });

  const filteredPosts = tag
    ? posts.filter(({ tags }) => tags?.some(({ name }) => name === tag))
    : posts;

  return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 모든 태그와 사용 횟수를 조회합니다.
 * @returns 사용 횟수 기준 내림차순으로 정렬된 태그 배열
 */
export function getTags(): Tag[] {
  const mdxFiles = parseMdxFiles();
  const tagCountMap = new Map<string, number>();

  mdxFiles.forEach(({ data: { tags } }) => {
    tags?.forEach((tag) => {
      tagCountMap.set(tag, (tagCountMap.get(tag) ?? 0) + 1);
    });
  });

  const tags = Array.from(tagCountMap.entries()).map(([name, count]) => ({ name, count }));
  return tags.sort((a, b) => b.count - a.count);
}
