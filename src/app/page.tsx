
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import React from 'react';








export default function Page() {
  return (
    <>
      <main>
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-6 text-center shadow-lg">
          <h1 className="text-3xl font-bold tracking-wider">
            Bienvenido a mi Portafolio
          </h1>
          <p className="mt-2 text-lg">
            ¡Descubre más sobre mí y mis proyectos!
          </p>
        </header>

        {/* Sección principal */}
        <section
        className="h-screen flex flex-col items-center justify-center bg-[url('/images/fondo.png')] bg-cover bg-center text-center"

        >
        <h1 className="text-5xl font-extrabold text-white transition-all duration-500 ease-in-out animate-fade-in">
        Hola, soy Wilson
      </h1>
      <p className="text-2xl mt-4 text-white transition-all duration-500 ease-in-out">
        Desarrollador Full Stack apasionado por crear soluciones digitales.
      </p>
      
          
        </section>

        {/* Secciones adicionales */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}