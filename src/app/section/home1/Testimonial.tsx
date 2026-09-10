"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    name: "Cameron Williamson",
    role: "Business Owner",
    image: "testi-author-1.png",
  },
  {
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    name: "Anthony Malison",
    role: "Graphic Designer",
    image: "testi-author-2.jpg",
  },
  {
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    name: "Charles Charloth",
    role: "Brand Owner",
    image: "testi-author-3.jpg",
  },
];

const TestimonialSection: React.FC = (): JSX.Element => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="shape-8"></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Testimonials</div>
                <h2 className="text-reveal-anim">
                  What They’re Talking <br /> About Company?
                </h2>
              </div>
              <div className="outer-box">
                <Swiper
                  modules={[Navigation]}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop
                  className="testi-swiper"
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="icon-quote"></div>
                          <div className="text">{item.text}</div>
                          <div className="author-box">
                            <h6 className="name">{item.name}</h6>
                            <div className="designation">{item.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-navs-box">
                  <div className="image-box">
                    {testimonials.map((item, index) => (
                      <div
                        key={index}
                        className={`author-image ${
                          index === activeIndex ? "active" : ""
                        }`}
                        data-index={index}
                      >
                        <Image
                          src={`/assets/images/resource/${item.image}`}
                          alt={item.name}
                          width={80}
                          height={90}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="shape-6"></div>
                        <div className="shape-7"></div>
                      </div>
                    ))}
                  </div>
                  <div className="nav-box">
                    <div className="swiper-button-prev" ref={prevRef}>
                      <span className="icon fal fa-long-arrow-left"></span>
                    </div>
                    <div className="swiper-button-next" ref={nextRef}>
                      <span className="icon fal fa-long-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image bounce-x">
                <Image
                  src="/assets/images/resource/testi1-1.png"
                  alt="Decorative"
                  width={438}
                  height={696}
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <div className="icon-10 bounce-x"></div>
              <div className="icon-11 bounce-y"></div>
              <div className="icon-12 bounce-x"></div>
              <div className="icon-13 zoom-one"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
