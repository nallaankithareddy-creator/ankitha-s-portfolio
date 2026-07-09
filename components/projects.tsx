import { ArrowUpRight, Landmark, Stethoscope } from "lucide-react"

const projects = [
  {
    icon: Landmark,
    title: "Government Scheme Hub",
    description:
      "A centralized platform that helps citizens discover and access government schemes they're eligible for, making public benefits easier to find and understand.",
    tags: ["HTML5", "JavaScript", "Node.js"],
    number: "01",
  },
  {
    icon: Stethoscope,
    title: "Doctor Appointment System",
    description:
      "An appointment management system that lets patients book, view, and manage doctor visits with a simple, streamlined booking experience.",
    tags: ["HTML5", "JavaScript", "Node.js"],
    number: "02",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Things I&apos;ve built
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A selection of projects where I turned ideas into working, real-world applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <project.icon className="size-7" />
                </div>
                <span className="font-display text-5xl font-bold text-muted/60">{project.number}</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View project
                <ArrowUpRight className="size-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
