'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToAction: React.FC = (): JSX.Element => {
  return (
    <section className="call-to-action">
      <div className="outer-box wow fadeInUp">
        <div className="icon-32" />
        <div className="icon-14" />

        <div className="content-box">
          <div className="image-box">
            <figure className="image">
              <Image
                src="/assets/images/resource/cta1-1.png"
                alt="Recognized Company"
                width={300}
                height={300}
                priority
              />
            </figure>
          </div>
          <div className="title-box">
            <h3 className="title">
              Recognized as One of the <br /> Leading Company!
            </h3>
          </div>
          <div className="btn-box">
            <Link className="theme-btn-main light-bg" href="/page-contact">
              <span className="theme-btn-arrow-left">
                <i className="fa fa-arrow-right" />
              </span>
              <span className="theme-btn">Discover More</span>
              <span className="theme-btn-arrow-right">
                <i className="fa fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
