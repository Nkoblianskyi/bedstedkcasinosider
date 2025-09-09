import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="section-overlay py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">Privatlivspolitik</h1>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Indsamling af personoplysninger</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Vi respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. Denne politik
                forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Hvilke oplysninger indsamler vi?</h2>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>IP-adresse og browseroplysninger</li>
                <li>Besøgsstatistikker og brugeradfærd på hjemmesiden</li>
                <li>Cookies og lignende teknologier</li>
                <li>Oplysninger du frivilligt deler med os</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Hvordan bruger vi dine oplysninger?</h2>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>At forbedre vores hjemmeside og tjenester</li>
                <li>At analysere brugeradfærd og præferencer</li>
                <li>At vise relevante casino-anbefalinger</li>
                <li>At overholde juridiske forpligtelser</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Deling af oplysninger</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Vi sælger, handler eller udlejer ikke dine personoplysninger til tredjeparter. Vi kan dele anonymiserede
                data med vores partnere for at forbedre vores tjenester.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Dine rettigheder</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">I henhold til GDPR har du ret til:</p>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>At få adgang til dine personoplysninger</li>
                <li>At få rettet forkerte oplysninger</li>
                <li>At få slettet dine oplysninger</li>
                <li>At begrænse behandlingen af dine oplysninger</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Kontakt os</h2>
              <p className="text-gray-300 leading-relaxed">
                Hvis du har spørgsmål om vores privatlivspolitik, kan du kontakte os på:
                <span className="text-accent"> privacy@bedstedkcasinosider.com</span>
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
