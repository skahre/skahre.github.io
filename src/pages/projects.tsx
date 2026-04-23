import ProjectCard from "../components/projects-page/projectCard";
import FilterTabs from "../components/projects-page/filterTabs";
import { useState } from "react";

import { projects } from "../data/projects";
import type { TabFilter } from "../data/projects";

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState<TabFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "all") {
      return true;
    } else {
      return project.type.includes(selectedTab);
    }
  });

  return (
    <div className="relative flex flex-col justify-center items-center px-9 lg:px-24 py-9 gap-12">
      <div className="flex justify-center sticky top-[81.6px] md:top-[91.2px] nav:top-[107.2px] z-40">
        <FilterTabs selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      </div>
      <div className="flex flex-wrap justify-center gap-9">
        {filteredProjects.map((project) => {
          const { type: _, ...cardProps } = project;
          return <ProjectCard key={project.title} {...cardProps} />;
        })}
      </div>
    </div>
  );
}
