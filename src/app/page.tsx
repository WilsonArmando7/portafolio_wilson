import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import React from "react";
import Carrusel from "@/components/Carrusel";
import Educacion from "@/components/Educacion"; // Importa aquí claramente el nuevo componente
import Skills from "@/components/Skills"; // si usás alias con Next.js

export default function Page() {
    return (
        <>
            <main>
                {/* Header */}
                <header className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-6 text-center shadow-lg">
                    <h1 className="text-3xl font-bold tracking-wider">Bienvenido a mi Portafolio</h1>
                    <p className="mt-2 text-lg">¡Descubre más sobre mí y mis proyectos!</p>
                </header>

                {/* Contenido */}
                <About />
                <Carrusel />
                <Educacion />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
