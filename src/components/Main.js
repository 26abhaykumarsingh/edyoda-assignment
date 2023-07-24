import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // If you need solid icons
import RightBox from "./RightBox";

library.add(fas);

function Main() {
  return (
    <div className="Main">
      <div className="Main__leftBox">
        <div className="heading">
          Access curated courses worth{" "}
          <span className="roboto rupeeIcon">
            <FontAwesomeIcon icon="indian-rupee-sign" />
          </span>{" "}
          <span className="roboto strike">18,500</span> at just{" "}
          <span className="roboto blue">
            <FontAwesomeIcon icon="indian-rupee-sign" /> 99
          </span>{" "}
          per year!
        </div>
        <div className="listItem">
          <span className="listItem__icon bookIcon"></span>
          <span className="roboto blue">100+&nbsp;</span> Job relevant courses
        </div>
        <div className="listItem">
          <span className="listItem__icon clockIcon"></span>
          <span className="roboto blue">20,000+&nbsp;</span> Hours of content
        </div>
        <div className="listItem">
          <span className="listItem__icon liveIcon"></span>
          <span className="blue">Exclusive&nbsp;</span> webinar access
        </div>
        <div className="listItem">
          <span className="listItem__icon hatIcon"></span>
          Scholarship worth&nbsp;{" "}
          <span className="roboto blue">
            <FontAwesomeIcon icon="indian-rupee-sign" />
            94,500
          </span>
        </div>
        <div className="listItem">
          <span className="listItem__icon adsIcon"></span>
          <span className="blue">Ad Free&nbsp;</span> learning experience
        </div>
      </div>
      <RightBox />
    </div>
  );
}

export default Main;
