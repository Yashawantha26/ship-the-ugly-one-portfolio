import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "LifeSaver AI",
    description:
      "An AI-powered emergency assistance concept designed to help users access useful emergency information quickly.",
    technologies: ["AI", "Python", "Web"],
    image: "/images/lifesaver-ai.png",
    link: "/projects/lifesaver-ai",
  },
  {
    title: "Smart Time Table",
    description:
      "A web application for managing class schedules, attendance tracking, and examination timetables.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    image: "/images/smart-time-table.png",
    link: "/projects/smart-time-table",
  },
  {
    title: "AI Frontend Projects",
    description:
      "A collection of frontend experiments exploring AI chat interfaces, structured tool results, accessibility, and modern UI development.",
    technologies: ["Next.js", "React", "TypeScript", "AI"],
    image: "/images/ai-frontend.png",
    link: "/projects/ai-frontend",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          My Work
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Projects & Cases
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-slate-300">
          A collection of projects I have built while learning software
          development, AI, and modern web technologies.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="relative h-52 w-full bg-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="mt-7 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Case →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}