import React from "react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "flaticon-graphic-design",
    title: "Quality Services",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum.",
  },
  {
    icon: "flaticon-teaching",
    title: "Professional Experts",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum.",
  },
  {
    icon: "flaticon-laptop",
    title: "99% Success Rates",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum.",
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
                <div className="sub-title">Our benefits</div>
                <h2 className="text-reveal-anim">
                  Why You Should <br /> Choose Our Agency
                </h2>
                <h6 className="title">
                  The primary goal of business market is to help organizations
                  improve their performance.
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
                  <span className="theme-btn">Discover More</span>
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
                  We Help Your Business <br /> To Become More <br /> Stronger
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
