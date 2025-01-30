import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import styles from "./page.module.css";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.upmojos.com'),
  title: {
    default: "UPMOJOS | Digital Solutions & Web Development",
    template: "%s | UPMOJOS - Professional Digital Solutions"
  },
  description: "Transform your digital presence with UPMOJOS. Expert web development, mobile applications, and innovative digital solutions. Building purposeful tech solutions that make an impact.",
  keywords: [
    "web development",
    "mobile apps",
    "digital solutions",
    "tech partner",
    "full-stack development",
    "social media growth",
    "personal brand development",
    "professional web design",
    "custom software development",
    "responsive web design",
    "UI/UX design",
    "digital transformation"
  ],
  authors: [{ name: "Berta Matuliauskiene", url: "https://www.upmojos.com" }],
  creator: "Berta Matuliauskiene",
  publisher: "UPMOJOS",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.upmojos.com",
    siteName: "UPMOJOS",
    title: "UPMOJOS | Digital Solutions & Web Development",
    description: "Transform your digital presence with expert web development and innovative digital solutions. Building purposeful tech solutions that make an impact.",
  },
  twitter: {
    card: "summary",
    title: "UPMOJOS | Digital Solutions & Web Development",
    description: "Transform your digital presence with expert web development and innovative digital solutions. Building purposeful tech solutions that make an impact.",
    creator: "@upmojos",
    site: "@upmojos",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    'max-snippet': 200,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      noimageindex: false,
    },
  },
  category: 'technology',
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code when you have it
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'format-detection': 'telephone=no',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className={inter.className}>
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
