import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Er casino lovligt i Danmark?",
      answer:
        "Ja, casino er lovligt i Danmark siden 2012. Alle casinoer skal have en licens fra Spillemyndigheden for at operere lovligt i Danmark.",
    },
    {
      question: "Hvordan ved jeg om et casino er sikkert?",
      answer:
        "Et sikkert casino har en dansk licens, SSL-kryptering, positive anmeldelser og er transparent om deres vilkår og betingelser. Tjek altid Spillemyndighedens hjemmeside.",
    },
    {
      question: "Hvad er omsætningskrav?",
      answer:
        "Omsætningskrav betyder, hvor mange gange du skal spille din bonus igennem, før du kan hæve gevinster. For eksempel betyder 35x omsætning, at du skal spille bonussen 35 gange.",
    },
    {
      question: "Kan jeg spille gratis?",
      answer:
        "Ja, mange casinoer tilbyder gratis spil eller demo-versioner af deres spil, så du kan prøve dem uden at risikere egne penge.",
    },
    {
      question: "Hvor hurtigt kan jeg hæve mine gevinster?",
      answer:
        "Udbetalingstider varierer mellem casinoer, men de fleste danske casinoer behandler udbetalinger inden for 1-3 hverdage.",
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 section-overlay">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-foreground">Ofte Stillede</span> <span className="text-primary">Spørgsmål</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-black">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
