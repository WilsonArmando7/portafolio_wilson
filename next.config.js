/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // ✅ Correcto
    swcMinify: true, // ✅ Reemplaza "suchUnify" por "swcMinify"
    experimental: {
        appDir: true, // ⚠️ Solo si usas Next.js 13+
    },
};

module.exports = nextConfig;
