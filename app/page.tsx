import { projects } from "./data/projects";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "PHP",
  "MySQL",
  "Next.js",
  "Prisma",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1020] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute left-[-80px] top-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-80px] top-80 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-xl font-bold">
            Sejla<span className="text-fuchsia-300">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-fuchsia-300">
              About
            </a>
            <a href="#skills" className="transition hover:text-fuchsia-300">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-fuchsia-300">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-fuchsia-300">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 rounded-full border border-fuchsia-300/30 bg-white/5 px-5 py-2 text-sm text-fuchsia-200 backdrop-blur">
            Software Developer Student
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              Sejla Cosic
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m a 20-year-old MBO 4 Software Developer student in my
            second year. I enjoy creating clean, responsive and user-friendly
            websites with React, TypeScript and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-medium text-slate-200 backdrop-blur transition hover:border-fuchsia-300/50 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              About me
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              A creative developer who likes clean and useful designs.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-slate-300 backdrop-blur">
            <p className="leading-8">
              I like working on both the design and the code behind a project.
              My goal is to keep improving step by step and build websites that
              are easy to use, responsive and visually appealing.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
            Skills
          </p>

          <h2 className="mb-6 text-3xl font-bold">Technologies I work with</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-[#17182F] px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-300/40 hover:text-fuchsia-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              Projects
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Featured projects
            </h2>
          </div>

          <p className="max-w-md text-slate-300">
            A selection of projects I have worked on during my Software
            Developer study.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-2 hover:border-fuchsia-300/40 hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-fuchsia-300">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-fuchsia-300/50 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>

              {project.note && (
                <p className="mt-4 text-xs text-slate-400">{project.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 p-8 text-center backdrop-blur md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
            Contact
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Let&apos;s build something nice.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Feel free to contact me for school projects, internships or
            collaboration.
          </p>

          <a
            href="mailto:jouwemail@example.com"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-medium text-[#0F1020] transition hover:scale-105"
          >
            Send Email
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Sejla Cosic. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </main>
  );
}