import React from "react";
import { RiHome3Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { navMenus } from "./navMenus";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left Logo Section */}
      <div className="logo-section">
        <img
          src="/assets/images/home/mit_logo_black.webp"
          alt="Logo 1"
          className="logo1"
        />

        <div className="logo2-section">
          <img
            src="/assets/images/home/SoFT_Logo.png"
            alt="Logo 2"
            className="logo2"
          />

          <div className="logo-text">
            <h1 className="logo-title">MIT-SoFT</h1>
            <p className="logo-subtitle">School of Food Technology</p>
          </div>
        </div>
      </div>

      {/* Right Navigation Section */}
      <div className="nav-section">
        {/* Top Sub Navbar */}
        <ul className="sub-navbar">
          <li>life @Campus</li>
          <li>Placement</li>
          <li>Contact Us</li>
        </ul>

        <ul className="main-navbar">
          {navMenus.map((item) => (
            <li key={item.key}>
              {/* If direct link */}
              {item.to ? (
                <Link to={item.to}>
                  {item.key === "home" ? <RiHome3Fill /> : item.title}
                </Link>
              ) : (
                <>
                  {item.title} <IoMdArrowDropdown className="dropdown-icon" />
                  {/* Dropdown */}
                  {item.columns && (
                    <ul className="dropdown-menu">
                      {item.columns.map((sub, index) => (
                        <li key={index}>
                          <Link to={sub.to}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
