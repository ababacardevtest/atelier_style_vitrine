export const categories = ["Tous", "Stylisme", "Confection", "Sur-mesure"] as const;

export type Categorie = (typeof categories)[number];

export interface Service {
  slug: string;
  titre: string;
  categorie: Exclude<Categorie, "Tous">;
  resume: string; // Texte court pour les cartes
  description: string; // Paragraphe d'introduction complet
  pointsCles: {
    titre: string;
    detail: string;
  }[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "stylisme",
    titre: "Stylisme",
    categorie: "Stylisme",
    resume: "Conception créative, analyse des tendances, dessins techniques et choix des matières.",
    description:
      "Le stylisme est l'étape purement créative et conceptuelle de la mode. Le styliste est le « cerveau » artistique qui imagine le vêtement avant même que le premier coup de ciseau ne soit donné.",
    pointsCles: [
      {
        titre: "L'analyse des tendances",
        detail: "Le styliste observe l'air du temps, la culture, l'art et la rue. Il anticipe les envies des consommateurs pour les saisons à venir."
      },
      {
        titre: "Le dessin et l'illustration",
        detail: "Il traduit ses idées sur papier ou sur ordinateur. Il réalise des croquis d'ambiance puis des dessins techniques très précis (plats) montrant les coutures, les poches et les fermetures."
      },
      {
        titre: "Le choix des matières et couleurs",
        detail: "Il sélectionne les tissus (soie, coton, laine), les imprimés et les accessoires. Il crée des gammes de couleurs cohérentes pour toute une collection."
      },
      {
        titre: "La collaboration technique",
        detail: "Il travaille main dans la main avec le modéliste qui transforme les dessins plats en patrons en deux dimensions puis en prototypes."
      }
    ],
    image: "/service1.jpg"
  },
  {
    slug: "confection",
    titre: "Confection",
    categorie: "Confection",
    resume: "Fabrication en série, patronage, gradation, coupe industrielle et montage prêt-à-porter.",
    description:
      "La confection désigne l'ensemble des techniques et des processus permettant de fabriquer des vêtements en grande ou moyenne série. C'est le domaine du prêt-à-porter, destiné à habiller le plus grand nombre selon des tailles standardisées.",
    pointsCles: [
      {
        titre: "Le patronage et la gradation",
        detail: "À partir du prototype validé, on crée un patron de base. On utilise ensuite la gradation pour décliner ce patron en tailles standards (XS, S, M, L, XL)."
      },
      {
        titre: "La coupe industrielle",
        detail: "Les tissus sont empilés en plusieurs dizaines de couches appelées matelas. Des machines automatisées découpent toutes les pièces d'un seul coup pour gagner du temps."
      },
      {
        titre: "Le montage à la chaîne",
        detail: "L'assemblage est divisé en tâches précises réparties entre plusieurs opérateurs spécialisés (manches, cols, ourlets)."
      },
      {
        titre: "Les finitions et le contrôle",
        detail: "Les vêtements passent par le repassage industriel, l'étiquetage et le contrôle qualité avant d'être emballés et expédiés."
      }
    ],
    image: "/service2.jpg"
  },
  {
    slug: "sur-mesure",
    titre: "Sur-mesure",
    categorie: "Sur-mesure",
    resume: "Artisanat d'excellence, prise de mesures précise, patronage exclusif et essayages personnalisés.",
    description:
      "Le sur-mesure est l'opposé de la production industrielle. Il consiste à créer un vêtement unique, conçu de A à Z pour une seule personne, en s'adaptant parfaitement à sa morphologie et à ses goûts.",
    pointsCles: [
      {
        titre: "La prise de mesures et l'écoute",
        detail: "Le tailleur ou le couturier discute longuement avec le client pour cerner ses besoins. Il prend des dizaines de mesures précises et note les particularités physiques."
      },
      {
        titre: "Le patronage exclusif",
        detail: "Un patron est dessiné uniquement pour ce client. Contrairement au prêt-à-porter, ce gabarit ne servira à personne d'autre."
      },
      {
        titre: "Les essayages intermédiaires",
        detail: "Le vêtement est d'abord bâti avec des points provisoires. Le client vient l'essayer deux ou trois fois pour ajuster les volumes directement sur le corps."
      },
      {
        titre: "Le travail manuel et les finitions",
        detail: "Le sur-mesure fait appel à un savoir-faire artisanal pointu avec des finitions souvent cousues à la main pour garantir souplesse, confort et durabilité."
      }
    ],
    image: "/service3.jpg"
  }
];
