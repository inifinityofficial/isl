"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  {
    icon: "flaticon-success",
    value: 1230,
    suffix: "+",
    text: "Successful Projects",
    delay: "0ms",
  },
  {
    icon: "flaticon-marketing",
    value: 98,
    suffix: "%",
    text: "Best Result Outcome",
    delay: "300ms",
  },
  {
    icon: "flaticon-promotion",
    value: 64,
    suffix: "%",
    text: "Cover Marketing",
    delay: "600ms",
  },
  {
    icon: "flaticon-diplomat",
    value: 2890,
    suffix: "+",
    text: "Satisfied Customers",
    delay: "900ms",
  },
];

const FunFactSection: React.FC = (): JSX.Element => {
  return (
    <section className="funfact-section pb-0">
      <div className="bg bg-pattern-3"></div>

      <div className="outer-box">
        <div
          className="bg bg-image custom-filter"
          style={{ backgroundImage: "url(/assets/images/background/3.png)" }}
        ></div>

        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {counters.map((item, index) => (
                <div
                  key={index}
                  className="counter-block col-xl-3 col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon ${item.icon}`} />
                    </div>

                    {/* ✅ Dynamic Counter */}
                    <div className="count-box">
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
              ))}
            </div>
          </div>

          <div className="title-box text-center">
            <h3 className="title">
              We craft bold digital experiences that grow <br />
              brands & turn ideas into impact.
            </h3>

            <div className="exp-box" data-aos="fade-up" data-aos-delay="300">
              <svg viewBox="0 0 100 100" width="100" height="100" className="circular-text">
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath xlinkHref="#circle">
                    Since 1885 Since 1885 Since 1885 Since 1885 Since 1885
                  </textPath>
                </text>
              </svg>

              <div className="icon-box">
                <i className="icon flaticon-technology" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FunFactSection;
