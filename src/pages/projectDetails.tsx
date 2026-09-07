import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Tag } from "../components/projects-page/projectCard";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="flex flex-col p-9 gap-4">
      <div className="rounded-lg relative overflow-hidden">
        <img src={project.image} alt={project.title} className="" />
        <div className="absolute inset-0 bg-gray-500/60 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col gap-2 items-center justify-center">
          <h1 className="h1 font-bold text-white">{project.title}</h1>
          <p className="h3 text-sage-200 font-bold">{project.date}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
      {project.body &&
        project.body.map((content) =>
          content[0] === "/" ? (
            <img key={content} src={content} alt={project.title} />
          ) : (
            <p key={content} className="whitespace-pre-line">
              {content}
            </p>
          ),
        )}
      {project.links &&
        project.links.map((link) => {
          const isGithub = link.includes("github.com");
          return (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="underline inline-flex items-center gap-1"
            >
              {isGithub ? "View Code" : "View Project"} →
            </a>
          );
        })}
    </main>
  );
}
