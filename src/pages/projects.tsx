import ProjectCard from "../components/projects-page/projectCard";
import FilterTabs from "../components/projects-page/filterTabs";
import { useState } from "react";

import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "all") {
      return true;
    } else {
      return project.type.includes(selectedTab);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center px-[36px] lg:px-[96px] py-[36px] gap-[48px]">
      <FilterTabs selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      <div className="flex flex-wrap justify-center gap-[36px]">
        {filteredProjects.map((project, index) => (
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
