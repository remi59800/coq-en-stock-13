'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'ACCUEIL' },
  { href: '/histoire', label: 'NOTRE HISTOIRE' },
  { href: '/menu', label: 'MENU' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='h-20 flex items-center px-8 max-w-5xl mx-auto'>
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
            className={`font-nunito text-sm text-primary whitespace-nowrap ${
              pathname === href ? 'font-black' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className='hidden sm:flex w-1/4 justify-end space-x-2'>
        <a
          href='https://www.facebook.com/profile.php?id=100090150523696'
          aria-label='Facebook'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/icons/Facebook.svg'
            alt='Facebook'
            width={30}
            height={30}
          />
        </a>
        <a
          href='https://www.instagram.com/coqenstock_marseille/'
          aria-label='Instagram'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/icons/Instagram.svg'
            alt='Instagram'
            width={30}
            height={30}
          />
        </a>
      </div>

      <button className='absolute right-8 sm:hidden'>
        <Image
          src='/icons/icon-burger-menu.svg'
          alt='Icone Burger Menu'
          width={25}
          height={25}
        />
      </button>
    </header>
  );
}
