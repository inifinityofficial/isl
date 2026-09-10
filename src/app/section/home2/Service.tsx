import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: 'flaticon-promotion',
    count: '01',
    category: 'BRANDING',
    title: 'Brand Design & Logo Design',
    image: '/assets/images/resource/service2-1.jpg',
    delay: '0ms',
  },
  {
    id: 2,
    icon: 'flaticon-diplomat',
    count: '02',
    category: 'Customization',
    title: 'WordPress & Marketing',
    image: '/assets/images/resource/service2-2.jpg',
    delay: '200ms',
  },
  {
    id: 3,
    icon: 'flaticon-success',
    count: '03',
    category: 'Development',
    title: 'Businesses Solutions',
    image: '/assets/images/resource/service2-3.jpg',
    delay: '400ms',
  },
  {
    id: 4,
    icon: 'flaticon-technology',
    count: '04',
    category: 'Improvements',
    title: 'Digital Marketing',
    image: '/assets/images/resource/service2-4.jpg',
    delay: '600ms',
  },
];

const ServiceSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="service-section-two">
      <div className="shape-14" />
      <div className="outer-box">
        <div className="sec-title text-center">
          <div className="sub-title">Our Services</div>
          <h2 className="text-reveal-anim">
            Services We’re <br /> Offering to Customers
          </h2>
        </div>
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={service.delay}>
              <div className="inner-box">
                <div className="content-box">
                  <div className="icon-box">
                    <i className={`icon ${service.icon}`} />
                  </div>
                  <div className="count">{service.count}</div>
                  <div className="cat">{service.category}</div>
                  <h4 className="title">
                    <Link href="/page-service-details">{service.title}</Link>
                  </h4>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-service-details">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        loading="lazy"
                      />
                    </Link>
                  </figure>
                  <Link href="/page-service-details" className="readmore" aria-label="Read more">
                    <i className="fa fa-arrow-up-right" />
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

export default ServiceSectionTwo;