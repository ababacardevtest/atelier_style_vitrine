
import Link from "next/link";
import Button from "./components/Button";

const services = [
  {
    titre: "Stylisme",
    description: "Conseils et accompagnement pour définir votre style."
  },
  {
    titre: "Confection",
    description: "Création de vêtements adaptés à vos envies."
  },
  {
    titre: "Sur mesure",
    description: "Création de vêtements adaptés à vos envies."
  },
];

export default function Accueil() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-medium text-brand-600">
            Atelier Élégance
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Révélez votre élégance, affirmez votre style.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
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

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Nos services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3 border border-brand-600 rounded-xl p-6 bg-brand-600">
            {services.map((s) => (
              <div
                key={s.titre}
                className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:shadow-md"
              >
                
                <h3 className="text-lg font-semibold">{s.titre}</h3>
                <p className="mt-2 text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            
    </>
  );
}