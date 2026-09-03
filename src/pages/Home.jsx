import { Link } from "react-router-dom";
import Terminal from "../components/Terminal.jsx";
import { projects } from "../data/projects.js";

export default function Home() {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
  ];
  const backEndSkills = [
    "C#",
    ".NET",
    "SQL",
    "Entity Framework",
    "Azure",
    "REST APIs",
  ];
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap">
          <Terminal />
          <div className="hero-text">
            <p className="eyebrow">Frontend Developer</p>
            <h1>Melvin Anderhagen</h1>
            <p className="lede">
              I spent two years shipping backend systems in C# and .NET — now
              I'm building modern frontend apps in React and TypeScript. I'm
              looking for an internship where I can apply my full-stack skills.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a
                className="btn btn-secondary"
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="section-head">
            <p className="section-num">// about</p>
            <h2>From compiling to composing UI</h2>
          </div>
          <p className="about-text">
            I graduated as a .NET-developer where I spent two years bulding
            backend systems in C# and .NET. During my earlier internship, I had
            the opportunity to work on a fullstack project where I was
            responsible for both the backend and frontend development. This
            experience sparked my interest in frontend development, and I
            decided to transistion into this field. I am currently looking for
            an internship where I can apply my full-stack skills and continue to
            grow as a frontend developer.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head">
            <p className="section-num">// skills</p>
            <h2>What I bring</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="tag-row">
                {frontEndSkills.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <div className="tag-row">
                {backEndSkills.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-head">
            <p className="section-num">// projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <Link
                className="project-card"
                to={`/projects/${p.slug}`}
                key={p.slug}
              >
                <p className="project-num">{p.num}</p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="project-link">View project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
