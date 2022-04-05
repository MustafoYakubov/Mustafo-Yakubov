import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";
import logo from "../../assets/icons/symbol.svg";
import search from "../../assets/icons/search.svg";
import Notification from "../../assets/icons/Notification.svg";
import mobileNavIcon from "../../assets/icons/mobile-icon-nav.svg";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
          <div className="position">
            <span className="crypto"> crypter</span>
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={mobileNavIcon} alt="mobile-nav" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-NavLink  " aria-current="page" to="/">
                Discover
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/how-it-works">
                How it Work
              </NavLink>
            </li>
          </ul>
          <form autocomplete="off" className="d-flex forms">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <img className="search-logo" src={search} alt="search-logo" />
            <NavLink className="notification" to="/Notification">
              <img
                className="noti-logo"
                src={Notification}
                alt="Notification"
              />
            </NavLink>
            <button type="button" className="upload">
              upload
            </button>
            <button type="button" className="connect">
              <span className="connect-text"> Connect Wallet </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
