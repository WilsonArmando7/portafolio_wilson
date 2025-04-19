import React from "react";

const Header = () => {
    return (
        <header className="w-full bg-gray-900 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo o título */}
                <div className="text-lg font-bold">Joni-Techº</div>

                {/* Enlaces de navegación */}
                <div className="flex gap-6">
                    <a href="#habilidades" className="hover:underline">
                        Habilidades
                    </a>
                    <a href="#proyectos" className="hover:underline">
                        Proyectos
                    </a>
                    <a href="#contacto" className="hover:underline">
                        Contacto
                    </a>
                </div>
                {/* Botón de descarga */}
                <a
                    href="/CV_Wilson.pdf"
                    download="CV_Wilson"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                    Descargar CV
                </a>
            </nav>
        </header>
    );
};

export default Header;
