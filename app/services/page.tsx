import Image from "next/image";

const services = [
  {
    titre: "Stylisme",
    description: "Conseils et accompagnement pour définir votre style.",
    image: "/service1.jpg"
  },
  {
    titre: "Confection",
    description: "Création de vêtements adaptés à vos envies.",
    image: "/service2.jpg"
  },
  {
    titre: "Sur mesure",
    description: "Création de vêtements adaptés à vos envies.",
    image: "/service3.jpg"
  },
];


export default function Services() {

  return (
    
    <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-brand-600">
                Nos services
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3 border border-brand-600 rounded-xl p-6 bg-brand-600">
                {services.map((s) => (
                <div
                key={s.titre}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                {/* Conteneur de l'image avec hauteur fixe (h-48) et "relative" obligatoire pour "fill" */}
                <div className="relative h-48 w-full">
                    <Image
                    src={s.image}
                    alt={s.titre}
                    fill
                    className="object-cover object-center"
                    />
                </div>

                {/* Contenu texte */}
                <div className="p-6">
                    <h3 className="text-lg font-semibold">{s.titre}</h3>
                    <p className="mt-2 text-slate-600">{s.description}</p>
                </div>
                </div>
            ))}

            </div>
            </div>
    </section>
  );
}
