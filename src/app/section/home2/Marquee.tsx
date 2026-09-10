import React from "react";

const MarqueeSectionTwo: React.FC = (): JSX.Element => {
  const texts = [
    "*Unlocking AI’s Full Potential",
    "*AI Solutions",
    "*Inspired by Innovation",
    "*AI Design Mastery",
    "*Turning Ideas into Reality",
  ];

  return (
    <section className="marquee-section-two">
      <div className="marquee-container">
        <div className="marquee">
          {[...texts, ...texts].map((text, index) => (
            <div className="text" key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSectionTwo;