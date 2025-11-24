import Image from 'next/image';

export default function Histoire() {
  return (
    <>
      <div className='relative w-full bg-green flex md:max-h-[450px]'>
        <div className='absolute w-full h-full flex items-center justify-between'>
          <Image
            className='absolute right-[0] opacity-10 h-[80%] max-h-56 w-auto'
            src='/coq-bg-right.png'
            alt='coq-background-right'
            width={170}
            height={100}
            priority
          />
          <Image
            className='absolute left-[0] opacity-10 h-[80%] max-h-56 w-auto hidden mm:block'
            src='/coq-bg-left.png'
            alt='coq-background-left'
            width={170}
            height={100}
            priority
          />
        </div>

        <div className='flex flex-col items-center py-9 px-8 text-primary max-w-3xl mx-auto relative'>
          <h1 className='text-center pb-4 font-black text-lg tracking-[3px]'>
            QUI SOMMES NOUS ?
          </h1>
          <p className='text-center text-sm font-nunito pb-8'>
            Nous sommes Alexandre et Quentin ! Deux ch’tis amis depuis le Lycée
            et passionnés de cuisine. Il nous fallait un endroit chaleureux,
            ensoleillé avec de bons produits frais à proximité pour créer notre
            boutique et laisser s’exprimer notre passion... Quoi de mieux que
            Marseille ?
          </p>
          <div className='grid grid-cols-2 gap-6 md:gap-8 px-2 items-start justify-items-center'>
            <div className='flex flex-col md:relative'>
              <Image
                className='w-full object-cover object-top aspect-[1/1]'
                src='/photos/histoire-alex-v2.JPG'
                alt='Alex, spécialiste en rôtisserie, formé par un maître rôtisseur de la Bresse'
                width={500}
                height={500}
              />
              <h2 className='font-nunito text-center font-black pt-6 md:hidden'>
                ALEX
              </h2>
            </div>

            <div className='flex flex-col md:relative'>
              <Image
                className='w-full object-cover object-top aspect-[1/1]'
                src='/photos/histoire-quentin-v2.jpg'
                alt='Quentin, boucher de formation, spécialiste des viandes et de la partie traiteur'
                width={500}
                height={500}
              />
              <h2 className='font-nunito text-center font-black pt-6 md:hidden'>
                QUENTIN
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='hidden md:flex md:justify-center md:gap-8 max-w-2xl mx-auto py-8 mt-9'>
          <div className='flex flex-col items-center w-full max-w-[320px]'>
            <h2 className='font-nunito text-center font-black pb-4'>ALEX</h2>
            <p className='text-center text-sm font-nunito'>
              Formé par un maître rôtisseur de la Bresse, je m&apos;occupe de la
              partie rôtisserie ainsi que de la partie grillades.
            </p>
          </div>

          <div className='flex flex-col items-center w-full max-w-[320px]'>
            <h2 className='font-nunito text-center font-black pb-4'>QUENTIN</h2>
            <p className='text-center text-sm font-nunito'>
              Boucher de formation, je m&apos;occupe de la partie viande et
              également de la partie traiteur en respectant à la lettre les
              recettes de ma grand-mère Mauricette.
            </p>
          </div>
        </div>

        <div className='w-full md:max-w-5xl md:px-8 mx-auto flex flex-col items-center '>
          <div className='w-full mx-auto grid grid-cols-1 items-center'>
            <Image
              className='w-full h-auto object-cover object-center mm:max-h-[400px]'
              src='/photos/histoire-marseille-v2.jpg'
              alt='Vue de Marseille'
              width={1200}
              height={800}
              loading='lazy'
            />
            <div className='flex flex-col items-center md:items-start px-8 md:px-0 pt-9 text-primary'>
              <h2 className='text-center md:text-left pb-4 font-black text-lg tracking-[3px]'>
                DEUX NORDISTES À MARSEILLE
              </h2>
              <p className='text-center md:text-left text-sm font-nunito'>
                Arrivés à Marseille en 2021, nous avons été immédiatement
                séduits par l&apos;atmosphère unique de la ville et son art de
                vivre. Ce coup de foudre nous a inspirés à y installer la
                boutique Coq en Stock. Découvrez comment notre passion pour la
                ville se reflète dans nos saveurs et notre engagement à partager
                cette histoire d&apos;amour avec vous.
              </p>
            </div>
            <div className='flex flex-col items-center md:items-start px-8 md:px-0 pt-7 pb-9 text-primary'>
              <h2 className='text-center md:text-left pb-4 font-black text-lg tracking-[3px]'>
                POURQUOI LE QUARTIER DE LA JOLIETTE ?
              </h2>
              <p className='text-center md:text-left text-sm font-nunito'>
                Nous souhaitions participer au renouveau de ce si beau boulevard
                Haussmannien, qui après de nombreux changements ces dernières
                années, était victime d’une mauvaise réputation auprès des
                Marseillais. La bonne humeur légendaire des nordistes et des
                bons petits plats sont les ingrédients parfaits pour insuffler
                une nouvelle dynamique à ce si beau boulevard, n&apos;est-ce pas
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
