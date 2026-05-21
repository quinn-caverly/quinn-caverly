const BASE_PATH = "/quinn-caverly";

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
    href: "https://github.com/knavishmantis/prospecting-engine-public",
    meta: "Python · Vertex AI ADK · Gemini · Cloud Run · Terraform",
    image: "/projects/prospecting-engine.png",
  },
  {
    title: "knavishproductions-app",
    blurb:
      "Production pipeline app for the KnavishMantis channel: brief intake from prospecting-engine, script editor, asset library, paid-editor handoff, post-publish teardowns. Live at knavishproductions.com.",
    href: "https://github.com/knavishmantis/knavishproductions-app-public",
    meta: "Next.js · Postgres · Cloud Run · Firebase · Terraform",
    image: "/projects/knavishproductions-app.png",
  },
  {
    title: "formula-viz",
    blurb:
      "F1 visualization platform: FastF1 telemetry → physics-based 3D animation → GPU-accelerated Blender on GitHub Actions → multi-format YouTube auto-publish. Live at formula-viz.com.",
    href: "https://github.com/formula-viz",
    meta: "Python · Blender · GitHub Actions GPU · Next.js",
    image: "/projects/formula-viz.webp",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Quinn Caverly
        </h1>
        <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
          Platform/infra-focused software engineer. Penn State CS '25 (3.87,
          math minor); AWS DevOps Pro, CKAD, Terraform Associate. Based in
          Baltimore, open to relocation.
        </p>
        <nav className="mt-5 flex flex-col items-start gap-y-1 text-base">
          <a
            href="https://github.com/quinn-caverly"
            className="text-fg hover:text-accent"
          >
            github.com/quinn-caverly <span aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:quinncaverly@gmail.com"
            className="text-fg hover:text-accent"
          >
            quinncaverly@gmail.com <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <div className="mb-6 h-px w-full bg-border" />

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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_PATH}${project.image}`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
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
