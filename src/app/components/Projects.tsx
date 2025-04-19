import React from "react";

const projects = [
  {
    title: "Energeon",
    description:
      "An online store offering nutritional supplements and wellness products, built with responsive and modern UI.",
    siteUrl: "https://energeon.vercel.app",
    repoUrl: "https://github.com/Opitien/Energeon",
  },
  {
    title: "Project Two",
    description: "A custom web app tailored for business process optimization.",
    siteUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description: "A personal dashboard built with intuitive UX and analytics.",
    siteUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Four",
    description: "A social sharing app with beautiful UI and real-time features.",
    siteUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Four",
    description: "A social sharing app with beautiful UI and real-time features.",
    siteUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Four",
    description: "A social sharing app with beautiful UI and real-time features.",
    siteUrl: "#",
    repoUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 text-white"
      style={{
        background: "linear-gradient(135deg, rgba(56, 40, 121, 1) 0%, rgba(98, 59, 163, 1) 100%)",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-3 text-yellow-300">{project.title}</h3>
            <p className="text-sm text-black mb-6">{project.description}</p>
            <div className="flex justify-between gap-3">
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 text-purple-800 font-medium px-4 py-2 rounded hover:bg-yellow-200 transition"
              >
                Visit Site
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-300 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-300 hover:text-purple-800 transition"
              >
                GitHub
              </a>
            </div>
            {/* Decorative Layer Effect */}
            <div className="absolute inset-0 rounded-xl border border-purple-400 opacity-10 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
