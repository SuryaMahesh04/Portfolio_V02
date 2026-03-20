import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const viewport = {
  themeColor: '#050505',
};

export const metadata: Metadata = {
  title: {
    default: 'Guduri Surya Mahesh | Full-Stack Engineer',
    template: '%s | Guduri Surya Mahesh'
  },
  description: 'Guduri Surya Mahesh is a Full-Stack Engineer, Systems Architect, and AI Integration Specialist. Building highly reliable software systems from backend infrastructure to front-end experiences.',
  keywords: ['Guduri Surya Mahesh', 'Surya Mahesh', 'Guduri', 'Full Stack Engineer', 'Systems Architect', 'React', 'Next.js', 'Developer Portfolio'],
  authors: [{ name: 'Guduri Surya Mahesh', url: 'https://github.com/SuryaMahesh04' }],
  creator: 'Guduri Surya Mahesh',
  metadataBase: new URL('https://surya-mahesh-profile.vercel.app'), // Replace with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Guduri Surya Mahesh | Full-Stack Engineer',
    description: 'Portfolio of Guduri Surya Mahesh. Building highly reliable software systems from backend infrastructure to front-end experiences.',
    siteName: 'Guduri Surya Mahesh Portfolio',
    images: [
      {
        url: '/Image.png',
        width: 800,
        height: 800,
        alt: 'Guduri Surya Mahesh Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guduri Surya Mahesh | Full-Stack Engineer',
    description: 'Building highly reliable software systems from backend infrastructure to front-end experiences.',
    images: ['/Image.png'],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-green-500/30">
        {children}
      </body>
    </html>
  );
}
