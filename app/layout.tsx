import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Atelier de l'Élégance - Style - Habillement - Création", template: "%s | Atelier de l'Elegance" },
  description:
    "Atelier de l'Élégance vous accompagne de la création stylistique à la confection sur-mesure. Découvrez des tenues uniques alliant savoir-faire artisanal et raffinement.",
  keywords: [
    "stylisme",
    "confection",
    "sur-mesure",
    "atelier de couture",
    "création de mode",
    "habillement",
    "tenue sur mesure",
    "Dakar",
  ],
  openGraph: {
    title: "Atelier de l'Élégance - Style - Habillement - Création",
    description:
      "De la conception créative à la confection sur-mesure, donnez vie à vos envies vestimentaires avec Atelier de l'Élégance.",
    siteName: "Atelier de l'Élégance",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <NextTopLoader
          color="#b26c22" // Remplacez par le code hexadécimal de votre couleur brand-600
          height={3}
          showSpinner={false}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}