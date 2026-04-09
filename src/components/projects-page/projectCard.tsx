import Button from "../../components/UI-elements/button";
import type { Project } from "../../data/projects";

export function Tag({ label }: { label: string }) {
  return (
    <div className="px-[4px] py-[1px] rounded-[20px] bg-apricot text-espresso">
      <p className="text-[10px] md:text-[12px] 3xl:text-[24px]">{label}</p>
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
    <div className="flex flex-col gap-[16px] w-[330px] rounded-[24px] p-[16px] bg-white shadow-md">
      <img
        src={image}
        className="w-full h-auto object-contain rounded-[10px]"
      />
      <div className="flex flex-col gap-[16px]">
        <h3>{title}</h3>
        <p className="-mt-[16px] text-[10px] md:text-[12px] 3xl:text-[24px] text-orange">
          {date}
        </p>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-[8px]">
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
