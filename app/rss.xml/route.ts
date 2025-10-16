import { getPosts } from '@/entities/post/model/posts';
import { SITE_CONFIG } from '@/shared/config';

export function GET() {
  const posts = getPosts({ includeContent: true });
  const lastPostDate = posts[0]?.date || new Date().toISOString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${SITE_CONFIG.title}]]></title>
    <description><![CDATA[${SITE_CONFIG.description}]]></description>
    <link>${SITE_CONFIG.url}</link>
    <generator>Next.js</generator>
    <lastBuildDate>${new Date(lastPostDate).toUTCString()}</lastBuildDate>
    ${posts
      .map((post) => {
        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description ?? ''}]]></description>
      <content:encoded><![CDATA[${post.content ?? ''}]]></content:encoded>
      <link>${SITE_CONFIG.url}/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
