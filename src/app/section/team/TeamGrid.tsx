"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  delay?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Danial Brown", designation: "MARKETING", image: "/assets/images/resource/team1-1.jpg" },
  { name: "Wade Warren", designation: "MARKETING", image: "/assets/images/resource/team1-2.jpg", delay: "200ms" },
  { name: "Russel Haipner", designation: "MARKETING", image: "/assets/images/resource/team1-3.jpg", delay: "400ms" },
  { name: "Robert Grodge", designation: "MARKETING", image: "/assets/images/resource/team1-4.jpg", delay: "600ms" },
  { name: "Danial Brown", designation: "MARKETING", image: "/assets/images/resource/tm2.1 (1).jpg" },
  { name: "Wade Warren", designation: "MARKETING", image: "/assets/images/resource/tm2.2.jpg", delay: "200ms" },
  { name: "Russel Haipner", designation: "MARKETING", image: "/assets/images/resource/tm2.3.jpg", delay: "400ms" },
  { name: "Robert Grodge", designation: "MARKETING", image: "/assets/images/resource/tm2.4.jpg", delay: "600ms" },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section">
      <div className="bg bg-pattern-10"></div>
      <div className="icon-19 bounce-x"></div>
      <div className="auto-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-team-details">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        priority={index < 4}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h5>
                  <div className="designation">{member.designation}</div>
                  <div className="icon-box">
                    <span className="icon share-icon fal fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
