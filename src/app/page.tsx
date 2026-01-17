import Image from 'next/image';
import FadeIn from './components/FadeIn';
import InstaCard from './components/InstaCard';
import ChickenButton from './components/ChickenButton';

export default function Home() {
  return (
    <div className='flex flex-col items-center mx-auto w-full overflow-hidden'>
      <div className='relative w-full bg-green py-9 flex items-center'>
        <Image
          className='absolute left-[0] opacity-10 h-[80%] w-auto hidden sm:block'
          src='/coq-bg-left.png'
          alt='coq-background-left'
          width={170}
          height={100}
          priority
        />
        <Image
          className='absolute right-[0] opacity-10 h-[80%] max-h-56 w-auto'
          src='/coq-bg-right.png'
          alt='coq-background-right'
          width={170}
          height={100}
          priority
        />
        <div className='flex flex-col items-center px-8 text-primary max-w-3xl mx-auto relative'>
          <h1 className='text-center pb-4 font-black text-lg tracking-[3px]'>
            L’AMOUR DU POULET ET DE LA CUISINE
          </h1>
          <p className='text-center text-sm font-nunito'>
            Vous aimez titiller vos papilles avec de bons produits locaux ? Chez
            Coq en Stock, vous trouverez tout ce dont vous avez besoin pour vous
            régaler : nous vous proposons une sélection de produits de qualité
            allant de la rôtisserie aux plats traiteurs ainsi qu’un espace
            épicerie fine... <br></br>
            <br></br>
            <strong className='font-bold'>On vous attend !</strong>
          </p>
          <ChickenButton text='Découvrir notre carte' href='/notre-carte' />
        </div>
      </div>

      <div className='grid grid-cols-1 mm:grid-cols-3 gap-8 px-8 py-10 text-primary w-full max-w-5xl mx-auto'>
        <FadeIn direction='up' delay={0.1}>
          <div className='flex flex-col items-center w-full'>
            <Image
              className='pb-2 h-[300px] mm:h-[200px] object-cover w-full'
              src='/photos/accueil-1-v1.jpg'
              alt='photo-rotisserie'
              width={450}
              height={250}
              priority
            />
            <div className='flex flex-row items-center'>
              <h2 className='text-center py-4 font-black text-lg tracking-[3px] pr-2'>
                RÔTISSERIE
              </h2>
              <Image
                className='py-2 w-[57px] h-[57px]'
                src='/icons/Logo-label-rouge.svg'
                alt='logo label rouge'
                width={450}
                height={250}
                priority
              />
            </div>
            <p className='text-center text-sm font-nunito'>
              Chez Coq en Stock, nous sommes fiers de sélectionner pour vous des
              volailles fermières Label Rouge, préparées avec des ingrédients
              frais et de qualité issus de producteurs locaux. Thym, ail,
              citron, huile d’olive... des saveurs qui sentent bon le sud pour
              sublimer votre poulet !
            </p>
          </div>
        </FadeIn>

        <FadeIn direction='up' delay={0.1}>
          <div className='flex flex-col items-center w-full'>
            <Image
              className='pb-2 h-[300px] mm:h-[200px] object-cover object-top w-full'
              src='/photos/accueil-2-v1.JPG'
              alt='photo-traiteur'
              width={450}
              height={250}
              priority
            />
            <h2 className='text-center py-4 font-black text-lg tracking-[3px]'>
              TRAITEUR
            </h2>
            <p className='text-center text-sm font-nunito'>
              Pour votre pause déjeuner ou votre repas du soir, Coq en stock
              propose en boutique un large choix de plats gourmands et de
              saison, à savourer seul ou à partager en famille.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction='up' delay={0.1}>
          <div className='flex flex-col items-center w-full'>
            <Image
              className='pb-2 h-[300px] mm:h-[200px] object-cover w-full'
              src='/photos/accueil-3-v1.jpeg'
              alt='photo-evenements'
              width={300}
              height={150}
              priority
            />
            <h2 className='text-center py-4 font-black text-lg tracking-[3px]'>
              ÉVÉNEMENTS
            </h2>
            <p className='text-center text-sm font-nunito'>
              Que ce soit pour un repas d’entreprise ou une célébration entre
              amis, notre service traiteur répond à toutes vos envies. Avec des
              menus variés et adaptés à chaque occasion, offrez à vos invités
              une expérience culinaire sur mesure, alliant plaisir et qualité !
            </p>
          </div>
        </FadeIn>
      </div>

      <div className='bg-green w-full'>
        <FadeIn duration={1} delay={0.2}>
          <div className='w-full max-w-5xl mx-auto transition-all duration-180 ease-in-out flex flex-col mm:flex-row items-center lg:pl-8'>
            <div className='w-full mx-auto grid grid-cols-1 mm:grid-cols-2 items-center'>
              <Image
                className='w-full h-auto object-cover'
                src='/photos/accueil-4-v1.JPG'
                alt='photo-boutique'
                width={800}
                height={600}
              />
              <div className='flex flex-col items-center px-8 pt-7 pb-9 mm:pt-0 mm:pb-0 text-primary'>
                <h2 className='text-center pb-4 font-black text-lg tracking-[3px]'>
                  LA BOUTIQUE
                </h2>
                <p className='text-center text-sm font-nunito'>
                  Venez nous rendre visite à Marseille, au cœur du quartier de
                  la Joliette, dans notre boutique aux inspirations
                  Méditerranéennes.
                  <br />
                  <br />
                  Découvrez nos espaces dédiés : rôtisserie, espace traiteur,
                  cave à vins et épicerie fine. Une immersion gourmande, où
                  chaque coin révèle une facette de la Méditerranée !
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className='py-9 max-w-4xl'>
        <FadeIn duration={0.8} delay={0.3}>
          <div className='flex flex-col items-center px-8 text-primary'>
            <a
              href='https://www.instagram.com/coqenstock_marseille/'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center'
            >
              <h2 className='text-center pb-4 font-black text-lg tracking-[3px]'>
                SUIVEZ-NOUS @COQENSTOCK_MARSEILLE
              </h2>
            </a>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 py-2 px-2 place-items-center'>
              <InstaCard num={1} />
              <InstaCard num={2} />
              <InstaCard num={3} className='hidden sm:flex justify-center' />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
