"use client";

import React from "react";
import Link from "next/link";

const CallToActionThree: React.FC = (): JSX.Element => {
  return (
    <section className="call-to-action-three pull-down">
      {/* Background Image */}
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/icons/pattern-9.jpg)" }}
      ></div>
      <div className="shape-20"></div>
      <div className="auto-container-fluid">
        <div className="outer-box">
          {/* Content */}
          <div className="content-box">
            <h2 className="title text-reveal-anim">
              Let’s Build Your Growth <br /> Strategy Together
            </h2>
            <div className="text">
              Our consulting services are designed to help you uncover growth
              opportunities.
              <br />
              Book a free consultation today and grow your business goals.
            </div>
          </div>

          {/* Button */}
          <div className="btn-box">
            <Link href="/page-contact" className="theme-btn-main">
              <span className="theme-btn-arrow-left">
                <i className="fa fa-arrow-right"></i>
              </span>
              <span className="theme-btn">Discover More</span>
              <span className="theme-btn-arrow-right">
                <i className="fa fa-arrow-right"></i>
              </span>
            </Link>
          </div>

          {/* Decorative Text */}
          <div className="text-box">
            <h1 className="title-two">Digital Agency</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionThree;
