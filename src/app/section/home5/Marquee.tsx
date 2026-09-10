import React from "react";

const MarqueeSectionTwo: React.FC = (): JSX.Element => {
  const marqueeItems = [
    "BRANDING",
    "MARKETING",
    "DEVELOPMENT",
    "Marketing Agency",
    "BRANDING",
    "MARKETING",
    "DEVELOPMENT",
    "Marketing Agency",
    "BRANDING",
    "MARKETING",
    "DEVELOPMENT",
    "Marketing Agency",
  ];

  return (
    <section className="marquee-section style-two">
      <div className="shape-5"></div>
      <div className="marquee-container">
        <div className="marquee">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`text ${index % 2 !== 0 ? "two" : ""}`}>
                {item}
              </div>
              <div className="icon-9"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSectionTwo;
