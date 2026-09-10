"use client";
import React from "react";
import Link from "next/link";

const BannerSectionSix: React.FC = (): JSX.Element => {
  return (
    <section className="banner-section-six">
      <div className="banner-area">
        <div className="outer-box">
          <div className="inner-box">
            <div className="shape-41"></div>
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h4 className="sub-title animate-2">WEB BUSINESS SOLUTION</h4>
                  <h1 className="title animate-2">
                    Grow Your <br />
                    Business Bigger <br />
                    and <span className="color">Better</span>
                  </h1>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="text animate-3">
                    An award-winning agency led by visionary CEO <br />
                    specializing in digital marketing, design, and <br />
                    website development—understanding you.
                  </div>
                  <div className="bannar-single-box animate-3">
                    <div className="bannar-icon-box">
                      <i className="icon fas fa-phone"></i>
                      <h6 className="title2">
                        Feel free to <br />
                        contact with us
                      </h6>
                    </div>
                    <div className="bannar-text">
                      <h5 className="text2">(+0) 012 345 6789</h5>
                    </div>
                  </div>
                  <div className="btn-box animate-4">
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
                  <div className="shape-42"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionSix;
