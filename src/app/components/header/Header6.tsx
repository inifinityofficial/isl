"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header6: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }): JSX.Element => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleToggle = () => {
      setIsSearchActive(!isSearchActive);
    };
  return (
    <header className={`main-header header-style-six ${scroll ? "fixed-header" : ""}`}>
      {/* Header Lower */}
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          {/* Navigation */}
          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks extraClassName="main-menu-list" />
            </nav>
          </div>
          {/* Outer Box */}
          <div className="outer-box">
            {/* Contact Button */}
            <div className="btn-box">
              <Link href="/page-contact" className="theme-btn btn-style-one">
                <span className="btn-title">
                  Get in Touch <i className="fa fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            {/* Search & Account Buttons */}
            <div className="ui-btn-box">
              <button className="ui-btn search-btn" onClick={handleToggle}>
                <span className="icon lnr lnr-icon-search"></span>
              </button>
              <button className="ui-btn account-btn">
                <span className="icon lnr lnr-icon-user"></span>
              </button>
            </div>
            {/* Mobile Nav Toggler */}
            <div className="mobile-nav-toggler" onClick={handleOpen}>
              <span className="icon lnr-icon-bars"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-phone-handset"></i>
              <span className="title">Call Now</span>
              <div className="text">
                <Link href="tel:+923235711406">+92 323 5711406</Link>
              </div>
            </li>
            <li>
              <i className="icon lnr-icon-envelope1"></i>
              <span className="title">Send Email</span>
              <div className="text">
                <Link href="mailto:contact@infinitysoftwarelabs.com">contact@infinitysoftwarelabs.com</Link>
              </div>
            </li>
            <li>
              <i className="icon lnr-icon-map-marker"></i>
              <span className="title">Address</span>
              <div className="text">Infinity Software Labs</div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Popup */}
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle}></span>
        <button className="close-search" onClick={handleToggle}>
          <span className="fa fa-times"></span>
        </button>
        <div className="search-inner">
          <form method="post" action="#">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." required />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sticky Header */}
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/" title="Home">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>
            </div>

            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <NavLinks extraClassName="main-menu-list" />
                  </ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header6;
