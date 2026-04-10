export interface Project {
  type: string[];
  image: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    type: ["coding"],
    image: "/pepp.png",
    title: "Pepp Membership Platform",
    date: "Spring 2026",
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
  },
  {
    type: ["design", "other"],
    image: "mcFunk.png",
    title: "Designing for Disabilities",
    date: "Spring 2026",
    description:
      "Project in redesigning online pharmacies for cognitive disabilities performed at KTH.",
    tags: ["HCI Research", "Accessibility", "Figma", "Double Diamond"],
  },
  {
    type: ["coding"],
    image: "/mbd.png",
    title: "Career Fair Website",
    date: "Fall 2025 - Spring 2026",
    description:
      "Working on the website for the Career Fair of the Media Technology chapter at KTH.",
    tags: ["TypeScript", "React", "PHP", "MySQL", "Figma"],
  },
  {
    type: ["other"],
    image: "evaluationMethods.png",
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
    type: ["other"],
    image: "humperFrame.png",
    title: "Researching Preference in Synchronization",
    date: "Fall 2025",
    description:
      "Research project exploring preference of synchronization between abstract visualization and music.",
    tags: ["HCI Research", "Data Analysis", "User Testing"],
  },
  {
    type: ["design"],
    image: "MTID.png",
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
    type: ["other"],
    image: "KEX.png",
    title: "Bachelor Thesis Project",
    date: "Spring 2025",
    description:
      "My thesis project looked at the effect software-based blue-light filters have on perceived and actual task performance during visual tasks.",
    tags: ["HCI Research", "Data Analysis", "User Testing"],
  },
  {
    type: ["coding"],
    image: "cinemind.png",
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
