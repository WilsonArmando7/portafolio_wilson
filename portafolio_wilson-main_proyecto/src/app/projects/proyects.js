import React from "react";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    image: "/path/to/image1.jpg",
    link: "https://enlaceproyecto1.com",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    image: "/path/to/image2.jpg",
    link: "https://enlaceproyecto2.com",
  },
  {
    title: "Proyecto 3",
    description: "Descripción breve del proyecto 3.",
    image: "/path/to/image3.jpg",
    link: "https://enlaceproyecto3.com",
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
