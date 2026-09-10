"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const BannerSectionThree: React.FC = (): JSX.Element => {
  const slides = [
    {
      title: "Expand Business Digital",
      highlight: "Agency",
      subtitle: "Your Digital Agency Partner",
      text: "We’re a team of expert designers, web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites",
      image: "/assets/images/banner/man.png",
    },
    {
      title: "Expand Business Digital",
      highlight: "Agency",
      subtitle: "Your Digital Agency Partner",
      text: "We’re a team of expert designers, web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites",
      image: "/assets/images/banner/man.png",
    },
  ];

  return (
    <section className="banner-section-three">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        loop
        className="banner-swiper-three">
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="banner-slide">
            <div className="outer-box">
              <div className="inner-box">
                <div className="bg bg-pattern-20"></div>
                <div className="row">
                  {/* Content Column */}
                  <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1 className="title animate-2">
                        {slide.title} <span className="color">{slide.highlight}</span>
                      </h1>
                      <h2 className="title2 animate-2">{slide.subtitle}</h2>
                      <div className="text animate-3">{slide.text}</div>

                      <div className="btn-box animate-4">
                        <Link href="/page-contact" className="theme-btn-main">
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
                      <div className="icon-33 bounce-y"></div>
                      <div className="icon-34 bounce-z"></div>
                      <div className="icon-35 bounce-y"></div>
                      <div className="icon-36 bounce-y"></div>
                      <div className="icon-lines zoom-in"></div>

                      <figure className="image animate-4 bounce-x">
                        <Image src={slide.image} alt="Banner" width={450} height={500} priority />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSectionThree;