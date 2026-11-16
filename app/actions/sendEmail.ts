"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactPayload = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

export async function envoyerEmailContact(data: ContactPayload) {
  // Double vérification côté serveur pour la sécurité
  if (!data.nom || !data.email || !data.sujet || !data.message) {
    return { success: false, error: "Tous les champs sont obligatoires." };
  }

  try {
    const { error } = await resend.emails.send({
      // Tant que vous n'avez pas configuré votre propre nom de domaine sur Resend,
      // utilisez obligatoirement "onboarding@resend.dev" comme expéditeur :
      from: "Atelier Élégance <onboarding@resend.dev>",
      
      // Remplacez par VOTRE adresse email (celle utilisée pour créer votre compte Resend) :
      to: ["ababacar.devtest@gmail.com"],
      
      // Permet de répondre directement au client en cliquant sur "Répondre" dans votre boîte mail :
      replyTo: data.email,
      
      subject: `[Contact Site] ${data.sujet}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0f172a;">Nouveau message depuis le site Atelier Élégance</h2>
          <p><strong>Nom :</strong> ${data.nom}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Sujet :</strong> ${data.sujet}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-line; background: #f8fafc; padding: 12px; border-radius: 8px;">${data.message}</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: "Erreur lors de l'envoi de l'email." };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Impossible de contacter le serveur d'envoi.", err };
  }
}
