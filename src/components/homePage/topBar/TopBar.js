import React from "react";
import "./topBar.css";
import countryIconSmall from "../../assets/images/country-icon-small.png";

function TopBar() {
  return (
    <div className="top-bar-container">
      <div className="container py-2 justify-between">
        <div className="help-faq-div">
          <a href="#" className="bold-underlined">Hello &amp; FAQs</a>
        </div>
        <div className="download-app">
          <p className="font-xs d-inline">Download our application. </p>
          <a href="#" className="bold-underlined">Find out more</a>
        </div>
        <div className="download-app">
          <span className="country-circle">
            <img src={countryIconSmall} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
