/* import { useState, useEffect } from "react"; */
/* import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../../Assets/CV_Olivier_GOY_Développeur_Fullstack.pdf";
import { ReactComponent as GitHub } from "../../Assets/github.svg";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import "./Banner.css";

function Presentation() {
  /*  const lines = [
    "Bonjour et bienvenue,",
    "Je suis Olivier GOY",
    "Développeur web Fullstack",
  ];

  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
  let timeout;

  const type = () => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const currentChar = currentLine.charAt(charIndex);

    
    const color = lineIndex === 0 ? "black" : "gray";

    setText(
      (prev) => prev + `<span style="color:${color}">${currentChar}</span>`
    );

    let nextLineIndex = lineIndex;
    let nextCharIndex = charIndex + 1;

    if (nextCharIndex >= currentLine.length) {
      nextCharIndex = 0;
      nextLineIndex += 1;

      if (nextLineIndex < lines.length) {
        setText((prev) => prev + "<br />");
      }
    }

    timeout = setTimeout(() => {
      setLineIndex(nextLineIndex);
      setCharIndex(nextCharIndex);
    }, 30);
  };

    timeout = setTimeout(type, 30);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [lineIndex, charIndex]); */

  return (
    <div className="banner">
      <div className="sectionBannerPresentation">
        <p className="bannerGreeting">BONJOUR, JE SUIS</p>
        <h1>
          <span className="bannerName">
            Olivier <span className="bannerLastName">GOY</span>
          </span>
          <span className="bannerJob">Développeur logiciel & web</span>
          {/* <span dangerouslySetInnerHTML={{ __html: text }}></span>
            <span className="cursor">|</span> */}
        </h1>
        <p className="bannerDescription">
          Je conçois des applications web modernes, performantes et
          ergonomiques, du front-end au back-end.
        </p>
        <div className="bannerLink">
          <a href="mailto:contact@oliviergoy.dev" className="btnContact">
            <FontAwesomeIcon icon={faEnvelope} />
            Me contacter
          </a>
          <a href={cv} target="_blank" rel="noreferrer" className="btnCV">
            <FontAwesomeIcon icon={faDownload} />
            Mon CV
          </a>
        </div>
        <div className="bannerLinkSocial">
          <a
            href="https://github.com/olivier-goy"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="socialIcon"/>
          </a>
          <a
            href="https://www.linkedin.com/in/olivier-goy/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="socialIcon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
