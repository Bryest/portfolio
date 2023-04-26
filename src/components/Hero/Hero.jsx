import React, { useContext } from "react";
import "./Hero.css";
import blob from "../../img/blob.svg";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import me from "../../img/me.png";


const Hero = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (

    <div className="Hero">
      <div className="blob-container">
        <img src={blob} alt="" />
      </div>
      <div className="profile">
        {/*<span style={{ color: darkMode ? "white" : "" }}></span>*/}
        <div className="content">
          <span>Renato Castillo</span>
          <span>
            <span style={{ fontWeight: "bold" }}>Fullstack Developer</span>
            focused on building quality-driven functional software for our users.
          </span>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button">Contact</button>
          </Link>
          <div className="icons">
            <a href="https://github.com/Bryest"><FontAwesomeIcon icon={faGithub} size="6x" className="icon-style" /></a>
            <a href="https://www.linkedin.com/in/renato-castillo-a294a915a/"> <FontAwesomeIcon icon={faLinkedinIn} size="6x" className="icon-style" /></a>
          </div>
        </div>
        <div className="avatar">
          <img src={me} alt="" />
        </div>
        <div className="icons">
          <a href="https://github.com/Bryest"><FontAwesomeIcon icon={faGithub} size="6x" className="icon-style" /></a>
          <a href="https://www.linkedin.com/in/renato-castillo-a294a915a/"> <FontAwesomeIcon icon={faLinkedinIn} size="6x" className="icon-style" /></a>
        </div>
      </div>
    </div >
  );
};

export default Hero;
