import React from "react";
import Image from "next/image";

const ClientSectionTwo: React.FC = (): JSX.Element => {
  const clients = [
    "/assets/images/clients/2-1.png",
    "/assets/images/clients/2-2.png",
    "/assets/images/clients/2-3.png",
    "/assets/images/clients/2-4.png",
    "/assets/images/clients/2-5.png",
    "/assets/images/clients/2-6.png",
  ];

  return (
    <section className="client-section-two style-brand pb-0">
      <div className="outer-box">
        <div className="title-box">
          <h5 className="title">
            Trusted By <br /> Top Companies
          </h5>
          <i className="icon fa fa-arrow-up-right"></i>
        </div>
        <div className="marquee-box">
          <div className="marquee">
            {[...clients, ...clients].map((logo, index) => (
              <div className="client-block" key={index}>
                <div className="inner-box">
                  <figure className="image">
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width={95}
                      height={82}/>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSectionTwo;
