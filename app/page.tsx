

import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
import Realisations from "./realisations/page";
import Apropos from "./a-propos/page";
import Services from "./services/page";
import PageContact from "./contact/page";


export default function Accueil() {
  return (
    <>
      {/* Hero */}
     <section className="relative overflow-hidden bg-brand-50 py-20 md:py-28">
        {/* 1. Image d'arrière-plan */}
        <Image
          src="/hero-bg.jpg"
          alt="Atelier Élégance"
          fill
          priority
          className="object-cover object-center"
        />

        {/* 2. Calque clair semi-transparent (bg-white/80 ou bg-brand-50/85) */}
        <div className="absolute inset-0 bg-brand-50/80" />

        {/* 3. Contenu texte au premier plan */}
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <p className="font-medium text-brand-600">
            Atelier Élégance
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Révélez votre élégance, affirmez votre style.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-700">
            Chez Atelier Élégance, nous donnons vie à vos envies à travers des créations uniques
            qui reflètent votre personnalité. 
            Découvrez un univers où créativité, élégance et savoir-faire se rencontrent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services">Découvrir nos services</Button>
            <Button href="/contact" variant="outline">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* A propos */}
      <Apropos/>

      {/* Services */}
      <Services/>

      {/* Réalisations */}
      <Realisations/>   

      {/* Contact  */}
      <PageContact/>
    </>
  );
}