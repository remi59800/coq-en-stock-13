import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import { Nunito, Poppins } from 'next/font/google';
import Footer from './components/Footer';
import TransitionLayout from './components/TransitionLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  title: 'Artisan boucher et traiteur | Marseille (13) | Coq en Stock',
  description:
    'Coq en Stock vous offre une gamme complète de produits de qualité supérieure, avec des viandes labelisées et Label Rouge à Marseille. Poulet rôti, plats gourmands et épicerie fine disponibles dès maintenant !',
  icons: {
    icon: '/icons/chicken-CES.svg',
  },
  metadataBase: new URL('https://www.coq-en-stock.com'),
  alternates: {
    canonical: 'https://www.coq-en-stock.com/',
  },
  openGraph: {
    title: 'Artisan boucher et traiteur | Marseille (13) | Coq en Stock',
    description:
      'Coq en Stock vous offre une gamme complète de produits de qualité supérieure, avec des viandes labelisées et Label Rouge à Marseille.',
    url: 'https://www.coq-en-stock.com',
    siteName: 'Coq en Stock',
    images: [
      {
        url: 'https://www.coq-en-stock.com/logo-coq-en-stock.jpeg',
        width: 800,
        height: 600,
        alt: 'Coq en Stock - Boucher et Traiteur Marseille',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artisan boucher et traiteur | Marseille (13) | Coq en Stock',
    description:
      'Coq en Stock vous offre une gamme complète de produits de qualité supérieure, avec des viandes labelisées et Label Rouge à Marseille.',
    images: ['https://www.coq-en-stock.com/logo-coq-en-stock.jpeg'],
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
      </body>
    </html>
  );
}
