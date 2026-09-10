"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Project data
const projects = [
  {
    id: 1,
    category: "Cyber Security",
    title: "Revolutionizing Brand Strategy",
    image: "case.jpg",
    link: "/page-project-details",
  },
  {
    id: 2,
    category: "IT Solution",
    title: "Technology and Artificial Maintenance",
    image: "case2.jpg",
    link: "/page-project-details",
  },
  {
    id: 3,
    category: "Business Consultation",
    title: "Business Strategy to Cut Costs by 30%",
    image: "case3.jpg",
    link: "/page-project-details",
  },
  {
    id: 4,
    category: "Digital Agency",
    title: "Transforming Legacy Systems",
    image: "case4.jpg",
    link: "/page-project-details",
  },
  {
    id: 5,
    category: "Cyber Security",
    title: "Revolutionizing Brand Strategy",
    image: "case.jpg",
    link: "/page-project-details",
  },
  {
    id: 6,
    category: "IT Solution",
    title: "Technology and Artificial Maintenance",
    image: "case2.jpg",
    link: "/page-project-details",
  },
  {
    id: 7,
    category: "Business Consultation",
    title: "Business Strategy to Cut Costs by 30%",
    image: "case3.jpg",
    link: "/page-project-details",
  },
  {
    id: 8,
    category: "Digital Agency",
    title: "Transforming Legacy Systems",
    image: "case4.jpg",
    link: "/page-project-details",
  },
];

const swiperOptions = {
  modules: [Navigation, Autoplay],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
};

const ProjectSectionThree: React.FC = (): JSX.Element => {

  return (
    <section className="project-section-three">
      <div className="outer-box relative">
        <div className="bg bg-pattern-9"></div>
        <div className="bg-shape">
          <div className="auto-container">
            <div className="sec-title light">
              <div className="sub-title">Our Projects</div>
              <h2 className="text-reveal-anim">
                Our Recently <br /> Completed Projects
              </h2>
            </div>
          </div>
        </div>

        {/* Project Swiper */}
        <div className="outer-swiper relative">
          <Swiper {...swiperOptions}
            className="project-swiper-three"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="project-block-three">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image block">
                      <Link href={project.link}>
                        <Image
                          src={`/assets/images/resource/${project.image}`}
                          alt={project.title}
                          width={480}
                          height={488}
                        />
                      </Link>
                    </figure>
                  </div>

                  <div className="btn-box">
                    <Link href={project.link} className="readmore">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>

                  <div className="content-box">
                    <h5 className="sub-title">{project.category}</h5>
                    <h4 className="title text-lg">
                      <Link href={project.link}>{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation */}
          <div className="nav-box">
            <div className="swiper-button-prev">
              <span className="icon fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
              <span className="icon fal fa-angle-right"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionThree;
