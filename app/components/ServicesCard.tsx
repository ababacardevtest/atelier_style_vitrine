import Link from "next/link";
import Image from "next/image";
import { Service } from "../data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image avec badge catégorie */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.titre}
          fill
          className="object-cover object-center transition duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-xs">
          {service.categorie}
        </span>
      </div>

      {/* Contenu texte */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-brand-600">
            {service.titre}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {service.resume}
          </p>
        </div>

        <div className="mt-4 flex items-center text-sm font-semibold text-brand-600">
          Découvrir ce service
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
