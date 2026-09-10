"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "flaticon-marketing",
    imgSrc: "/assets/images/service/service-five-image.jpg",
    title: "Brand Design",
    text: "There are many variation of passages of Lorem Ipsum available form.",
    count: "01",
    delay: "0ms",
  },
  {
    icon: "flaticon-graphic-design",
    imgSrc: "/assets/images/service/service-five-image2.jpg",
    title: "Web Design",
    text: "There are many variation of passages of Lorem Ipsum available form.",
    count: "02",
    delay: "200ms",
  },
  {
    icon: "flaticon-laptop",
    imgSrc: "/assets/images/service/service-five-image3.jpg",
    title: "Development",
    text: "There are many variation of passages of Lorem Ipsum available form.",
    count: "03",
    delay: "400ms",
  },
  {
    icon: "flaticon-promotion",
    imgSrc: "/assets/images/service/service-five-image4.jpg",
    title: "Marketing",
    text: "There are many variation of passages of Lorem Ipsum available form.",
    count: "04",
    delay: "600ms",
  },
];

const ServiceSectionFive: React.FC = (): JSX.Element => {
  return (
    <section className="service-section-five style-service">
      {/* Background */}
      <div className="bg bg-pattern-9"></div>

      <div className="auto-container">
        <div className="row">
          {/* Section Title */}
          <div className="sec-title light text-center">
            <div className="sub-title">Our Services</div>
            <h2
              className="text-reveal-anim"
              dangerouslySetInnerHTML={{
                __html: "Services We’re <br/> Offering to Customers",
              }}
            ></h2>
          </div>

          {/* Service Blocks */}
          {services.map((service, index) => (
            <div
              key={index}
              className="service-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="inner-box">
                {/* Icon */}
                <div className="icon-box">
                  <i className={`icon ${service.icon}`}></i>
                </div>

                {/* Image */}
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-service-details">
                      <Image
                        src={service.imgSrc}
                        alt={service.title}
                        width={400}
                        height={400}
                        priority
                      />
                    </Link>
                  </figure>
                </div>

                {/* Content */}
                <div className="content-box">
                  <h4 className="title">
                    <Link href="/page-service-details">{service.title}</Link>
                  </h4>
                  <div className="text">{service.text}</div>
                  <div className="count">{service.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionFive;
