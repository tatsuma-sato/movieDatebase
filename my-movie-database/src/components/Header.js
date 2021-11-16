import React from "react";
import "../styles/header.scss";
import { NavLink, Link } from "react-router-dom";

import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="navbar__title">
            <FontAwesomeIcon icon={faFilm} />
            Movie Search
          </Link>
        </div>

        <ul className="navbar__list">
          <li>
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-item">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" className="navbar-item">
              test
            </NavLink>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search for movies"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
