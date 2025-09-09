import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import PromotionalModal from "@/components/promotional-modal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bedste Danske Casinoer 2025 | Bedstedkcasinosider.com",
  description:
    "Find de bedste danske casinoer med høje bonusser og sikker spil. Anmeldelser af licenserede casinoer i Danmark.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}

      >
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <PromotionalModal />
        <Analytics />
      </body>
    </html>
  )
}
