import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Vite.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Web Audit Tool",
    description: "SEO, performance & accessibility audit tool.",
    tech: ["Python", "Flask", "React"],
    github: "https://github.com/yourname/webaudit",
    live: "#",
  },
  {
    title: "LLM Chat Application",
    description: "AI chatbot using vLLM and FAISS.",
    tech: ["Python", "vLLM", "FAISS"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
