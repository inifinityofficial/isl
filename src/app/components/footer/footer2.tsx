"use client";
import React, { useState } from "react";
import Link from "next/link";
import { submitWeb3Form } from "../../../utils/web3form";

const Footer2: React.FC = () => {
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ type: "info", text: "Please wait..." });
    setSubmitting(true);
    try {
      const message = await submitWeb3Form(form);
      setStatus({ type: "success", text: message });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong!",
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <footer className="main-footer footer-style-one style-two">
      <div className="bg bg-pattern-7"></div>
      {/* Contact List */}
      <div className="widgets-section">
        <div className="auto-container">
          <ul className="contact-list-two">
           {/*  <li>
              <div className="icon-box">
                <i className="icon fa fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <div className="subtitle">office address</div>
                <div className="text">
                  Infinity Software Labs
                </div>
              </div>
            </li> */}
            <li>
              <div className="icon-box">
                <i className="icon fa fa-envelope"></i>
              </div>
              <div className="content">
                <div className="subtitle">send email</div>
                <div className="text">
                  <Link href="mailto:contact@infinitysoftwarelabs.com">contact@infinitysoftwarelabs.com</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="icon fa fa-phone"></i>
              </div>
              <div className="content">
                <div className="subtitle">call emergency</div>
                <div className="text">
                  <Link href="tel:+923235711406">+92 323 5711406</Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="row">
            {/* About Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget about-widget">
                <figure className="image">
                  <Link href="/">
                    <img src="/assets/images/logo-2.png" alt="Logo" />
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
            {/* Links Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Links</h5>
                <ul className="user-links">
                  <li>
                    <Link href="/page-about">About</Link>
                  </li>
                  <li>
                    <Link href="/page-service">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/page-project">Recent Projects</Link>
                  </li>
                  <li>
                    <Link href="/page-blog">Upcoming News</Link>
                  </li>
                  <li>
                    <Link href="/page-contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Explore Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget two">
                <h5 className="widget-title">Explore</h5>
                <ul className="user-links">
                  <li>
                    <Link href="/page-team">Meet the Team</Link>
                  </li>
                  <li>
                    <Link href="/">Support</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/page-terms">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Newsletter Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h4 className="widget-title">Newsletter</h4>
                <div className="newsletter-form">
                  <form onSubmit={handleNewsletter} method="post">
                    <div className="form-group">
                       <input type="hidden" name="access_key" value="eb9d5acd-1079-42d9-b5c3-ee726a710cd3"></input>
                      <input
                        type="email"
                        id="Yemail"
                        name="Yemail"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="form-btn" disabled={submitting}>
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
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
                    {status && (
                      <div className={`w3f-status show ${status.type}`}>
                        {status.type === "success" ? <i className="fa fa-check-circle"></i> : null}
                        {status.type === "error" ? <i className="fa fa-exclamation-circle"></i> : null}
                        {status.type === "info" ? <i className="fa fa-spinner fa-spin"></i> : null}
                        {status.text}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright 2025 by Infinity Software Labs
            </div>
            <div className="right-box">
              <ul className="footer-nav">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
              <div
                className="scroll-to-top"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                }}
              >
                Top <span className="fa fa-arrow-up"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
