import { Shield, Award, Clock } from "lucide-react"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ]

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 px-4 section-overlay">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
          <span className="text-primary">De Bedste</span> <span className="text-accent">Casinoer</span>{" "}
          <span className="text-foreground">i Danmark</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
          Opdagede licenserede danske casinoer med høje bonusser, hurtige udbetalinger og sikker spil. Alle anmeldelser
          er uafhængige og opdaterede.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-accent">
            <Shield className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">SSL Sikkerhed</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Award className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">Spillemyndigheden</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">18+ Ansvarligt Spil</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground">
          Sidste opdatering: {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </p>
      </div>
    </section>
  )
}
