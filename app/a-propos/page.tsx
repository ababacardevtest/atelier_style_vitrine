
import Image from "next/image";

export default function Apropos() {

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
     {/* 1. Image d'arrière-plan */}
            <Image
              src="/apropos.jpg"
              alt="Atelier Élégance - À propos"
              fill
              className="object-cover object-center"
            />
    
            {/* 2. Voile clair pour que vos textes foncés ressortent bien */}
            <div className="absolute inset-0 bg-white/80" />
    
            {/* 3. Contenu texte au premier plan */}
            <div className="relative z-10 mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-brand-600">
                À propos de nous
              </h2>
              <p className="font-bold text-brand-700">
                Notre passion, votre style.
              </p>
              
              <p className="mt-6 max-w-3xl text-lg text-slate-800">
                Atelier Élégance est un atelier de stylisme dédié à la création de vêtements uniques et personnalisés.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-slate-800">
                Notre ambition est de mettre en valeur chaque personnalité à travers des pièces soigneusement imaginées et confectionnées.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-slate-800">
                Nous croyons que chaque vêtement raconte une histoire : la vôtre.
              </p>
            </div>
    </section>
  );
}
