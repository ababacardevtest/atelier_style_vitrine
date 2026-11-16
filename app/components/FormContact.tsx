"use client";

import { useState } from "react";
import { envoyerEmailContact } from "../actions/sendEmail"; // Ajustez le chemin si besoin

type FormData = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function FormContact() {
  const [envoye, setEnvoye] = useState(false);
  const [enCours, setEnCours] = useState(false);
  const [erreurServeur, setErreurServeur] = useState<string | null>(null);

  const [valeurs, setValeurs] = useState<FormData>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [erreurs, setErreurs] = useState<FormErrors>({});
  const [touches, setTouches] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validerChamp = (nomChamp: keyof FormData, valeur: string): string => {
    const val = valeur.trim();

    switch (nomChamp) {
      case "nom":
        if (!val) return "Veuillez renseigner votre nom complet.";
        if (val.length < 2) return "Le nom doit contenir au moins 2 caractères.";
        return "";

      case "email":
        if (!val) return "L'adresse email est obligatoire.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val))
          return "Veuillez saisir une adresse email valide (ex. nom@domaine.com).";
        return "";

      case "sujet":
        if (!val) return "Veuillez indiquer le sujet de votre demande.";
        if (val.length < 3) return "Le sujet est trop court (minimum 3 caractères).";
        return "";

      case "message":
        if (!val) return "Veuillez écrire votre message.";
        if (val.length < 10) return "Votre message doit contenir au moins 10 caractères.";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const champ = name as keyof FormData;

    setValeurs((prev) => ({ ...prev, [champ]: value }));

    if (touches[champ]) {
      setErreurs((prev) => ({
        ...prev,
        [champ]: validerChamp(champ, value),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const champ = e.target.name as keyof FormData;
    setTouches((prev) => ({ ...prev, [champ]: true }));
    setErreurs((prev) => ({
      ...prev,
      [champ]: validerChamp(champ, valeurs[champ]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErreurServeur(null);

    const nouvellesErreurs: FormErrors = {
      nom: validerChamp("nom", valeurs.nom),
      email: validerChamp("email", valeurs.email),
      sujet: validerChamp("sujet", valeurs.sujet),
      message: validerChamp("message", valeurs.message),
    };

    setErreurs(nouvellesErreurs);
    setTouches({ nom: true, email: true, sujet: true, message: true });

    const aDesErreurs = Object.values(nouvellesErreurs).some((msg) => msg !== "");
    if (aDesErreurs) return;

    // Début de l'envoi réel
    setEnCours(true);

    const resultat = await envoyerEmailContact(valeurs);

    setEnCours(false);

    if (!resultat.success) {
      setErreurServeur(resultat.error || "Une erreur est survenue.");
      return;
    }

    // Succès
    setEnvoye(true);
    setValeurs({ nom: "", email: "", sujet: "", message: "" });
    setTouches({});
    setErreurs({});
  };

  const getInputClass = (champ: keyof FormData) => {
    const enErreur = touches[champ] && erreurs[champ];
    return `mt-1.5 w-full rounded-lg border px-4 py-2.5 text-slate-900 transition focus:outline-none focus:ring-2 ${
      enErreur
        ? "border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-300 bg-white focus:border-brand-600 focus:ring-brand-600/20"
    }`;
  };

  if (envoye) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">
          Message envoyé avec succès !
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Merci de nous avoir contactés. L&apos;équipe d&apos;Atelier Élégance vous répondra très rapidement.
        </p>
        <button
          type="button"
          onClick={() => setEnvoye(false)}
          className="mt-4 cursor-pointer text-sm font-medium text-brand-600 underline hover:text-brand-700"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Alerte globale si le serveur renvoie une erreur */}
      {erreurServeur && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
          ⚠ {erreurServeur}
        </div>
      )}

      {/* Nom complet */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-slate-700">
          Nom complet
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          disabled={enCours}
          value={valeurs.nom}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex. Aminata Diallo"
          aria-invalid={Boolean(touches.nom && erreurs.nom)}
          className={getInputClass("nom")}
        />
        {touches.nom && erreurs.nom && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <span aria-hidden="true">⚠</span> {erreurs.nom}
          </p>
        )}
      </div>

      {/* Adresse email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled={enCours}
          value={valeurs.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="exemple@email.com"
          aria-invalid={Boolean(touches.email && erreurs.email)}
          className={getInputClass("email")}
        />
        {touches.email && erreurs.email && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <span aria-hidden="true">⚠</span> {erreurs.email}
          </p>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-slate-700">
          Sujet
        </label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          disabled={enCours}
          value={valeurs.sujet}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex. Création d'une tenue sur mesure"
          aria-invalid={Boolean(touches.sujet && erreurs.sujet)}
          className={getInputClass("sujet")}
        />
        {touches.sujet && erreurs.sujet && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <span aria-hidden="true">⚠</span> {erreurs.sujet}
          </p>
        )}
      </div>

      {/* Votre message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={enCours}
          value={valeurs.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Décrivez votre projet, vos envies ou vos questions..."
          aria-invalid={Boolean(touches.message && erreurs.message)}
          className={getInputClass("message")}
        />
        {touches.message && erreurs.message && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <span aria-hidden="true">⚠</span> {erreurs.message}
          </p>
        )}
      </div>

      {/* Bouton Envoyer avec état de chargement */}
      <button
        type="submit"
        disabled={enCours}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enCours ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
