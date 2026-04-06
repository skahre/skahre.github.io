import "../style.css";
import "./projects.css";
import ProjectCard from "./projects-page/projectCard";

import projects from "../data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            date={project.date}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}
