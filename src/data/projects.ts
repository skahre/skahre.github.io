export type ProjectType = "coding" | "design" | "other";
export type TabFilter = "all" | ProjectType;

export interface Project {
  type: ProjectType[];
}

export interface Project {
  slug: string;
  type: ProjectType[];
  image: string;
  title: string;
  date: string;
  description: string;
  body?: string[];
  tags: string[];
  links?: string[];
}

export const projects: Project[] = [
  {
    slug: "pepp",
    type: ["coding"],
    image: "/pepp.png",
    title: "Pepp Membership Platform",
    date: "Spring - Summer 2026",
    description:
      "Working for non-profit organization Pepp on their new membership platform.",
    tags: [
      "TypeScript",
      "Next.js",
      "PO",
      "Prisma",
      "NextAuth",
      "PostgreSQL",
      "Figma",
    ],
    body: [
      "Här är ett test på vad jag vill säga! uhsfuheauifyweify wie fwe fweifj wiefj woifweif wiifeiwef i fwiwefjweo ifwoefih wofwfoiwhef iohwfw fowefh fh wwefh whfwefhwefhwo eifhiwef hwhef oiwf iooweifhwo eifkwjefhiw efiwuefhlaiuef elrfh lrhf eg  awleifu ae fkjawefh wueh faweiu weiufhuwefh kaw eflawe fhlaiwu ",
      "/pepp.png",
      "mer text wuhoooo",
    ],
    links: ["https://pepp.io", "https://github.com/skahre/skahre.github.io"],
  },
  {
    slug: "designing-for-disabilities",
    type: ["design", "other"],
    image: "/mcFunk.png",
    title: "Designing for Disabilities",
    date: "Spring 2026",
    description:
      "Project in redesigning online pharmacies for cognitive disabilities performed at KTH.",
    tags: ["HCI Research", "Accessibility", "Figma", "Double Diamond"],
  },
  {
    slug: "mbd",
    type: ["coding"],
    image: "/mbd.png",
    title: "Career Fair Website",
    date: "Fall 2025 - Spring 2026",
    description:
      "Working on the website for the Career Fair of the Media Technology chapter at KTH.",
    tags: ["TypeScript", "React", "PHP", "MySQL", "Figma"],
  },
  {
    slug: "evaluation-methods",
    type: ["other"],
    image: "/evaluationMethods.png",
    title: "Evaluating Foodora App",
    date: "Fall 2025",
    description:
      "Usability evaluation of the Foodora mobile app performed as part of a course at KTH.",
    tags: [
      "Usability",
      "Evaluation Methods",
      "Usability Testing",
      "Data Analysis",
    ],
  },
  {
    slug: "human-perception",
    type: ["other"],
    image: "/humperFrame.png",
    title: "Researching Preference in Synchronization",
    date: "Fall 2025",
    description:
      "Research project exploring preference of synchronization between abstract visualization and music.",
    tags: ["HCI Research", "Data Analysis", "User Testing"],
  },
  {
    slug: "designing-for-rituals",
    type: ["design"],
    image: "/MTID.png",
    title: "Designing for Rituals",
    date: "Fall 2025",
    description:
      "Course project aiming to design for creation and enrichment of rituals for newly-graduated engineers.",
    tags: [
      "HCI Research",
      "Data Analysis",
      "User Testing",
      "Figma",
      "Double Diamond",
    ],
  },
  {
    slug: "bachelor-thesis",
    type: ["other"],
    image: "/KEX.png",
    title: "Bachelor Thesis Project",
    date: "Spring 2025",
    description:
      "My thesis project looked at the effect software-based blue-light filters have on perceived and actual task performance during visual tasks.",
    tags: ["HCI Research", "Data Analysis", "User Testing"],
  },
  {
    slug: "cinemind",
    type: ["coding"],
    image: "/cinemind.png",
    title: "Movie Quiz",
    date: "Fall 2024",
    description: "Quiz website created as part of course work at KTH.",
    tags: [
      "JavaScript",
      "React",
      "Authentication",
      "Third-party APIs",
      "MVP Architecture",
    ],
  },
];
