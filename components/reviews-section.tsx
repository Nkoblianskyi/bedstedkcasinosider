"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Lars Nielsen",
    rating: 5,
    comment: "Fantastisk side med de bedste casino anmeldelser! Fandt det perfekte casino gennem deres anbefalinger.",
    date: "2025-01-15",
  },
  {
    id: 2,
    name: "Mette Hansen",
    rating: 5,
    comment: "Bedste casino guide på nettet! Deres anmeldelser er altid ærlige og detaljerede. Meget hjælpsom side.",
    date: "2025-01-12",
  },
  {
    id: 3,
    name: "Anders Petersen",
    rating: 4,
    comment: "God oversigt over danske casinoer. Sammenligning af bonusser er særligt nyttig. Anbefaler siden!",
    date: "2025-01-10",
  },
  {
    id: 4,
    name: "Sofie Larsen",
    rating: 5,
    comment: "Elsker deres detaljerede anmeldelser! Hjælper mig altid med at vælge det rigtige casino. Troværdig side.",
    date: "2025-01-08",
  },
  {
    id: 5,
    name: "Michael Andersen",
    rating: 4,
    comment: "Sikker information og gode råd om ansvarligt spil. Føler mig tryg ved at bruge deres anbefalinger.",
    date: "2025-01-05",
  },
  {
    id: 6,
    name: "Anna Christensen",
    rating: 5,
    comment: "Imponerende grundige anmeldelser. Fandt mit nye favoritcasino gennem deres top 5 liste!",
    date: "2025-01-03",
  },
  {
    id: 7,
    name: "Thomas Jensen",
    rating: 4,
    comment: "Professionel side med opdaterede informationer. Casino sammenligninger er meget nyttige.",
    date: "2025-01-01",
  },
  {
    id: 8,
    name: "Camilla Møller",
    rating: 5,
    comment: "Bedste casino guide jeg har fundet. Deres ekspertanmeldelser har sparet mig for mange skuffelser.",
    date: "2024-12-28",
  },
  {
    id: 9,
    name: "Jesper Rasmussen",
    rating: 4,
    comment: "Hurtig at navigere og nem at finde information. Godt layout og brugervenlig design.",
    date: "2024-12-25",
  },
  {
    id: 10,
    name: "Marie Sørensen",
    rating: 5,
    comment: "Tryg og pålidelig information om danske casinoer. Føler mig sikker på deres anbefalinger.",
    date: "2024-12-22",
  },
  {
    id: 11,
    name: "Henrik Olsen",
    rating: 5,
    comment: "Fantastisk hjælpsom side! Deres bonus guides har hjulpet mig med at få de bedste tilbud.",
    date: "2024-12-20",
  },
  {
    id: 12,
    name: "Lise Pedersen",
    rating: 4,
    comment: "God oversigt over licenser og sikkerhed. Vigtig information for os spillere. Tak for det!",
    date: "2024-12-18",
  },
  {
    id: 13,
    name: "Peter Kristensen",
    rating: 5,
    comment: "Deres FAQ sektion besvarede alle mine spørgsmål. Meget informativ og velorganiseret side.",
    date: "2024-12-15",
  },
  {
    id: 14,
    name: "Tina Mortensen",
    rating: 4,
    comment: "Elsker at de fokuserer på ansvarligt spil. Føles som en side der virkelig tænker på spillerne.",
    date: "2024-12-12",
  },
  {
    id: 15,
    name: "Nikolaj Poulsen",
    rating: 5,
    comment: "Opdaterede anmeldelser og aktuelle bonusser. Holder altid øje med deres nye indhold.",
    date: "2024-12-10",
  },
  {
    id: 16,
    name: "Katrine Jørgensen",
    rating: 4,
    comment: "Professionel tilgang til casino anmeldelser. Kan mærke at de ved hvad de snakker om.",
    date: "2024-12-08",
  },
  {
    id: 17,
    name: "Rasmus Thomsen",
    rating: 5,
    comment: "Bedste danske casino guide! Deres top 5 liste er spot on. Har prøvet dem alle.",
    date: "2024-12-05",
  },
  {
    id: 18,
    name: "Maja Eriksen",
    rating: 4,
    comment: "God mobilversion og hurtig indlæsning. Nemt at bruge på farten når jeg skal tjekke bonusser.",
    date: "2024-12-03",
  },
  {
    id: 19,
    name: "Simon Larsen",
    rating: 5,
    comment: "Ærlige anmeldelser uden skjulte agendaer. Føles som en side jeg kan stole på 100%.",
    date: "2024-12-01",
  },
  {
    id: 20,
    name: "Louise Nielsen",
    rating: 4,
    comment: "Godt indhold om spilleregler og strategier. Ikke kun casino anmeldelser men også lærerig.",
    date: "2024-11-28",
  },
  {
    id: 21,
    name: "Martin Hansen",
    rating: 5,
    comment: "Deres sammenligning af udbetalingstider er guld værd! Sparer mig for lang ventetid.",
    date: "2024-11-25",
  },
  {
    id: 22,
    name: "Emma Andersen",
    rating: 4,
    comment: "Detaljerede beskrivelser af bonusvilkår. Hjælper mig med at undgå ubehagelige overraskelser.",
    date: "2024-11-22",
  },
  {
    id: 23,
    name: "Oliver Petersen",
    rating: 5,
    comment: "Fantastisk ressource for danske spillere! Denne side er blevet min go-to guide til casinoer.",
    date: "2024-11-20",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentReviews = () => {
    const start = currentIndex * reviewsPerPage
    return reviews.slice(start, start + reviewsPerPage)
  }

  return (
    <section className="py-16 bg-card/50 section-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hvad Siger Vores Spillere?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Læs ægte anmeldelser fra danske spillere der har oplevet de bedste casinoer
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {[...Array(totalPages)].map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((review) => (
                      <div
                        key={review.id}
                        className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-foreground">{review.name}</h3>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">"{review.comment}"</p>

                        <div className="text-xs text-muted-foreground">
                          {new Date(review.date).toLocaleDateString("da-DK", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
