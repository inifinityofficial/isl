"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "How Can Business Consulting Benefit My Company?",
        answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder text.",
    },
    {
        question: "What Are the Costs of Your Consulting Services?",
        answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder text.",
    },
    {
        question: "How Do You Measure the Success of a Project?",
        answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder text.",
    },
];

const FaqSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="faq-section-three">
        <div className="auto-container">
            <div className="row">
                <div className="image-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                        <figure className="image">
                            <img src="/assets/images/resource/h6-faq.jpg" alt="FAQ Image" />
                        </figure>
                        <div className="icon-36 bounce-y"></div>
                        <div className="icon-45 bounce-x"></div>
                        <div className="icon-46 bounce-y"></div>
                    </div>
                </div>
                <div className="content-column col-lg-7 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="200ms">
                    <div className="inner-column">
                        <div className="sec-title">
                            <div className="sub-title">faqs</div>
                            <h2 className="text-reveal-anim">frequently ask question</h2>
                            <div className="text">
                            While Google Ads is a highly effective advertising platform,
                            it's essential to <br />
                            explore other channels to maximize your ad reach and impact.
                            </div>
                        </div>
                        <ul className="accordion-box-three">
                            {faqs.map((faq, index) => (
                            <li
                                className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                                key={index}>
                                <div
                                className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleAccordion(index)}>
                                {faq.question}
                                <i className="icon fas fa-angle-right"></i>
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
            </div>
        </div>
    </section>
  );
};

export default FaqSection;
