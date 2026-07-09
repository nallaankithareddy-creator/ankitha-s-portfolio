import { Code2, Rocket, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Coding",
    description: "Turning logic into clean, working solutions across the web stack.",
  },
  {
    icon: Rocket,
    title: "Building",
    description: "Bringing ideas to life as real, usable, real-world projects.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Constantly exploring emerging technologies and new challenges.",
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Driven to learn, build, and grow
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m an IT undergraduate and aspiring developer who genuinely enjoys the process of building things.
              Whether it&apos;s a web app or a problem-solving challenge, I&apos;m motivated by the chance to learn
              something new and create work that matters.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <item.icon className="size-6 text-primary" />
                  <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
