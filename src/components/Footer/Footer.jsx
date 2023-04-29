import React from "react";
import "./Footer.css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <div className="f-icons">
          <Gitub color="white" size={"3rem"} />
          <FaLinkedin color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
