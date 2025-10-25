import Link from "next/link"

interface RoomCardProps {
  id: number
  name: string
  description: string
  imageUrl: string
  disponible: boolean
}

export function RoomCard({ id, name, description, imageUrl, disponible }: RoomCardProps) {
  return (
    <div className="overflow-hidden group hover:shadow-xl transition-all duration-300 border border-accent/20 rounded-lg bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{description}</p>
        {disponible ? (
          <Link
            href={`/habitacion/${id}`}
            className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all bg-transparent text-sm font-medium"
          >
            Ver Más
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md border border-muted-foreground/30 text-muted-foreground bg-muted/50 cursor-not-allowed text-sm font-medium"
          >
            No Disponible
          </button>
        )}
      </div>
    </div>
  )
}
