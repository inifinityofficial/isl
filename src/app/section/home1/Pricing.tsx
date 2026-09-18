import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    icon: "flaticon-technology",
    price: "Strategy",
    title: "Discovery & Planning",
    description:
      "We define the solution, technical direction and user goals before the build begins.",
    features: [
      "Business review",
      "Requirements mapping",
      "Scope clarity",
    ],
    delay: "0ms",
  },
  {
    icon: "flaticon-digital-services",
    price: "Design",
    title: "UX & Interface Design",
    description:
      "We shape the visual and interaction system so the experience feels clear and persuasive.",
    features: [
      "User flows",
      "Responsive layouts",
      "Content structure",
    ],
    delay: "300ms",
  },
  {
    icon: "flaticon-laptop",
    price: "Build",
    title: "Development & Launch",
    description:
      "We implement the build, integrate systems, test performance and support a clean launch.",
    features: [
      "Custom development",
      "Performance checks",
      "Launch support",
    ],
    delay: "600ms",
  },
];

const PricingSection: React.FC = (): JSX.Element => {
  return (
    <section className="pricing-section">
      <div className="shape-9"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">How we work</div>
          <h2 className="text-reveal-anim">
            A straightforward process from strategy to launch
          </h2>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-block col-lg-4 col-md-6 col-sm-12"
              data-wow-delay={plan.delay}
            >
              <div className="inner-box">
                <i className={`icon ${plan.icon}`}></i>
                <div className="content">
                  <h4 className="time">{plan.price}</h4>
                  <h4 className="title">{plan.title}</h4>
                  <div className="text">{plan.description}</div>
                  <ul className="list-style-three">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fal fa-arrow-right"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="btn-box">
                    <Link href="/page-contact" className="theme-btn-main">
                      <span className="theme-btn-arrow-left">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                      <span className="theme-btn">Discover More</span>
                      <span className="theme-btn-arrow-right">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
