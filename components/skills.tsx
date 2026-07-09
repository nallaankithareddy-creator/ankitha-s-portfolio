import { FileCode2, Braces, Server, TerminalSquare, Lightbulb } from "lucide-react"

const skills = [
  { name: "HTML5", icon: FileCode2 },
  { name: "JavaScript", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "VS Code", icon: TerminalSquare },
  { name: "Problem Solving", icon: Lightbulb },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Tools &amp; technologies I work with
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <skill.icon className="size-6" />
              </div>
              <span className="font-display text-sm font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
