"use client";
import { useState } from "react";
import ServiceCard from "./ServicesCard";
import { categories, type Service } from "../data/services";

export default function FiltreServices({ services }: { services: Service[] }) {
  const [actif, setActif] = useState<(typeof categories)[number]>("Tous");
  
  const visibles =
    actif === "Tous"
      ? services
      : services.filter((s) => s.categorie === actif);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActif(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              actif === c
                ? "bg-brand-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>

      {visibles.length === 0 && (
        <p className="mt-8 text-slate-500">Aucun service pour cette catégorie.</p>
      )}
    </>
  );
}
