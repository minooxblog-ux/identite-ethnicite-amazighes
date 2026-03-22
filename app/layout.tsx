import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#d48534',
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: 'Amazigh Identity: Digital Construction of Cultural Heritage',
  description: 'An academic exploration of how digital technologies are reshaping Amazigh cultural identity and heritage preservation in the modern era.',
  keywords: ['Amazigh', 'Berber', 'cultural identity', 'digital heritage', 'North Africa', 'cultural preservation', 'digital transformation'],
  authors: [{ name: 'Brahim' }],
  creator: 'Brahim',
  publisher: 'Brahim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://identiteamazighe.vercel.app'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Amazigh Identity: Digital Construction of Cultural Heritage',
    description: 'An academic exploration of how digital technologies are reshaping Amazigh cultural identity and heritage preservation in the modern era.',
    url: 'https://identiteamazighe.vercel.app',
    siteName: 'Amazigh Identity',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: '2024-01-01T00:00:00.000Z',
    authors: ['Brahim'],
    tags: ['Amazigh', 'Berber', 'cultural identity', 'digital heritage', 'North Africa'],
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazigh Identity: Digital Construction of Cultural Heritage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazigh Identity: Digital Construction of Cultural Heritage',
    description: 'An academic exploration of how digital technologies are reshaping Amazigh cultural identity and heritage preservation in the modern era.',
    creator: '@brahim',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Amazigh Identity: Digital Construction of Cultural Heritage",
              "description": "An academic exploration of how digital technologies are reshaping Amazigh cultural identity and heritage preservation in the modern era.",
              "author": {
                "@type": "Person",
                "name": "Brahim"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Amazigh Identity Project"
              },
              "datePublished": "2024-01-01T00:00:00.000Z",
              "dateModified": "2024-01-01T00:00:00.000Z",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://identiteamazighe.vercel.app"
              },
              "articleSection": "Cultural Studies",
              "keywords": ["Amazigh", "Berber", "cultural identity", "digital heritage", "North Africa"],
              "image": "https://identiteamazighe.vercel.app/og-image.jpg",
              "url": "https://identiteamazighe.vercel.app"
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}