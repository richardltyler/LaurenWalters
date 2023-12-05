import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHome, FaBriefcaseMedical, FaGraduationCap } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <nav className="">
        <ul className="nav-list">
          <li className="nav-list-item">
            {/* TODO: animate the lines under the links */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active navlink" : "navlink"
              }
              to="/"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active navlink" : "navlink"
              }
              to="/about"
            >
              <FaCircleInfo />
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active navlink" : "navlink"
              }
              to="/experience"
            >
              <FaBriefcaseMedical />
              <span>Experience</span>
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active navlink" : "navlink"
              }
              to="/education"
            >
              <FaGraduationCap />
              <span>Education</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>
        Dr. <br /> Lauren Walters, MD
      </h1>
    </header>
  );
}
