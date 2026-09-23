import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import ChickenButton from '../components/ChickenButton';

export default function Menu() {
  return (
    <div className='w-full pb-6 pt-6 sm:pt-3 px-6 max-w-4xl mx-auto text-primary sm:mb-2'>
      {/* EN-TÊTE ÉPURÉ */}
      <FadeIn direction='down'>
        <div className='text-center mb-12 sm:mb-12 relative'>
          <h1 className='text-xl sm:text-lg font-black uppercase relative inline-block tracking-[2px]'>
            Notre Carte
            <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-green' />
          </h1>
        </div>
      </FadeIn>

      {/* GRILLE DU MENU (2 COLONNES RIGIDES DE MÊME HAUTEUR) */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 items-stretch sm:mb-6 mb-6'>
        {/* COLONNE 1 : RÔTISSERIE */}
        <FadeIn direction='up' delay={0.1} className='h-full'>
          <div className='h-full bg-green/30 p-6 sm:p-8 relative flex flex-col'>
            <div>
              <div className='flex items-center justify-between mb-4 border-b border-brown/20 h-[45px]'>
                <h2 className='font-black text-lg tracking-[2px] uppercase text-primary'>
                  Rôtisserie
                </h2>
                <Image
                  className='max-h-56 w-auto relative -top-1'
                  src='/icons/fried-chicken.png'
                  alt='coq-background-right'
                  width={35}
                  height={35}
                  priority
                />
              </div>

              {/* PLAT PRINCIPAL */}
              <div className='mb-6'>
                <div className='flex justify-between items-baseline mb-1'>
                  <h3 className='font-bold text-base sm:text-base'>
                    Poulet rôti fermier*
                  </h3>
                  <span className='font-black text-base sm:text-base text-primary ml-2'>
                    18,90 €
                  </span>
                </div>
                <p className='text-xs text-green font-bold tracking-wide uppercase mb-3'>
                  Label Rouge
                </p>

                {/* DÉCOUPES */}
                <div className='flex flex-wrap gap-2 text-xs font-nunito my-3'>
                  <span className='bg-background border border-green/50 bg-green/40 px-3 py-1 font-bold'>
                    Demi : <span className='text-primary'>9,95 €</span>
                  </span>
                  <span className='bg-background border border-green/50 bg-green/40 px-3 py-1 font-bold'>
                    Découpe : <span className='text-primary'>4,95 €</span>
                  </span>
                </div>
                <p className='text-[11px] font-nunito italic text-primary/60 mt-2'>
                  *Halal possible sur commande
                </p>
              </div>
            </div>

            {/* ACCOMPAGNEMENTS (ALIGNÉS EN BAS) */}
            <div>
              <hr className='border-dashed border-brown/20 mb-6' />
              <h4 className='font-black text-xs uppercase tracking-wider text-green mb-3'>
                Accompagnements
              </h4>
              <div className='space-y-3 font-nunito text-sm'>
                <div className='flex justify-between items-center'>
                  <span>Pommes de terre grenaille</span>
                  <span className='font-bold'>3,00 €</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span>Légumes de saison</span>
                  <span className='font-bold'>3,00 €</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* COLONNE 2 : FORMULES DU MIDI */}
        <FadeIn direction='up' delay={0.2} className='h-full'>
          <div className='h-full bg-green/30 p-6 sm:p-8 relative flex flex-col justify-between'>
            <div>
              <div className='flex items-center justify-between mb-4 border-b border-brown/20 h-[45px]'>
                <h2 className='font-black text-lg tracking-[2px] uppercase text-primary'>
                  Formules Midi
                </h2>
                <Image
                  className='max-h-56 w-auto relative -top-3'
                  src='/icons/healthy-food.png'
                  alt='coq-background-right'
                  width={35}
                  height={35}
                  priority
                />
              </div>

              <p className='text-xs font-nunito italic text-primary/70 mb-6'>
                Incluant 1 boisson + 1 dessert au choix
              </p>

              <div className='space-y-4 font-nunito text-sm'>
                <div className='pb-2.5 border-b border-dashed border-brown/20'>
                  <span className='block text-[11px] font-black uppercase tracking-wider text-green mb-1'>
                    Sandwichs
                  </span>
                  <div className='flex justify-between items-center py-0.5'>
                    <span>Sandwich poulet rôti</span>
                    <span className='font-bold'>9,90 €</span>
                  </div>
                  <div className='flex justify-between items-center py-0.5'>
                    <span>Sandwich filet mignon</span>
                    <span className='font-bold'>10,90 €</span>
                  </div>
                </div>

                <div className='pb-2.5 border-b border-dashed border-brown/20'>
                  <span className='block text-[11px] font-black uppercase tracking-wider text-green mb-1'>
                    Rôtisserie
                  </span>
                  <div className='flex justify-between items-center'>
                    <span>Morceau poulet rôti + pdt grenaille</span>
                    <span className='font-bold ml-2 shrink-0'>10,95 €</span>
                  </div>
                </div>

                <div className='pb-2.5 border-b border-dashed border-brown/20'>
                  <span className='block text-[11px] font-black uppercase tracking-wider text-green mb-1'>
                    Plat du jour
                  </span>
                  <div className='flex justify-between items-center'>
                    <span>Plat du jour au choix</span>
                    <span className='font-bold'>12,90 €</span>
                  </div>
                </div>

                <div>
                  <span className='block text-[11px] font-black uppercase tracking-wider text-green mb-1'>
                    Viande du jour
                  </span>
                  <div className='flex justify-between items-center'>
                    <span>Viande du jour + accompagnement</span>
                    <span className='font-bold ml-2 shrink-0'>13,90 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* SECTION TRAITEUR ET ÉVÉNEMENTS (BANNIÈRE RECTANGULAIRE) */}
      <FadeIn direction='up' delay={0.3}>
        <div className='bg-green p-6 sm:p-8 flex flex-col items-center justify-between text-center'>
          <div>
            <h3 className='font-black text-lg tracking-[2px] uppercase text-primary mb-4'>
              Événements
            </h3>
            <p className='text-sm font-nunito text-primary leading-relaxed'>
              Notre formule traiteur s’adapte entièrement à votre événement. Nos
              tarifs sont établis sur mesure, en fonction de vos demandes
              spécifiques, pour garantir une prestation parfaitement adaptée à
              vos besoins. Contactez-nous pour élaborer ensemble une offre
              personnalisée qui répondra à vos exigences.
            </p>
          </div>
          <ChickenButton
            text='NOUS CONTACTER'
            href='/contact'
            className='min-w-[186px] mb-2'
          />
        </div>
      </FadeIn>
    </div>
  );
}
