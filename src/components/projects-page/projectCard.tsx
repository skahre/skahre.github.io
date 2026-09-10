import Button from "../../components/UI-elements/button";
import type { Project } from "../../data/projects";

export function Tag({ label }: { label: string }) {
  return (
    <div className="px-1 py-px rounded-sm bg-sage-200 text-sage-400">
      <p className="text-[10px] md:text-xs 3xl:text-2xl leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function ProjectCard({
  image,
  title,
  date,
  description,
  tags,
  slug,
  body,
}: Omit<Project, "type">) {
  return (
    <div className="flex flex-col gap-4 w-56 md:w-3xs 3xl:w-lg rounded-3xl p-4 bg-white shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain rounded-[10px]"
      />
      <div className="flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="h4 font-bold">{title}</h3>
          <p className="-mt-2 text-[10px] md:text-xs 3xl:text-2xl text-sage-400">
            {date}
          </p>
          <p>{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div>
            <Button
              label="read more"
              size="m"
              variant="secondary"
              to={`/projects/${slug}`}
              disabled={!body}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
