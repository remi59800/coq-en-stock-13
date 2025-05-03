import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import { Nunito, Poppins } from 'next/font/google';
import Footer from './components/Footer';
import TransitionLayout from './components/TransitionLayout';

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coq en Stock - Rôtisserie & Traiteur à Marseille',
  description:
    'Coq en Stock, rôtisserie & traiteur à Marseille. Poulet Label Rouge, plats gourmands et épicerie fine. Commandez dès maintenant !',
  icons: {
    icon: '/icons/chicken-CES.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body
        className={`${nunito.variable} ${poppins.variable} antialiased bg-background`}
      >
        <Header />
        <TransitionLayout>{children}</TransitionLayout>
        <Footer />
      </body>
    </html>
  );
}
