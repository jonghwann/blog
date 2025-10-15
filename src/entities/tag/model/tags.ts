import { slugify } from '@/shared/lib';
import { parseMdxFiles } from '@/shared/lib/server';
import type { Tag } from './types';

/**
 * 태그 목록을 조회합니다.
 * @returns 사용 횟수가 많은 순으로 정렬된 태그 배열
 */
export function getTags(): Tag[] {
  const mdxFiles = parseMdxFiles();
  const tagCountMap = new Map<string, number>();

  mdxFiles.forEach(({ data: { tags } }) => {
    tags?.forEach((tag) => {
      tagCountMap.set(tag, (tagCountMap.get(tag) ?? 0) + 1);
    });
  });

  const tags = Array.from(tagCountMap.entries()).map(([name, count]) => ({
    name,
    slug: slugify(name),
    count,
  }));
  return tags.sort((a, b) => b.count - a.count);
}
