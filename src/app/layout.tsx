import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next.js Project Template",
  description:
    " Next.js 15 template featuring ESLint 9, Vitest, TypeScript, and Tailwind CSS with Turbopack ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
