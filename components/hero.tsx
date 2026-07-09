import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pb-24 md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Aspiring Developer &amp; IT Undergraduate
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I&apos;m Ankitha <span className="text-primary">Reddy</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m passionate about coding, web development, and learning emerging technologies. I love turning ideas
          into real-world projects and am always eager to take on new challenges that help me grow both personally and
          professionally.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
