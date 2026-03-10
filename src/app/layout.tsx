import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiaoke Chen | Portfolio",
  description: "Full Stack Developer & Indie Game Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 背景彩色光斑 */}
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
        <div className="bg-blob blob-4" />
        {children}
      </body>
    </html>
  );
}
