"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const BannerSectionFour: React.FC = (): JSX.Element => {
  const slides = [
    {
      subtitle: "Business",
      title: (
        <>
          Grow Your Business <br /> Bigger & <span className="color">Better</span>
        </>
      ),
      text: (
        <>
          An award-winning CEO agency with disciplines in digital marketing design and
          <br /> website development. Focused on understanding you.
        </>
      ),
      btnText: "Discover More",
      btnLink: "/page-contact",
    },
    {
      subtitle: "Business",
      title: (
        <>
          Grow Your Business <br /> Bigger & <span className="color">Better</span>
        </>
      ),
      text: (
        <>
          An award-winning CEO agency with disciplines in digital marketing design and
          <br /> website development. Focused on understanding you.
        </>
      ),
      btnText: "Discover More",
      btnLink: "/page-contact",
    },
  ];

  return (
    <section className="banner-section-four relative">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        effect="fade"
        className="banner-swiper-four"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <div className="outer-box">
                <div className="inner-box">
                  <div className="bg bg-pattern-15"></div>

                  <div className="row">
                    <div className="content-column col-lg-12 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <h1 className="title-sp animate-2">{slide.subtitle}</h1>
                        <h1 className="title animate-2">{slide.title}</h1>
                        <div className="text animate-3">{slide.text}</div>

                        <div className="btn-box animate-4">
                          <Link href={slide.btnLink} className="theme-btn-main">
                            <span className="theme-btn-arrow-left">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                            <span className="theme-btn">{slide.btnText}</span>
                            <span className="theme-btn-arrow-right">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
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

export default BannerSectionFour;
