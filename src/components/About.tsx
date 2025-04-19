"use client"; // Muy importante si usas Next.js 13+

import {useEffect, useState} from "react";
import Image from "next/image";

const About = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="about" className="p-8 bg-gray-900 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">Acerca de mí</h2>
            <p className="mb-8">¿Sientes curiosidad por mí? Aquí la tienes.</p>

            <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 mb-6">
                    <Image
                        src="/images/mi-foto.png" // Asegúrate de que exista en /public/images/
                        alt="Mi foto"
                        width={192}
                        height={192}
                        className="object-cover"
                    />
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-gray-300">
                    Soy estudiante de Ingeniería en Sistemas, apasionado por la tecnología y el desarrollo de soluciones
                    digitales. Durante mi formación he adquirido experiencia en diversas herramientas y tecnologías,
                    desde el desarrollo web con HTML, CSS y JavaScript, hasta frameworks modernos como React.js, Next.js
                    y Bootstrap. También tengo conocimientos en backend utilizando Node.js y bases de datos como
                    PostgreSQL, MongoDB y MySQL. Mi objetivo es combinar mi aprendizaje académico con mi curiosidad por
                    la innovación para desarrollar proyectos que impacten positivamente a las personas y a las
                    organizaciones. Me esfuerzo constantemente por mejorar mis habilidades y aprender nuevas tecnologías
                    para estar a la vanguardia en el mundo del desarrollo de software.
                </p>
            </div>
        </section>
    );
};

export default About;
