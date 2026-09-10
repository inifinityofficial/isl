'use client';
import React from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  { id: 1, image: '/assets/images/resource/project1-1.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 2, image: '/assets/images/resource/project1-2.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 3, image: '/assets/images/resource/project1-3.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 4, image: '/assets/images/resource/project1-4.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 5, image: '/assets/images/resource/project1-5.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 6, image: '/assets/images/resource/project1-1.jpg', category: 'marketing', title: 'Future Management Development' },
  { id: 7, image: '/assets/images/resource/project1-2.jpg', category: 'marketing', title: 'Future Management Development' },
];

const ProjectSection: React.FC = (): JSX.Element => {
  return (
    <section className="project-section style-one">
        <div className="shape-15" />
        <div className="shape-9" />
        <div className="sec-title text-center">
            <div className="sub-title">Our Work</div>
            <h2 className="text-reveal-anim">
            Our Recently <br /> Completed Projects
            </h2>
        </div>
        <div className="outer-box">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                grabCursor
                loop
                centeredSlides
                spaceBetween={10}
                navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                }}
                effect="coverflow"
                coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 10,
                modifier: 1.5,
                slideShadows: true,
                }}
                breakpoints={{
                1600: { slidesPerView: 5 },
                1200: { slidesPerView: 4 },
                768: { slidesPerView: 2 },
                580: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
                }}
                className="project-swiper2"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className="project-block swiper-slide">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image">
                                <Link href="/page-project-details">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={540}
                                    height={400}
                                    priority
                                />
                                </Link>
                            </figure>
                            </div>
                            <div className="content-box">
                            <div className="cat-box">
                                <div className="cat">{project.category}</div>
                            </div>
                            <h4 className="title">{project.title}</h4>
                            </div>
                            <Link href="/page-project-details" className="readmore" aria-label={`Read more about ${project.title}`}>
                            <i className="fa fa-arrow-up-right" />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className="nav-box">
            <div className="swiper-button-prev">
            <span className="icon fa-solid fa-arrow-left" />
            </div>
            <div className="swiper-button-next">
            <span className="icon fa-solid fa-arrow-right" />
            </div>
        </div>
    </section>
  );
};

export default ProjectSection;

