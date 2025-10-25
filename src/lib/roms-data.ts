export interface Room {
  id: number
  name: string
  description: string
  fullDescription: string
  imageUrl: string
  images: string[]
  videoUrl: string
  disponible: boolean
  mostrar: boolean
  amenities: {
    bathroom: boolean
    kitchen: boolean
    closet: boolean
    socialArea: boolean
    wifi: boolean
    workspace: boolean
    tv: boolean
    security: boolean
  }
  bookingLinks: {
    airbnb: string
    kayak: string
    booking: string
  }
}


export const rooms: Room[] = [
  {
    id: 103,
    name: "Habitación 103",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/103.jpg",
    images: [
      "/habitaciones/103.jpg",
      "/habitaciones/103-2.jpg",
      "/habitaciones/103-3.jpg",
      "/habitaciones/103-4.jpg",
      "/habitaciones/103-5.jpg",
    ],
    videoUrl: "/primer_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 104,
    name: "Habitación 104",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/104.jpg",
    images: [
      "/habitaciones/104.jpg",
      "/habitaciones/104-2.jpg",
      "/habitaciones/104-3.jpg",
      "/habitaciones/104-4.jpg",
      "/habitaciones/104-5.jpg",
    ],
    videoUrl: "/primer_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1509367512652951215?_set_bev_on_new_domain=1761360193_EAMGM0ZDhiZGY3MW&source_impression_id=p3_1761360189_P37n4K0yNVh2PF4U",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 105,
    name: "Habitación 105",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama doble, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
El espacio
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• una cama doble (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/105.jpg",
    images: [
      "/habitaciones/105.jpg",
      "/habitaciones/105-2.jpg",
      "/habitaciones/105-3.jpg",
      "/habitaciones/105-4.jpg",
      "/habitaciones/105-5.jpg",
    ],
    videoUrl: "/primer_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1508158194271787300?source_impression_id=p3_1761360198_P389tmqXscI2w5AK",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 107,
    name: "Habitación 107",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama de 1.20, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
Acceso de los huéspedes
Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
Otros aspectos a destacar
Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/107.jpg",
    images: [
      "/habitaciones/107.jpg",
      "/habitaciones/107-2.jpg",
      "/habitaciones/107-3.jpg",
      "/habitaciones/107-4.jpg",
      "/habitaciones/107-5.jpg",
    ],
    videoUrl: "/primer_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1508149313344910020?source_impression_id=p3_1761360203_P3NX9ETT5wheitiG",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 108,
    name: "Habitación 108",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama de 1.20, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
El espacio
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Una cama de 1.20
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/108.jpg",
    images: [
      "/habitaciones/108.jpg",
      "/habitaciones/108-2.jpg",
      "/habitaciones/108-3.jpg",
      "/habitaciones/108-4.jpg",
      "/habitaciones/108-5.jpg",
    ],
    videoUrl: "/primer_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1508141599728805247?source_impression_id=p3_1761360207_P3wXraTS0dnM1cXz",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 203,
    name: "Habitación 203",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama doble, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
El espacio
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
* Cocina dotada con estufa.
* Baño privado con acabados elegantes.
* una camas: una doble.
* Televisión de pantalla plana.
* Nevera.
* Barra tipo comedor/estudio con dos sillas altas de madera.
* Closet amplio.
* Iluminación cálida y diseño contemporáneo.
* Agua caliente.
* WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.
Acceso de los huéspedes
Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
Otros aspectos a destacar
Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/203.jpg",
    images: [
      "/habitaciones/203.jpg",
      "/habitaciones/203-2.jpg",
      "/habitaciones/203-3.jpg",
      "/habitaciones/203-4.jpg",
      "/habitaciones/203-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1503985627590493028?source_impression_id=p3_1761360215_P3nVcv9FtDH3USzs",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 204,
    name: "Habitación 204",
    description: "3 huéspedes • 1 habitación • 2 camas • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama doble y una cama sencilla, con cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
El espacio
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
* Cocina dotada con estufa.
* Baño privado con acabados elegantes.
* Dos camas: una doble (1.40) y una sencilla.
* Televisión de pantalla plana.
* Nevera.
* Barra tipo comedor/estudio con dos sillas altas de madera.
* Closet amplio.
* Iluminación cálida y diseño contemporáneo.
* Agua caliente.
* WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.
Acceso de los huéspedes
Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
Otros aspectos a destacar
Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/204.jpg",
    images: [
      "/habitaciones/204.jpg",
      "/habitaciones/204-2.jpg",
      "/habitaciones/204-3.jpg",
      "/habitaciones/204-4.jpg",
      "/habitaciones/204-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1503965538022119379?source_impression_id=p3_1761360221_P3fozyom45I1J5Cp",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 205,
    name: "Habitación 205",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/103.jpg",
    images: [
      "/habitaciones/103.jpg",
      "/habitaciones/103-2.jpg",
      "/habitaciones/103-3.jpg",
      "/habitaciones/103-4.jpg",
      "/habitaciones/103-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 206,
    name: "Habitación 206",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.
Habitación moderna con una cama doble, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector de Unicentro del norte, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.
El espacio
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
* Cocina dotada con estufa.
* Baño privado con acabados elegantes.
* Una cama: una doble
* Televisión de pantalla plana.
* Nevera.
* Barra tipo comedor/estudio con dos sillas altas de madera.
* Closet amplio.
* Iluminación cálida y diseño contemporáneo.
* Agua caliente.
* WIFI de alta velocidad.
Acceso de los huéspedes
Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.`,
    imageUrl: "/habitaciones/206.jpg",
    images: [
      "/habitaciones/206.jpg",
      "/habitaciones/206-2.jpg",
      "/habitaciones/206-3.jpg",
      "/habitaciones/206-4.jpg",
      "/habitaciones/206-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: true,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "https://www.airbnb.com.co/rooms/1501057737583328807?source_impression_id=p3_1761360228_P3R07GtUn5ukX3Gj",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 207,
    name: "Habitación 207",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/207.jpg",
    images: [
      "/habitaciones/207.jpg",
      "/habitaciones/207-2.jpg",
      "/habitaciones/207-3.jpg",
      "/habitaciones/207-4.jpg",
      "/habitaciones/207-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 208,
    name: "Habitación 208",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/208.jpg",
    images: [
      "/habitaciones/208.jpg",
      "/habitaciones/208-2.jpg",
      "/habitaciones/208-3.jpg",
      "/habitaciones/208-4.jpg",
      "/habitaciones/208-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 209,
    name: "Habitación 209",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/209.jpg",
    images: [
      "/habitaciones/209.jpg",
      "/habitaciones/209-2.jpg",
      "/habitaciones/209-3.jpg",
      "/habitaciones/209-4.jpg",
      "/habitaciones/209-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
  {
    id: 210,
    name: "Habitación 210",
    description: "2 huéspedes • 1 habitación • 1 cama • 1 baño privado",
    fullDescription: `Moderna habitación a 5 minutos de Unicentro.

Habitación moderna con una cama de 1.40, cocina equipada, baño privado y zona de vestier. Decorada con acabados elegantes, luz cálida y detalles confortables. Ubicada en un exclusivo sector, ideal para descansar o trabajar.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

El espacio:
Moderna habitación a 5 minutos de Unicentro

Disfruta de una habitación moderna y acogedora, ubicada a solo 5 minutos caminando del centro comercial Unicentro. Ideal para estadías cortas o largas, combina comodidad, estilo y una ubicación privilegiada.

La habitación cuenta con:
• Cocina dotada con estufa.
• Baño privado con acabados elegantes.
• Dos camas (1.40)
• Televisión de pantalla plana.
• Nevera.
• Barra tipo comedor/estudio con dos sillas altas de madera.
• Closet amplio.
• Iluminación cálida y diseño contemporáneo.
• Agua caliente.
• WIFI de alta velocidad.

Áreas sociales compartidas:
Disfruta de espacios comunes como una acogedora sala con chimenea y una zona de estudio ideal para trabajar o leer, disponibles para todos los huéspedes.

Además, en las cercanías encontrarás:
Panaderías, droguerías, cigarrerías, supermercados y una amplia oferta de restaurantes.`,
    imageUrl: "/habitaciones/210.jpg",
    images: [
      "/habitaciones/210.jpg",
      "/habitaciones/210-2.jpg",
      "/habitaciones/210-3.jpg",
      "/habitaciones/210-4.jpg",
      "/habitaciones/210-5.jpg",
    ],
    videoUrl: "/segundo_piso.mp4",
    disponible: true,
    mostrar: false,
    amenities: {
      bathroom: true,
      kitchen: true,
      closet: true,
      socialArea: true,
      wifi: true,
      workspace: true,
      tv: true,
      security: true,
    },
    bookingLinks: {
      airbnb: "#",
      kayak: "#",
      booking: "#",
    },
  },
]
