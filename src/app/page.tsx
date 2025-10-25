import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { rooms } from "../lib/roms-data"
import Link from "next/link"

export default function HomePage() {
  const visibleRooms = rooms.filter((room) => room.mostrar)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-primary">
          <img
            src="/banner.jpg"
            alt="Hotel Boutique"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <img src="/logo-opaal.png" alt="Hotel Boutique" className="h-32 md:h-40 lg:h-48 w-auto object-contain" />
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            El mejor lugar para descansar
          </p>
          <Link
            href="/hospedaje"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-medium transition-colors"
          >
            Explorar Habitaciones
          </Link>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">Nuestras Habitaciones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              13 habitaciones diseñadas para ofrecerte la mejor experiencia de hospedaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleRooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                description={room.description}
                imageUrl={room.imageUrl}
                disponible={room.disponible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 tracking-wide">
            ¿Listo para tu experiencia?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Reserva ahora y descubre el verdadero significado del descanso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hospedaje"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-medium transition-colors"
            >
              Ver Todas las Habitaciones
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
