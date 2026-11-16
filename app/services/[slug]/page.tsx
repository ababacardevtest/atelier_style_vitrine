import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "../../data/services";

// 1. Le paramètre doit s'appeler "slug" comme votre dossier [slug]
type Props = { params: Promise<{ slug: string }> };

// 2. On génère les routes statiques avec "slug"
export function generateStaticParams() {
  return services.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((p) => p.slug === slug);

  return service
    ? { title: `${service.titre} | Nos Services`, description: service.resume }
    : {};
}

export default async function PageService({ params }: Props) {
  // 3. On récupère "slug" et on cherche le service correspondant
  const { slug } = await params;
  const service = services.find((p) => p.slug === slug);

  if (!service) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/services"
        className="inline-flex items-center text-sm font-medium text-brand-600 hover:underline"
      >
        ← Retour aux services
      </Link>

      {/* En-tête coloré */}
      <div className="mt-6 rounded-2xl bg-linear-to-br from-brand-700 to-brand-300 p-8 text-white shadow-md">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          {service.categorie}
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          {service.titre}
        </h1>
      </div>

      {/* Image principale */}
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl shadow-sm sm:h-96">
        <Image
          src={service.image}
          alt={service.titre}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Description complète */}
      <div className="mt-8">
        <p className="whitespace-pre-line text-lg leading-relaxed text-slate-700">
          {service.description}
        </p>

        {/* Liste des points clés (si présents dans data/services.ts) */}
        {service.pointsCles && service.pointsCles.length > 0 && (
          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Ce que comprend ce service
            </h2>
            <ul className="mt-6 space-y-4">
              {service.pointsCles.map((point) => (
                <li
                  key={point.titre}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-semibold text-brand-700">
                    {point.titre}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {point.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
