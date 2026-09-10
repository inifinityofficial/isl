import React from "react";
import Link from "next/link";
import Image from "next/image";

const authors = [
  "/assets/images/resource/1.png",
  "/assets/images/resource/2.png",
  "/assets/images/resource/3.png",
  "/assets/images/resource/4.png",
];

const AboutSectionFive: React.FC = (): JSX.Element => {
  return (
    <section className="about-section-five">
      <div className="shape-30"></div>
      <div className="shape-15"></div>

      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column order-1 order-lg-2 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">About Us</div>
                <h2 className="text-reveal-anim">
                  Welcome to Our Smart <br /> Digital Agency
                </h2>
                <div className="text">
                  We provide a diverse array of systems, each tailored to
                  streamline your operations and enhance productivity. Whether
                  you require assistance with data process automation or any
                  other specialized need.
                </div>
              </div>

              <ul className="list-style-four">
                <li>
                  <i className="fa fa-check-circle"></i> Deliver Perfect
                  Solution for business
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Readily Work With Global
                  Brands solutions.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Residential Business
                  Installation
                </li>
              </ul>

              <div className="author-box mb-20">
                <div className="author-image-box">
                  {authors.map((src, i) => (
                    <div className="author-image" key={i}>
                      <Image
                        src={src}
                        alt={`Author ${i + 1}`}
                        width={60}
                        height={60}
                      />
                    </div>
                  ))}
                </div>
                <div className="text">
                  Join our <span className="number">5000+</span> satisfied
                  clients
                </div>
              </div>

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
          </div>

          {/* Image Column */}
          <div
            className="image-column order-2 order-lg-1 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="inner-column">
              <div className="image-box">
                <div className="shape-31"></div>
                <figure className="image">
                  <Image
                    src="/assets/images/about/about-four-image.jpg"
                    alt="About Image"
                    width={600}
                    height={500}
                  />
                </figure>
                <div className="icon-box">
                  <div className="icon-37 bounce-y"></div>
                </div>
                <div className="icon-box-two">
                  <div className="icon-38"></div>
                </div>
                <div className="icon-box-two">
                  <div className="icon-39"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFive;
