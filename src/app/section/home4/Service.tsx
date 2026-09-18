"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: 1,
    image: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
    title: "Web Design",
    href: "/services/ui-ux-design",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
  {
    id: 2,
    image: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "Web Development",
    href: "/services/web-development",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
  {
    id: 3,
    image: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
    title: "Digital Marketing",
    href: "/services/seo-digital-marketing",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
  {
    id: 4,
    image: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
    title: "Web Design",
    href: "/services/ui-ux-design",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
  {
    id: 5,
    image: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "Web Development",
    href: "/services/web-development",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
  {
    id: 6,
    image: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
    title: "Digital Marketing",
    href: "/services/seo-digital-marketing",
    desc: "There are many variation of passages of Lorem Ipsum available form.",
    list: [
      "Fully Responsive",
      "Creativity in Designs",
      "SEO Optimized Content",
    ],
  },
];

const swiperOptions = {
  modules: [Navigation, Autoplay],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
};

const ServiceSectionFour: React.FC = (): JSX.Element => {
  return (
    <section className="service-section-four">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title light">
          <div className="sub-title">Our Services</div>
          <h2 className="text-reveal-anim">
            Services We’re <br /> Offering to Customers
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="outer-box">
        <Swiper {...swiperOptions} className="service-swiper-two">
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="services-block">
                <div className="inner-box">
                  {/* Image Box */}
                  <div className="image-box">
                    <figure className="image">
                      <Link href={service.href}>
                        <img
                          src={service.image}
                          alt={service.title}
                        />
                      </Link>
                    </figure>
                    <div className="icon-box">
                      <i className={`icon ${service.icon}`}></i>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="content-box p-6">
                    <h4 className="title">
                      <Link href={service.href}>{service.title}</Link>
                    </h4>
                    <div className="text">{service.desc}</div>

                    <ul className="list-style-three light">
                      {service.list.map((item, idx) => (
                        <li key={idx}>
                          <i className="fal fa-arrow-right"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="btn-box">
                      <Link href={service.href} className="readmore">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="nav-box">
          <button className="swiper-button-prev">
            <span className="icon fal fa-angle-left"></span>
          </button>
          <button className="swiper-button-next">
            <span className="icon fal fa-angle-right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionFour;
