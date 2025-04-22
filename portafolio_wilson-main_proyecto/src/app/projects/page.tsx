interface Project {
  id: number;
  title: string;
  description: string;
}

const projectList: Project[] = [
  { id: 1, title: "Proyecto 1", description: "Descripción del proyecto." },
  { id: 2, title: "Proyecto 2", description: "Descripción del proyecto." },
];

const ProjectItem = ({ title, description }: { title: string; description: string }) => (
  <li className="p-4 bg-white rounded shadow">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p>{description}</p>
  </li>
);

export default function Projects() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Mis Proyectos</h1>
      <ul className="mt-4 space-y-4">
        {projectList.map((project) => (
          <ProjectItem key={project.id} title={project.title} description={project.description} />
        ))}
      </ul>
    </div>
  );
}
