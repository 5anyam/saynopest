import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import React from 'react';

interface ServicesLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function ServicesLayout({ children }: ServicesLayoutProps) {
  const canonicalUrl = `https://www.saynopest.com/services/mosquitoes`;

  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body><Header/>{children}<Footer/></body>
    </html>
  );
}
