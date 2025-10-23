import { Noto_Sans_KR } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';

export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-source-code-pro',
  display: 'swap',
});