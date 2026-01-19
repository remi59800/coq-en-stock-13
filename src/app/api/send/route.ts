import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s+()-]{10,20}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, email, message, recaptchaToken } = body;

    if (!nom || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: 'Champs requis manquants.' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    if (telephone && telephone.trim() && !phoneRegex.test(telephone)) {
      return NextResponse.json(
        { error: 'Numéro de téléphone invalide.' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Le message est trop long (1000 caractères max).' },
        { status: 400 }
      );
    }

    // 2. Vérification reCAPTCHA
    const recaptchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaJson = await recaptchaRes.json();
    if (!recaptchaJson.success) {
      return NextResponse.json(
        { error: 'Échec de la vérification reCAPTCHA.' },
        { status: 400 }
      );
    }

    const cleanNom = sanitizeHtml(nom, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const cleanEmail = sanitizeHtml(email, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const cleanTelephone = sanitizeHtml(telephone || '', {
      allowedTags: [],
      allowedAttributes: {},
    });
    const cleanMessage = sanitizeHtml(message, {
      allowedTags: [],
      allowedAttributes: {},
    });

    // 4. Création du transporteur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 5. Construction du mail
    const mailOptions = {
      from: `"www.coq-en-stock.com" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: cleanEmail,
      subject: `${cleanNom} vous a envoyé un message via le formulaire de contact`,
      html: `
        <p><strong>Nom :</strong> ${cleanNom} — <strong>Email :</strong> ${cleanEmail}</p>
        <p><strong>Téléphone :</strong> ${cleanTelephone || 'Non renseigné'}</p>
        <p><strong>Message :</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 6. Envoi du mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
