"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const counterItems = [
  {
    value: 1230,
    text: "Successful Projects",
    icon: "/assets/images/icons/icon-37.png",
    suffix: "+",
  },
  {
    value: 98,
    text: "Best Result Outcome",
    icon: "/assets/images/icons/icon-37.png",
    suffix: "%",
  },
  {
    value: 64,
    text: "Cover Marketing",
    icon: "/assets/images/icons/icon-37.png",
    suffix: "%",
  },
  {
    value: 2890,
    text: "Satisfied Customers",
    icon: "/assets/images/icons/icon-37.png",
    suffix: "+",
  },
];

const CounterSection: React.FC = (): JSX.Element => {
  return (
    <section className="counter-section">
      <div className="outer-box">
        <div className="bg-shape">
          <div
            className="bg bg-image custom-filter"
            style={{ backgroundImage: "url(/assets/images/icons/h55.jpg)" }}
          ></div>
        </div>

        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {counterItems.map((item, index) => (
                <div
                  key={index}
                  className={`counter-blocks col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp`}
                  data-wow-delay={`${index * 300}ms`}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <img src={item.icon} alt="Icon" />
                    </div>

                    <div className="content-box">
                      <div className="count-box counted">
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop={item.value}
                        >
                          <CounterUp end={item.value} />
                        </span>
                        {item.suffix}
                      </div>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
