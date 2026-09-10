"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    img: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
    title: "Web Design",
    text: "There are many variation of passages of Lorem Ipsum available form.",
  },
  {
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "Web Development",
    text: "There are many variation of passages of Lorem Ipsum available form.",
  },
  {
    img: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
    title: "Digital Marketing",
    text: "There are many variation of passages of Lorem Ipsum available form.",
  },
  {
    img: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
    title: "Web Design",
    text: "There are many variation of passages of Lorem Ipsum available form.",
  },
  {
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "Web Development",
    text: "There are many variation of passages of Lorem Ipsum available form.",
  },
];

const ServicesSection: React.FC = (): JSX.Element => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="service-section">
      <div className="bg bg-pattern-2"></div>
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center">
          <div className="sub-title">Our Services</div>
          <h2 className="text-reveal-anim">
            Services We’re <br /> Offering to Customers
          </h2>
        </div>
        <div className="outer-box">
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop
            autoplay={{ delay: 3000 }}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            breakpoints={{
                320: { slidesPerView: 1 },
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            }}
            >

            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-block">
                  <div className="inner-box">
                    {/* Image */}
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-service-details">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={370}
                            height={250}
                            style={{ objectFit: "cover" }}
                            />
                        </Link>
                      </figure>
                      <div className="icon-box">
                        <i className={`icon ${item.icon}`} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="content-box">
                      <h4 className="title">
                        <Link href="/page-service-details">{item.title}</Link>
                      </h4>
                      <div className="text">{item.text}</div>
                      <ul className="list-style-three light">
                        <li>
                          <i className="fal fa-arrow-right"></i> Fully Responsive
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> Creativity in
                          Designs
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> SEO Optimized
                          Content
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/page-about" className="readmore">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="nav-box">
            <div className="swiper-button-prev" ref={prevRef}>
              <span className="icon fal fa-long-arrow-left"></span>
            </div>
            <div className="swiper-button-next" ref={nextRef}>
              <span className="icon fal fa-long-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
