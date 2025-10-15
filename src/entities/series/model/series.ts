import dayjs from 'dayjs';
import { slugify } from '@/shared/lib';
import { parseMdxFiles } from '@/shared/lib/server';
import type { Series } from './type';

/**
 * 시리즈 목록을 조회합니다.
 * @returns 최신순으로 정렬된 시리즈 배열
 */
export function getSeries(): Series[] {
  const mdxFiles = parseMdxFiles();
  const seriesMap = new Map<string, { count: number; lastDate: Date }>();

  mdxFiles.forEach(({ data: { series, date } }) => {
    if (!series) return;

    const postDate = new Date(date);
    const existing = seriesMap.get(series);

    if (!existing) {
      seriesMap.set(series, { count: 1, lastDate: postDate });
    } else {
      seriesMap.set(series, {
        count: existing.count + 1,
        lastDate: postDate > existing.lastDate ? postDate : existing.lastDate,
      });
    }
  });

  const seriesList = Array.from(seriesMap.entries()).map(([name, { count, lastDate }]) => ({
    name,
    slug: slugify(name),
    count,
    updatedAt: dayjs(lastDate).format('MMMM DD, YYYY'),
  }));

  return seriesList.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}
