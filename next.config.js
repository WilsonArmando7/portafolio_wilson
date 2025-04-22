/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    // 👇 fuerza el uso de webpack en lugar de Turbopack
};

module.exports = nextConfig;
