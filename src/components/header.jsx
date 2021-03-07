import React, { useState } from "react";
import { Link } from "gatsby";
import "./header.css";

const KeldgorHeader = ({ active }) => {
  const [open, setOpen] = useState(false);

  function changeMenu() {
    setOpen(!open);
  }

  return (
    <header>
      <nav className={active === "landing" ? "landing" : ""}>
        <button id="burgerMenu" onClick={changeMenu}>
          <img
            src={
              active === "landing"
                ? "/images/burger_hvid.svg"
                : "/images/burger_blue.svg"
            }
          />
        </button>
        <Link id="logoTop" to="/">
          <img id="logo" src="/images/Logo-Keldgor-blue.svg" />
          <img
            id="logoMobile"
            src={
              active === "landing"
                ? "/images/Logo-Keldgor-white.svg"
                : "/images/Logo-Keldgor-blue.svg"
            }
          />
        </Link>
        <ul className={`nav-list ${open ? "open" : ""}`}>
          <li>
            <button id="menuClose" onClick={changeMenu}>
              <img src="/images/menu-close.svg" />
            </button>
          </li>
          <li>
            <Link id="logoMenu" to="/">
              <img src="/images/Logo-Keldgor-blue.svg" />
            </Link>
          </li>
          <li>
            <Link
              className={active === "OmKeldgor" ? "active" : ""}
              to="/omKeldgor"
            >
              Om Keldgor
            </Link>
          </li>
          <li>
            <Link
              className={active === "Kerneværdier" ? "active" : ""}
              to="/kernevaerdier"
            >
              Kerneværdier
            </Link>
          </li>
          <li>
            <Link
              className={active === "Kompetencer" ? "active" : ""}
              to="/kompetencer"
            >
              Kompetencer
            </Link>
          </li>
          <li>
            <Link
              className={active === "Konsulentydelser" ? "active" : ""}
              to="/konsulentydelser"
            >
              Konsulentydelser
            </Link>
          </li>
          <li>
            <Link
              className={active === "Kontakt" ? "active" : ""}
              to="/kontakt"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default KeldgorHeader;
