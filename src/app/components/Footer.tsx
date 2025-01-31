import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-primary text-background pt-5 pb-7 flex flex-col w-full items-center'>
      <div className='w-full max-w-5xl px-8'>
        <div className='py-4 flex justify-center md:justify-start'>
          <Image
            src='/logo-c-e-s-blanc.svg'
            alt='Logo Coq en stock'
            width={60}
            height={48}
          />
        </div>

        <div className='flex flex-col items-center w-full md:flex-row md:justify-between md:items-start md:space-x-10'>
          <div className='flex items-center flex-col pb-4 md:items-start whitespace-nowrap'>
            <h2 className='font-black pb-2 text-base'>Contact</h2>
            <p className='text-sm'>95 rue de la République - 13002 Marseille</p>
            <p className='text-sm'>04 91 91 18 40</p>
            <p className='text-sm'>coqenstock13@gmail.com</p>
          </div>

          <div className='flex items-center flex-col pb-4 md:items-start whitespace-nowrap'>
            <h2 className='font-black pb-2 text-base'>
              Horaires d&apos;ouverture
            </h2>
            <div className='flex space-x-8 pb-4'>
              <div className='flex flex-col'>
                <p className='text-sm'>Lundi au vendredi</p>
                <p className='text-sm'>10h - 19h30</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm'>Samedi</p>
                <p className='text-sm'>10h - 19h</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm'>Dimanche</p>
                <p className='text-sm'>Fermé</p>
              </div>
            </div>
          </div>
          <div className='flex items-center flex-col pb-9 md:items-start whitespace-nowrap'>
            <h2 className='font-black pb-4'>Réseaux sociaux</h2>
            <div className='flex items-center space-x-3'>
              <a
                href='https://www.facebook.com/profile.php?id=100090150523696'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/icons/Facebook-blanc.svg'
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
                  src='/icons/Instagram-blanc.svg'
                  alt='Instagram'
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <p className='text-xs text-center'>
          © 2025 - Rémi Ménart - Développeur web
        </p>
      </div>
    </footer>
  );
}
