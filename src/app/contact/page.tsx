import FadeIn from '../components/FadeIn';
import FormSendEmail from '../components/FormSendEmail';
import Map from '../components/Map';
import SubwayIcon from '@mui/icons-material/Subway';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TramIcon from '@mui/icons-material/Tram';

export default function Contact() {
  return (
    <div>
      <div className='flex flex-col items-center text-primary max-w-3xl mx-auto px-8 pt-6 sm:pt-3'>
        <FadeIn direction='down'>
          <div className='text-center mb-10 relative'>
            <h1 className='text-xl sm:text-lg font-black uppercase relative inline-block tracking-[2px]'>
              À vos commandes !
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-green' />
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className='text-center text-sm font-nunito pb-2'>
            Contactez-nous pour vos commandes ou toute demande de devis pour vos
            événements traiteurs par téléphone au{' '}
            <a href='tel:0491911840' className='font-bold'>
              04 91 91 18 40
            </a>
            .
          </p>
          <p className='text-center text-sm font-nunito pb-2'>
            Vous pouvez également nous écrire via le formulaire ci-dessous ou à
            l’adresse{' '}
            <a
              href='mailto:coqenstock13&#64;gmail&#46;com'
              className='font-bold'
            >
              coqenstock13&#64;gmail&#46;com
            </a>{' '}
            pour toute question ou demande de devis. Nous vous répondrons
            rapidement avec toutes les informations nécessaires.
          </p>
          <p className='text-center text-sm font-nunito pb-8'>
            Et bien sûr, n’hésitez pas à venir nous rendre visite sur place au
            <strong> 95 rue de la République – 13002 Marseille</strong>, nous
            vous recevrons avec plaisir !
          </p>
        </FadeIn>
      </div>

      <div className='flex flex-col mm:flex-row text-primary max-w-5xl mx-auto pb-8'>
        <div className='w-full mm:w-1/2'>
          <FormSendEmail />
        </div>
        <div className='w-full mm:w-1/2'>
          <Map />
        </div>
      </div>
      <div className='max-w-4xl mx-auto px-4 sm:px-8 text-primary mb-8'>
        <FadeIn delay={0.2}>
          <div>
            <div className='grid grid-cols-4 md:grid-cols-4 gap-2 text-center text-xs'>
              <div className='px-2 flex flex-col items-center justify-start'>
                <div className='w-10 h-10 mb-3 text-green bg-brown/10 rounded-full flex items-center justify-center shrink-0'>
                  <SubwayIcon fontSize='medium' />
                </div>
                <div className='px-2 border-r last:border-r-0 mm:border-r'>
                  <p className='font-black text-sm block uppercase text-primary mb-1 tracking-wider'>
                    Métro
                  </p>
                  <p className='text-primary/80 font-nunito'>
                    Joliette <br />
                  </p>
                </div>
              </div>

              <div className='px-2 flex flex-col items-center justify-start'>
                <div className='w-10 h-10 mb-3 text-green bg-brown/10 rounded-full flex items-center justify-center shrink-0'>
                  <TramIcon fontSize='medium' />
                </div>
                <div className='px-2'>
                  <p className='font-black text-sm block uppercase text-primary mb-1 tracking-wider'>
                    Tramway
                  </p>
                  <p className='text-primary/80 font-nunito'>
                    République Dames / Joliette <br />
                  </p>
                </div>
              </div>

              <div className='px-2 flex flex-col items-center justify-start'>
                <div className='w-10 h-10 mb-3 text-green bg-brown/10 rounded-full flex items-center justify-center shrink-0'>
                  <PedalBikeIcon fontSize='medium' />
                </div>
                <div className='px-2'>
                  <p className='font-black text-sm block uppercase text-primary mb-1 tracking-wider'>
                    Vélo
                  </p>
                  <p className='text-primary/80 font-nunito'>
                    République Moisson / Dames-Schumann
                  </p>
                </div>
              </div>

              <div className='px-2 flex flex-col items-center justify-start'>
                <div className='w-10 h-10 mb-3 text-green bg-brown/10 rounded-full flex items-center justify-center shrink-0'>
                  <DirectionsCarIcon fontSize='medium' />
                </div>
                <p className='font-black text-sm block uppercase mb-1 tracking-wider'>
                  Parking
                </p>
                <p className='text-primary/80 leading-relaxed font-nunito'>
                  Q-Park Joliette / <br /> Q-Park Phocéens
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
