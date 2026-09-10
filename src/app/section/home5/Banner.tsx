"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const BannerSectionFive: React.FC = (): JSX.Element => {
  const slides = [
    {
      subtitle: "WEB BUSINESS SOLUTION",
      title: "Expand and Elevate <br/> Your Business",
      text: "An award-winning agency led by visionary CEOs, specializing in digital marketing, design, and website development — all with a focus on understanding you.",
      phone: "(+0) 012 345 6789",
      imgSrc: "/assets/images/banner/h5.jpg",
    },
    {
      subtitle: "WEB BUSINESS SOLUTION",
      title: "Expand and Elevate <br/> Your Business",
      text: "An award-winning agency led by visionary CEOs, specializing in digital marketing, design, and website development — all with a focus on understanding you.",
      phone: "(+0) 012 345 6789",
      imgSrc: "/assets/images/banner/h5.jpg",
    },
  ];

  return (
    <section className="banner-section-five">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="banner-swiper-five"
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="banner-slide">
            <div className="outer-box">
              <div className="inner-box">
                <div className="bg bg-pattern-19"></div>
                <div className="row">
                  <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h4 className="sub-title">{slide.subtitle}</h4>
                       <h1 className="title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                      <div className="text">{slide.text}</div>
                      <div className="bannar-single-box">
                        <div className="bannar-icon-box">
                          <i className="icon fas fa-phone"></i>
                          <h6 className="title2">
                            Feel free to <br /> Contact with us
                          </h6>
                        </div>
                        <div className="bannar-text">
                          <h5 className="text2">{slide.phone}</h5>
                        </div>
                      </div>
                      <div className="btn-box">
                        <Link className="theme-btn-main" href="/page-contact">
                          <span className="theme-btn-arrow-left">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                          <span className="theme-btn">Discover More</span>
                          <span className="theme-btn-arrow-right">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                    <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column animate-x">
                            <div className="icon-1 bounce-y"></div>
                            <div className="icon-2 bounce-z"></div>
                            <div className="icon-3 bounce-y"></div>
                            <div className="icon-20 bounce-y"></div>
                            <div className="icon-21 bounce-x"></div>
                            <div className="icon-6"></div>
                            <div className="icon-7 bounce-x"></div>
                            <div className="shape-37 bounce-y"></div>
                            <figure className="image animate-4 bounce-x"><img src="/assets/images/banner/h5.jpg" alt="Image"/></figure>
                        </div>
                    </div>
                  <div className="bannar-title">
                    <h1 className="title">AGENCY</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="nav-box">
        <div className="swiper-button-prev">
          <span className="icon fa fa-angle-left"></span>
        </div>
        <div className="swiper-button-next">
          <span className="icon fa fa-angle-right"></span>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionFive;
