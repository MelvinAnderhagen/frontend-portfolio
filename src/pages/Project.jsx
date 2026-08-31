import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section>
        <div className="wrap">
          <p className="section-num">// 404</p>
          <h2>Project not found</h2>
          <p className="about-text">
            That project doesn't exist. <Link to="/">Back home →</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="wrap">
        <p className="section-num">// project {project.num}</p>
        <h2>{project.title}</h2>
        <div className="project-tags" style={{ margin: "18px 0 28px" }}>
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>
          {project.body}
        </p>
        <div className="cta-row" style={{ marginTop: "32px" }}>
          <a
            className="btn btn-secondary"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        </div>
      </div>
    </section>
  );
}
