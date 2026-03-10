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
        {children}
      </body>
    </html>
  );
}
