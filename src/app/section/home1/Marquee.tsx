import React from "react";

const marqueeItems = [
  "BRNDING",
  "MARKETING",
  "DEVELOPMENT",
  "Marketing Agency",
  "BRNDING",
  "MARKETING",
  "DEVELOPMENT",
  "Marketing Agency",
  "BRNDING",
  "MARKETING",
  "DEVELOPMENT",
  "Marketing Agency",
];

const MarqueeSection: React.FC = (): JSX.Element => {
  return (
    <section className="marquee-section">
      <div className="shape-5"></div>

      <div className="marquee-container">
        <div className="marquee">
          {marqueeItems.map((text, index) => (
            <React.Fragment key={index}>
              <div className={`text ${index % 2 === 1 ? "two" : ""}`}>
                {text}
              </div>
              <div className="icon-9"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
