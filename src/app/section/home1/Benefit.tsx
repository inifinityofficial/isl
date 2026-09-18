import React from "react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "flaticon-graphic-design",
    title: "Business-focused development",
    text: "Every project is shaped around your workflow, goals, customers and long-term roadmap rather than a one-size-fits-all template.",
  },
  {
    icon: "flaticon-teaching",
    title: "Custom digital systems",
    text: "We build solutions that fit your operations, not the other way around, whether that means a sales website, internal portal or AI-assisted workflow.",
  },
  {
    icon: "flaticon-laptop",
    title: "Performance and support",
    text: "Our work balances usability, stability and speed, with ongoing support to help your solution keep performing after launch.",
  },
];

const BenefitSection: React.FC = (): JSX.Element => {
  return (
    <section className="benefit-section">
      <div className="bg bg-pattern-5"></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div
            className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-2"
            data-wow-delay="200ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Why choose us</div>
                <h2 className="text-reveal-anim">
                  A practical technology partner for <br /> growth-focused businesses
                </h2>
                <h6 className="title">
                  We build digital solutions that are clear, reliable and aligned with how your business actually operates.
                </h6>
              </div>

              {benefits.map((item, index) => (
                <div className="benefit-block" key={index}>
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon ${item.icon}`}></i>
                    </div>
                    <div className="content-box">
                      <h6 className="title">{item.title}</h6>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="btn-box">
                <Link href="/page-contact" className="theme-btn-main">
                  <span className="theme-btn-arrow-left">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                  <span className="theme-btn">Talk to Our Team</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  src="/assets/images/resource/benefit1-1.jpg"
                  alt="Benefit Visual"
                  width={570}
                  height={570}
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div
                className="exp-box bounce-x"
                data-wow-delay="300ms"
              >
                <i className="icon flaticon-recommend"></i>
                <div className="cat">GROW BUSINESS</div>
                <h4 className="title">
                  Better systems. <br /> Better customer <br /> experience.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
