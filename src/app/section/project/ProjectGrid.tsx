"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projectSlidesOne = [
  { img: "/assets/images/resource/project2-1.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-2.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-3.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-4.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-1.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-2.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-3.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2-4.jpg", title: "Future Management Development" },
];

const projectSlidesTwo = [
  { img: "/assets/images/resource/project2.5.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.6.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.7.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.8.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.5.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.6.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.7.jpg", title: "Future Management Development" },
  { img: "/assets/images/resource/project2.8.jpg", title: "Future Management Development" },
];

const ProjectSectionFive: React.FC = (): JSX.Element => {
  return (
    <section className="project-section-five">
      <div className="auto-container"></div>
      <div className="outer-box">
        {/* First Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="project-swiper-two mb-10"
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {projectSlidesOne.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-block-four mb-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-project-details">
                        <img src={item.img} alt={item.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="btn-box">
                      <Link href="/page-project-details" className="readmore">
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h4 className="title">
                      <Link href="/page-project-details">{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, reverseDirection: true, disableOnInteraction: false }}
          className="project-swiper-two mt-10"
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {projectSlidesTwo.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-block-four">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-project-details">
                        <img src={item.img} alt={item.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="btn-box">
                      <Link href="/page-project-details" className="readmore">
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h4 className="title">
                      <Link href="/page-project-details">{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSectionFive;
