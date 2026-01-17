import Image from 'next/image';
import Link from 'next/link';

interface ChickenButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function ChickenButton({
  text,
  href,
  className = '',
}: ChickenButtonProps) {
  return (
    <Link
      href={href}
      className={`group mt-6 font-nunito text-sm border border-primary px-4 py-2 
       inline-flex items-center transition-all duration-300 ease-out
       hover:scale-[1.02]
       active:scale-95 ${className}`}
    >
      <div className='flex flex-row items-center'>
        <Image
          className='animate-picorage transition-all duration-300'
          src='/icons/chicken-CES.svg'
          alt='icon-poulet'
          width={15}
          height={15}
          priority
        />
        <p className='pl-2.5 uppercase'>{text}</p>
      </div>
    </Link>
  );
}
