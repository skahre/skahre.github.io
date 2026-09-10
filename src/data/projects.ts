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
  body?: (string | string[])[];
  tags: string[];
  links?: string[];
}

export const projects: Project[] = [
  {
    slug: "pepp",
    type: ["coding"],
    image: "/pepp/home-page.png",
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
      "Sanity CMS",
    ],
    body: [
      "During the spring and summer of 2026, I worked part-time for the non-profit organisation Pepp on their new membership platform. The internship was in collaboration with Stockholm-based Prototyp who provided support and guidance.",
      "During my work at Pepp in my role as Product Owner and Fullstack Developer, I worked together with one other person to continue develop the platform. This meant taking joint decisions on the direction to take the platform in, and creating our own plans for how to move forward within the organisation.",
      "The platform is an informational website paired with a membership platform which allows users to apply to mentorship programs and get information about upcoming events. The platform is built with Next.js, Prisma, and PostgreSQL for a complete fullstack development.",
      "When I started on the project, the initial structure of the website had already been built, and my job was to continue improving it and developing new features.",
      "## Designing",
      "One of the first things we did with the platform was to transfer static information from an old informational website previosuly hosted on Squarespace. This required a lot of design work to adapt the old pages to the new site with an updated graphic profile. For this, I worked extensively with Figma to fully prototype ideas, before implementing it through code.",
      "/pepp/figma.png",
      "This process not only taught me a lot about creating responsive designs but also about the importance of an extensive design system. In my (small) team, I became responsible for curating a design system that would help us keep a consistent design across all pages. This meant creating a usable system for colors, spacing, and typography, as well as a system for commonly used components such as buttons.",
      "/pepp/buttons.png",
      "## CMS",
      "The next part of the project was to implement a CMS in order to easily edit the newly created static pages. This was crucial for non-developers to be able to easily update information on the website.",
      "For this, we decided to use the Sanity CMS. Working with Sanity, and any CMS for that matter, was completely new to me and definitely required a learning curve. I had to learn a lot about data types and data schemas in order to set up the CMS in a way that suited our data. Further, I got to learn more about querying data with GROQ queries.",
      "/pepp/sanity.png",
      "For the final implementation of the CMS, we also decided to implement this 'Presentation' function which allows editors to change content and see their updates live, as they would look on the site. Definitely a cool project!",
      "## Database, roles, and admins",
      "Another big feature we worked on for the platform was restructuring the backend to support a more complete and function role-division. This involved restructuring the database at multiple moments and migrating existing data in a production environment. This was something I had never worked on before so it provided a lot of learning opportunities.",
      "This part of the project also included a lot of work with permissions and role-based access for admin-only actions and API-routes. To do this, I worked a lot with Next.js API routing and next-auth in order to create secure and UX friendly admin interfaces.",
      "## Challenges",
      "The biggest challenges with this project was learning all the new technology. Most of the tools and frameworks used for this platform were things I had never worked with before. It also required a lot of deep-diving into an already up-and-running project and understanding how to continue on in a codebase I was not familiar with.",
      "## Outcome",
      "The platform is officially up and running since January 2026 and used by actual members of the Pepp-community. I am unable to share the GitHub project, but you can visit the live site on the link below.",
      "/pepp/home-page.png",
      "/pepp/admin-page.png",
      "/pepp/event-page.png",
    ],
    links: ["https://pepp.io"],
  },
  {
    slug: "designing-for-disabilities",
    type: ["design", "other"],
    image: "/mcFunk/overview.png",
    title: "Designing for Disabilities",
    date: "Spring 2026",
    description:
      "Project in redesigning online pharmacies for cognitive disabilities performed at KTH.",
    tags: ["HCI Research", "Accessibility", "Figma", "Double Diamond"],
    body: [
      "## DM2624 Human Centered Technology for Disabilities",
      "This project was done as part of the course DM2624 Human Centered Technology for Disabilities. The course centered around the concept of Universal Design and the project was to create a service design with the principles taught in the course.",
      "## Rethinking Online Pharmacies",
      "For the course project, our goal was to rethink online pharmacy services in Sweden through the lens of Universal Design. Working in a team of 5, each of us reasearch and brought one disability advocacy focus. My focus was on neurodevelopmental disorders (NPF/NDD), which shaped my focus on the project and how I, personally, looked at research, design decisions, and evaluations.",
      [
        "/mcFunk/personalization.png",
        "/mcFunk/AI.png",
        "/mcFunk/bodySearch.png",
      ],
      "We combined interview research, automated accessibility testing, and consultations with people with lived experience into a single concept: a unified pharmacy app offering flexible support (self-guided, AI-assisted, or live human help) alongside a more intuitive, body-part-based way to browse for products in the hopes of reducing reliance on medical terminology and cognitive load.",
      "Working within the NPF/NDD focus reinforced something I already had a personal connection to, but it also pushed me to step back from my own experience and really listen to how other kinds of barriers show up for other people. It's shaped how I think about my future role as a developer working alongside designers on accessibility.",
      "The full project report as well as the finished prototype is linked below.",
    ],
    links: [
      "https://www.figma.com/proto/7NNCYlWAmGTFmk9ro5tVe2/Group-5?node-id=274-49&t=jgnZioUXGRs1Oeed-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=274%3A49&show-proto-sidebar=1",
      "/mcFunk/report.pdf",
    ],
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
