import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import { Nunito, Poppins } from 'next/font/google';
import Footer from './components/Footer';

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
  title: 'Coq en stock',
  description:
    "Chez Coq en Stock, (re)découvrez l’amour du poulet et d'une cuisine gourmande avec des rôtisseries savoureuses et des plats traiteurs qui éveilleront vos papilles.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
