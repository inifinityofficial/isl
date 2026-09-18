"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICE_MENU_GROUPS, type ServiceEntry } from "../../data/services";

interface ServiceDetailTemplateProps {
  service: ServiceEntry;
}

const chunkArray = <T,>(items: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
};

const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const capabilitiesChunks = chunkArray(service.capabilities, 2);
  const relatedServices = SERVICE_MENU_GROUPS.flatMap((group) =>
    group.items.filter((item) => service.relatedServices.includes(item.slug))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.primaryKeyword,
    provider: {
      "@type": "Organization",
      name: "Infinity Software Labs",
      url: "https://www.infinitysoftwarelabs.com/",
    },
    areaServed: "Worldwide",
    description: service.metaDescription,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: service.description,
    },
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.infinitysoftwarelabs.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.infinitysoftwarelabs.com/services" },
        { "@type": "ListItem", position: 3, name: service.title, item: service.canonical },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="service-details-section">
      <div className="auto-container">
        <div className="row">
          <div className="sidebar-column col-lg-4 col-md-12">
            <div className="widget-sidber">
              <h4 className="title">Service List</h4>
              <div className="widget-category">
                <ul>
                  {SERVICE_MENU_GROUPS.flatMap((group) =>
                    group.items.map((item) => (
                      <li key={item.slug} className={service.slug === item.slug ? "current" : ""}>
                        <Link href={`/services/${item.slug}`}>
                          {item.title}
                          <i className="icon fas fa-angle-right"></i>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className="widget-sidber-box mt-4">
              <div className="inner-contact-box">
                <h4 className="title">+1 (555) 123-4567</h4>
                <h6 className="title2">Email</h6>
                <p className="contact-text">contact@infinitysoftwarelabs.com</p>
              </div>
              <div className="inner-contact-box">
                <h6 className="title2">Location</h6>
                <p className="contact-text">Helping businesses grow with digital products, AI systems, and measurable web performance.</p>
              </div>
              <ul className="social-icon-four upper2">
                <li>
                  <Link href="https://www.linkedin.com/company/infinity-software-labs-official/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="contents-column col-lg-8 col-md-12">
            <div className="service-content">
              <span className="sub-title" style={{ display: "inline-block", marginBottom: 14 }}>
                {service.category}
              </span>
              <h3 className="title">{service.heroHeadline}</h3>
              <p className="service-desc">{service.description}</p>
            </div>

            <div className="image-box mt-4">
              <figure className="image">
                <Image src={service.image} alt={service.imageAlt} width={770} height={480} />
              </figure>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">What We Provide</h3>
            </div>
            <div className="expert-desc">
              <p>{service.shortDescription}</p>
            </div>

            <div className="row">
              {capabilitiesChunks.map((chunk, chunkIndex) => (
                <div className="col-lg-6 col-md-6" key={`capability-column-${chunkIndex}`}>
                  <ul className="list-style-two">
                    {chunk.map((capability) => (
                      <li key={capability}>
                        <i className="fa fa-check-circle"></i> {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">Business Benefits</h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-style-two">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <i className="fa fa-check-circle"></i> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">Our Process</h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ol className="list-style-two">
                  {service.process.map((step, index) => (
                    <li key={step}>
                      <strong>{index + 1}.</strong> {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">Technologies & Tools</h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="btn btn-outline-primary mb-2 me-2" style={{ borderRadius: 999, padding: "8px 16px" }}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">Why Choose Infinity Software Labs</h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-style-two">
                  {service.whyChoose.map((reason) => (
                    <li key={reason}>
                      <i className="fa fa-check-circle"></i> {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="200ms">
              <div className="inner-column">
                <div className="sec-title pt-40">
                  <h2 className="text-reveal-anim">Frequently Asked Questions</h2>
                </div>

                <ul className="accordion-box-three">
                  {service.faqs.map((faq, index) => (
                    <li
                      key={faq.question}
                      className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        {faq.question}
                        <i className="icon fas fa-angle-right"></i>
                      </div>
                      <div className={`acc-content ${activeIndex === index ? "current" : ""}`}>
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="expert-title mt-5">
              <h3 className="title">Related Services</h3>
            </div>
            <div className="row">
              {relatedServices.map((related) => (
                <div className="col-lg-6 col-md-6 mb-3" key={related.slug}>
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="content-box" style={{ padding: 20 }}>
                        <h4 className="title">
                          <Link href={`/services/${related.slug}`}>{related.title}</Link>
                        </h4>
                        <div className="btn-box">
                          <Link href={`/services/${related.slug}`} className="readmore">
                            Explore Service
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-box mt-5" style={{ background: "#f5f7ff", padding: 30, borderRadius: 20 }}>
              <h3 className="title">Need help with {service.title.toLowerCase()}?</h3>
              <p>
                Let’s talk about your goals, challenges, and roadmap so we can recommend the right approach for your business.
              </p>
              <Link href="/page-contact" className="theme-btn btn-style-one">
                <span className="btn-title">Book a Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceDetailTemplate;
