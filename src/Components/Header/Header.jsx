import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cv from "../../Assets/CV_Olivier_GOY_Développeur_Fullstack.pdf";

function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
      <div>
        <nav>
          <div className="nav">
            <div className="iconHeader">
              <FontAwesomeIcon className="iconCode" icon={faCode} size="2x" />
              <span className="logoText">OG.dev</span>
            </div>
            <div className="navHeader">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "pending"
                  }
                  reloadDocument
                >
                  Accueil
                </NavLink>
              <a href="#realizations" className="pending">
                Réalisations
              </a>
              <a href="#skills" className="pending">
                Compétences
              </a>
              <a href="#abouts" className="pending">
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

export default Header