import FadeIn from '../components/FadeIn';
import FormSendEmail from '../components/FormSendEmail';
import Map from '../components/Map';

export default function Contact() {
  return (
    <div>
      <div className='flex flex-col items-center text-primary max-w-3xl mx-auto px-8 pt-3'>
        <h1 className='text-center pb-4 font-black text-lg tracking-[3px]'>
          NOUS CONTACTER
        </h1>
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
          <a href='mailto:coqenstock13@gmail.com' className='font-bold'>
            coqenstock13@gmail.com
          </a>{' '}
          pour toute question ou demande de devis. Nous vous répondrons
          rapidement avec toutes les informations nécessaires.
        </p>
        <p className='text-center text-sm font-nunito pb-8'>
          Et bien sûr, n’hésitez pas à venir nous rendre visite sur place au
          <strong> 95 rue de la République – 13002 Marseille</strong>, nous vous
          recevrons avec plaisir !
        </p>
      </div>

      <div className='flex flex-col mm:flex-row text-primary max-w-5xl mx-auto pb-8'>
        <div className='w-full mm:w-1/2'>
          <FormSendEmail />
        </div>
        <div className='w-full mm:w-1/2'>
          <Map />
        </div>
      </div>

      <div className='flex flex-col items-center text-primary max-w-3xl mx-auto px-8'>
        <FadeIn duration={0.8} delay={0.3}>
          <h2 className='text-center pb-4 font-black text-lg tracking-[3px]'>
            POINT DE REPÈRES À PROXIMITÉ
          </h2>
          <p className='text-center text-sm font-nunito pb-5'>
            Station de métro le plus proche : <strong> Joliette</strong>{' '}
            <br></br>
            Stations de tramway les plus proches :
            <strong> République dames - Joliette</strong>
            <br></br>
            Stations de vélo les plus proche :
            <strong> République moisson - Dames-Schumann</strong>
            <br></br>
            Parkings les plus proches :
            <strong> Q-Park Joliette - Q-Park Phocéens</strong>
          </p>
          <p className='text-[0.75rem] leading-normal font-nunito text-center mx-auto mb-9'>
            Ce site est protégé par reCAPTCHA et la{' '}
            <a href='https://policies.google.com/privacy' className='underline'>
              Politique de confidentialité
            </a>{' '}
            et les{' '}
            <a href='https://policies.google.com/terms' className='underline'>
              Conditions d&apos;utilisation
            </a>{' '}
            de Google s’appliquent.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
