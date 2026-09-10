"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    img: "/assets/images/resource/testi-author-4.jpg",
    name: "Cameron Williamson",
    role: "Web Designer",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    rating: 5,
  },
  {
    img: "/assets/images/resource/testi-author-5.jpg",
    name: "Michael G. Ware",
    role: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
    rating: 5,
  },
];

const TestimonialsSection: React.FC = (): JSX.Element => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="testimonial-section-two">
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
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable.
                </div>
              </div>
              <div className="outer-box">
                <div className="nav-box">
                  <div className="swiper-button-prev" ref={prevRef}>
                    <span className="icon fa fa-angle-left"></span>
                  </div>
                  <div className="swiper-button-next" ref={nextRef}>
                    <span className="icon fa fa-angle-right"></span>
                  </div>
                </div>
              </div>
              <div className="icon-26 bounce-x"></div>
            </div>
          </div>
          {/* Slider Column */}
          <div className="blocks-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="swiper-outer">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  loop
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                  }}
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
                              <img src={item.img} alt="Author" />
                            </div>
                            <div className="text">{item.text}</div>
                            <div className="author-box">
                              <div className="author-info">
                                <h6 className="name">{item.name}</h6>
                                <div className="designation">
                                  {item.role}
                                </div>
                              </div>
                              <ul className="rating">
                                {Array.from({ length: item.rating }).map((_, i) => (
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

export default TestimonialsSection;