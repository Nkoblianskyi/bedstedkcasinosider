"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <Link href={topCasino.url} target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-900 border border-accent rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-105">
            {/* Gold Header */}
            <div className="bg-gradient-to-r from-accent to-yellow-500 p-4 text-center">
              <h2 className="text-xl font-bold text-black">EKSKLUSIVT TILBUD</h2>
              <p className="text-sm text-black/80 font-medium">Bedste Casino i Danmark</p>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center space-y-4">
              {/* Logo */}
              <div className="flex justify-center">
                <Image
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={topCasino.name}
                  width={220}
                  height={180}
                  className="object-contain"
                />
              </div>


              {/* Rating */}
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-sm font-bold text-accent">{topCasino.rating}</span>
                </div>
                <span className="text-gray-400 text-sm">({topCasino.votes.toLocaleString()} anmeldelser)</span>
              </div>

              {/* Bonus */}
              <div className="mb-8 mt-8">
                <p className="text-sm text-gray-400 mb-1">Velkomstbonus</p>
                <p className="text-xl font-bold text-accent">{topCasino.bonus}</p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <div className="bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                  Spil Nu →
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 leading-relaxed">{topCasino.terms}</p>
            </div>
          </div>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
