'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </motion.main>
  );
}
