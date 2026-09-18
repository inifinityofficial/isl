"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Blog Data
const blogPosts = [
  {
    img: "/assets/images/resource/news1-1.jpg",
    date: "20",
    month: "Jan",
    comments: 2,
    title: "How to choose the right web development partner for your business",
  },
  {
    img: "/assets/images/resource/news1-2.jpg",
    date: "26",
    month: "Jan",
    comments: 6,
    title: "Why AI automation works best when it follows clear business rules",
  },
  {
    img: "/assets/images/resource/news1-3.jpg",
    date: "30",
    month: "Jan",
    comments: 4,
    title: "What a strong digital strategy should look like for a modern brand",
  },
   {
    img: "/assets/images/resource/news1-1.jpg",
    date: "20",
    month: "Jan",
    comments: 2,
    title: "Why website performance matters for trust, SEO and conversion",
  },
  {
    img: "/assets/images/resource/news1-2.jpg",
    date: "26",
    month: "Jan",
    comments: 6,
    title: "Business software should reduce friction, not create more of it",
  },
];

const NewsSection: React.FC = (): JSX.Element => {
  const navPrevRef = useRef<HTMLDivElement | null>(null);
  const navNextRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="news-section">
      <div className="shape-12"></div>
      <div className="shape-13"></div>
      <div className="bg bg-pattern-6"></div>
      <div className="auto-container">
        <div className="row">
          {/* Left Content */}
          <div className="content-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Insights</div>
                <h2 className="text-reveal-anim">
                  Practical thinking on web, software and digital growth
                </h2>
              </div>
              <div className="outer-box">
                <div className="nav-box">
                  <div className="swiper-button-prev" ref={navPrevRef}>
                    <span className="icon fal fa-long-arrow-left"></span>
                  </div>
                  <div className="swiper-button-next" ref={navNextRef}>
                    <span className="icon fal fa-long-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Column */}
          <div className="blocks-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                loop
                navigation={{
                  prevEl: navPrevRef.current,
                  nextEl: navNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // Attach navigation refs
                  // @ts-ignore
                  swiper.params.navigation.prevEl = navPrevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = navNextRef.current;
                }}
                className="news-swiper-two"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {blogPosts.map((post, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="news-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-blog-details">
                              <img src={post.img} alt={post.title} />
                            </Link>
                          </figure>
                          <div className="date-box">
                            <div className="date">{post.date}</div>
                            <div className="month">{post.month}</div>
                          </div>
                        </div>
                        <div className="content-box">
                          <div className="content">
                            <ul className="post-meta">
                              <li>
                                <i className="icon fa fa-comment"></i>{" "}
                                {post.comments} Comment
                              </li>
                            </ul>
                            <h4 className="title">
                              <Link href="/page-blog-details">{post.title}</Link>
                            </h4>
                            <div className="text">
                              Relevant guidance on building stronger digital systems, better user experiences and smarter business workflows.
                            </div>
                          </div>
                          <div className="btn-box">
                            <Link href="/page-blog-details" className="text">
                              Read More
                            </Link>
                            <Link href="/page-blog-details" className="readmore">
                              <i className="fa fa-arrow-right"></i>
                            </Link>
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
    </section>
  );
};

export default NewsSection;
