import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar2 from '../../components/elements/ProgressBar2';

const features = [
  'Innovative Solutions',
  'User-Friendly Interface',
  'Secure Transactions',
  'Real-Time Analytics',
];

const AboutSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="about-section-two pt-0">
      <div className="shape-15 zoom-one" />
      <div className="icon-18 bounce-x" />
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-xl-2 wow fadeInRight">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">About Us</div>
                <h2 className="text-reveal-anim">
                  Welcome to Our Smart <br /> Digital Agency
                </h2>
              </div>
              <div className="text">
                The a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </div>

              <div className="list-box style-two">
                <ul className="list-style-two two-column">
                  {features.map((item, index) => (
                    <li key={index}>
                      <i className="fa fa-check-circle" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="skills style-two">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-title">Marketing</div>
                  </div>
                  <ProgressBar2 percentage={86} duration={3000} />
                </div>
              </div>

              {/* CTA Button */}
              <div className="btn-box">
                <Link href="/page-contact" className="theme-btn-main">
                  <span className="theme-btn-arrow-left">
                    <i className="fa fa-arrow-right" />
                  </span>
                  <span className="theme-btn">Discover More</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa fa-arrow-right" />
                  </span>
                </Link>
                <div className="sign">
                  <Image src="/assets/images/icons/sign.png" alt="Signature" width={120} height={50} />
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
            <div className="inner-column">
              <figure className="image">
                <Image src="/assets/images/resource/about2-1.jpg" alt="About Image 1" width={500} height={400} />
              </figure>
              <figure className="image-two">
                <Image src="/assets/images/resource/about2-2.jpg" alt="About Image 2" width={500} height={400} />
              </figure>

              <div className="btn-box">
                <Link href="#" aria-label="Explore More">
                  <svg viewBox="0 0 100 100" width="100" height="100" className="circular-text">
                    <defs>
                      <path id="circle" d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle">Explore More Explore More</textPath>
                    </text>
                  </svg>
                  <i className="icon fa fa-arrow-up-right" />
                </Link>
              </div>

              <div className="exp-box">
                <div className="content">
                  <h2 className="count">19</h2>
                  <div className="text">Years of<br />Experience</div>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="icon-15" />
              <div className="icon-16 zoom-one" />
              <div className="icon-17 bounce-x" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;