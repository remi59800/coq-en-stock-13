'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';
import SocialIcon from './SocialIcon';

const links = [
  { href: '/', label: 'ACCUEIL' },
  { href: '/qui-sommes-nous', label: 'NOTRE HISTOIRE' },
  { href: '/notre-carte', label: 'MENU' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='relative h-20 flex items-center px-8 max-w-5xl mx-auto'>
        <div className='w-full flex justify-center sm:w-1/4 sm:block'>
          <Image
            src='/logo-coq.svg'
            alt='Logo Coq en stock'
            width={60}
            height={48}
          />
        </div>

        <nav className='hidden sm:flex justify-center sm:w-1/2 space-x-6'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-nunito text-sm text-primary whitespace-nowrap transition-opacity duration-300 ${
                pathname === href
                  ? 'font-black'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='hidden sm:flex w-1/4 justify-end space-x-2'>
          <SocialIcon
            href='https://www.facebook.com/profile.php?id=100090150523696'
            src='/icons/Facebook.svg'
            alt='Facebook'
          />
          <SocialIcon
            href='https://www.instagram.com/coqenstock_marseille/'
            src='/icons/Instagram.svg'
            alt='Instagram'
          />
        </div>
        <Burger open={open} setOpen={setOpen} />
      </header>
      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
}
