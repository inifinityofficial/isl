"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  handleOpen: () => void;
  handleRemove2: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  // Use the props as needed
  return (
    <footer className="main-footer footer-style-one">
      <div className="outer-box">
        <div className="bg bg-pattern-7"></div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {/* Footer Column */}
              <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget about-widget">
                  <figure className="image">
                    <Link href="#">
                      <img src="/assets/images/logo-2.png" alt="Company Logo" />
                    </Link>
                  </figure>
                  <div className="text">
                    Empowering brands with cutting-edge digital solutions to drive
                    growth and innovation.
                  </div>
                  <ul className="social-icon-two">
                     <li>
                    <Link href="https://www.linkedin.com/company/infinity-software-labs-official/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>

                  </ul>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Links</h5>
                  <ul className="user-links">
                    <li><Link href="/page-about">About</Link></li>
                    <li><Link href="/page-service">Our Services</Link></li>
                    <li><Link href="/page-project">Recent Projects</Link></li>
                    <li><Link href="/page-blog">Upcoming News</Link></li>
                    <li><Link href="/page-contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget links-widget two">
                  <h5 className="widget-title">Explore</h5>
                  <ul className="user-links">
                    <li><Link href="/page-team">Meet the Team</Link></li>
                    <li><Link href="/page-contact">Support</Link></li>
                    <li><Link href="/page-contact">Privacy Policy</Link></li>
                    <li><Link href="/page-contact">Terms of Use</Link></li>
                  </ul>
                </div>
              </div>
              {/* Footer Column */}
              <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="newsletter-form">
                    <form method="post" action="#">
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
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                      <div className="form-group checkbox">
                        <div className="form-group checkbox">
                          <label className="custom-checkbox" htmlFor="terms">
                            <input
                              type="checkbox"
                              id="terms"
                              name="termsAccepted"
                            />
                            <span className="checkmark"></span>
                            I agree to all your terms and policies
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright 2025 by Company.com
            </div>
            <ul className="footer-nav">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <div className="scroll-to-top scroll-to-target" data-target="html">
              Top <span className="fa fa-arrow-up"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;