import React from "react";
import Toggle from "../Toggle/Toggle";
import me from "../../img/me.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  }

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Renato</div>
        <img src={me} alt="" style={{ width: "80px" }} />
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" spy={true} smooth={true}>
                Work
              </Link>
            </li>
            <li>
              <Link to="Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>

        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
