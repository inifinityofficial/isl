"use client";
import Link from "next/link";
import React, { useState } from "react";

const accordionData = [
  {
    title: "Future management Development",
    category: "Marketing",
    description:
      "We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation or any other specialized need.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "IT Technology",
    category: "Technology",
    description:
      "We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation or any other specialized need.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "Human Research",
    category: "Marketing",
    description:
      "We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation or any other specialized need.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "Software Development",
    category: "Development",
    description:
      "We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation or any other specialized need.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
];

const HzAccordionSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hzAccordion-section">
      <div className="shape-2"></div>
      <div className="shape-15"></div>
      <div className="shape-4"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Work</div>
          <h2 className="text-reveal-anim">
            Our Recently <br /> Completed Projects
          </h2>
        </div>
        <div className="Client-gallery-wraper">
          <div className="options">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`option ${activeIndex === index ? "active" : ""}`}
                style={{
                  background:
                    activeIndex === index
                      ? "var(--theme-color-dark)"
                      : "var(--theme-color-light)",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="client-content">
                  <div className="search-icon">
                    <i className={`icon ${item.icon}`}></i>
                  </div>
                  <div className="label">
                    <div className="button-icon">
                      <i className="icon fa fa-arrow-right"></i>
                    </div>
                    <div className="icon-custom">
                      <h3 className="title">{item.title}</h3>
                    </div>
                    <div className="info">
                      <div className="cont">
                        <div className="icon-48"></div>
                        <div className="sub prafont">{item.description}</div>
                        <div className="sub-title">
                          <h5>{item.category}</h5>
                        </div>
                        <div className="main headfont">
                          <Link href={item.link}>{item.title}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HzAccordionSection;
