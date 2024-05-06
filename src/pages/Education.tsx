import "./Education.css";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <article>
        <h3>Creighton University School of Medicine</h3>
        <p>Current M4</p>
        <p>Doctor of Medicine, anticipated 2025</p>
        <ul>
          <li>Medical Dean’s Magis Scholarship</li>
          <li>Robert C. And Janet Meisterling Endowed Scholarship</li>
          <li>
            Nebraska Chapter American College of Physicians Student Abstract
            Competition Winner
          </li>
          <li>Summer Session Teacher at Upward Bound</li>
          <li>Maya Community Health Fair Team</li>
          <li>Admissions Committee</li>
          <li>Cardiology Interest Group Vice President</li>
          <li>Cardiology Interest Group President</li>
          <li>Vital Signs Mentor</li>
          <li>OB/GYN Chief</li>
          <li>
            <Link className="link" to="/publications">
              Published 5 times
            </Link>
          </li>
        </ul>
      </article>
      <article>
        <h3>University of Colorado</h3>
        <p>BA Integrative Physiology</p>
        <p>Public Health Certificate</p>
        <ul>
          <li>Public Health Certificate</li>
          <li>Sleep and Chronobiology Research</li>
          <li>Anatomy Lab Teaching Assistant</li>
          <li>Anatomy Lab Cadaver Specialist</li>
        </ul>
      </article>
    </div>
  );
}
