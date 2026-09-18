"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const BannerSection: React.FC = (): JSX.Element => {
  return (
    <section className="banner-section">
      <Swiper
        className="banner-swiper"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {[1].map((slide) => (
          <SwiperSlide key={slide} className="banner-slide">
            <div className="outer-box">
              <div className="inner-box">
                <div className="bg bg-pattern-1"></div>
                <div className="icon-5 bounce-x"></div>
                <div className="row">
                  {/* Content Column */}
                  <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1 className="title animate-2">
                        Web Development Company for
                        <span className="color"> Websites, Apps & AI Solutions</span>
                      </h1>
                      <div className="text animate-3">
                        Infinity Software Labs designs and builds professional websites,
                        custom software, web applications, and AI-powered systems that help
                        businesses operate more efficiently and grow with confidence.
                      </div>
                      <div className="btn-box animate-4">
                        {slide === 1 ? (
                          <Link className="theme-btn-main" href="/page-contact">
                            <span className="theme-btn-arrow-left">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                            <span className="theme-btn">Book a Discovery Call</span>
                            <span className="theme-btn-arrow-right">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </Link>
                        ) : (
                          <>
                            <Link
                              href="/page-contact"
                              className="theme-btn btn-style-one"
                            >
                              <span className="btn-title">Book a Discovery Call</span>
                            </Link>
                            <Link href="/services" className="readmore">
                              <i className="fa fa-arrow-right"></i>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column animate-x">
                      <div className="icon-1 bounce-y"></div>
                      <div className="icon-2 bounce-z"></div>
                      <div className="icon-3 bounce-y"></div>
                      <div className="icon-4 bounce-y"></div>
                      <div className="icon-lines zoom-in"></div>
                      <figure className="image animate-4 bounce-x">
                        <Image
                          src="/assets/images/banner/1.png"
                          alt="Banner"
                          width={600}
                          height={400}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="nav-box">
        <div className="swiper-button-prev">
          <span className="icon fa fa-angle-left"></span>
        </div>
        <div className="swiper-button-next">
          <span className="icon fa fa-angle-right"></span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-box">
        <div className="author-box">
          <div className="author-image-box">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="author-image">
                <Image
                  src={`/assets/images/banner/author-${num}.jpg`}
                  alt={`Project collaborator ${num}`}
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>
          <div className="text">
            Strategy, design, development and support for growing businesses
          </div>
        </div>
        <div className="success-text">
          <div className="text">
            Websites, software, automation and AI-powered experiences
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;