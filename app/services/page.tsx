import { services } from "../data/services";
import FiltreServices from "../components/FilterServices";

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-brand-600">Nos services</h2>
          <p className="mt-2 text-slate-600">
            Découvrez notre savoir-faire de la création artistique à la pièce unique.
          </p>
        </div>

        <FiltreServices services={services} />
      </div>
    </section>
  );
}
