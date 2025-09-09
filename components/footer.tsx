import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const organizations = [
    {
      name: "Spillemyndigheden",
      url: "https://spillemyndigheden.dk/",
      logo: "/spillemyndigheden-logo.jpg",
    },
    {
      name: "GamCare",
      url: "https://www.gamcare.org.uk/",
      logo: "/gamcare.png",
    },
  ]

  return (
    <footer className="bg-black border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Hurtig Navigation</h3>
            <div className="space-y-2">
              <a href="#rankings" className="block text-muted-foreground hover:text-primary transition-colors">
                Top Casinoer
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                Ofte Stillede Spørgsmål
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Juridisk Information</h3>
            <div className="space-y-2">
              <Link
                href="/privatlivspolitik"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Privatlivspolitik
              </Link>
              <Link href="/cookie-politik" className="block text-muted-foreground hover:text-primary transition-colors">
                Cookie Politik
              </Link>
              <Link
                href="/ansvarligt-spil"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Ansvarligt Spil
              </Link>
              <Link href="/licens" className="block text-muted-foreground hover:text-primary transition-colors">
                Licens Information
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">

            <a
              href="https://www.rofus.nu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/rofus.png" alt="ROFUS" width={100} height={40} className="object-contain" />
            </a>

            <a
              href="https://www.stopspillet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/stopsillet.svg" alt="StopSpillet" width={100} height={40} className="object-contain" />
            </a>


            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/gamble.webp" alt="GambleAware" width={100} height={40} className="object-contain" />
            </a>
            <a
              href="https://www.spillemyndigheden.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/spillemynd.svg" alt="Spillemyndigheden" width={120} height={40} className="object-contain" />
            </a>

            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center col-span-2"
            >
              <Image src="/gamecare.svg" alt="GameCare" width={100} height={40} className="object-contain" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Bedstedkcasinosider.com. Alle rettigheder forbeholdes.</p>
          <p className="text-muted-foreground text-xs mt-2">
            18+ • Spil ansvarligt • Gambling kan være afhængighedsskabende
          </p>
        </div>
      </div>
    </footer>
  )
}
