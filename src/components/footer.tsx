import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img src="/logo-opaal.png" alt="Hotel Boutique" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Experiencia de descanso con atención en cada detalle. 13 habitaciones diseñadas para ti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4 tracking-wide uppercase">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/hospedaje"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Hospédate con Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4 tracking-wide uppercase">Contacto</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <span>+57 314 2407922</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@opaalhotel.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>123 Luxury Avenue, Ciudad</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-6 text-center">
          <p className="text-xs text-primary-foreground/60 tracking-wide">
            © {new Date().getFullYear()} Hotel Boutique. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
