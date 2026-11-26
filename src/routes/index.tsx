import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import logoBilingue from "@/assets/logo-bilingue.png.asset.json";
import traditional2 from "@/assets/traditional-2.jpg";
import traditional3 from "@/assets/traditional-3.jpg";
import modern2 from "@/assets/modern-2.jpg";
import modern3 from "@/assets/modern-3.jpg";
import coffret2 from "@/assets/coffret-2.jpg";
import coffret3 from "@/assets/coffret-3.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import savoir2 from "@/assets/savoir-faire-2.jpg";
import savoir3 from "@/assets/savoir-faire-3.jpg";
import hero from "@/assets/hero.jpg";
import traditional from "@/assets/traditional.jpg";
import modern from "@/assets/modern.jpg";
import coffret from "@/assets/coffret.jpg";
import wedding from "@/assets/wedding.jpg";
import savoir from "@/assets/savoir-faire.jpg";

const PHONE = "+213 555 12 34 56";
const WHATSAPP = "https://wa.me/213555123456";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Sucrée — Pâtisserie artisanale à Sétif" },
      {
        name: "description",
        content:
          "Gâteaux traditionnels algériens, pâtisseries modernes, pièces montées et coffrets gourmands sur commande à Sétif.",
      },
      { property: "og:title", content: "Maison Sucrée — Pâtisserie artisanale à Sétif" },
      {
        property: "og:description",
        content: "Pâtisseries faites main, sur commande par téléphone ou WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { imgs: [traditional, traditional2, traditional3], name: "Gâteaux traditionnels", text: "Baklawa, makrout, griwech — les recettes de nos grands-mères." },
  { imgs: [modern, modern2, modern3], name: "Pâtisseries modernes", text: "Entremets, tartelettes et éclairs aux saveurs délicates." },
  { imgs: [coffret, coffret2, coffret3], name: "Coffrets gourmands", text: "À offrir, pour vos proches ou vos clients d'entreprise." },
];

function Logo({ big = false }: { big?: boolean }) {
  return (
    <a href="#top" className="block">
      <img
        src={big ? logoBilingue.url : logo.url}
        alt="Maison Sucrée — المنزل الحلو"
        className={big ? "h-32 w-auto" : "h-14 w-auto md:h-16"}
      />
    </a>
  );
}

function Gallery({ imgs, alt, aspect = "aspect-[4/5]" }: { imgs: string[]; alt: string; aspect?: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className={`${aspect} overflow-hidden bg-blush`}>
        <img src={imgs[i]} alt={alt} loading="lazy" className="h-full w-full object-cover transition-opacity duration-300" />
      </div>
      <div className="mt-3 flex gap-2">
        {imgs.map((src, k) => (
          <button
            key={src}
            type="button"
            onClick={() => setI(k)}
            aria-label={`${alt} — photo ${k + 1}`}
            className={`h-16 w-16 overflow-hidden border-2 transition ${k === i ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function OrderButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={
        light
          ? "inline-block border border-primary-foreground px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-foreground hover:text-primary"
          : "inline-block bg-primary px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
      }
    >
      Commander
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-secondary/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
          <Logo />
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.15em] md:flex">
            <a href="#produits" className="hover:text-accent-foreground/70">Produits</a>
            <a href="#savoir-faire">Savoir-faire</a>
            <a href="#evenements">Mariages</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="bg-primary px-4 py-2 text-xs uppercase tracking-[0.15em] text-primary-foreground md:hidden">
            Appeler
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">Pâtisserie artisanale · Sétif</p>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">
            L'art de la douceur, <em className="text-accent">fait main</em>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Gâteaux traditionnels, créations modernes et pièces montées, préparés sur commande avec des ingrédients choisis.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <OrderButton />
            <a href="#produits" className="border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em]">Nos créations</a>
          </div>
        </div>
        <img src={hero} alt="Assortiment de pâtisseries Maison Sucrée" width={1600} height={1008} className="aspect-[4/5] w-full object-cover md:aspect-[4/5]" />
      </section>

      <section id="produits" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Les plus appréciés</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Nos créations</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name}>
              <Gallery imgs={p.imgs} alt={p.name} />
              <h3 className="mt-5 text-2xl">{p.name}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="savoir-faire" className="bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <Gallery imgs={[savoir, savoir2, savoir3]} alt="Notre savoir-faire" aspect="aspect-square" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Notre savoir-faire</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Tout est préparé à la main, chaque jour.</h2>
            <p className="mt-6 text-muted-foreground">
              Depuis trois ans, nous travaillons le miel, les amandes et le beurre avec patience. Chaque commande est réalisée pour vous, jamais à l'avance.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <li><span className="block font-display text-3xl">100%</span><span className="text-xs uppercase tracking-widest text-muted-foreground">fait main</span></li>
              <li><span className="block font-display text-3xl">3 ans</span><span className="text-xs uppercase tracking-widest text-muted-foreground">à Sétif</span></li>
              <li><span className="block font-display text-3xl">Frais</span><span className="text-xs uppercase tracking-widest text-muted-foreground">sur commande</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="evenements" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="md:order-2">
          <Gallery imgs={[wedding, wedding2, wedding3]} alt="Pièce montée de mariage" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Mariages & événements</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Une pièce montée à votre image.</h2>
          <p className="mt-6 text-muted-foreground">
            Mariages, fiançailles, baptêmes ou fêtes de famille : nous imaginons avec vous le gâteau et les plateaux qui accompagneront votre grand jour.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Nous conseillons de commander 3 semaines à l'avance.</p>
          <div className="mt-8"><OrderButton /></div>
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <h2 className="text-4xl md:text-5xl">Passer commande</h2>
          <p className="mx-auto mt-4 max-w-md opacity-80">Appelez-nous ou écrivez-nous sur WhatsApp, nous vous répondons rapidement.</p>
          <div className="mt-10 grid gap-8 text-sm md:grid-cols-3">
            <div><p className="uppercase tracking-[0.2em] opacity-60">Téléphone</p><a href={`tel:${PHONE.replace(/\s/g, "")}`} className="mt-2 block font-display text-2xl">{PHONE}</a></div>
            <div><p className="uppercase tracking-[0.2em] opacity-60">Adresse</p><p className="mt-2 font-display text-2xl">Cité des Jardins, Sétif</p></div>
            <div><p className="uppercase tracking-[0.2em] opacity-60">Réseaux</p><p className="mt-2 flex justify-center gap-4 font-display text-2xl"><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></p></div>
          </div>
          <div className="mt-10"><OrderButton light /></div>
        </div>
      </section>

      <footer className="bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <Logo big />
          <p>Ouvert du samedi au jeudi · 9h – 19h</p>
          <p>Commandes par téléphone ou WhatsApp · Pas de paiement en ligne</p>
          <p>© {new Date().getFullYear()} Maison Sucrée</p>
        </div>
      </footer>
    </div>
  );
}
