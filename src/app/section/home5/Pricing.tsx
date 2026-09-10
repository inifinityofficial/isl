import React from "react";
import Link from "next/link";

const PricingSectionTwo: React.FC = (): JSX.Element => {
  const pricingPlans = [
    {
      tag: "Active",
      icon: "flaticon-promotion",
      title: "Personal Plan",
      price: "$2500/ Month",
      delay: "0ms",
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
    {
      tag: "Save 20%",
      icon: "flaticon-promotion",
      title: "Premium Plan",
      price: "$4500/ Month",
      delay: "300ms",
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
    {
      tag: "Popular",
      icon: "flaticon-promotion",
      title: "Standard Plan",
      price: "$6000/ Month",
      delay: "600ms",
      features: [
        "Unlimited features",
        "Multi language content",
        "30 Days free trial features",
        "Data backup and recovery",
        "Updates via dashboard & slack",
        "Synced to cloud database",
      ],
    },
  ];

  return (
    <section className="pricing-section-two">
      <div className="shape-9"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">our plans</div>
          <h2 className="text-reveal-anim">
            Make Brand Pricing <br /> Plans Identities
          </h2>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-blocks col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={plan.delay}>
              <div className="inner-box">
                <h6 className="sub-title">{plan.tag}</h6>
                <div className="content">
                  <i className={`icon ${plan.icon}`}></i>
                  <h4 className="title">{plan.title}</h4>
                  <div className="text">Customized anything in anytime</div>
                  <ul className="list-style-six">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="btn-box">
                  <Link href="/page-contact" className="theme-btn btn-style-four w-100">
                    <span className="btn-title">{plan.price}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionTwo;
