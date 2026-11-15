"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const liens = [
    {href: "/", label: "Accueil"},
    {href: "/services", label: "Services"},
    {href: "/a-propos", label: "À propos"},
    {href: "/realisations", label: "Réalisations"},
    {href: "/contact", label: "Contact"}
];

export default function Navbar(){
    const[ouvert, setOuvert] = useState(false);

    return(
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="inline-flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo Atelier Élégance"
                        width={300}
                        height={100}
                        priority
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <nav className="hidden gap-8 md:flex">
                    {liens.map((l) => (
                        <Link key={l.href} href={l.href} className="text-slate-600 transition hover:text-brand-600">
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <button className="rounded-md p-2 text-xl md:hidden text-brand-700"
                        aria-label="Ouvrir ou fermer le menu" 
                        aria-expanded={ouvert}
                        onClick={() => setOuvert(!ouvert)}>
                        {ouvert ? "✕" : "☰"}
                </button>
            </div>
            {ouvert && (
                <nav className="border-t border-slate-200 px-4 py-2 md:hidden">
                    {liens.map((l) => (
                        <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOuvert(false)}
                        className="block py-3 text-brand-700 transition hover:text-brand-600">
                        {l.label}
                    </Link>
                ))}
                </nav>
            )}
        </header>
    );
}