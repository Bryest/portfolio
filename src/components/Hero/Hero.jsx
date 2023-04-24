import React, { useContext } from "react";
import "./Hero.css";
import blob from "../../img/blob.svg";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import me from "../../img/me.png";

const Hero = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Hero" id="Intro">
      <div className="img-container">
        <img src={blob} alt="" />
      </div>

      <div className="wrapper">
        <div className="profile">
          {/*<span style={{ color: darkMode ? "white" : "" }}></span>*/}
          <span>Renato Castillo</span>
          <span>
            <span style={{ fontWeight: "bold" }}>Fullstack Developer</span> focused on building quality-driven functional software for our users.</span>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button">Contact</button>
          </Link>
          <img src={me} alt="" />
          <div className="icons">
            <FontAwesomeIcon icon={faGithub} size="6x" style={{ color: "var(--primary-color)", fontSize: "5rem" }} />
            <FontAwesomeIcon icon={faLinkedinIn} size="6x" style={{ color: "var(--primary-color)", fontSize: "5rem" }} />
            <FontAwesomeIcon icon={faInstagram} size="6x" style={{ color: "var(--primary-color)", fontSize: "5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
