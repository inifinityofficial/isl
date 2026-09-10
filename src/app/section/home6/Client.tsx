import React from "react";

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

const ClientSection: React.FC = (): JSX.Element => {
  return (
    <section className="client-section style-client pb-0">
      <div className="auto-container">
        <div className="outer-box">
          <div className="title-box">
            <h5 className="title">
              Trusted By <br />Top Companies
            </h5>
            <i className="icon fa fa-arrow-up-right"></i>
          </div>

          <div className="marquee-box">
            <div className="marquee">
              {clients.map((src, index) => (
                <div className="client-block" key={index}>
                  <div className="inner-box">
                    <figure className="image">
                      <img src={src} alt={`Client ${index + 1}`} />
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
