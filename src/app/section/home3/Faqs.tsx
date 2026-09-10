"use client";
import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Ensure Business Continuity",
    answer: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
  },
  {
    question: "Browser Safety & Protection",
    answer: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
  },
  {
    question: "Cutting-Edge IT Solutions",
    answer: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
  },
  {
    question: "Expert Guidance & Assistance",
    answer: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team",
  },
];

const FaqSectionTwo: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section-two">
      <div className="bg bg-pattern-10"></div>
      <div className="icon-19 bounce-x"></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="200ms">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">BUSINESS STRATEGY</div>
                <h2 className="text-reveal-anim">
                  Driving Success Through <br /> Tailored Solutions and <br /> Proven Expertise.
                </h2>
              </div>
              {/* Accordion Box */}
              <ul className="accordion-box-two">
                {faqs.map((faq, index) => (
                  <li key={index} className={`accordion block ${activeIndex === index ? "active-block" : ""}`}>
                    <div className={`acc-btn ${activeIndex === index ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
                      {faq.question}
                      <i className="icon fa-solid fa-angle-right"></i>
                    </div>
                    <div className={`acc-content ${activeIndex === index ? "current" : ""}`}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  src="/assets/images/resource/h3.png"
                  alt="FAQ Illustration"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </figure>
              <div className="exp-box bounce-x wow fadeInUp" data-wow-delay="300ms">
                <i className="icon flaticon-recommend"></i>
                <div className="cat">GROW BUSINESS</div>
                <h4 className="title">
                  We Help Your Business <br /> To Become More <br /> Stronger
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSectionTwo;
