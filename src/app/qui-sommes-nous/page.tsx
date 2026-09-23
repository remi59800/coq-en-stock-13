import Image from 'next/image';
import FadeIn from '../components/FadeIn';

export default function Histoire() {
  return (
    <>
      <div className='w-full pb-8 pt-6 sm:pt-3 px-6 max-w-3xl mx-auto text-primary'>
        {/* EN-TÊTE SOBRE */}
        <FadeIn direction='down'>
          <div className='text-center mb-10 relative'>
            <h1 className='text-xl sm:text-lg font-black uppercase relative inline-block tracking-[2px]'>
              DEUX CH&apos;TIS À MARSEILLE
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-green' />
            </h1>
          </div>
        </FadeIn>

        {/* CHAPEAU */}
        <FadeIn direction='up' delay={0.1}>
          <p className='text-center font-nunito text-sm leading-relaxed max-w-xl mx-auto mb-6'>
            Nous sommes Alexandre et Quentin ! Deux ch&apos;tis amis depuis le
            Lycée et passionnés de cuisine. Arrivés à Marseille en 2021, nous
            avons été immédiatement séduits par l&apos;atmosphère unique de la
            ville et son art de vivre. Ce coup de foudre nous a inspirés à y
            installer la boutique Coq en Stock.
          </p>
        </FadeIn>

        {/* DEUX PORTRAITS POLAROID */}
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <FadeIn direction='up' delay={0.1}>
            <div className='flex flex-col items-center'>
              <div className='w-full max-w-[240px] -rotate-1 bg-[#FAF5EC] p-2.5 shadow-md shadow-black/10'>
                <Image
                  className='w-full aspect-square object-cover object-top'
                  src='/photos/histoire-alex-v1.JPG'
                  alt='Alex, spécialiste en rôtisserie, formé par un maître rôtisseur de la Bresse'
                  width={500}
                  height={500}
                />
                <p className='text-center pt-3 pb-1 font-black uppercase tracking-[2px] text-sm'>
                  Alex
                </p>
              </div>
              <div className='relative max-w-[260px] mt-8 text-center'>
                <p className='relative font-nunito text-sm leading-relaxed text-primary'>
                  Formé par un maître rôtisseur de la Bresse, je m&apos;occupe
                  de la partie rôtisserie ainsi que de la partie grillades.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction='up' delay={0.1}>
            <div className='flex flex-col items-center pt-8 sm:pt-0'>
              <div className='w-full max-w-[240px] rotate-1 bg-[#FAF5EC] p-2.5 shadow-md shadow-black/10'>
                <Image
                  className='w-full aspect-square object-cover object-top'
                  src='/photos/histoire-quentin-v1.jpg'
                  alt='Quentin, boucher de formation, spécialiste des viandes et de la partie traiteur'
                  width={500}
                  height={500}
                />
                <p className='text-center pt-3 pb-1 font-black uppercase tracking-[2px] text-sm'>
                  Quentin
                </p>
              </div>
              <div className='relative max-w-[260px] mt-8 text-center'>
                <p className='relative font-nunito text-sm leading-relaxed text-primary'>
                  Boucher de formation, je m&apos;occupe de la partie viande et
                  également de la partie traiteur en respectant à la lettre les
                  recettes de ma grand-mère Mauricette.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* RÉCIT : MARSEILLE ET LA JOLIETTE, SUR LE MODÈLE "LA BOUTIQUE" */}
      <div className='w-full flex justify-center lg:pb-10'>
        <FadeIn duration={1} delay={0.2}>
          <div className='bg-green w-full max-w-5xl mx-auto transition-all duration-180 ease-in-out flex flex-col mm:flex-row items-center'>
            <div className='w-full mx-auto grid grid-cols-1 mm:grid-cols-2 items-center'>
              <Image
                className='w-full aspect-[4/3] object-cover max-h-[320px]'
                src='/photos/histoire-ces.png'
                alt='Vue de Marseille'
                width={800}
                height={600}
              />
              <div className='flex flex-col items-center px-8 pt-7 pb-9 mm:pt-0 mm:pb-0 text-primary'>
                <h2 className='text-center pb-4 font-black text-lg tracking-[2px]'>
                  LE CHOIX DE LA JOLIETTE
                </h2>
                <p className='text-center text-sm font-nunito'>
                  Nous souhaitions participer au renouveau du quartier de la
                  Joliette et ce si beau boulevard Haussmannien, rue de la
                  République : la bonne humeur légendaire des nordistes et de
                  bons petits plats nous ont semblé les ingrédients parfaits
                  pour lui insuffler une nouvelle dynamique.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
