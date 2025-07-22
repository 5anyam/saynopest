
import { Header } from '@/components/header/header';
import React from 'react';

interface ServicesLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function ServicesLayout({ children }: ServicesLayoutProps) {
  const canonicalUrl = `https://www.saynopest.com/services/beetle`;

  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content="Beetles are bugs with tough shells that you can find crawling around almost anywhere, from woods to your own backyard."/>
      </head>
      <body><Header/>{children}</body>
    </html>
  );
}
