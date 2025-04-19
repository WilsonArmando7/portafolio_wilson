import Image from "next/image";

const Skills = () => {
    const skills = [
        {name: "JavaScript", icon: "/icons/javascript.png"},
        {name: "TypeScript", icon: "/icons/typescript.png"},
        {name: "React.js", icon: "/icons/react.png"},
        {name: "Next.js", icon: "/icons/nextjs.png"},
        {name: "CSS3", icon: "/icons/css3.png"},
        {name: "HTML5", icon: "/icons/html5.png"},
        {name: "Bootstrap", icon: "/icons/bootstrap.png"},
        {name: "TailwindCss", icon: "/icons/tailwindcss.png"},
        {name: "Node.js", icon: "/icons/nodejs.png"},
        {name: "Python", icon: "/icons/python.png"},
        {name: "Git", icon: "/icons/git.png"},
        {name: "GitHub", icon: "/icons/github.png"},
        {name: "PostgreSQL", icon: "/icons/postgresql.png"},
        {name: "MongoDB", icon: "/icons/mongodb.png"},
        {name: "MySQL", icon: "/icons/mysql.png"},
    ];

    return (
        <section id="skills" className="p-8 text-center">
            <div className="group perspective">
                <h2 className="text-2xl font-bold mb-6 text-black">Habilidades</h2>
            </div>

            <p className="mb-8">Las habilidades, herramientas y tecnologías en las que soy realmente bueno:</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center transform transition-transform hover:scale-110 hover:text-blue-500"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="mb-4"
                            priority={true} // ✅ Este comentario está bien así entre llaves
                        />
                        <p className="text-sm">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
