import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Script from "next/script";


import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })




export const metadata: Metadata = {
  title: "Say No Pest",
  description: "Your go to best pest control companies across U.S.",
  openGraph: {
    title: "Say No Pest",
    description: "Top pest control services across the U.S.",
    url: "https://saynopest.com",
    siteName: "Say No Pest",
    images: [
      {
        url: "/saynopest-logo.png", // Place this image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Say No Pest",
    description: "Your go to best pest control companies across U.S.",
    images: ["/saynopest-logo.png"],
  },
  metadataBase: new URL("https://saynopest.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
     <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/5f6936e797dbab1bcbc19be4/script.js"></Script>
     <meta name="google-adsense-account" content="ca-pub-7212342270102504"/>
  <link rel="canonical" href="https://www.saynopest.com/" />
  
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-8BRKYL2QR2"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8BRKYL2QR2');
    `}
  </Script>
</head>
      <body
        className={`${inter.className}
        antialiased
        overflow-y-scroll
        w-full
        overflow-x-hidden
      `}>
        <meta name="google-site-verification" content="SrhB-NOlpPpJPL5wP3FpRwuT1yDTE2e0SdFOtcrkfa0" />
        <div className="w-screen p-4 md:p-10 mx-auto bg-white">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
