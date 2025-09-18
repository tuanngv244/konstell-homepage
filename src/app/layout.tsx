import type { Metadata } from 'next';
import { helvetica } from '@/@core/fonts';
import { Suspense } from 'react';
import Loading from './loading';
import './global.css';
import LoadingPage from '@/@core/components/loading-page';
import { OrganizationSchema } from '@/@core/components/seo';

export const metadata: Metadata = {
  title: 'Winways Inc.',
  description: 'Great idea & Creative Technology',
  openGraph: {
    title: 'Winways Inc.',
    description: 'Great idea & Creative Technology',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        {
          '--helvetica-font': helvetica.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        <OrganizationSchema />
        <link rel="shortcut icon" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />

        <link rel="preload" sizes="512x512" href="/favicon-512x512.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winways.kr/" />
        <meta property="og:title" content="Winways Inc." />
        <meta property="og:description" content="Great Idea & Creative Technology" />
        <meta property="og:image" content="/favicon-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <LoadingPage />
        <div className="scroll-progress origin-left h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-500 z-[1000] fixed top-0 left-0" />
      </body>
    </html>
  );
}
