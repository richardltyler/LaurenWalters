import "./Home.css";
import image from "../assets/headshot.jpg";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbLetterD } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* TODO: update links with correct profiles */}
      <nav className="contact-list">
        <Link className="contact-item" to="laurensemail@creighton.edu">
          <GoMail />
          <span>Email</span>
        </Link>
        <Link className="contact-item" to="laurenslinkedin.com">
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </Link>
        <Link className="contact-item" to="laurensdoximity.com">
          <TbLetterD />
          <span>Doximity</span>
        </Link>
      </nav>
      <img className="headshot" src={image} />
    </div>
  );
}
