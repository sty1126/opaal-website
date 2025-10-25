"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-opaal.png"
              alt="Hotel Boutique"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/hospedaje"
              className="text-sm tracking-wide text-primary-foreground hover:text-accent transition-colors uppercase"
            >
              Hospédate con Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-sm tracking-wide text-primary-foreground hover:text-accent transition-colors uppercase"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-accent hover:text-accent/80 hover:bg-accent/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/hospedaje"
                className="text-sm tracking-wide text-primary-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hospédate con Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-sm tracking-wide text-primary-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
