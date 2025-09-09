import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-16 px-4 section-overlay">
      <div className="container mx-auto max-w-6xl">

        <div className="space-y-6">
          {casinos.map((casino) => (
            <CasinoCard casino={casino} isTopChoice={casino.isTopChoice} />
          ))}
        </div>
      </div>
    </section>
  )
}
