import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import ChickenButton from '../components/ChickenButton';

export default function Menu() {
  return (
    <div className='relative w-full flex'>
      <div className='absolute w-full h-full flex items-center justify-between pointer-events-none'>
        <Image
          className='absolute right-[0] opacity-10 h-[80%] max-h-56 w-auto hidden md:block'
          src='/coq-bg-right.png'
          alt='coq-background-right'
          width={170}
          height={100}
          priority
        />
        <Image
          className='absolute left-[0] opacity-10 h-[80%] max-h-56 w-auto hidden md:block'
          src='/coq-bg-left.png'
          alt='coq-background-left'
          width={170}
          height={100}
          priority
        />
      </div>

      <div className='flex flex-col items-center text-primary max-w-3xl mx-auto'>
        <div className='pb-8 pt-3'>
          <h2 className='text-center mx-auto font-black text-lg pb-3 tracking-[3px] border-b border-brown w-[180px]'>
            RÔTISSERIE
          </h2>
          <p className='text-center text-sm font-nunito pt-3'>
            Poulet rôti fermier* - label rouge<br></br>Entier : 18,90€ | Demi :
            9,95€ | Découpe : 4,95€
          </p>
          <p className='text-center text-sm font-nunito italic'>
            *Halal possible sur commande
          </p>
          <p className='text-center text-sm font-nunito pt-4'>
            Pommes de terre grenaille : 3€<br></br>
            Légumes de saison : 3€
          </p>
        </div>

        <div className='w-[85%] mx-auto max-w-lg'>
          <FadeIn direction='up' delay={0.1}>
            <div className='border border-brown py-8 sm:py-12 relative'>
              <div className='absolute top-0 left-0 right-0 bottom-0 border border-dashed border-brown m-3'></div>

              <div className='flex flex-col items-center'>
                <h2 className='w-full text-center font-black text-lg pb-2 tracking-[3px]'>
                  FORMULES DU MIDI
                </h2>
                <p className='text-center text-sm font-nunito py-2 pb-4'>
                  Incluant 1 boisson + 1 dessert
                </p>

                <h3 className='w-full text-center font-black pb-2 tracking-[2.5px]'>
                  SANDWICHS
                </h3>
                <div className='flex justify-between'>
                  <p className='text-left text-sm font-nunito w-[180px]'>
                    Sandwich poulet rôti
                    <br />
                    Sandwich filet mignon
                  </p>
                  <div className='text-right text-sm font-nunito w-[40px]'>
                    <p>9,90€</p>
                    <p>10,90€</p>
                  </div>
                </div>

                <h3 className='w-full text-center font-black pt-2 tracking-[2.5px]'>
                  RÔTISSERIE
                </h3>
                <div className='flex justify-between'>
                  <p className='text-left text-sm font-nunito pt-2 w-[180px]'>
                    Morceau de poulet rôti + pommes de terre grenaille
                  </p>
                  <p className='text-right text-sm font-nunito pt-2 w-[40px]'>
                    10,95€
                  </p>
                </div>

                <h3 className='w-full text-center font-black pt-2 tracking-[2.5px]'>
                  PLAT DU JOUR
                </h3>
                <div className='flex justify-between'>
                  <p className='text-left text-sm font-nunito pt-2 w-[180px]'>
                    Plat du jour au choix
                  </p>
                  <p className='text-right text-sm font-nunito pt-2 w-[40px]'>
                    12,90€
                  </p>
                </div>

                <h3 className='w-full text-center font-black pt-2 tracking-[2.5px]'>
                  VIANDE DU JOUR
                </h3>
                <div className='flex justify-between'>
                  <p className='text-left text-sm font-nunito pt-2 w-[180px]'>
                    Viande du jour + accompagnement traiteur
                  </p>
                  <p className='text-right text-sm font-nunito pt-2 w-[40px]'>
                    13,90€
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn duration={1}>
          <div className='flex flex-col items-center pt-8 mb-10'>
            <h2 className='text-center font-black text-lg pb-2 tracking-[3px]'>
              ÉVÉNEMENTS
            </h2>
            <p className='text-center text-sm font-nunito pt-2 w-[80%]'>
              Notre formule traiteur s’adapte entièrement à votre événement. Nos
              tarifs sont établis sur mesure, en fonction de vos demandes
              spécifiques, pour garantir une prestation parfaitement adaptée à
              vos besoins. Contactez-nous pour élaborer ensemble une offre
              personnalisée qui répondra à vos exigences.
            </p>
            <ChickenButton text='NOUS CONTACTER' href='/contact' />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
