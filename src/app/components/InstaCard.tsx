'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface InstaCardProps {
  num: number;
  className?: string;
}

export default function InstaCard({ num, className = '' }: InstaCardProps) {
  const imgSrc = `/photos/accueil-insta-${num}${'.JPG'}`;

  return (
    <motion.a
      href='https://www.instagram.com/coqenstock_marseille/'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`overflow-hidden rounded-sm block w-full ${className}`}
    >
      <Image
        className='w-full h-auto object-cover aspect-square transition-all duration-500 hover:scale-110'
        src={imgSrc}
        alt={`Instagram post ${num}`}
        width={250}
        height={250}
      />
    </motion.a>
  );
}
