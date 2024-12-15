import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proyecto 1 */}
        <div className="p-4 border rounded-lg shadow-md">
          <Image
            src="/images/project1.jpg"
            alt="Proyecto 1"
            width={300}
            height={200}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold">Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="https://github.com/WilsonArmando7/proyecto_operativos.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Ver Código
            </a>
            <a
              href="https://tu-demo1.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver Demo
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="p-4 border rounded-lg shadow-md">
          <Image
            src="/images/project1.jpg"
            alt="Proyecto 2"
            width={300}
            height={200}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold">Proyecto 2</h3>
          <p>ProyectoSistemasOperativos 2.</p>
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="https://github.com/WilsonArmando7/AgenciaDViajes2.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Ver Código
            </a>
            <a
              href="https://tu-demo2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver Demo
            </a>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="p-4 border rounded-lg shadow-md">
          <Image
            src="/images/porta.png"
            alt="Proyecto 3"
            width={300}
            height={200}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold">Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="https://github.com/WilsonArmando7/proyecto3.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Ver Código
            </a>
            <a
              href="https://tu-demo3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver Demo
            </a>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="p-4 border rounded-lg shadow-md">
          <Image
            src="/images/wilso.png"
            alt="Proyecto 4"
            width={300}
            height={200}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold">Proyecto 4</h3>
          <p>Descripción breve del proyecto 4.</p>
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="https://github.com/WilsonArmando7/proyecto4.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Ver Código
            </a>
            <a
              href="https://tu-demo4.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

