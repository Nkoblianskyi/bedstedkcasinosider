"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-accent/20 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-accent mb-2">Vi bruger cookies</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside og til at analysere trafik. Ved at
            fortsætte med at bruge vores side accepterer du vores brug af cookies.
            <Link href="/cookie-politik" className="text-accent hover:text-accent/80 underline ml-1">
              Læs mere om vores cookie-politik
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={declineCookies}
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
          >
            Afvis
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-accent hover:bg-accent/90 text-black font-medium">
            Accepter alle
          </Button>
          <Button onClick={declineCookies} variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
