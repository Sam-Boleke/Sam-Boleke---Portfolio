import Link from "next/link";
import Image from "next/image";
import { profile, projects, experiences, references } from "@/lib/data";
import MobileNav from "./components/MobileNav";

export default function HomePage() {
  return (
    <>
      <header className="nav">
        <div className="brand">
          <span className="dot" />
          <span>{profile.name}</span>
        </div>
        <nav className="navlinks desktop">
          <a href="#projects">Projects</a>
          <a href="#app-projects">App projects</a>
          <a href="#experience">Experience</a>
          <a href="#references">References</a>
          <a href="#contact">Contact</a>
        </nav>
        <MobileNav />
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-main">
            <div className="kicker">
              {profile.location} • Full-Stack Software Engineer • Flutter • Next.js • Firebase • Backendless • SQL • MongoDB
            </div>
            <h1 className="h1">
              {profile.fullName}
            </h1>
            <p className="nameAlias">
              Professionally known as <strong>{profile.name}</strong>
            </p>
            <p className="lead">{profile.summary}</p>

            <div className="btnrow">
            <a className="btn btnPrimary" href="#projects">
              Review my work
            </a>
            <a
              className="btn"
              href={`mailto:${profile.email}?subject=App%20project%20inquiry&body=Hi%20Sam%2C%0D%0A%0D%0AI'm%20reaching%20out%20about%20a%20potential%20app%20project.%20Here%20are%20a%20few%20details%20to%20get%20started%3A%0D%0A-%20What%20the%20app%20should%20do%3A%0D%0A-%20Platforms%20(Web%2C%20iOS%2C%20Android)%3A%0D%0A-%20Timeline%3A%0D%0A-%20Budget%20range%20(optional)%3A%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A`}
            >
              Start an app project
            </a>
            <a
              className="btn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

            <div className="hero-badges">
              <div className="pill-row">
                <span className="pill pill-soft">
                  Production apps in education, retail & services
                </span>
                <span className="pill pill-soft">
                  Comfortable owning features end‑to‑end
                </span>
              </div>
              <div className="pill-row">
                <span className="pill pill-soft">
                  References from managers & supervisors available
                </span>
              </div>
            </div>
          </div>

          <aside className="hero-photo">
            <div className="hero-photo-frame">
              <Image
                src="/SAM 7.jpg"
                alt="Portrait of the portfolio owner."
                fill
                sizes="(max-width: 860px) 260px, 260px"
                className="hero-photo-img"
                priority
              />
            </div>
          </aside>
        </section>

        <section className="section" aria-labelledby="what-i-do">
          <h2 id="what-i-do">How I help teams</h2>
          <p>
            I blend product thinking, engineering, and UI/UX to ship apps that feel great to use and make sense for the businesses and organizations.
          </p>
          <div className="grid cols3">
            <div className="card" style={{ animationDelay: "0.1s" }}>
              <div className="cardTitle">
                <h3>Product & Delivery</h3>
              </div>
              <div className="meta">
                Clarifying the problem, scoping MVPs, and making trade-offs so we can ship value early and iterate.
              </div>
            </div>
            <div className="card" style={{ animationDelay: "0.2s" }}>
              <div className="cardTitle">
                <h3>Engineering</h3>
              </div>
              <div className="meta">
                Flutter apps, web platforms, and integrations that are structured, testable, and ready for real users.
              </div>
            </div>
            <div className="card" style={{ animationDelay: "0.3s" }}>
              <div className="cardTitle">
                <h3>UI/UX & Motion</h3>
              </div>
              <div className="meta">
                Interfaces with clear hierarchy, friendly micro-interactions, and motion that guides the eye without getting in the way.
              </div>
            </div>
          </div>
        </section>

        <section id="app-projects" className="section">
          <h2>How I run app projects</h2>
          <p>
            When I join an app project, I don&apos;t just write code. I help you
            clarify the problem, shape the scope, and ship something that works
            in the real world.
          </p>
          <div className="grid cols3">
            <div className="card">
              <div className="cardTitle">
                <h3>Discovery & scoping</h3>
              </div>
              <div className="meta">
                I help translate your idea into user stories, flows, and a
                realistic MVP that we can build and iterate on.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">
                <h3>Design & architecture</h3>
              </div>
              <div className="meta">
                We choose the right stack (Flutter, Next.js, Firebase, APIs) and
                design clean, testable architecture that can grow with you.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">
                <h3>Build, ship, support</h3>
              </div>
              <div className="meta">
                I implement features, review with you regularly, and help with
                deployment, handover, and ongoing improvements.
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Teaching & Mentoring</h2>
          <p>
            I've tutored and mentored students in software engineering, development, and programming — helping others learn while deepening my own understanding.
          </p>
          <div className="grid cols2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="card" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="cardTitle">
                  <h3>{exp.role}</h3>
                  <span className="tag">{exp.timeframe}</span>
                </div>
                <div className="meta" style={{ fontWeight: 500, marginBottom: 6 }}>
                  {exp.organization}
                </div>
                <div className="meta">{exp.description}</div>
                {exp.topics && exp.topics.length > 0 && (
                  <div className="stack" style={{ marginTop: 10 }}>
                    {exp.topics.map((topic) => (
                      <span key={topic} className="pill">{topic}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected Work</h2>
          <p>Case studies with problem → solution, stack, and outcome. Use these to evaluate my fit for your team or product.</p>

          <div className="grid cols2">
            {projects.map((p, idx) => (
              <div key={p.slug} className="card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="cardTitle">
                  <h3>{p.name}</h3>
                  <span className="tag">{p.timeframe}</span>
                </div>
                <div className="meta">{p.tagline}</div>

                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>

                <div className="btnrow" style={{ marginTop: 14 }}>
                  <Link className="btn btnPrimary" href={`/projects/${p.slug}`}>View Case Study</Link>
                  {p.links
                    .filter((l) => l.href.startsWith("http"))
                    .slice(0, 1)
                    .map((l) => (
                      <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="references" className="section">
          <h2>References</h2>
          <p>
            Professional references available for verification. Contact information provided for direct inquiries.
          </p>
          <div className="grid cols3">
            {references.map((ref, idx) => (
              <div key={idx} className="card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="cardTitle">
                  <h3>{ref.name}</h3>
                  <span className="tag">{ref.relationship}</span>
                </div>
                <div className="meta" style={{ fontWeight: 500, marginBottom: 4 }}>
                  {ref.role}
                </div>
                <div className="meta" style={{ marginBottom: 8 }}>
                  {ref.organization}
                </div>
                {ref.email && (
                  <div className="small" style={{ marginBottom: 4 }}>
                    <a href={`mailto:${ref.email}`} style={{ color: "inherit" }}>{ref.email}</a>
                  </div>
                )}
                {ref.phone && (
                  <div className="small">
                    <a href={`tel:${ref.phone.replace(/\s/g, "")}`} style={{ color: "inherit" }}>{ref.phone}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Let's connect about your next project, collaboration, or opportunity.</p>
          <div className="grid cols2">
            <div className="card">
              <div className="cardTitle"><h3>Email</h3></div>
              <div className="meta">
                <a className="btn btnPrimary" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div className="card">
              <div className="cardTitle"><h3>Links</h3></div>
              <div className="btnrow" style={{ marginTop: 10 }}>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js</span>
        </footer>
      </main>
    </>
  );
}
