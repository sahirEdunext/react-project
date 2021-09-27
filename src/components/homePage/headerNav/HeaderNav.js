import React from "react";
import './headerNav.css'
import shopLogo from "../../assets/images/shopLogo.svg";
import searchIcon from "../../assets/images/searchIcon.png";
import accountProfile from "../../assets/images/accountProfile.png";
import heartIcon from "../../assets/images/heartIcon.png";
import cartIcon from "../../assets/images/cartIcon.png";

function HeaderNav() {
  return (
    <div className="headerNav container">
      <nav className="navbar fontCustom navbar-expand-lg navbar-light py-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={shopLogo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link headerMenu active" aria-current="page" href="#">
              Women
              </a>
              <a className="nav-link" href="#">
              Men
              </a>
              <a className="nav-link" href="#">
              Kids
              </a>
            </div>
          </div>
          <form className="d-flex">
            <input className="form-control me-2 headerSearch" type="search" placeholder="Search for items" aria-label="Search" />
            <a className="navbar-brand mr-N2rem" href="#"> <img src={searchIcon} alt="" className="d-inline-block align-text-top" /></a>
          </form>
          <div className="headerRightIcons">
            <a className="navbar-brand" href="#"> <img src={accountProfile} alt="" className="d-inline-block align-text-top" /></a>
            <a className="navbar-brand" href="#"> <img src={heartIcon} alt="" className="d-inline-block align-text-top" /></a>
            <a className="navbar-brand" href="#"> <img src={cartIcon} alt="" className="d-inline-block align-text-top" /></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;
