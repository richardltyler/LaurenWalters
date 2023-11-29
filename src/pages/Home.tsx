import react from "react";
import { NavLink } from "react-router-dom";
import "../Home.css";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHome, FaBriefcaseMedical, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active navlink" : "navlink"
              }
              to="/home"
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
      <h1>Dr. Lauren Walters, MD</h1>
    </>
  );
}
