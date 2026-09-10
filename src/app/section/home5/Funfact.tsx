"use client";

import React from "react";
import Image from "next/image";

const FunfactSectionFour: React.FC = (): JSX.Element => {
  return (
    <section className="funfact-section-four">
      <div className="outer-box">
        <div className="bg bg-image">
          <Image
            className="image-1"
            src="/assets/images/resource/why-img2.png"
            alt="Why Choose Us Background 1"
            width={600}
            height={600}
          />
          <Image
            className="image-2"
            src="/assets/images/resource/why-img.jpg"
            alt="Why Choose Us Background 2"
            width={600}
            height={600}
          />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
            <div className="choose-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
              <div className="sec-title light">
                <div className="sub-title">WHY CHOOSE US</div>
                <h2 className="text-reveal-anim">
                  Why You Should <br /> Choose Our Agency
                </h2>
              </div>
            </div>
            {/* Text Column */}
            <div className="choose-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
              <div className="text">
                Proin efficitur, mauris vel condimentum pulvinar, velit orci <br />
                consectetur ligula, eget egestas magna mi ut arcu.
              </div>
            </div>
          </div>
          {/* Facts Section */}
          <div className="fact-single-box">
            <div className="row">
              {[
                {
                  icon: "flaticon-success",
                  title: "Digital Growths",
                  delay: "0ms",
                },
                {
                  icon: "flaticon-marketing",
                  title: "Digital Solution",
                  delay: "300ms",
                },
                {
                  icon: "flaticon-promotion",
                  title: "Best Consulting",
                  delay: "600ms",
                },
                {
                  icon: "flaticon-diplomat",
                  title: "Expert Team",
                  delay: "900ms",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="single-block col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay={item.delay}>
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon ${item.icon}`}></i>
                    </div>
                    <h4 className="title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactSectionFour;
