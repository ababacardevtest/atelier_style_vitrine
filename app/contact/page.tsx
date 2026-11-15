import type { Metadata } from "next";
import FormContact from "../components/FormContact";

export const metadata: Metadata = {
  title: "Contact | Atelier Élégance",
  description: "Créons ensemble votre prochain look. Contactez Atelier Élégance à Dakar.",
};

export default function PageContact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Colonne de gauche : Titre, texte et coordonnées */}
        <div>
          <h2 className="text-3xl font-bold text-brand-600">
            Contact
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Créons ensemble votre prochain look.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Vous avez une idée, un projet ou une tenue en tête ? Parlons-en ! Notre atelier est à votre écoute pour donner vie à vos envies.
          </p>

          {/* Informations de contact */}
          <div className="mt-8 space-y-5 rounded-xl border border-brand-300/50 bg-brand-50/50 p-6">
            <div>
              <p className="text-sm font-semibold text-brand-700">Téléphone</p>
              <a
                href="tel:+221770000000"
                className="mt-1 block text-base text-slate-800 hover:text-brand-600"
              >
                +221 77 000 00 00
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-brand-700">Email</p>
              <a
                href="mailto:contact@atelier-elegance.com"
                className="mt-1 block text-base text-slate-800 hover:text-brand-600"
              >
                contact@atelier-elegance.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-brand-700">Adresse</p>
              <p className="mt-1 text-base text-slate-800">Dakar, Sénégal</p>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Formulaire */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <FormContact />
        </div>
      </div>
    </section>
  );
}
