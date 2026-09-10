"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterFive = () => {
  return (
    <footer className="main-footer footer-style-five">
      <div className="shape-15"></div>
      <div className="shape-45"></div>
      <div className="shape-45"></div>
      <div className="shape-46"></div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h2 className="title">
                Looking For Professional <br /> business consultant ?
              </h2>
            </div>
            <div className="shape-40 bounce-x"></div>
            <div className="btn-box">
              <Link href="#" className="theme-btn btn-style-one light-bg2">
                <span className="btn-title">Get Started Free</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
              <div className="text text-white mt-10">No credit card required</div>
            </div>
          </div>
          <div className="row">
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget about-widget">
                <figure className="image">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo-2.png"
                      alt="Logo"
                      width={180}
                      height={60}
                    />
                  </Link>
                </figure>
                <div className="text">
                  At vero eos et accusamus iusto odio dignissimos ducimus blanditiise
                </div>
                <div className="newsletter-form light-bg">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="email"
                        id="Yemail"
                        name="Yemail"
                        className="email"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="form-btn">
                        <i className="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title style">Quick Link</h5>
                <ul className="user-links style">
                  <li>
                    <Link href="/page-about">Features</Link>
                  </li>
                  <li>
                    <Link href="/page-contact">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="/page-about">Best Program</Link>
                  </li>
                  <li>
                    <Link href="/page-about">Press Kit</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget two">
                <h5 className="widget-title style">Company</h5>
                <ul className="user-links style">
                  <li>
                    <Link href="/page-about">About</Link>
                  </li>
                  <li>
                    <Link href="/page-team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="/page-about">Reviews</Link>
                  </li>
                  <li>
                    <Link href="/page-blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h4 className="widget-title style">Contact</h4>
                <ul className="list-style-five style-one">
                 {/*  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    55 Main Street, 2nd block <br /> Melbourne, Australia
                  </li> */}
                  <li>
                    <i className="far fa-envelope"></i> contact@infinitysoftwarelabs.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> +92 323 5711406
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              Copyright ©2025, <span>Design</span> All Rights Reserved
            </div>
            <ul className="footer-nav">
              <li>Faqs</li>
              <li>Setting</li>
              <li>Privacy</li>
              <li>Contact</li>
            </ul>
            <div className="scroll-up-two scroll-to-target" data-target="html">
              <span className="fas fa-angle-double-up"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterFive;
