import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../../Assets/CV_Olivier_GOY_Développeur_Fullstack.pdf";
import { ReactComponent as GitHub } from "../../Assets/github.svg";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import "./Banner.css";

function Presentation() {
  const textDescription = "Je conçois des applications web modernes, performantes et ergonomiques, du front-end au back-end.";

  const [isTypingText, setTypingText] = useState("");
  const [isShowCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let timeout;

    const interval = setInterval(() => {
      index++;
      setTypingText(textDescription.slice(0, index));

      if (index >= textDescription.length) {
        clearInterval(interval);

        timeout = setTimeout(() => {
          setShowCursor(false);
        }, 4000);
      }
    }, 50);

    return () => {clearInterval(interval); clearTimeout(timeout)};
  }, [textDescription]);

  return (
    <div className="banner">
      <div className="sectionBannerPresentation">
        <p className="bannerGreeting">BONJOUR, JE SUIS</p>
        <h1>
          <span className="bannerName">
            Olivier <span className="bannerLastName">GOY</span>
          </span>
          <span className="bannerJob">Développeur logiciel & web</span>
        </h1>
        <p className="bannerDescription">
          {isTypingText}
          {isShowCursor && (
            <span className="typingCursor">|</span>
          )}
        </p>
        <div className="bannerLink">
          <a href="mailto:contact@oliviergoy.dev" className="btnContact">
            <FontAwesomeIcon icon={faEnvelope} className="iconContact" />
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
            <GitHub className="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/olivier-goy/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="socialIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
