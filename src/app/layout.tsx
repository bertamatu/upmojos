import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import styles from "./page.module.css";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "UPMOJOS | Web Development & Digital Solutions",
    template: "%s | UPMOJOS"
  },
  description: "UPMOJOS - Professional web development, mobile applications, and digital solutions. Building innovative tech solutions with purpose.",
  keywords: ["web development", "mobile apps", "digital solutions", "tech partner", "full-stack development"],
  authors: [{ name: "Berta Matuliauskiene" }],
  creator: "Berta Matuliauskiene",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.upmojos.com",
    siteName: "UPMOJOS",
    title: "UPMOJOS | Web Development & Digital Solutions",
    description: "Professional web development and digital solutions. Building innovative tech solutions with purpose.",
  },
  twitter: {
    card: "summary",
    title: "UPMOJOS | Web Development & Digital Solutions",
    description: "Professional web development and digital solutions. Building innovative tech solutions with purpose.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className={styles.layout}>
          <Navigation />
          <main className={styles.main} id="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
