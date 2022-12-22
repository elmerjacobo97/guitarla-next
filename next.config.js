/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', "image/webp"], // Habilitar avif y webp
        domains: ['res.cloudinary.com'], // Cargar images de cloudinary
    },
}

module.exports = nextConfig
