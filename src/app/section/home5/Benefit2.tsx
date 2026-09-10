"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Cameron Williamson",
    designation: "Web Designer",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    image: "/assets/images/resource/testi-author-4.jpg",
  },
  {
    name: "Michael G. Ware",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    image: "/assets/images/resource/testi-author-5.jpg",
  },
  {
    name: "Cameron Williamson",
    designation: "Web Designer",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    image: "/assets/images/resource/testi-author-4.jpg",
  },
  {
    name: "Michael G. Ware",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    image: "/assets/images/resource/testi-author-5.jpg",
  },
];

const Benefit: React.FC = (): JSX.Element => {
  return (
    <section className="benefit-section style-two">
      <div className="bg bg-pattern-5"></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="blocks-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-lg-2">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Testimonials</div>
                <h2 className="text-reveal-anim">
                  What They’re Talking <br /> About Company?
                </h2>
              </div>
              <div className="swiper-outer">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".testi-next",
                    prevEl: ".testi-prev",
                  }}
                  loop
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="testi-swiper-two"
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-block-two">
                        <div className="inner-box">
                          <div className="shape-19"></div>
                          <div className="content-box">
                            <div className="icon-quote-2"></div>

                            <div className="author-image">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-full"
                              />
                            </div>
                            <div className="text">{item.text}</div>
                            <div className="author-box">
                              <div className="author-info">
                                <h6 className="name">{item.name}</h6>
                                <div className="designation">
                                  {item.designation}
                                </div>
                              </div>
                              <ul className="rating">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <li key={i}>
                                      <i className="fa fa-star"></i>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Swiper Navigation */}
              <div className="outer-box">
                <div className="nav-box">
                  <div className="swiper-button-prev testi-prev">
                    <span className="icon fa fa-angle-left"></span>
                  </div>
                  <div className="swiper-button-next testi-next">
                    <span className="icon fa fa-angle-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image reveal">
                <img
                  src="/assets/images/resource/testi-img.jpg"
                  alt="Testimonials"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
