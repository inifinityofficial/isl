import React from "react";
import Image from "next/image";

const clientLogos = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const ClientSection: React.FC = (): JSX.Element => {
  return (
    <section className="client-section pb-0">
      <div className="shape-4"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="title-box">
            <h5 className="title">
              Trusted By <br /> Top Companies
            </h5>
            <i className="icon fa fa-arrow-up-right"></i>
          </div>
          <div className="marquee-box">
            <div className="marquee">
              {clientLogos.map((num, index) => (
                <div key={index} className="client-block">
                  <div className="inner-box">
                    <figure className="image">
                      <Image
                        src={`/assets/images/clients/${num}.png`}
                        alt={`Client ${num}`}
                        width={80}
                        height={30}
                      />
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

export default ClientSection;