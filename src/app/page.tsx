type Project = {
  title: string;
  blurb: string;
  href: string;
  meta?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Sample project one",
    blurb:
      "Placeholder for a real project banner — short description that fits in two lines and tells a recruiter what the thing is.",
    href: "https://github.com/quinn-caverly",
    meta: "Next.js · Postgres · GCP",
  },
  {
    title: "Sample project two",
    blurb:
      "Another placeholder. The image on the left will be a screenshot, video still, or rendered frame.",
    href: "https://github.com/quinn-caverly",
    meta: "Python · Vertex AI · Terraform",
  },
  {
    title: "Sample project three",
    blurb:
      "Banners stack vertically; on mobile the image moves above the text.",
    href: "https://github.com/quinn-caverly",
    meta: "Rust · GPU CI",
  },
  {
    title: "Sample project four",
    blurb:
      "Roughly four to six banners is the recruiter-attention sweet spot.",
    href: "https://github.com/quinn-caverly",
    meta: "Minecraft mod · Forge",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Quinn Caverly
        </h1>
        <p className="mt-2 text-fg-muted">
          Platform / Infra / Cloud Engineer · Baltimore, MD
        </p>
        <nav className="mt-4 flex items-center gap-5 text-sm">
          <a
            href="https://github.com/quinn-caverly"
            className="text-fg-muted hover:text-accent-strong"
          >
            GitHub
          </a>
          <a
            href="mailto:quinncaverly@gmail.com"
            className="text-fg-muted hover:text-accent-strong"
          >
            quinncaverly@gmail.com
          </a>
        </nav>
      </header>

      <section className="flex flex-col gap-4">
        {projects.map((p) => (
          <ProjectBanner key={p.title} project={p} />
        ))}
      </section>
    </main>
  );
}

function ProjectBanner({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-elevated p-4 hover:border-border-strong sm:flex-row sm:gap-5"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md bg-surface-2 sm:w-56">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wider text-fg-subtle">
            image
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="text-base font-medium text-fg group-hover:text-accent-strong">
          {project.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-fg-muted">
          {project.blurb}
        </p>
        {project.meta && (
          <p className="mt-2 font-mono text-xs text-fg-subtle">
            {project.meta}
          </p>
        )}
      </div>
    </a>
  );
}
