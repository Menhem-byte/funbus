import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./navbar.css";

import "primeicons/primeicons.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const menuClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Fun Bus
          </Link>
          <div className="menu-icon" onClick={menuClick}>
            <i
              className={click ? "pi pi-times" : "pi pi-bars"}
              style={{ color: "white" }}
            ></i>
          </div>
          <div className="menu-icon"></div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
