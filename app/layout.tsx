import type { Metadata } from 'next';
import { QueryProvider, ThemeProvider } from '@/app/providers';
import { notoSansKR, SITE_CONFIG } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Layout } from '@/widgets/layout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.siteName,
    images: [SITE_CONFIG.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(notoSansKR.variable, 'antialiased')}>
        <QueryProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
