"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/page-service-details",
    image: "/assets/images/service/service-image1.jpg",
    category: "BRANDING",
    title: "Brand Design & Logo Design",
    delay: "0ms",
  },
  {
    href: "/page-service-details",
    image: "/assets/images/service/service-image2.jpg",
    category: "Customization",
    title: "WordPress & Marketing",
    delay: "300ms",
  },
  {
    href: "/page-service-details",
    image: "/assets/images/service/service-image3.jpg",
    category: "Development",
    title: "Digital Marketing",
    delay: "600ms",
  },
];

const ServiceSectionThree: React.FC = (): JSX.Element => {
  return (
    <section className="service-section-three">
      <div className="shape-27"></div>
      <div className="shape-25"></div>
      <div className="shape-26"></div>
      <div className="auto-container">
        <div className="sec-title home3 text-center">
          <div className="sub-title">Our Services</div>
          <h2 className="text-reveal-anim">
            Services We’re <br /> Offering to Customers
          </h2>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-block-three col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={service.href}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </Link>
                  </figure>
                  <Link href={service.href} className="readmore">
                    <i className="fa fa-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="content-box">
                  <div className="cat">{service.category}</div>
                  <h4 className="title">
                    <Link href={service.href}>
                      {service.title.split(" & ").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThree;