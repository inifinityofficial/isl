'use client';
import * as React from 'react';
import { useState } from 'react';
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

const BenefitSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="benefit-section style-one">
      <div className="bg bg-pattern-5" />
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div
            className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInLeft"
            data-wow-delay="200ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">our faqs</div>
                <h2 className="text-reveal-anim">
                  Empowering Growth <br /> with Innovation
                </h2>
              </div>
              <ul className="accordion-box style-three">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? 'active-block' : ''
                    }`}
                  >
                    <div
                      className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`faq-content-${index}`}
                    >
                      {faq.question}
                      <i className="icon fa fa-plus" />
                    </div>
                    <div
                      id={`faq-content-${index}`}
                      className={`acc-content ${activeIndex === index ? 'current' : ''}`}
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

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  src="/assets/images/resource/benefit1-1.jpg"
                  alt="Benefit"
                  width={540}
                  height={600}
                  priority
                />
              </figure>
              <div className="exp-box bounce-x wow fadeInUp" data-wow-delay="300ms">
                <i className="icon flaticon-recommend" />
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

export default BenefitSection;
