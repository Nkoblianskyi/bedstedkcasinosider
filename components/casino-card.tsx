import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Image from "next/image"

interface CasinoCardProps {
  casino: Casino
  isTopChoice?: boolean
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.min(Math.max(((rating - (i - 1)) / 0.2) * 20, 0), 100)
    stars.push(
      <div key={i} className="relative">
        <Star className="h-3 w-3 md:h-4 md:w-4 text-gray-300" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />
        </div>
      </div>,
    )
  }
  return <div className="flex gap-0.5">{stars}</div>
}

export function CasinoCard({ casino, isTopChoice = false }: CasinoCardProps) {
  return (
    <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card
        className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
          isTopChoice ? "border-accent shadow-lg shadow-accent/20" : "border-red-600 border-2"
        }`}
      >
        {isTopChoice && (
          <Badge className="absolute top-0 left-0 bg-yellow-400 text-black font-bold px-3 py-1 rounded-none rounded-br-lg z-10 border-2 border-yellow-300">
            #1 ANBEFALET
          </Badge>
        )}

        <div className="p-4 md:p-6 flex flex-col h-full min-h-[120px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-1">
            <div className="flex justify-between md:justify-start md:gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center gap-1 md:flex-row md:items-center md:gap-4">
                <Image
                  width={200}
                  height={160}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-48 h-28 md:w-42 md:h-36 object-contain p-2"
                />
              </div>

              <div className="flex flex-col items-center gap-2 md:hidden">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Velkomstbonus</p>
                  <p className="text-lg font-semibold text-accent">{casino.bonus}</p>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-black font-bold px-3 py-1 text-sm">
                  Spil Nu <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="hidden md:flex md:flex-1 md:flex-col md:items-center md:text-center">
              <p className="text-sm text-muted-foreground mb-1">Velkomstbonus</p>
              <p className="text-3xl sm:text-3xl font-semibold text-accent">{casino.bonus}</p>
            </div>

            <div className="hidden md:flex md:items-center md:gap-4">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg font-bold text-foreground">{casino.rating}</span>
                </div>
                <StarRating rating={casino.rating} />
                <p className="text-xs text-muted-foreground">({casino.votes} anmeldelser)</p>
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-black font-bold px-6">
                Spil Nu <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center mt-auto pt-2 md:pt-4">
            <p>{casino.terms}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
