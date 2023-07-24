import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // If you need solid icons

library.add(fas);
function Header() {
  return (
    <div className="Header">
      <div className="Header__leftSection">
        <div className="logo"></div>
        <div className="buttonContainer">
          <button className="button courses">
            Courses
            <div className="downIcon">
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </button>
          <button className="button programs">
            Programs
            <div className="downIcon">
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </button>
        </div>
      </div>
      <div className="Header__rightSection">
        <button className="search">
          <div className="searchIcon">
            <FontAwesomeIcon icon="magnifying-glass" />
          </div>
        </button>
        <button className="button logIn">Log In</button>
        <button className="joinNow">Join Now</button>
      </div>
    </div>
  );
}

export default Header;
