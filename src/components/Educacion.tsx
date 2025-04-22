"use client"; // Este componente se renderiza en el cliente

import React, {useState, useEffect} from "react";
import Image from "next/image";

const Educacion = () => {
    // Estado para saber qué imagen mostrar en el modal
    const [imagenActual, setImagenActual] = useState<string | null>(null);
    // Estado para asegurarnos que se monte solo en cliente (evita errores de hidratación en Next.js)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // se monta en cliente
    }, []);

    if (!isMounted) return null; // evita que se renderice en el servidor

    return (
        <section id="educacion" className="py-12 bg-gray-900 text-white hover:scale-105">
            <div className="container mx-auto px-6">
                <div className="group perspective">
                    <h2 className="text-3xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
                        Educación y Certificaciones
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* Tarjeta: Ingeniería en Sistemas */}
                    <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold">Ingeniería en Sistemas</h3>
                        <p className="text-black">Universidad Panamericana, Quetzaltenango</p>
                        <p className="mt-2 text-black">
                            (En proceso de terminar)
                            {/* Este botón muestra el diploma de liderazgo */}
                            <button
                                onClick={() => setImagenActual("/images/liderazgo.jpeg")}
                                className="ml-2 px-4 py-1 border border-white rounded-md bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white"
                            >
                                Ver
                            </button>
                            {/* Este botón muestra el diploma de ciberseguridad */}
                        </p>
                    </div>

                    {/* Tarjeta: Diplomado en Ciberseguridad */}
                    <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white">Diplomado en Ciberseguridad</h3>
                        <p className="text-black">Curso especializado en seguridad informática</p>
                        <p className="mt-2 text-black">
                            En proces de Culminar(Forence digital){" "}
                            <button
                                onClick={() => setImagenActual("/images/ciberseguridad.jpeg")}
                                className="ml-2 px-4 py-1 border border-white rounded-md bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white "
                            >
                                Ver
                            </button>
                        </p>
                    </div>

                    {/* Tarjeta: Curso React y Angular */}
                    <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:scale-105">
                        <h3 className="text-xl font-semibold">Curso de Inglés</h3>
                        <p className="text-black">Plataforma en línea (Udemy)</p>
                        <p className="mt-2 text-black">
                            (En proceso){" "}
                            <button
                                onClick={() => setImagenActual("/images/react-angular.jpeg")}
                                className="ml-2 px-4 py-1 border border-white rounded-md bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white"
                            >
                                Ver
                            </button>
                        </p>
                    </div>

                    {/* Tarjeta: Liderazgo Transformacional */}
                    <div className="bg-orange-500 text-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">Liderazgo Transformacional</h3>
                        <p className="text-black">Plataforma en línea (Udemy)</p>
                        <p className="mt-2 text-black">
                            Finalizado{" "}
                            <button
                                onClick={() => setImagenActual("/images/WhatsApp Image 2025-04-14 at 9.32.38 PM.jpeg")}
                                className="ml-2 px-4 py-1 border border-white rounded-md bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white"
                            >
                                Ver
                            </button>
                        </p>
                    </div>

                    {/* Modal dinámico que muestra la imagen actual */}
                    {imagenActual && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="relative max-h-screen overflow-auto p-4 bg-gray-100 rounded-lg shadow-xl max-w-3xl w-full">
                                <button
                                    className="absolute top-2 right-2 text-red-500 font-bold text-xl"
                                    onClick={() => setImagenActual(null)}
                                >
                                    ✖
                                </button>
                                <Image
                                    src={imagenActual}
                                    alt="Certificado"
                                    className="w-full max-h-[90vh] object-contain rounded-lg"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Educacion;
