import Image from 'next/image';

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={alt}
      target='_blank'
      rel='noopener noreferrer'
      className='group'
    >
      <Image
        className='transition-all duration-300 ease-out 
group-hover:scale-110 group-hover:-translate-y-1'
        src={src}
        alt={alt}
        width={30}
        height={30}
      />
    </a>
  );
}
