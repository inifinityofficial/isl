import React from "react";
import Link from 'next/link';
import ProgressBar2 from '../../components/elements/ProgressBar2';


const About: React.FC = (): JSX.Element => {
  return (
    <section className="about-section">
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="auto-container">
            <div className="row">
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
                    <div className="inner-column">
                        <div className="sec-title">
                            <div className="sub-title">About Us</div>
                            <h2 className="text-reveal-anim">A digital partner for <br/> web, software and AI projects</h2>
                            <div className="text">Infinity Software Labs works with businesses that need reliable digital systems, from brand websites and web applications to custom software and AI automation. We focus on solutions that are practical, scalable and aligned with real business goals.</div>
                        </div>
                        <div className="icon-outer-box row">
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-graphic-design"></i>
                                    <h6 className="title">Business-first design</h6>
                                </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-targeted-marketing"></i>
                                    <h6 className="title">Scalable digital systems</h6>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skill-item">
                                <div className="skill-header">
                                    <div className="skill-title">Custom delivery</div>
                                </div>
                                <ProgressBar2 percentage={90} duration={3000} />
                            </div>
                        </div>
                        <ul className="list-style-two">
                            <li><i className="fa fa-check-circle"></i> Professional websites and landing pages for service businesses</li>
                            <li><i className="fa fa-check-circle"></i> Custom software, automation and AI integration built around your workflow</li>
                        </ul>
                        <div className="btn-box">
                            <Link className="theme-btn-main" href="/page-contact">
                                <span className="theme-btn-arrow-left"><i className="fa fa-arrow-right"></i></span>
                                <span className="theme-btn">Discuss Your Project</span>
                                <span className="theme-btn-arrow-right"><i className="fa fa-arrow-right"></i></span>
                            </Link>
                            <div className="sign"><img src="/assets/images/icons/sign.png" alt="Infinity Software Labs"/></div>
                        </div>
                    </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                    <div className="inner-column">
                        <div className="image-box">
                            <div className="shape-1"></div>
                            <figure className="image"><img src="/assets/images/resource/about1-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                                <div className="icon-8"></div>
                                <h2 className="count">28</h2>
                                <div className="text">years of<br/>experience</div>
                            </div>
                            <div className="icon-box">
                                <div className="icon-6"></div>
                            </div>
                            <div className="icon-box-two">
                                <div className="icon-7"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;