import "./projectCard.css";
import Button from "../../components/UI-elements/button";
import type { Project } from "../../data/projects";

export function Tag({ label }: { label: string }) {
  return (
    <div className="tag">
      <p>{label}</p>
    </div>
  );
}

export default function ProjectCard({
  image,
  title,
  date,
  description,
  tags,
}: Project) {
  return (
    <div className="project-card">
      <img src={image} />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-date">{date}</p>
        <p>{description}</p>
        <div className="tag-band">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div>
          <Button
            label="read more"
            size="m"
            variant="secondary"
            onClick={() => console.log("yippie")}
          />
        </div>
      </div>
    </div>
  );
}
