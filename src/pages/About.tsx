import "./About.css";
import Horsetooth from "../assets/horsetooth-unsplash-min.png";
import Reading from "../assets/reading-unsplash-min.png";
import Weights from "../assets/weights-unsplash-min.png";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./Home";

export default function About() {
  const location = useLocation();

  return (
    <div className="about">
      <nav className="about-nav">
        <NavLink
          style={({ isActive }) => {
            return {
              height: isActive ? "6rem" : "4rem",
              backgroundImage: `url(${Horsetooth})`,
              opacity: !isActive ? "0.7" : "1",
            };
          }}
          to={
            location.pathname === "/about/hiking" ? "/about" : "/about/hiking"
          }
        >
          <span className="nav-text">Hiking</span>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              height: isActive ? "6rem" : "4rem",
              backgroundImage: `url(${Weights})`,
              opacity: !isActive ? "0.7" : "1",
            };
          }}
          to={location.pathname === "/about/gym" ? "/about" : "/about/gym"}
        >
          <span className="nav-text">Gym</span>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              height: isActive ? "6rem" : "4rem",
              backgroundImage: `url(${Reading})`,
              opacity: !isActive ? "0.7" : "1",
            };
          }}
          to={
            location.pathname === "/about/reading" ? "/about" : "/about/reading"
          }
        >
          <span className="nav-text">Reading</span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/gym" element={<>gym</>} />
        <Route path="/hiking" element={<>hiking</>} />
        <Route path="/reading" element={<>reading</>} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
