import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { GuideSection } from "@/components/guide-section"
import { ResponsibleGamingSection } from "@/components/responsible-gaming-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RankingsSection />
        <GuideSection />
        <ResponsibleGamingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
