"use client"
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <SessionProvider>
    <nav >
      <Link href="/" className="link">홈</Link>
      <Link href="/list" className="link">목록</Link>
      <Link href="/write" className="link">글 작성</Link>
      <Link href="/about" className="link">About</Link>
    </nav>
    {children}
    </SessionProvider>
    </body>
    </html>
  );
}
