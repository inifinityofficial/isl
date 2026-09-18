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
    title: "Web Development",
    href: "/services/web-development",
    text: "Modern, responsive business websites designed to build credibility, improve conversion, and support long-term growth.",
  },
  {
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    text: "Tailored software systems that support operations, workflows, and product requirements without forcing business workarounds.",
  },
  {
    img: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-promotion",
    title: "Web Application Development",
    href: "/services/web-application-development",
    text: "Interactive business tools, portals and dashboards built around real processes, user journeys and internal needs.",
  },
  {
    img: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-laptop",
    title: "AI Software Solutions",
    href: "/services/ai-software-solutions",
    text: "AI-powered systems, chatbots and workflow automation designed to improve productivity and customer experience.",
  },
  {
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-health-check",
    title: "SEO & Digital Growth",
    href: "/services/seo-digital-marketing",
    text: "Performance-focused digital strategy that improves visibility, user experience and opportunities for business growth.",
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
                        <Link href={item.href}>
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
                        <Link href={item.href}>{item.title}</Link>
                      </h4>
                      <div className="text">{item.text}</div>
                      <ul className="list-style-three light">
                        <li>
                          <i className="fal fa-arrow-right"></i> Business-focused strategy
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> Clean user experience
                        </li>
                        <li>
                          <i className="fal fa-arrow-right"></i> Scalable implementation
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href={item.href} className="readmore">
                          Learn more
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
