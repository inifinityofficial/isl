import React from "react";
import Link from "next/link";

const clients = [
  "/assets/images/clients/1.png",
  "/assets/images/clients/2.png",
  "/assets/images/clients/3.png",
  "/assets/images/clients/4.png",
  "/assets/images/clients/5.png",
  "/assets/images/clients/1.png",
  "/assets/images/clients/2.png",
  "/assets/images/clients/3.png",
  "/assets/images/clients/4.png",
  "/assets/images/clients/5.png",
];

const ClientSectionFour: React.FC = (): JSX.Element => {
  return (
    <section className="client-section-four pb-0 relative overflow-hidden">
      <div className="auto-container">
        <div className="outer-box">
          {/* Title Box */}
          <div className="title-box flex items-center justify-between mb-8">
            <h5 className="title text-2xl font-bold leading-tight">
              Trusted By <br /> Top Companies
            </h5>
            <i className="icon fa fa-arrow-up-right"></i>
          </div>

          {/* Marquee Box */}
          <div className="marquee-box relative overflow-hidden">
            <div className="marquee flex gap-12 animate-marquee">
              {clients.map((img, index) => (
                <div className="client-block flex-shrink-0" key={index}>
                  <div className="inner-box">
                    <figure className="image w-36 h-auto flex items-center justify-center">
                      <Link href="/">
                        <img
                          src={img}
                          alt={`Client ${index + 1}`}
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSectionFour;
