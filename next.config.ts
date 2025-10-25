/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔹 Hace que Next genere un sitio estático
  images: {
    unoptimized: true, // 🔹 Evita errores de imágenes al exportar
  },
};

export default nextConfig;
