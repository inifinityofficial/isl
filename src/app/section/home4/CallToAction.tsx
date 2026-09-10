"use client";

import React from "react";
import CounterUp from '../../components/elements/CounterUp';

const CallToActionFour: React.FC = (): JSX.Element => {
  return (
    <section className="call-to-action-four">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {/* Animated Icons */}
            <div className="icon-40 bounce-x"></div>
            <div className="icon-41 bounce-y"></div>

            {/* Counter Block */}
            <div className="counter-blocks col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-success"></i>
                </div>
                <div className="content">
                  <div className="count-box">
                      <CounterUp end={1230} />+
                  </div>
                  <div className="text">Successful Projects Complete</div>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div
              className="content-block col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <h3 className="title">
                  We strongly help business <br /> Growth Revenue
                </h3>
                <h4 className="sub-title">COMPANY VALUES</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionFour;
