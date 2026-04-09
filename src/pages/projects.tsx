import ProjectCard from "../components/projects-page/projectCard";

import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex justify-center p-[96px]">
      <div className="flex flex-wrap justify-center gap-[36px]">
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
