'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  { id: 1, image: '/assets/images/resource/project2-1.jpg', title: 'Future Management Development' },
  { id: 2, image: '/assets/images/resource/project2-2.jpg', title: 'Future Management Development' },
  { id: 3, image: '/assets/images/resource/project2-3.jpg', title: 'Future Management Development' },
  { id: 4, image: '/assets/images/resource/project2-4.jpg', title: 'Future Management Development' },
  { id: 5, image: '/assets/images/resource/project2-1.jpg', title: 'Future Management Development' },
  { id: 6, image: '/assets/images/resource/project2-2.jpg', title: 'Future Management Development' },
  { id: 7, image: '/assets/images/resource/project2-3.jpg', title: 'Future Management Development' },
  { id: 8, image: '/assets/images/resource/project2-4.jpg', title: 'Future Management Development' },
];

const ProjectSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="project-section-two">
      <div className="bg bg-pattern-9" />
      <div className="auto-container">
        <div className="sec-title light">
          <div className="sub-title">Our Projects</div>
          <h2 className="text-reveal-anim">
            Our Recently <br /> Completed Projects
          </h2>
        </div>
      </div>

      <div className="outer-box">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="project-swiper-two"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-block-two">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        loading="lazy"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <div className="btn-box">
                    <Link href="/page-project-details" className="readmore" aria-label="Read more">
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <h4 className="title">
                    <Link href="/page-project-details">{project.title}</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="nav-box">
          <div className="swiper-button-prev">
            <span className="icon fal fa-angle-left" />
          </div>
          <div className="swiper-button-next">
            <span className="icon fal fa-angle-right" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSectionTwo;