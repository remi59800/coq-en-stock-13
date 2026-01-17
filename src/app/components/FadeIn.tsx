'use client';

import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'none',
  duration = 0.6,
  className = '',
}: FadeInProps) {
  const yOffset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.1, // DÉCLENCHE l'animation dès que 10% du bloc est visible (important pour mobile)
        margin: '0px 0px -50px 0px', // L'animation part un peu avant que le bloc n'entre totalement
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
