'use client';

import React from 'react';

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className='absolute top-7 right-7 flex flex-col justify-around items-end w-6 h-6 bg-transparent border-none cursor-pointer z-20 focus:outline-none sm:hidden'
    >
      <span
        className={`block w-6 h-[2.5px] rounded bg-primary transition-all duration-300 origin-[1px] ${
          open ? 'rotate-45 translate-x-1' : 'rotate-0 translate-x-0'
        }`}
      />
      <span
        className={`block w-4 h-[2.5px] rounded bg-primary transition-all duration-300 origin-[1px] ${
          open ? 'opacity-0 translate-x-0' : 'opacity-100 translate-x-0'
        }`}
      />
      <span
        className={`block w-6 h-[2.5px] rounded bg-primary transition-all duration-300 origin-[1px] ${
          open ? '-rotate-45 translate-x-1' : 'rotate-0 translate-x-0'
        }`}
      />
    </button>
  );
};

export default Burger;
