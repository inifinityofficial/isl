"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    image: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
  },
  {
    title: "Web Development",
    image: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
  },
  {
    title: "Digital Marketing",
    image: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
  },
  {
    title: "UI/UX Design",
    image: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
  },
  {
    title: "App Development",
    image: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
  },
  {
    title: "SEO Optimization",
    image: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
  },
];

const ServiceSection: React.FC = (): JSX.Element => {
  return (
    <section className="service-section">
      <div className="shape-3"></div>
      <div className="shape-2"></div>
      <div className="auto-container">
        <div className="outer-box relative">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: ".service-next",
              prevEl: ".service-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
            className="service-swiper"
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-block mb-30">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-service-details">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={260}
                          />
                        </Link>
                      </figure>
                      <div className="icon-box">
                        <i className={`icon ${item.icon}`}></i>
                      </div>
                    </div>
                    <div className="content-box">
                      <h4 className="title">
                        <Link href="/page-service-details">{item.title}</Link>
                      </h4>
                      <div className="text">
                        There are many variations of passages of Lorem Ipsum
                        available form.
                      </div>
                      <ul className="list-style-three light">
                        <li>
                          <i className="fal fa-arrow-right"></i> Fully Responsive
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> Creativity in
                          Designs
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> SEO Optimized
                          Content
                        </li>
                      </ul>
                      <div className="btn-box">
                        <Link href="/page-service-details" className="readmore">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="nav-box flex justify-center gap-4 mt-6">
            <div className="swiper-button-prev service-prev cursor-pointer">
              <span className="icon fal fa-long-arrow-left"></span>
            </div>
            <div className="swiper-button-next service-next cursor-pointer">
              <span className="icon fal fa-long-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
