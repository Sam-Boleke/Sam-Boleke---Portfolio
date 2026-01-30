import Link from "next/link";
import { profile, projects } from "@/lib/data";
import MobileNav from "@/app/components/MobileNav";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <header className="nav">
          <div className="brand">
            <span className="dot" />
            <Link href="/">{profile.name}</Link>
          </div>
          <nav className="navlinks">
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main className="container">
          <Link className="btn" href="/">← Back</Link>
          <h1 className="h1" style={{ marginTop: 18 }}>Case study not found</h1>
          <p className="lead">Check the project slug in lib/data.ts</p>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="nav">
        <div className="brand">
          <span className="dot" />
          <Link href="/">{profile.name}</Link>
        </div>
        <nav className="navlinks desktop">
          <Link href="/">Home</Link>
          <a href="#details">Details</a>
          <a href="#highlights">Highlights</a>
        </nav>
        <MobileNav links={[
          { href: "/", label: "Home", isLink: true },
          { href: "#details", label: "Details" },
          { href: "#highlights", label: "Highlights" },
        ]} />
      </header>
      <main className="container">
        <Link className="btn" href="/">← Back</Link>

        <section className="hero" style={{ paddingTop: 18 }}>
          <h1 className="h1">{project.name}</h1>
          <p className="lead">{project.tagline}</p>
          <p className="small">
            {project.role} • {project.timeframe}
          </p>

          <div className="stack" style={{ marginTop: 12 }}>
            {project.stack.map((s: string) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>

          <div className="hero-badges">
            <div className="pill-row">
              <span className="pill pill-soft">
                Real-world usage and production environments
              </span>
              <span className="pill pill-soft">
                Hands-on ownership of core features and flows
              </span>
            </div>
          </div>
        </section>

        <section id="details" className="section">
          <h2>Problem & context</h2>
          <div className="card">
            <div className="meta">{project.problem}</div>
          </div>
        </section>

        <section className="section">
          <h2>My contribution & solution</h2>
          <div className="card">
            <div className="meta">{project.solution}</div>
          </div>
        </section>

        <section id="highlights" className="section">
          <h2>Highlights</h2>
          <div className="grid cols2">
            {project.highlights.map((h: string, idx: number) => (
              <div
                key={h}
                className="card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="meta">• {h}</div>
              </div>
            ))}
          </div>
        </section>

        {project.referenceReady ? (
          <section className="section">
            <h2>Reference</h2>
            <div className="card">
              <div className="meta">
                This project has a professional reference available. See the{" "}
                <a href="#references">References</a> section on the homepage or
                email me at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a> for a
                direct introduction.
              </div>
            </div>
          </section>
        ) : null}

        {project.links?.length ? (
          <section className="section">
            <h2>Links</h2>
            <div className="btnrow">
              {project.links.map((l: { label: string; href: string }) => (
                <a
                  key={l.href}
                  className="btn btnPrimary"
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
