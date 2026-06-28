//type voor de projecten die op de portfolio website worden getoond
export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  note?: string;
  features: string[];
};

export const projects: Project[] = [
  {
    title: "Review Your Experience",
    description:
      "A game review and shop website where users can browse games, view game details, register, log in, write reviews and simulate buying games.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/ROCMondriaanTIN/sd24-project-p03-review-your-experience-jasonsejla",
    note: "Requires XAMPP and MySQL to run locally.",
    features: [
      "User login and registration",
      "Game overview and detail pages",
      "Review system",
      "Admin pages for managing games and reviews",
      "MySQL database with SQL file",
    ],
  },
  {
    title: "Show Your Skills",
    description:
      "A Next.js web application built with React, TypeScript and Tailwind CSS. This project includes authentication, database setup and admin functionality.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
    github:
      "https://github.com/ROCMondriaanTIN/sd24-project-p07-show-your-skills-msk",
    note: "Requires npm install, environment variables and database setup to run locally.",
    features: [
      "Built with Next.js and React",
      "TypeScript project structure",
      "Tailwind CSS styling",
      "Authentication setup",
      "Prisma database setup",
    ],
  },
];