import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-primary text-background pt-5 pb-7 flex flex-col w-full items-center'>
      <div className='w-full max-w-5xl px-8'>
        <div className='py-4 flex justify-center md:justify-start'>
          <Image
            src='/logo-coq-blanc.svg'
            alt='Logo Coq en stock'
            width={60}
            height={48}
          />
        </div>

        <div className='flex flex-col items-center w-full md:flex-row md:justify-between md:items-start md:space-x-10'>
          <div className='flex items-center flex-col pb-4 md:items-start whitespace-nowrap'>
            <h2 className='font-black pb-2 text-base tracking-[2px]'>
              Contact
            </h2>
            <p className='text-sm font-nunito'>
              95 rue de la République - 13002 Marseille
            </p>
            <a href='tel:0491911840' className='text-sm font-nunito'>
              04 91 91 18 40
            </a>
            <a
              href='mailto:coqenstock13@gmail.com'
              className='text-sm font-nunito'
            >
              coqenstock13@gmail.com
            </a>
          </div>

          <div className='flex items-center flex-col pb-6 md:pb-4 md:items-start whitespace-nowrap'>
            <h2 className='font-black pb-2 text-base tracking-[2px]'>
              Horaires d&apos;ouverture
            </h2>
            <div className='flex space-x-8'>
              <div className='flex flex-col'>
                <p className='text-sm font-nunito'>Lundi au vendredi</p>
                <p className='text-sm font-nunito'>10h - 19h30</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-nunito'>Samedi</p>
                <p className='text-sm font-nunito'>10h - 19h</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-nunito'>Dimanche</p>
                <p className='text-sm font-nunito'>Fermé</p>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:flex md:items-center md:flex-col md:pb-6 md:items-start md:whitespace-nowrap'>
            <h2 className='font-black pb-4 tracking-[2px]'>Réseaux sociaux</h2>
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
        <p className='text-xs text-center font-nunito'>
          © 2025 - Rémi Ménart - Creative developer - remimenart@gmail.com
        </p>
      </div>
    </footer>
  );
}
