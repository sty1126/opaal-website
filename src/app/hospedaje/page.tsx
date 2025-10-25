import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { rooms } from "../../lib/roms-data"

export default function HospedajePage() {
  const visibleRooms = rooms.filter((room) => room.mostrar)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-wide">
              Hospédate con Nosotros
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre nuestras 13 habitaciones, cada una diseñada con atención al detalle para ofrecerte una
              experiencia única. Elige la habitación perfecta para tu estancia.
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
      </main>

      <Footer />
    </div>
  )
}
