import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import iconTab from "@/public/assets/ynf-logo.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This page containe a short description about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/ynf-logo.png"
          type="png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
