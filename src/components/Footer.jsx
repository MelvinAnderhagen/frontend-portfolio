export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact-row">
          <div>
            <h2>Let's talk</h2>
            {/* [EDIT] adjust this line if you want */}
            <p className="contact-lede">
              Open to frontend internships — happy to walk through any of this
              in more depth.
            </p>
          </div>
          <div className="contact-links">
            {/* [EDIT] your real links */}
            <a href="mailto:you@example.com">email</a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/yourname"
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
