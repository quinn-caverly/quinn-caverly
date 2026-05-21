import Image from "next/image";

type Project = {
  title: string;
  blurb: string;
  href: string;
  meta?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "prospecting-engine",
    blurb:
      "Multi-agent research pipeline mining 12 sources for content briefs for the KnavishMantis YouTube channel. Surfaced “Endermen secretly use a diamond axe” → 200K+ views.",
    href: "https://github.com/quinn-caverly/prospecting-engine-public",
    meta: "Python · Vertex AI ADK · Gemini · Cloud Run · Terraform",
    image: "/projects/prospecting-engine.png",
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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Quinn Caverly
        </h1>
        <p className="mt-3 text-lg text-fg-muted">
          Platform / Infra / Cloud Engineer · Baltimore, MD
        </p>
        <nav className="mt-5 flex items-center gap-5 text-base">
          <a
            href="https://github.com/quinn-caverly"
            className="text-fg hover:text-accent"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:quinncaverly@gmail.com"
            className="text-fg hover:text-accent"
          >
            Email <span aria-hidden="true">→</span>
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
      className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-4 hover:border-border-strong sm:flex-row sm:gap-5"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border border-border bg-bg sm:w-56">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 640px) 224px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wider text-fg-subtle">
            image
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="text-base font-semibold tracking-tight text-fg group-hover:text-accent">
          {project.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
          {project.blurb}
        </p>
        {project.meta && (
          <p className="mt-2 text-xs text-fg-subtle">{project.meta}</p>
        )}
      </div>
    </a>
  );
}
