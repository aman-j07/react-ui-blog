import { Menu } from "@mui/icons-material";
import { useRef } from "react";
import { Link } from "react-router-dom";
import NordicRoseLogo from "../assets/logos/NORDIC ROSE.png";

function Header() {
  const refToggleNav = useRef<null | HTMLDivElement>(null);
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__togglesection">
          <Link to="/">
            <img
              className="header__logo"
              src={NordicRoseLogo}
              alt="nordic rose logo"
            />
          </Link>
          <button
            onClick={() => {
              refToggleNav.current!.classList.toggle("header__navgrp--open");
            }}
            className="header__toggler btn--transparent"
          >
            <Menu fontSize="large" />
          </button>
        </div>
        <div className="header__navgrp" ref={refToggleNav}>
          <ul className="header__navlist">
            <li className="header__navlink header__navlink--active">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="header__navlink">
              <a href="#About">About</a>
            </li>
            <li className="header__navlink">
              <a href="#Link">Link</a>
            </li>
            <li className="header__navlink">
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
