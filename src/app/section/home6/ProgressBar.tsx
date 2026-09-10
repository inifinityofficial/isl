"use client";
import React, { useEffect, useRef } from "react";

interface CircleProgressProps {
  percent: number;
  title: string;
  text: string;
  animationClass?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percent, title, text, animationClass = "" }) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progressRef.current) {
            setTimeout(() => {
              if (progressRef.current) {
                const dashValue = (percent / 100) * 283;
                progressRef.current.style.strokeDasharray = `${dashValue}, 283`;
              }
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [percent]);

  return (
    <div className={`content-column col-lg-4 col-md-12 col-sm-12 ${animationClass}`}>
      <div className="inner-column">
        <div className="progress-card">
          <div className="circle" ref={circleRef} data-percent={percent}>
            <svg viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45"></circle>
              <circle className="progress" ref={progressRef} cx="50" cy="50" r="45"></circle>
            </svg>
            <div className="inner"><span>{percent}%</span></div>
          </div>
          <div className="progress-content">
            <h3 className="title">{title}</h3>
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBarSection: React.FC = (): JSX.Element => {
  return (
    <section className="progress-bar-section">
      <div className="bg bg-pattern-21"></div>
      <div className="icon-47"></div>
      <div className="auto-container">
        <div className="row">
          <CircleProgress
            percent={90}
            title="Automation Features"
            text="Driving Business Forward<br />with Trusted Strategies"
            animationClass="wow fadeInLeft"
          />
          <CircleProgress
            percent={85}
            title="Automation Features"
            text="Always Available, Always On,<br />No Downtime"
            animationClass="wow fadeInDown"
          />
          <CircleProgress
            percent={80}
            title="24/7 Support"
            text="Stopping Problems in Their <br />Tracks Variable"
            animationClass="wow fadeInRight"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressBarSection;
