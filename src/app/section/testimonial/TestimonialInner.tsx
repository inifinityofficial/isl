"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsTop = [
  {
    img: "/assets/images/resource/testi-author-4.jpg",
    name: "Cameron Williamson",
    designation: "Web Designer",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author-5.jpg",
    name: "Michael G. Ware",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author-4.jpg",
    name: "Cameron Williamson",
    designation: "Web Designer",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author-5.jpg",
    name: "Michael G. Ware",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
];

const testimonialsBottom = [
  {
    img: "/assets/images/resource/testi-author3.jpg",
    name: "Hajdú Szilveszter",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author-4.jpg",
    name: "Bogdán Norbert",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author3.jpg",
    name: "Hajdú Szilveszter",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
  {
    img: "/assets/images/resource/testi-author-4.jpg",
    name: "Bogdán Norbert",
    designation: "Managing Director",
    text: `"I recently worked with Infinity Software Labs, and I couldn't be happier with the results. From the moment I started working with their team."`,
  },
];

const TestimonialSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="testimonial-section-two pb-120">
      <div className="auto-container">
        <div className="row">
          <div className="swiper-outer">
            {/* === Top Swiper === */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="testi-swiper-four mb-30"
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {testimonialsTop.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-block-two swiper-slide">
                    <div className="inner-box">
                      <div className="shape-19"></div>
                      <div className="content-box">
                        <div className="icon-quote-2"></div>
                        <div className="author-image">
                          <img src={item.img} alt={item.name} />
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

            {/* === Bottom Swiper === */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop
              autoplay={{ delay: 4000, reverseDirection: true }}
              className="testi-swiper-four"
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {testimonialsBottom.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-block-two swiper-slide">
                    <div className="inner-box">
                      <div className="shape-19"></div>
                      <div className="content-box">
                        <div className="icon-quote-2"></div>
                        <div className="author-image">
                          <img src={item.img} alt={item.name} />
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
    </section>
  );
};

export default TestimonialSectionTwo;
