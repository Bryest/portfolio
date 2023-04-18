import React, { useContext } from "react";
import "./Hero.css";
import blob2 from "../../img/blob1.svg";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
//import { faGitHub } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Hero" id="Intro">

      <div className="img-container">
        <img src={blob2} alt="" />
      </div>

      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Renato Castillo</span>
          <span>
            Fullstack Developer with high level of experience in web designing
            and back-end development, always focusing in quality of the service.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <FontAwesomeIcon icon={faGithub} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
          <FontAwesomeIcon icon={faLinkedinIn} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
          <FontAwesomeIcon icon={faInstagram} size="6x" style={{ color: "#FB5635", fontSize: "5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
