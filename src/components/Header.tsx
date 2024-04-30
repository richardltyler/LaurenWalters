import { NavLink, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="name-container">
        <h1>Lauren Walters</h1>

        {/* TODO: fix these link paths */}
        <nav className="contact-list">
          <Link className="contact-item" to="laurensemail@creighton.edu">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="dox"
            >
              <title>Mail.Ru</title>
              <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
            </svg>
          </Link>
          <Link className="contact-item" to="laurenslinkedin.com">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="dox"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link className="contact-item" to="laurensdoximity.com">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1474 1524"
              className="dox"
            >
              <title>Doximity</title>
              <style></style>
              <path
                id="Layer"
                fillRule="evenodd"
                className="s0"
                d="m1473.6 288.8v1178.4c0 20.9-16.9 37.8-37.8 37.8h-121.6c-21 0-37.9-16.9-37.9-37.8v-128.5l-11.4 16.3c-80.4 113.5-181.1 169-306.7 169-202.7 0-418.2-165-418.2-469.2v-3.4c0-308.3 210.1-469.2 418.2-469.2 124.9 0 225.6 52.1 306.7 158.9l11.4 14.9v-467.2c0-21 16.9-37.9 37.9-37.9h121.6c20.9 0 37.8 16.9 37.8 37.9zm-465.4 1065.5c152.6 0 271.5-131.9 271.5-299.5v-3.4c0-171-116.8-299.5-271.5-299.5-156.1 0-269.6 125.8-269.6 299.5v3.4c0 170.4 116.2 298.8 269.6 299.5z"
              />
              <g id="Layer">
                <path
                  id="Layer"
                  className="s0"
                  d="m279.9 839.1c-4.7-52.7-3.3-116.3 21.6-203.5 21-70.3 71-148 129.1-202.8 56.7-53.4 133.7-95.3 217.5-114.3 79.7-18.2 146.6-16.9 197.3-10.8 7.4 0 12.8 3.4 15.5 6.8 5.4 5.4 6.1 17.6 3.4 20.9-2.7 2.8-9.5 5.5-16.2 5.5-110.2 6.7-228.4 66.2-341.9 173-104 98.1-178.3 222.5-192.5 330-0.7 6.7-3.4 12.8-6.8 15.5-3.3 2.7-16.2 2-20.9-3.4-2.7-4-5.4-9.4-6.1-16.9zm-276.9-125.7c-6.1-69.7-4.8-154.8 29-271.1 27.7-94 93.9-196.8 171.6-269.8 75.7-71 177.7-126.4 289.8-152.1 106.1-24.3 195.2-22.3 262.1-14.9 9.5 0 16.9 4.8 20.9 8.8 6.8 7.5 8.2 23.7 4.1 27.7-3.4 3.4-12.2 6.8-20.9 7.5-146.6 9.4-304 88.5-454.7 230.5-139.1 131.2-237.8 296.1-256.7 439.5-1.3 8.7-4.7 16.9-8.8 20.9-4 4.1-20.9 2.7-28.3-4.7-4.1-4.1-7.5-11.5-8.1-22.3z"
                />
              </g>
            </svg>
          </Link>
        </nav>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <div className="nav-list-item-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active navlink" : "navlink"
                }
                to="/"
              >
                <span className="nav-list-item-label">Home</span>
              </NavLink>
              <span className="nav-list-item-count">00</span>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-item-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active navlink" : "navlink"
                }
                to="/about"
              >
                <span className="nav-list-item-label">About</span>
              </NavLink>
              <span className="nav-list-item-count">01</span>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-item-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active navlink" : "navlink"
                }
                to="/experience"
              >
                <span className="nav-list-item-label">Experience</span>
              </NavLink>
              <span className="nav-list-item-count">02</span>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-item-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active navlink" : "navlink"
                }
                to="/education"
              >
                <span className="nav-list-item-label">Education</span>
              </NavLink>
              <span className="nav-list-item-count">03</span>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-item-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active navlink" : "navlink"
                }
                to="/placeholder"
              >
                {/* TODO: fix new link name */}
                <span className="nav-list-item-label">Placeholder</span>
              </NavLink>
              <span className="nav-list-item-count">04</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
