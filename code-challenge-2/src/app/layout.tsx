import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ChakraUIProvider } from "@/chakra-ui/chakra-provider"

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "X Interior",
  description: "Make your home more beautiful with our interior",
  openGraph: {
    images: ['/images/banner.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ChakraUIProvider>
          <Navbar />
          <Container
            minH={'100vh'}
            size={{base: 'base', md: 'md', lg: 'xl'}}>
            {children}
          </Container>
          <Footer />
        </ChakraUIProvider>
      </body>
    </html>
  );
}
