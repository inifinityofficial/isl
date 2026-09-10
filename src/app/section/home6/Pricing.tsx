import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "29/Month",
    icon: "flaticon-technology",
    description: "There are many variation of passages of Lorem Ipsum available form.",
    features: ["Fully Responsive", "Creativity in Designs", "SEO Optimized Content"],
    animationDelay: "0ms",
  },
  {
    title: "Standard Plan",
    price: "39/Month",
    icon: "flaticon-digital-services",
    description: "There are many variation of passages of Lorem Ipsum available form.",
    features: ["Fully Responsive", "Creativity in Designs", "SEO Optimized Content"],
    animationDelay: "300ms",
  },
  {
    title: "Premium Plan",
    price: "49/Month",
    icon: "flaticon-laptop",
    description: "There are many variation of passages of Lorem Ipsum available form.",
    features: ["Fully Responsive", "Creativity in Designs", "SEO Optimized Content"],
    animationDelay: "600ms",
  },
];

const PricingSection: React.FC = (): JSX.Element => {
  return (
    <section className="pricing-section">
        <div className="shape-9"></div>
        <div className="auto-container">
            <div className="sec-title text-center">
            <div className="sub-title">our plans</div>
            <h2 className="text-reveal-anim">
                Make Brand Pricing <br />
                Plans Identities
            </h2>
            </div>
            <div className="row">
                {pricingPlans.map((plan, index) => (
                    <div
                    key={index}
                    className={`pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp`}
                    data-wow-delay={plan.animationDelay}>
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
                                    <Link className="theme-btn-main" href="/page-contact">
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
