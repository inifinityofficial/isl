"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: "/assets/images/resource/testi-author-4.jpg",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    name: "Cameron Williamson",
    designation: "Web Designer",
  },
  {
    image: "/assets/images/resource/testi-author-5.jpg",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    name: "Michael G. Ware",
    designation: "Managing Director",
  },
  {
    image: "/assets/images/resource/testi-author-4.jpg",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    name: "Cameron Williamson",
    designation: "Web Designer",
  },
  {
    image: "/assets/images/resource/testi-author-5.jpg",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    name: "Michael G. Ware",
    designation: "Managing Director",
  },
];

const TestimonialSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="testimonial-section-two relative">
      <div className="bg bg-pattern-11"></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Testimonials</div>
                <h2 className="text-reveal-anim">
                  What They’re Talking <br /> About Company?
                </h2>
                <div className="text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </div>
              </div>
              <div className="outer-box">
                <div className="nav-box">
                  <div className="swiper-button-prev">
                    <span className="icon fa fa-angle-left"></span>
                  </div>
                  <div className="swiper-button-next">
                    <span className="icon fa fa-angle-right"></span>
                  </div>
                </div>
              </div>
              <div className="icon-26 bounce-x"></div>
            </div>
          </div>

          {/* Blocks Column */}
          <div className="blocks-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="swiper-outer">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
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
                                {[...Array(5)].map((_, i) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionTwo;
