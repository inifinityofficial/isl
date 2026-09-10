"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/assets/images/icons/icon-33.png",
    title: "Digital Growths",
    desc: "Good knowledge because you done something many times.",
  },
  {
    id: 2,
    icon: "/assets/images/icons/icon-34.png",
    title: "Digital Solutions",
    desc: "Good knowledge because you done something many times.",
  },
  {
    id: 3,
    icon: "/assets/images/icons/icon-35.png",
    title: "Best Consultancy",
    desc: "Good knowledge because you done something many times.",
  },
  {
    id: 4,
    icon: "/assets/images/icons/icon-36.png",
    title: "Expert Developers",
    desc: "Good knowledge because you done something many times.",
  },
];

const ChooseSection: React.FC = (): JSX.Element => {
  return (
    <section className="choose-section">
      <div className="shape-2"></div>
      <div className="auto-container">
        <div className="row items-center">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
            <div className="inner-column">
              <div className="sec-title mb-8">
                <div className="sub-title mb-2">
                  WHY CHOOSE US
                </div>
                <h2 className="text-reveal-anim">
                  Why You Should <br /> Choose Our Agency
                </h2>
              </div>

              <div className="icon-outer-box row">
                {features.map((feature) => (
                  <div className="icon-box col-lg-6 col-md-6 col-sm-6" key={feature.id}>
                    <div className="single-box">
                      <div className="inner-box">
                        <div className="icon mb-3">
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={50}
                            height={50}
                          />
                        </div>
                        <h6 className="title">
                          {feature.title.split(" ").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h6>
                      </div>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
                <div className="image-box">
                    <div className="shape-11"></div>
                    <div className="shape-34"></div>
                    <figure className="image"><img src="/assets/images/choose/choose-us-image.jpg" alt="Image"/></figure>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
