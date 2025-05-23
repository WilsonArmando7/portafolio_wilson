// src/app/layout.tsx
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

//  Usamos rutas relativas correctas
const geistSans = localFont({
    src: [
        {
            path: "./fonts/GeistVF.woff",
            weight: "100 900",
        },
    ],
    variable: "--font-geist-sans",
});

const geistMono = localFont({
    src: [
        {
            path: "./fonts/GeistMonoVF.woff",
            weight: "100 900",
        },
    ],
    variable: "--font-geist-mono",
});

// Información general del sitio
export const metadata: Metadata = {
    title: "Portafolio de Wilson",
    description: "Portafolio personal hecho con Next.js y Tailwind CSS",
};

//  Componente raíz del layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <head />
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
