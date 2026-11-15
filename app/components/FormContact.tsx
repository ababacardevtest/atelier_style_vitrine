"use client";

import { useState } from "react";

export default function FormContact() {
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnvoye(true);
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
          className="mt-4 text-sm font-medium text-brand-600 underline hover:text-brand-700"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom complet */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-slate-700">
          Nom complet
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          placeholder="Ex. Aminata Diallo"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        />
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
          required
          placeholder="exemple@email.com"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        />
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
          required
          placeholder="Ex. Création d'une tenue sur mesure"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        />
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
          required
          placeholder="Décrivez votre projet, vos envies ou vos questions..."
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
        />
      </div>

      {/* Bouton Envoyer le message */}
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 cursor-pointer"
      >
        Envoyer le message
      </button>
    </form>
  );
}
