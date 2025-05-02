'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BurgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // 🚫 Empêcher le scroll du body
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('overflow-hidden');
    };
  }, [open, setOpen]);

  return (
    <div
      style={{ height: '100svh' }}
      className={`flex flex-col items-center justify-between bg-green transition-all duration-500 ease-in-out text-center p-8 fixed top-0 right-0 ${
        open
          ? 'translate-x-0 opacity-100 scale-100'
          : 'translate-x-full opacity-0 scale-100'
      } w-full sm:w-2/3 z-[10]`}
    >
      <Image
        src='/logo-coq.svg'
        className='py-14'
        alt='Logo Coq en stock'
        width={65}
        height={52}
      />

      <nav className='flex flex-col max-h-[500px] overflow-y-auto'>
        <Link
          href='/'
          onClick={handleClose}
          className='font-nunito text-xl uppercase py-4 font-bold tracking-widest text-[#0d0c1d] no-underline hover:text-[#343078] hover:font-extrabold transition-colors duration-300 sm:text-xl'
        >
          Accueil
        </Link>

        <Link
          href='/histoire'
          onClick={handleClose}
          className='font-nunito text-xl uppercase py-4 font-bold tracking-widest text-[#0d0c1d] no-underline hover:text-[#343078] hover:font-extrabold transition-colors duration-300 sm:text-xl'
        >
          Notre histoire
        </Link>

        <Link
          href='/menu'
          onClick={handleClose}
          className='font-nunito text-xl uppercase py-4 font-bold tracking-widest text-[#0d0c1d] no-underline hover:text-[#343078] hover:font-extrabold transition-colors duration-300 sm:text-xl'
        >
          Menu
        </Link>

        <Link
          href='/contact'
          onClick={handleClose}
          className='font-nunito text-xl uppercase py-4 font-bold tracking-widest text-[#0d0c1d] no-underline hover:text-[#343078] hover:font-extrabold transition-colors duration-300 sm:text-xl'
        >
          Contact
        </Link>
      </nav>

      <div className='py-14'>
        <div className='flex items-center space-x-6'>
          <a
            href='https://www.facebook.com/profile.php?id=100090150523696'
            aria-label='Facebook'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/Facebook.svg'
              alt='Facebook'
              width={35}
              height={35}
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
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
