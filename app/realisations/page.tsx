"use client";

import { useState } from "react";
import Image from "next/image";

const realisations = [
  {
    titre: "Collection Africaine",
    image: "/realisation1.jpg"
  },
  {
    titre: "Élégance moderne",
    image: "/realisation2.jpg"
  },
  {
    titre: "Style contemporain",
    image: "/realisation3.jpg"
  },
  {
    titre: "Création sur mesure",
    image: "/realisation4.jpg"
  }
];


export default function Realisations() {
  // État pour mémoriser l'image cliquée (null = modale fermée)
  const [imageSelectionnee, setImageSelectionnee] = useState<{
    titre: string;
    image: string;
  } | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Nos réalisations</h2>

        {/* Grille des réalisations */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 border border-brand-600 rounded-xl p-4 md:p-6 bg-brand-300">
          {realisations.map((r) => (
            <div
              key={r.titre}
              onClick={() => setImageSelectionnee(r)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Conteneur image net avec zoom léger au survol */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.titre}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{r.titre}</h3>
                <span className="text-sm font-medium text-brand-600 group-hover:underline">
                  Agrandir
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fenêtre Modale (Lightbox) */}
      {imageSelectionnee && (
        <div
          onClick={() => setImageSelectionnee(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Bouton Fermer en haut à droite */}
            <button
              onClick={() => setImageSelectionnee(null)}
              aria-label="Fermer"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
            >
              ✕
            </button>

            {/* Image en grand format */}
            <div className="relative h-[70vh] w-full bg-slate-950">
              <Image
                src={imageSelectionnee.image}
                alt={imageSelectionnee.titre}
                fill
                sizes="100vw"
                quality={95}
                className="object-contain"
              />
            </div>

            {/* Légende en bas de la modale */}
            <div className="p-4 text-center bg-white">
              <h3 className="text-xl font-bold text-slate-900">
                {imageSelectionnee.titre}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
