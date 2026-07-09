import { Mail, Phone, Link2, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="rounded-3xl bg-foreground px-6 py-14 text-background md:px-14 md:py-20">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-background/70">
            Have an opportunity, project, or just want to say hi? I&apos;d love to hear from you.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:nallaankithareddy120@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-background/60">Email</span>
                  <span className="font-semibold break-all">nallaankithareddy120@gmail.com</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-background/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="tel:+917893228893"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-background/60">Phone</span>
                  <span className="font-semibold">+91 78932 28893</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-background/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-dashed border-background/20 bg-background/5 p-5 sm:col-span-2">
              <span className="flex size-11 items-center justify-center rounded-xl bg-background/10 text-background/60">
                <Link2 className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-background/60">LinkedIn</span>
                <span className="font-semibold text-background/70">Link coming soon</span>
              </span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ankitha Reddy. Built with passion.
        </p>
      </div>
    </section>
  )
}
