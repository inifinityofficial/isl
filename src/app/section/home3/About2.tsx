"use client";
import React from "react";
import Link from 'next/link';
import ProgressBar2 from '../../components/elements/ProgressBar2';

const About2: React.FC = (): JSX.Element => {
  return (
        <section className="about-section-four">
            <div className="icon-4 bounce-x"></div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-xl-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="sub-title">WHY WE ARE BEST</div>
                                <h2 className="text-reveal-anim">Welcome to Our Smart <br/> Digital Agency</h2>
                            </div>
                            <div className="text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration in some form, by injected humour, or randomised words
                                which don't look even slightly believable.</div>
                            <div className="skills style-three">
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <div className="skill-title">Business consulting</div>
                                    </div>
                                    <ProgressBar2 percentage={86} duration={3000} />
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <div className="skill-title">digital marketing</div>
                                    </div>
                                    <ProgressBar2 percentage={70} duration={3000} />
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <div className="skill-title">Business development</div>
                                    </div>
                                    <ProgressBar2 percentage={60} duration={3000} />
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link className="theme-btn-main" href="/page-contact">
                                  <span className="theme-btn-arrow-left"><i className="fa fa-arrow-right"></i></span>
                                  <span className="theme-btn">Discover More</span>
                                  <span className="theme-btn-arrow-right"><i className="fa fa-arrow-right"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft"
                        data-wow-delay="300ms">
                        <div className="inner-column">
                            <figure className="image"><img src="/assets/images/resource/h3-why.jpg" alt="Image"/></figure>
                            <div className="icon-3 bounce-x"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default About2;