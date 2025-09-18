import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: './Helvetica/HelveticaNeue-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Helvetica/HelveticaNeue-Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Helvetica/HelveticaNeue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Helvetica/HelveticaNeue-Heavy.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Helvetica/HelveticaNeue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Helvetica/HelveticaNeue-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

// import { Be_Vietnam_Pro } from 'next/font/google';

// export const be = Be_Vietnam_Pro({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });
