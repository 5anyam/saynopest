import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

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
        url: "/SayNoPest-logo.svg", // Place this image in /public
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
    images: ["/SayNoPest-logo.svg"],
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
      <body
        className={`${inter.className}
        antialiased
        overflow-y-scroll
        w-screen
        overflow-x-hidden
      `}>
        <meta name="google-site-verification" content="SrhB-NOlpPpJPL5wP3FpRwuT1yDTE2e0SdFOtcrkfa0" />
        <div className="w-screen p-4 md:p-10 mx-auto bg-white min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
