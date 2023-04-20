import React, { useContext } from "react";
import "./Hero.css";
import blob2 from "../../img/blob1.svg";
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
        <img src={blob2} alt="" />
      </div>

      <div className="wrapper">
        <div className="profile">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Renato Castillo</span>
          <span>
            <span style={{ fontWeight: "bold" }}>Fullstack Developer</span> with high level in web designing
            and back-end development, always focusing in quality of the service.
          </span>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
          <img src={me} alt="" />
          <div className="icons">
            <FontAwesomeIcon icon={faGithub} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
            <FontAwesomeIcon icon={faLinkedinIn} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
            <FontAwesomeIcon icon={faInstagram} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
