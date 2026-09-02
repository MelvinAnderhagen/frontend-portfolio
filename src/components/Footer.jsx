export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact-row">
          <div>
            <h2>Let's talk</h2>
            <p className="contact-lede">
              Open to frontend internships - happy to walk through any of this
              in more depth.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:anderhagen.melvin@gmail.com">email</a>
            <a
              href="https://github.com/MelvinAnderhagen"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/melvin-anderhagen-2195131b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
        <p className="fine-print">
          © {new Date().getFullYear()} Melvin Anderhagen. Built with React &amp;
          Vite.
        </p>
      </div>
    </footer>
  );
}
