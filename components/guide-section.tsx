import { Search, Shield, CreditCard, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

export function GuideSection() {
  const steps = [
    {
      icon: Search,
      title: "1. Undersøg Licensen",
      description: "Sørg for at casinoet har en gyldig dansk licens fra Spillemyndigheden for sikker spil.",
    },
    {
      icon: Shield,
      title: "2. Tjek Sikkerhed",
      description: "Verificer SSL-kryptering og læs anmeldelser fra andre spillere om casinoets pålidelighed.",
    },
    {
      icon: CreditCard,
      title: "3. Sammenlign Bonusser",
      description: "Se på velkomstbonusser, omsætningskrav og andre tilbud for at finde den bedste værdi.",
    },
    {
      icon: Trophy,
      title: "4. Test Spiludvalget",
      description: "Prøv forskellige spil og funktioner for at sikre, at casinoet matcher dine præferencer.",
    },
  ]

  return (
    <section id="guia" className="py-16 px-4 section-overlay">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-foreground">Sådan Vælger Du Det</span>{" "}
          <span className="text-primary">Rigtige Casino</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <step.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
