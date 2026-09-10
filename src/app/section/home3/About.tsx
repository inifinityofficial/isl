import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSectionThree: React.FC = (): JSX.Element => {
  return (
    <section className="about-section-three">
      <div className="outer-box">
        <div className="auto-container-fluid">
          <div className="row">
            {/* Image Column */}
            <div
              className="image-column col-xl-6 col-lg-12 col-sm-12 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image">
                    <Image
                      src="/assets/images/resource/h3-ab.jpg"
                      alt="About Image"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-12 col-sm-12 order-lg-2 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title light">
                  <div className="sub-title">About Us</div>
                  <h2 className="text-reveal-anim">
                    We deliver innovative ideas to <br /> elevate your digital agency and <br />
                    sharpen your brand
                  </h2>
                  <div className="text ab-three">
                    Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula,
                    eget <br /> egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.
                    Suspendisse <br /> sit amet neque euismod, convallis quam eget
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
          </div>

          <div className="row mt-5">
            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-12 col-sm-12 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title light">
                  <h3 className="text-reveal-anim">
                    We provide an extensive selection of <br /> Services to meet your diverse <br />
                    sharpen your brand
                  </h3>
                </div>

                <ul className="list-style-four">
                  <li>
                    <i className="fa fa-check"></i> Specialized in delivering cutting-edge digital
                    solutions
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Our team comprises skilled professionals
                  </li>
                  <li>
                    <i className="fa fa-check"></i> We prioritize our clients' goals, offering
                    customized
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Column */}
            <div
              className="image-column col-xl-6 col-lg-12 col-sm-12 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image">
                    <Image
                      src="/assets/images/resource/h3-ab2.jpg"
                      alt="About Image 2"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
