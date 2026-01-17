'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import FadeIn from './FadeIn';

type FormData = {
  nom: string;
  telephone?: string;
  email: string;
  message: string;
};

type PulsingFields = {
  [key in keyof FormData]?: boolean;
};

export default function FormSendEmail() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [pulsingFields, setPulsingFields] = useState<PulsingFields>({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    const newPulsing: Partial<Record<keyof FormData, boolean>> = {};

    if (!formData.nom) newErrors.nom = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.message) newErrors.message = true;

    // Champs à pulser
    Object.keys(newErrors).forEach((key) => {
      newPulsing[key as keyof FormData] = true;
    });

    setPulsingFields(newPulsing);

    setTimeout(() => {
      setPulsingFields({});
    }, 2000);

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      toast.warn(
        "Tous les champs marqués d'une astérisque (*) sont obligatoires."
      );
      return;
    }

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      toast.error('Veuillez valider le reCAPTCHA.');
      return;
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        recaptchaToken: token,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.error || 'Erreur lors de l’envoi du formulaire.');
      return;
    }

    toast.success('Votre message a bien été envoyé ✅');

    setFormData({ nom: '', telephone: '', email: '', message: '' });
  };

  const inputBase =
    'border border-primary p-2 bg-[#343333] text-white font-nunito rounded-none focus:outline-none focus:ring-0 placeholder-gray-300';
  const getInputClass = (field: keyof FormData) =>
    `${inputBase} ${pulsingFields[field] ? 'animate-pulse' : ''}`;

  return (
    <>
      <form onSubmit={handleSubmit} className='w-full p-8 bg-green mx-auto'>
        <FadeIn direction='up' delay={0.1}>
          <div className='flex flex-col font-poppins gap-4 text-sm'>
            <div className='flex flex-col w-full max-w-[400px] mx-auto'>
              <h2 className='text-center pb-4 font-black text-lg tracking-[3px]'>
                ENVOYER UN E-MAIL
              </h2>

              <label htmlFor='nom' className='font-nunito'>
                Prénom et nom*
              </label>
              <input
                type='text'
                name='nom'
                id='nom'
                value={formData.nom}
                onChange={handleChange}
                maxLength={50}
                placeholder='Entrez votre prénom et nom'
                className={getInputClass('nom')}
              />
            </div>

            <div className='flex flex-col w-full max-w-[400px] mx-auto'>
              <label htmlFor='email' className='font-nunito'>
                Email*
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
                placeholder='Entrez votre e-mail'
                className={getInputClass('email')}
              />
            </div>

            <div className='flex flex-col w-full max-w-[400px] mx-auto'>
              <label htmlFor='telephone' className='font-nunito'>
                Téléphone
              </label>
              <input
                type='text'
                name='telephone'
                id='telephone'
                value={formData.telephone}
                onChange={handleChange}
                maxLength={100}
                placeholder='Entrez votre numéro'
                className={getInputClass('telephone')}
              />
            </div>

            <div className='flex flex-col w-full max-w-[400px] mx-auto'>
              <label htmlFor='message' className='font-nunito'>
                Message*
              </label>
              <textarea
                name='message'
                id='message'
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={1000}
                placeholder='Écrivez votre message ici (1000 car. max)'
                className={getInputClass('message')}
              />
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              size='invisible'
            />

            <div className='flex items-center gap-4 max-w-[400px] mx-auto text-xs'>
              <input type='checkbox' id='consentement' required />
              <label htmlFor='consentement' className='font-nunito'>
                En soumettant ce formulaire, j&apos;accepte que mes données
                soient utilisées pour me recontacter.
              </label>
            </div>

            <button
              type='submit'
              className={`group font-nunito text-sm border border-primary px-4 py-2 w-full max-w-[400px] mx-auto
       inline-flex items-center justify-center transition-all duration-300 ease-out hover:scale-[1.02]
       active:scale-95`}
            >
              <div className='flex flex-row items-center justify-center'>
                <div className='relative overflow-hidden'>
                  <Image
                    className='transition-all duration-300 group-hover:translate-x-10 group-hover:-translate-y-10 group-hover:opacity-0'
                    src='/icons/Send.svg'
                    alt='icon-send'
                    width={15}
                    height={15}
                    priority
                  />
                  {/* Flèche fantôme qui revient par la gauche au survol */}
                  <Image
                    className='absolute top-0 -left-10 transition-all duration-300 group-hover:left-0 group-hover:translate-x-0'
                    src='/icons/Send.svg'
                    alt='icon-envoyer-animation'
                    width={15}
                    height={15}
                  />
                </div>
                <p className='pl-2.5 uppercase'>ENVOYER</p>
              </div>
            </button>
          </div>
        </FadeIn>
      </form>
    </>
  );
}
