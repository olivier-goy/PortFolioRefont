import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import cv from "../../Assets/CV_Olivier_GOY_Développeur_Fullstack.pdf";

function Header() {
  const [isActivationSection, setActivationSection] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      () => {
        const position = window.innerHeight * 0.35;

        const activeSection = Array.from(sections).find((section) => {
          const rect = section.getBoundingClientRect();

          return rect.top <= position && rect.bottom > position;
        });

        if (activeSection) {
          setActivationSection(activeSection.id);
        }
      },
      {
        root: null,
        rootMargin: `-${window.innerHeight * 0.35}px 0px -${window.innerHeight * 0.65 - 1}px 0px`,
        threshold: 0,
      },
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav">
          <div className="iconHeader">
            <FontAwesomeIcon className="iconCode" icon={faCode} size="2x" />
            <span className="logoText">OG.dev</span>
          </div>
          <div className="navHeader">
            <a
              href="#home"
              className={isActivationSection === "home" ? "active" : "pending"}
              onClick={() => setActivationSection("home")}
            >
              Accueil
            </a>
            <a
              href="#realizations"
              className={
                isActivationSection === "realizations" ? "active" : "pending"
              }
              onClick={() => setActivationSection("realizations")}
            >
              Réalisations
            </a>
            <a
              href="#skills"
              className={
                isActivationSection === "skills" ? "active" : "pending"
              }
              onClick={() => setActivationSection("skills")}
            >
              Compétences
            </a>
            <a
              href="#abouts"
              className={
                isActivationSection === "abouts" ? "active" : "pending"
              }
              onClick={() => setActivationSection("abouts")}
            >
              A propos
            </a>
            <a href={cv} target="_blank" rel="noreferrer" className="pending">
              Mon CV
            </a>
            <a href="mailto:contact@oliviergoy.dev" className="pending">
              Contact
            </a>
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="displayMenu pending"
            >
              <div className="menuRespondsive">
                <div className="iconMenuRespondsive">
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpenMenu && (
          <div className="innerMenu">
            <div className="linkMenu">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pendingResponsive"
                    : isActive
                      ? "active"
                      : "pendingResponsive"
                }
                reloadDocument
              >
                ACCUEIL
              </NavLink>
            </div>
            <a
              href="#skills"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="linkMenu"
            >
              COMPETENCE
            </a>
            <a
              href="#abouts"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="linkMenu"
            >
              A-PROPOS
            </a>
            <a
              href="#realizations"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="linkMenu"
            >
              REALISATIONS
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="linkMenu"
            >
              MON CV
            </a>
            <a
              href="mailto:contact@oliviergoy.dev"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="linkMenu"
            >
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
