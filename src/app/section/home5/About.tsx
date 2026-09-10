import React from "react";
import Image from "next/image";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

const AboutSectionSix: React.FC = (): JSX.Element => {
  return (
    <section className="about-section-six">
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">About Us</div>
                <h2 className="text-reveal-anim">
                  Welcome to Our Smart <br /> Digital Agency
                </h2>
                <div className="text">
                  We provide a diverse array of systems, each tailored to
                  streamline your operations and enhance productivity. Whether
                  you require.
                </div>
              </div>

              <div className="icon-outer-box row">
                {[
                  {
                    percent: 90,
                    title: "Business Consulting",
                    desc: "Strategy consultants work closely with organizations to define",
                  },
                  {
                    percent: 85,
                    title: "Financial Planning",
                    desc: "Strategy consultants work closely with organizations to define",
                  },
                ].map((item, index) => (
                  <div
                    className="icon-box col-lg-6 col-md-6 col-sm-6"
                    key={index}>
                    <div className="inner-box">
                      <div className="count-box">
                        <h2 className="count-text" data-speed="3000" data-stop={item.percent}>
                          <CounterUp end={item.percent} />%
                        </h2>
                        {/* <span>%</span> */}
                      </div>
                      <h6 className="title">{item.title}</h6>
                      <div className="descrip">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-box">
                <Link href="/page-contact" className="theme-btn-main">
                  <span className="theme-btn-arrow-left">
                    <i className="fa fa-arrow-right" />
                  </span>
                  <span className="theme-btn">Discover More</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa fa-arrow-right" />
                  </span>
                </Link>
                <div className="author-box">
                  <div className="author-image-box">
                    {[
                      "/assets/images/resource/h5-ab3.png",
                      "/assets/images/resource/h5-ab2.png",
                      "/assets/images/resource/h5-ab.png",
                    ].map((src, i) => (
                      <div className="author-image" key={i}>
                        <Image src={src} alt="Author" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <div className="text">10M+ Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div
            className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="inner-column">
              <div className="image-box">
                <div className="icon-17"></div>
                <figure className="image">
                  <Image
                    src="/assets/images/icons/h5-img.jpg"
                    alt="Main"
                    width={600}
                    height={500}
                  />
                </figure>
                <figure className="image2">
                  <Image
                    src="/assets/images/icons/h5-img2.jpg"
                    alt="Decor"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="btn-box">
                  <Link href="#">
                    <svg
                      viewBox="0 0 100 100"
                      width="100"
                      height="100"
                      className="circular-text"
                    >
                      <defs>
                        <path
                          id="circle"
                          d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">
                          Explore More Explore More
                        </textPath>
                      </text>
                    </svg>
                    <i className="icon fa fa-arrow-up-right" />
                  </Link>
                </div>
                {/* Shapes */}
                <div className="shape-38"></div>
                <div className="shape-39 bounce-y"></div>
                <div className="shape-9"></div>
                <div className="icon-42"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSix;
