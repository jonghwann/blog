'use client';
import Comments from '@giscus/react';
import { useTheme } from 'next-themes';
import { SITE_CONFIG } from '@/shared/config';

export function Giscus({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className={className}>
      <Comments
        repo={SITE_CONFIG.giscus.repo}
        repoId={SITE_CONFIG.giscus.repoId}
        category={SITE_CONFIG.giscus.category}
        categoryId={SITE_CONFIG.giscus.categoryId}
        mapping={SITE_CONFIG.giscus.mapping}
        strict={SITE_CONFIG.giscus.strict}
        reactionsEnabled={SITE_CONFIG.giscus.reactionsEnabled}
        emitMetadata={SITE_CONFIG.giscus.emitMetadata}
        inputPosition={SITE_CONFIG.giscus.inputPosition}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang={SITE_CONFIG.giscus.lang}
      />
    </div>
  );
}
