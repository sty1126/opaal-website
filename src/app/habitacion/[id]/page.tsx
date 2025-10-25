"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { rooms } from "../../../lib/roms-data"
import { Bath, ChefHat, Armchair, Users, Wifi, Briefcase, Tv, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const room = rooms.find((r) => r.id === Number.parseInt(id))

  if (!room) {
    notFound()
  }

  const amenityIcons = {
    bathroom: { icon: Bath, label: "Baño Privado" },
    kitchen: { icon: ChefHat, label: "Cocina Equipada" },
    closet: { icon: Armchair, label: "Closet Amplio" },
    socialArea: { icon: Users, label: "Sala Social" },
    wifi: { icon: Wifi, label: "Wifi" },
    workspace: { icon: Briefcase, label: "Zona de Trabajo" },
    tv: { icon: Tv, label: "TV" },
    security: { icon: Shield, label: "Cámaras de Seguridad" },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Image Gallery */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src={room.images[0] || "/placeholder.svg?height=600&width=1200"}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {room.images.slice(1, 5).map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden bg-muted border-2 border-accent/20"
                >
                  <img
                    src={image || "/placeholder.svg?height=200&width=300"}
                    alt={`${room.name} - Imagen ${i + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Room Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">{room.name}</h1>
                <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {room.fullDescription}
                </div>
              </div>

              {/* Amenities */}
              <div className="border border-accent/20 rounded-lg bg-card">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Lo que este lugar ofrece</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {Object.entries(room.amenities).map(([key, value]) => {
                      if (!value) return null
                      const amenity = amenityIcons[key as keyof typeof amenityIcons]
                      const Icon = amenity.icon
                      return (
                        <div key={key} className="flex items-center gap-4">
                          <div className="bg-accent/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <span className="text-foreground font-medium">{amenity.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="border border-accent/20 rounded-lg bg-card">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Video Tour</h2>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border-2 border-accent/20">
                    <video src={room.videoUrl} controls className="w-full h-full object-cover" poster={room.images[0]}>
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="border border-accent/20 rounded-lg bg-card sticky top-32">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Reserva Ahora</h2>
                  {room.disponible ? (
                    <>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Reserva esta habitación en tu plataforma favorita
                      </p>
                      <div className="space-y-4">
                        {/* Airbnb */}
                        <a
                          href={room.bookingLinks.airbnb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white font-medium transition-colors"
                        >
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zM143.6 380.8c-16.9-9.8-27.7-28.1-27.7-47.9 0-22.6 12.6-43.3 33-54.2L256 201.5l107.1 77.2c20.4 10.9 33 31.6 33 54.2 0 19.8-10.8 38.1-27.7 47.9L256 427.8l-112.4-47z" />
                          </svg>
                          Airbnb
                        </a>

                        {/* Kayak - No disponible */}
                        <button
                          disabled
                          className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-[#FF690F] text-white font-medium opacity-60 cursor-not-allowed"
                        >
                          {/* Logo Kayak (SVG embebido) */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" className="h-5 mr-2 fill-white">
                            <rect width="100" height="24" rx="3" fill="#FF690F" />
                            <text x="50%" y="65%" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" fill="white">
                              KAYAK
                            </text>
                          </svg>
                          No disponible
                        </button>

                        {/* Booking.com - No disponible */}
                        <button
                          disabled
                          className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-[#003580] text-white font-medium opacity-60 cursor-not-allowed"
                        >
                          {/* Logo Booking.com (SVG embebido simplificado) */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" className="h-5 mr-2 fill-white">
                            <rect width="120" height="24" rx="3" fill="#003580" />
                            <text x="50%" y="65%" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold" fill="white">
                              Booking.com
                            </text>
                          </svg>
                          No disponible
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-lg font-semibold text-muted-foreground mb-2">No Disponible</p>
                      <p className="text-sm text-muted-foreground">Esta habitación no está disponible actualmente</p>
                    </div>
                  )}
                  <div className="mt-8 pt-8 border-t border-accent/20">
                    <p className="text-sm text-muted-foreground mb-4">¿Tienes preguntas? Contáctanos directamente</p>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center w-full h-10 px-4 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-colors"
                    >
                      Contáctanos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
