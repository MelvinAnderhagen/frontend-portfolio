import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav>
      <div className="wrap navbar">
        <Link className="logo" to="/">
          Melvin<span>Anderhagen</span>
        </Link>
        {isHome ? (
          <ul className="navlinks">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        ) : (
          <Link className="back-link" to="/">
            ← Back to portfolio
          </Link>
        )}
      </div>
    </nav>
  );
}
