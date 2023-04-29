import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";

const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills">
      <div className="awesome">
        <span >Skills</span>
        {/*Evaluate color orange*/}
        <span style={{ color: darkMode ? "gray " : "" }}># Some technologies I've worked with</span>
        {
          /*
            <a href={Resume} download>
              <button className="button s-button">Download CV</button>
            </a>
          */
        }
      </div>
      <div className="icons" >
        <div>
          <a href="https://react.dev/"><img src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt="React" /></a>
          <span>React</span>
        </div>
        <div className="Net">
          <a href="https://dotnet.microsoft.com/en-us/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET" /></a>
          <span>.NET</span>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg" alt="JavaScript" /></a>
          <span>Javascript</span>
        </div>
        <div>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><img src="https://cdn.cdnlogo.com/logos/c/70/csharp.svg" alt="Csharp" /></a>
          <span>Csharp</span>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://cdn.cdnlogo.com/logos/h/84/html.svg" alt="HTML" /></a>
          <span>HTML</span>
        </div>
        <div>
          <a href="https://www.postgresql.org/"><img src="https://cdn.cdnlogo.com/logos/p/93/postgresql.svg" alt="PostgreSQL" /></a>
          <span>PostgreSQL</span>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn.cdnlogo.com/logos/c/18/css.svg" alt="CSS" /></a>
          <span>CSS</span>
        </div>
        <div>
          <a href="https://azure.microsoft.com/en-us"><img src="https://cdn.cdnlogo.com/logos/a/12/azure.svg" /></a>
          <span>Azure</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
