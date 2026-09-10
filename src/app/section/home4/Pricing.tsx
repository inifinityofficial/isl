import React from "react";
import Link from 'next/link';

type PricingPlan = {
  iconClass: string;
  price: string;
  title: string;
  description: string;
  features: string[];
  delay?: string;
};

const plans: PricingPlan[] = [
  {
    iconClass: 'flaticon-technology',
    price: '29/Month',
    title: 'Basic Plan',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content'],
  },
  {
    iconClass: 'flaticon-digital-services',
    price: '39/Month',
    title: 'Standard Plan',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content'],
    delay: '300ms',
  },
  {
    iconClass: 'flaticon-laptop',
    price: '49/Month',
    title: 'Premium Plan',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content'],
    delay: '600ms',
  },
];

const PricingSection: React.FC = (): JSX.Element => {
  return (
    <section className="pricing-section style-one">
      <div className="bg bg-pattern-17" />
      <div className="shape-11" />
      <div className="shape-32" />
      <div className="auto-container">
        <div className="sec-title light text-center">
          <div className="sub-title">our plans</div>
          <h2 className="text-reveal-anim">
            Make Brand Pricing <br /> Plans Identities
          </h2>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={plan.delay}
            >
              <div className="inner-box">
                <i className={`icon ${plan.iconClass}`} />
                <div className="content">
                  <h4 className="time">{plan.price}</h4>
                  <h4 className="title">{plan.title}</h4>
                  <div className="text">{plan.description}</div>
                  <ul className="list-style-three">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fal fa-arrow-right" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="btn-box">
                    <Link className="theme-btn-main" href="/page-contact">
                      <span className="theme-btn-arrow-left">
                        <i className="fa fa-arrow-right" />
                      </span>
                      <span className="theme-btn">Discover More</span>
                      <span className="theme-btn-arrow-right">
                        <i className="fa fa-arrow-right" />
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
