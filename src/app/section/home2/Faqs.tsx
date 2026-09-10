'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What is business consulting?',
    answer:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the',
  },
  {
    question: 'What do business consultants do?',
    answer:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the',
  },
  {
    question: 'Why do companies hire business consultants?',
    answer:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the',
  },
  {
    question: 'How much do business consultants charge?',
    answer:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the',
  },
];

const FaqSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="shape-17" />
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="200ms">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">our faqs</div>
                <h2 className="text-reveal-anim">
                  Empowering Growth <br /> with Innovation
                </h2>
              </div>
              {/* Accordion Box */}
              <ul className="accordion-box">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                    <div
                      className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}>
                      {faq.question}
                      <i className="icon fa fa-plus" />
                    </div>
                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
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
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image bounce-x">
                <Image
                  src="/assets/images/resource/faq1-1.png"
                  alt="FAQ Illustration"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </figure>
              <div className="icon-20 bounce-y" />
              <div className="icon-21 bounce-x" />
              <div className="icon-22" />
              <div className="icon-23" />
              <div className="icon-24 zoom-one" />
              <div className="icon-25 zoom-one" />
              <div className="shape-18 zoom-one" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;