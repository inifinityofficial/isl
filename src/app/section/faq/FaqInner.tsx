"use client";
import React, { useState, memo } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "01. How do you determine the right strategy for my business?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "02. Can you work with my existing team or other vendors?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "03. Do I need all digital marketing services, or just a few?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "04. Do you provide custom reporting dashboards?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "05. Can you redesign or build our website?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "06. How often do we communicate or meet?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

const FaqSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section style-faq">
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="200ms"
          >
            <div className="inner-column">
              <ul className="accordion-box-four">
                {faqData.map((item, index) => (
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
                      {item.question}
                      <i className="icon fa fa-plus"></i>
                    </div>
                    <div
                      className={`acc-content ${
                        activeIndex === index ? "current" : ""
                      }`}
                    >
                      <div className="content">
                        <div className="text">{item.answer}</div>
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

export default memo(FaqSection);
