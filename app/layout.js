import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "../context/CartContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhatBytes Shop",
  description: "E-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          <CartProvider>{children}</CartProvider>
        </Suspense>
        
      </body>
    </html>
  );
}
