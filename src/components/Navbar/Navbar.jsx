import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";
import { themeContext } from "../../Context";

const Navbar = () => {
  const navRef = useRef();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  }

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-list">
          <ul style={{
            listStyleType: "none"
          }}>
            <li>
              <Link style={{ color: darkMode ? "var(--background-light-color)" : "gray", }} >
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "var(--background-light-color)" : "gray", }} to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "var(--background-light-color)" : "gray", }} to="work" spy={true} smooth={true}>
                Work
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="nav-btn"
          style={{ paddingLeft: "2px" }}
          onClick={showNavbar}>
          <FaBars />
        </button>
      </div>

      <div className="n-right">
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
