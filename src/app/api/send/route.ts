import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// ---- VALIDATION EMAIL ----
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, email, message, recaptchaToken } = body;

    // 1. Validation basique
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

    // 3. Sanitisation du message
    const cleanMessage = sanitizeHtml(message, {
      allowedTags: [], // aucun tag HTML autorisé
      allowedAttributes: {},
    });

    // 4. Création du transporteur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // TLS si port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 5. Construction du mail
    const mailOptions = {
      from: `"www.coq-en-stock.com - Formulaire de contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: 'Nouveau message via le formulaire de contact',
      html: `
        <p><strong>Nom :</strong> ${sanitizeHtml(nom)}</p>
        <p><strong>Email :</strong> ${sanitizeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${sanitizeHtml(
          telephone || 'Non renseigné'
        )}</p>
        <p><strong>Message :</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 6. Envoi du mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l’envoi :', error);
    return NextResponse.json(
      { error: 'Erreur lors de l’envoi de l’email.' },
      { status: 500 }
    );
  }
}
