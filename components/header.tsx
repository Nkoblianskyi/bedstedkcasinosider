import Link from "next/link"
import { Crown } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-accent/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="lg:flex items-center space-x-2 hidden sm:block">
          <Image src="/denmark-flag-icon.webp" alt="Spillemyndigheden Logo" width={32} height={32} />
          <div className="text-xs text-muted-foreground hidden sm:block">Licenseret af Spillemyndigheden</div>
        </div>

        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"
        >
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <div className="text-lg sm:text-2xl font-bold">
            <span className="text-primary">Bedste</span>
            <span className="text-accent">Casino</span>
            <span className="text-foreground">sider</span>
          </div>
        </Link>

        <div className=" sm:hidden flex flex-row items-center space-x-2">

          <Image src="/denmark-flag-icon.webp" alt="Spillemyndigheden Logo" width={18} height={18} />
          <p className="text-[9px]"> Licenseret af Spillemyndigheden</p>
        </div>
      </div>
    </header>
  )
}
