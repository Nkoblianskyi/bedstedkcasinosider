import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AnsvarligtSpilPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="section-overlay py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">Ansvarligt Spil</h1>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Spil ansvarligt</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Hos BedsteKCasinoSider.com tager vi ansvarligt spil meget seriøst. Vi ønsker at sikre, at alle spillere
                har en sikker og fornøjelig oplevelse.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Tegn på problematisk spil</h2>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>Spil for mere end du har råd til at tabe</li>
                <li>Forsøg på at vinde tabte penge tilbage</li>
                <li>Spil påvirker dit arbejde eller dine relationer</li>
                <li>Du lyver om dit spil til familie og venner</li>
                <li>Du føler dig skyldig eller ked af det efter spil</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Værktøjer til selvkontrol</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                De fleste casinoer tilbyder værktøjer til at hjælpe dig med at spille ansvarligt:
              </p>
              <ul className="mb-6 text-gray-300 leading-relaxed list-disc pl-6">
                <li>Indbetalingsgrænser</li>
                <li>Tabsgrænser</li>
                <li>Tidsgrænser for spil</li>
                <li>Selvudelukkelse</li>
                <li>Realitetscheck</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Få hjælp</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Hvis du har brug for hjælp med spilleproblemer, er der flere organisationer, der kan hjælpe:
              </p>

              <div className="bg-black/40 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">StopSpillet</h3>
                <p className="text-gray-300 mb-2">Telefon: 70 222 109</p>
                <p className="text-gray-300 mb-2">Website: stopspillet.dk</p>
                <p className="text-gray-300">Gratis og fortrolig rådgivning</p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Spillemyndigheden</h3>
                <p className="text-gray-300 mb-2">Website: spillemyndigheden.dk</p>
                <p className="text-gray-300">Information om ansvarligt spil og klager</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-accent">Mindreårige</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Spil er kun for personer over 18 år. Vi anbefaler stærkt, at forældre bruger forældrekontrol-software
                for at forhindre mindreårige i at få adgang til gambling-sider.
              </p>

              <p className="mt-8 text-sm text-gray-400">
                Husk: Spil skal være sjovt. Spil aldrig for mere, end du har råd til at tabe.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
