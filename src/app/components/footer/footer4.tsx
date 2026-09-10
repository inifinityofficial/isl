import React from "react";
import Link from "next/link";

const FooterFour = () => {
  return (
        <footer className="main-footer footer-style-four">
            <div className="shape-35"></div>
            <div className="shape-36"></div>
            <div className="widgets-section style-one">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget about-widget">
                                <figure className="image"><Link href="#"><img src="/assets/images/logo-2.png" alt="Image"/></Link>
                                </figure>
                                <div className="text">Creative studio turning ideas designs From branding digital solutions
                                    experience inspire & drive success.</div>
                                <ul className="social-icon-two style-icon">
                                    <li><Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget links-widget">
                                <h5 className="widget-title style">Quick links</h5>
                                <ul className="user-link style-one">
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="/page-service">Services</Link></li>
                                    <li><Link href="/page-blog">Blogs</Link></li>
                                    <li><Link href="/page-project">Branding</Link></li>
                                    <li><Link href="/page-contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget links-widget two">
                                <h5 className="widget-title style">Services</h5>
                                <ul className="user-link style-one">
                                    <li><Link href="/">UI Design</Link></li>
                                    <li><Link href="/">Web Design</Link></li>
                                    <li><Link href="/">Branding</Link></li>
                                    <li><Link href="/">Web Flow</Link></li>
                                    <li><Link href="/">Development</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="widget-title style">Contacts us</h4>
                                <ul className="list-style-five">
                                    <li><i className="fas fa-building"></i>Infinity Software Labs</li>
                                    <li><i className="far fa-envelope"></i>contact@infinitysoftwarelabs.com</li>
                                    <li><i className="fas fa-phone"></i>+92 323 5711406</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-logo text-center">
                <img src="/assets/images/icons/logo-h4.png" alt="image"/>
            </div>
            <div className="footer-bottom style-three">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">© Copyright 2025 by Infinity Software Labs</div>
                        <ul className="footer-nav">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default FooterFour;
