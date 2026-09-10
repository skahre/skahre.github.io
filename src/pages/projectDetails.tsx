import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Tag } from "../components/projects-page/projectCard";
import AppButton from "../components/UI-elements/appButton";
import { FaGithubSquare, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

function getLinkMeta(link: string) {
  if (link.includes("github.com")) {
    return { label: "View Code", icon: <FaGithubSquare size={48} /> };
  }
  if (link.toLowerCase().endsWith(".pdf")) {
    return { label: "View Report", icon: <FaFilePdf size={48} /> };
  }
  return { label: "View Project", icon: <FaExternalLinkAlt size={48} /> };
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="flex flex-col items-center p-9">
      {/* Hero */}
      <div className="rounded-lg relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-105 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col gap-3 items-center justify-end pb-10 px-6 text-center">
          <h1 className="h1 font-bold text-white drop-shadow-sm">
            {project.title}
          </h1>
          <p className="h3 text-sage-200 font-bold">{project.date}</p>
          <div className="flex flex-row flex-wrap gap-2 justify-center max-w-xl">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-3xl px-6 py-12 flex flex-col gap-6 w-full">
        {project.body &&
          project.body.map((content, i) => {
            if (Array.isArray(content)) {
              return (
                <div key={i} className="flex flex-col sm:flex-row gap-4">
                  {content.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={project.title}
                      className="rounded-lg shadow-md flex-1 min-w-0 w-full object-cover"
                    />
                  ))}
                </div>
              );
            }

            if (content.startsWith("##")) {
              return (
                <h2 key={content} className="h3 font-bold text-gray-900 mt-2">
                  {content.replace(/^##\s*/, "")}
                </h2>
              );
            }

            if (content[0] === "/") {
              return (
                <img
                  key={content}
                  src={content}
                  alt={project.title}
                  className="rounded-lg shadow-md w-full"
                />
              );
            }

            return (
              <p
                key={content}
                className="whitespace-pre-line text-gray-800 leading-relaxed"
              >
                {content}
              </p>
            );
          })}

        {project.links && project.links.length > 0 && (
          <div className="flex flex-row justify-around gap-4 pt-4 border-t border-gray-200">
            {project.links.map((link) => {
              const { label, icon } = getLinkMeta(link);
              return (
                <AppButton key={link} href={link} text={label} icon={icon} />
              );
            })}
          </div>
        )}

        <Link
          to="/projects"
          className="text-sm text-gray-500 hover:underline pt-6"
        >
          ← Back to all projects
        </Link>
      </div>
    </main>
  );
}
