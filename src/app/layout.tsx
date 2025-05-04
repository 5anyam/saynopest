import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Say No Pest",
  description: "Your go to best pest control companies across US.",
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
      `}>
        <div className="max-w-screen overflow-x-hidden p-4 md:p-10 mx-auto bg-white min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
