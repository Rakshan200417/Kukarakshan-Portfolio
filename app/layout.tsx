import type { Metadata } from 'next';
import { Anton, Plus_Jakarta_Sans, Space_Grotesk, Syne, Alex_Brush } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Panchadsaram Kukarakshan | Software Engineer & Full Stack Developer',
  description: 'Portfolio of Panchadsaram Kukarakshan — Software Engineer Undergraduate at NSBM Green University, Full Stack Developer, AI & Three.js 3D Builder.',
  icons: {
    icon: '/public/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${syne.variable} ${alexBrush.variable} scroll-smooth`}>
      <body className="bg-mono-950 text-mono-100 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
