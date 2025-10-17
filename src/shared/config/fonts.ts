import { Noto_Sans_KR, Source_Code_Pro } from 'next/font/google';
import localFont from 'next/font/local';

// export const nanumSquare = localFont({
//   src: [
//     {
//       path: '../../../public/fonts/NanumSquareR.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../../public/fonts/NanumSquareB.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-nanum-square',
//   display: 'swap',
// });

// export const nanumSquareRound = localFont({
//   src: [
//     {
//       path: '../../../public/fonts/NanumSquareRoundR.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../../public/fonts/NanumSquareRoundB.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-nanum-square-round',
//   display: 'swap',
// });

export const nanumSquare = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nanum-square',
  display: 'swap',
});

export const nanumSquareRound = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nanum-square',
  display: 'swap',
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--source-code-pro',
  display: 'swap',
});
