import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LicensPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="section-overlay py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">Licenseret af Spillemyndigheden</h1>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Om Spillemyndigheden</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Spillemyndigheden er den danske myndighed, der regulerer og overvåger alle former for spil i Danmark.
                Myndigheden sikrer, at spilleaktiviteter foregår på en fair, sikker og ansvarlig måde.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Hvad betyder licens?</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                En licens fra Spillemyndigheden betyder, at casinoet har gennemgået strenge kontroller og overholder
                danske love og regler. Dette inkluderer:
              </p>

              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>Beskyttelse af spillernes penge og personoplysninger</li>
                <li>Fair spil og tilfældige resultater</li>
                <li>Ansvarligt spil og spillerbeskyttelse</li>
                <li>Overholdelse af danske skatteregler</li>
                <li>Regelmæssige revisioner og kontroller</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Fordele ved licenserede casinoer</h2>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  <strong>Sikkerhed:</strong> Dine penge og oplysninger er beskyttet
                </li>
                <li>
                  <strong>Fair spil:</strong> Alle spil er kontrolleret og certificeret
                </li>
                <li>
                  <strong>Juridisk beskyttelse:</strong> Du har rettigheder som spiller
                </li>
                <li>
                  <strong>Ansvarligt spil:</strong> Værktøjer til selvkontrol og hjælp
                </li>
                <li>
                  <strong>Skattefrihed:</strong> Gevinster er skattefri for spilleren
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Sådan tjekker du en licens</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Du kan altid tjekke om et casino har en gyldig dansk licens på Spillemyndighedens hjemmeside:
              </p>

              <div className="bg-black/40 p-6 rounded-lg mb-6">
                <p className="text-accent font-semibold">spillemyndigheden.dk</p>
                <p className="text-gray-300 mt-2">Her finder du en komplet liste over alle licenserede udbydere</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Vores anbefaling</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Vi anbefaler kun casinoer, der er licenseret af Spillemyndigheden. Dette sikrer, at du får den bedste og
                sikreste spiloplevelse i overensstemmelse med dansk lovgivning.
              </p>

              <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-accent">Vigtigt at huske</h3>
                <p className="text-gray-300">
                  Spil kun på casinoer med dansk licens. Dette beskytter dig som spiller og sikrer, at du har adgang til
                  hjælp, hvis du får problemer med spil.
                </p>
              </div>

              <p className="mt-8 text-sm text-gray-400">Sidst opdateret: Januar 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
