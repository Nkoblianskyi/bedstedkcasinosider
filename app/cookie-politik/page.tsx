import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolitikPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="section-overlay py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">Cookie Politik</h1>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Hvad er cookies?</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger vores
                hjemmeside. De hjælper os med at gøre din oplevelse bedre ved at huske dine præferencer og forbedre
                sidens funktionalitet.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Hvilke cookies bruger vi?</h2>

              <h3 className="text-xl font-semibold mb-3 text-accent">Nødvendige cookies</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De kan ikke deaktiveres i vores
                systemer.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-accent">Analytiske cookies</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Vi bruger Google Analytics til at forstå, hvordan besøgende bruger vores hjemmeside. Dette hjælper os
                med at forbedre indholdet og brugeroplevelsen.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-accent">Marketing cookies</h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Disse cookies bruges til at vise relevante annoncer og tilbud baseret på dine interesser.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Sådan administrerer du cookies</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Du kan til enhver tid ændre dine cookie-indstillinger i din browser. Bemærk, at deaktivering af cookies
                kan påvirke funktionaliteten på vores hjemmeside.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Kontakt os</h2>
              <p className="text-gray-300 leading-relaxed">
                Hvis du har spørgsmål om vores cookie-politik, kan du kontakte os på:
                <span className="text-accent"> info@bedstedkcasinosider.com</span>
              </p>

              <p className="mt-8 text-sm text-gray-400">Sidst opdateret: Januar 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
