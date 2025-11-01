import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site.config';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: `${siteConfig.author.name} | Desenvolvedor Full Stack`,
    template: `%s | Desenvolvedor Full Stack`,
  },
  description: siteConfig.site.description,
  keywords: [
    'desenvolvedor',
    'full stack',
    'React',
    'Next.js',
    'React Native',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'portfólio',
    'desenvolvedor frontend',
    'desenvolvedor backend',
    siteConfig.author.name,
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.githubUrl,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.site.url,
    title: `${siteConfig.author.name} | Desenvolvedor Full Stack`,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} - Desenvolvedor Full Stack`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.author.name} | Desenvolvedor Full Stack`,
    description: siteConfig.site.description,
    creator: `@${siteConfig.social.github}`,
    images: ['/opengraph-image'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE!,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
