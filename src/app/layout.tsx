import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import { Nunito, Poppins } from 'next/font/google';
import Footer from './components/Footer';
import TransitionLayout from './components/TransitionLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/next';

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
  title: 'Coq en stock : Rôtisserie & traiteur | Marseille',
  description:
    'Coq en Stock - rôtisserie, boucher & traiteur à Marseille. Poulet Label Rouge, plats gourmands et épicerie fine. Commandez dès maintenant !',
  icons: {
    icon: '/icons/chicken-CES.svg',
  },
  metadataBase: new URL('https://www.coqenstock.com'),
  alternates: {
    canonical: 'https://www.coqenstock.com/',
  },
  openGraph: {
    title: 'Rôtisserie - Boucher - traiteur | Marseille (13) | Coq en Stock',
    description:
      'Coq en Stock - rôtisserie, boucher & traiteur à Marseille.  Poulet Label Rouge, plats gourmands et épicerie fine. Commandez dès maintenant !',
    url: 'https://www.coqenstock.com',
    siteName: 'Coq en Stock',
    images: [
      {
        url: 'https://www.coqenstock.com/logo-coqenstock.jpg',
        width: 800,
        height: 600,
        alt: 'Coq en Stock - Rôtisserie et Marseille',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rôtisserie - Boucher - traiteur | Marseille (13) | Coq en Stock',
    description:
      'Coq en Stock - rôtisserie, boucher & traiteur à Marseille. Poulet Label Rouge, plats gourmands et épicerie fine. Commandez dès maintenant !',
    images: ['https://www.coqenstock.com/logo-coqenstock.jpg'],
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
        <ToastContainer position='top-right' />
        <Analytics />
      </body>
    </html>
  );
}
