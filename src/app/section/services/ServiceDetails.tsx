"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceList = [
  "Web Development",
  "Businesses Solutions",
  "Digital Marketing",
  "Influencer Marketing",
  "Project Management",
  "Analytics & Report",
];

const faqs = [
  {
    question: "Can a digital marketing agency help small businesses?",
    answer:
      "No problem. Agencies can work alongside your team to provide extra support, specialized skills, or help with scaling campaigns. Yes, some digital marketing agencies also offer brand development services—like messaging, tone of voice, visual identity, and competitive positioning and setting up tracking and tools.",
  },
  {
    question: "What if my business already has an internal marketing team?",
    answer:
      "No problem. Agencies can work alongside your team to provide extra support, specialized skills, or help with scaling campaigns. Yes, some digital marketing agencies also offer brand development services—like messaging, tone of voice, visual identity, and competitive positioning and setting up tracking and tools.",
  },
  {
    question: "How do you stay updated with digital marketing trends?",
    answer:
      "No problem. Agencies can work alongside your team to provide extra support, specialized skills, or help with scaling campaigns. Yes, some digital marketing agencies also offer brand development services—like messaging, tone of voice, visual identity, and competitive positioning and setting up tracking and tools.",
  },
  {
    question: "Do you offer custom digital marketing strategies?",
    answer:
      "No problem. Agencies can work alongside your team to provide extra support, specialized skills, or help with scaling campaigns. Yes, some digital marketing agencies also offer brand development services—like messaging, tone of voice, visual identity, and competitive positioning and setting up tracking and tools.",
  },
  {
    question: "Will I receive regular updates or reports?",
    answer:
      "No problem. Agencies can work alongside your team to provide extra support, specialized skills, or help with scaling campaigns. Yes, some digital marketing agencies also offer brand development services—like messaging, tone of voice, visual identity, and competitive positioning and setting up tracking and tools.",
  },
];

const ServiceDetailsSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="service-details-section">
      <div className="auto-container">
        <div className="row">
          {/* Sidebar */}
          <div className="sidebar-column col-lg-4 col-md-12">
            <div className="widget-sidber">
              <h4 className="title">Service List</h4>
              <div className="widget-category">
                <ul>
                  {serviceList.map((item, index) => (
                    <li key={index}>
                      <Link href="/page-service-details">
                        {item}
                        <i className="icon fas fa-angle-right"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-sidber-box mt-4">
              <div className="inner-contact-box">
                <h4 className="title">+123 (4567) 890</h4>
                <h6 className="title2">Address</h6>
                <p className="contact-text">4517 Washington Ave. Manchester,</p>
                <p className="contact-text">Kentucky 39495</p>
              </div>
              <div className="inner-contact-box">
                <h6 className="title2">Email</h6>
                <p className="contact-text">contact@infinitysoftwarelabs.com</p>
              </div>
              <ul className="social-icon-four upper2">
                <li>
                  <Link href="https://www.linkedin.com/company/infinity-software-labs-official/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/infinity-software-labs-official/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="contents-column col-lg-8 col-md-12">
            <div className="service-content">
              <h3 className="title">Digital Marketing Agency</h3>
              <p className="service-desc">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system...
              </p>
              <p className="service-desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores...
              </p>
            </div>

            <div className="image-box mt-4">
              <figure className="image">
                <Link href="/page-service-details">
                  <Image
                    src="/assets/images/resource/ser-details.jpg"
                    alt="Service Details"
                    width={770}
                    height={480}
                  />
                </Link>
              </figure>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">What We Provide</h3>
            </div>
            <div className="expert-desc">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle"></i> Results-focused online
                    marketing agency
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Integrated digital
                    marketing team
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Data-driven marketing
                    agency
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle"></i> Next-level analytics
                    and detailed reports
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Marketing services for
                    the digital age
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Strategic digital
                    marketing offerings
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="200ms">
              <div className="inner-column">
              <div className="sec-title pt-40">
                <h2 className="text-reveal-anim">Frequently Asked Questions</h2>
              </div>

              <ul className="accordion-box-three">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.question}
                      <i className="icon fas fa-angle-right"></i>
                    </div>
                    <div
                      className={`acc-content ${
                        activeIndex === index ? "current" : ""
                      }`}
                    >
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
