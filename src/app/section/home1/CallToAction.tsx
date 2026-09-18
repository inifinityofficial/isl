import React from 'react';
import Link from 'next/link';

const Benefit: React.FC = (): JSX.Element => {
  return (
    <section className="call-to-action pull-down">
      <div className="outer-box animate__animated animate__fadeInUp">
        <div className="icon-32" />
        <div className="icon-14" />
        <div className="content-box">
          <div className="image-box">
            <figure className="image">
              <img src="/assets/images/resource/cta1-1.png" alt="Infinity Software Labs" />
            </figure>
          </div>
          <div className="title-box">
            <h3 className="title">
              Have a project in mind? <br /> Let’s build the right digital solution.
            </h3>
          </div>
          <div className="btn-box">
              <Link href="/page-contact" className="theme-btn btn-style-one light-bg">
                <span className="btn-title">Request a Quote</span>
              </Link>
              <Link href="/page-contact" className="readmore" aria-label="Contact Infinity Software Labs">
                <i className="fa fa-arrow-right" />
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
