# Guía para Agregar Imágenes y Videos

## Estructura de Archivos

Todas las imágenes y videos de las habitaciones deben colocarse en la carpeta `public/habitaciones/`.

## Formato de Nombres de Archivo

Para cada habitación, necesitas:

### Imágenes (5 por habitación):
- `suite-[nombre]-1.jpg` (imagen principal)
- `suite-[nombre]-2.jpg`
- `suite-[nombre]-3.jpg`
- `suite-[nombre]-4.jpg`
- `suite-[nombre]-5.jpg`

### Video (1 por habitación):
- `suite-[nombre]-video.mp4`

## Ejemplo para Suite Diamante:

\`\`\`
public/
  habitaciones/
    suite-diamante-1.jpg
    suite-diamante-2.jpg
    suite-diamante-3.jpg
    suite-diamante-4.jpg
    suite-diamante-5.jpg
    suite-diamante-video.mp4
\`\`\`

## Lista de Nombres de Habitaciones:

1. suite-diamante
2. suite-opalo
3. suite-zafiro
4. suite-esmeralda
5. suite-rubi
6. suite-topacio
7. suite-amatista
8. suite-perla
9. suite-ambar
10. suite-jade
11. suite-coral
12. suite-cuarzo
13. suite-imperial

## Logo

El logo debe colocarse en:
- `public/logo-opaal.png` (PNG sin fondo)

## Cómo Actualizar los Enlaces de Reserva

Edita el archivo `lib/rooms-data.ts` y actualiza los enlaces en la sección `bookingLinks`:

\`\`\`typescript
bookingLinks: {
  airbnb: "https://airbnb.com/tu-enlace-aqui",
  kayak: "https://kayak.com/tu-enlace-aqui",
  booking: "https://booking.com/tu-enlace-aqui",
}
\`\`\`

## Notas Importantes:

- Las imágenes deben ser de alta calidad (mínimo 1920x1080px)
- Los videos deben estar en formato MP4 para mejor compatibilidad
- El logo debe ser PNG con fondo transparente
- Mantén los nombres de archivo exactamente como se especifica (en minúsculas, con guiones)
