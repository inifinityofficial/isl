"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';

const BannerSectionTwo: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-two">
      <div className="outer-box">
        <div className="bg bg-pattern-8" />
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
          className="banner-swiper-two">
          {[1, 2].map((slide, index) => (
            <SwiperSlide key={index} className="banner-slide">
              <div className="icon-30 bounce-y" />
              <div className="icon-31 bounce-x" />
              <div className="row">
                {/* Content Column */}
                <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h1 className="title animate-2">
                      AI Marketing <span className="bold">& Smart Solution</span>
                    </h1>
                    <div className="text animate-3">
                      An award-winning CEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.
                    </div>
                    <div className="btn-box animate-4">
                      <Link href="/page-contact" className="theme-btn-main">
                        <span className="theme-btn-arrow-left">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="theme-btn">Discover More</span>
                        <span className="theme-btn-arrow-right">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column animate-5">
                    <figure className="image">
                      <Image
                        src="/assets/images/banner/2-1.jpg"
                        alt="Banner"
                        width={500}
                        height={500}
                        priority
                      />
                    </figure>
                    <div className="shape-24" />
                    <div className="video-outer-box animate__animated animate__fadeInUp" style={{ animationDelay: '300ms' }}>
                      <svg viewBox="0 0 100 100" width="100" height="100" className="circular-text">
                        <defs>
                          <path
                            id={`circle${slide}`}
                            d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0"
                          />
                        </defs>
                        <text>
                          <textPath xlinkHref={`#circle${slide}`}>
                            PLAY INTRO VIDEO - PLAY INTRO VIDEO
                          </textPath>
                        </text>
                      </svg>
                      <div className="video-box">
                        <a
                          onClick={() => setOpen(true)}
                          className="play-btn"
                          data-fancybox="gallery"
                          data-caption=""
                          aria-label="Play Intro Video"
                        >
                          <i className="icon fa fa-play" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Arrows */}
        <div className="nav-box-outer">
          <div className="nav-box">
            <div className="swiper-button-prev">
              <span className="icon fa fa-angle-left" />
            </div>
            <div className="swiper-button-next">
              <span className="icon fa fa-angle-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default BannerSectionTwo;