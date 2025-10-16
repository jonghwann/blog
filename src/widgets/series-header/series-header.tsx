import type { Series } from '@/entities/series';

export function SeriesHeader({ name, count, updatedAt }: Series) {
  return (
    <div className="mt-3 mb-12 border-b pb-12">
      <span className="mb-2 inline-block bg-inverse p-[2px] font-bold text-inverse-foreground text-xl leading-[1]">
        Series
      </span>

      <h1 className="mb-4 font-bold text-[44px] leading-[1.2]">{name}</h1>

      <div className="font-nanum-square-round">
        <span className="font-bold">{count} posts</span>
        <span> · </span>
        <span className="text-secondary-foreground">
          Last updated on <time>{updatedAt}</time>
        </span>
      </div>
    </div>
  );
}
