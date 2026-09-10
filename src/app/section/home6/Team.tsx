"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Danial Brown",
    role: "MARKETING",
    image: "/assets/images/team/team-image1.jpg",
    detailsLink: "/page-team-details",
    social: {
      instagram: "https://www.instagram.com/infinitysoftwarelabs/?hl=en",
      linkedin: "https://www.linkedin.com/company/infinity-software-labs-official/",
    },
    animation: "fadeInLeft",
    delay: "0ms",
  },
  {
    name: "Robert Naikble",
    role: "ADMIN",
    image: "/assets/images/team/team-image2.jpg",
    detailsLink: "/page-team-details",
    social: {
      instagram: "https://www.instagram.com/infinitysoftwarelabs/?hl=en",
      linkedin: "https://www.linkedin.com/company/infinity-software-labs-official/",
    },
    animation: "fadeInUp",
    delay: "200ms",
  },
  {
    name: "Mark Winner",
    role: "CEO & FOUNDER",
    image: "/assets/images/team/team-image3.jpg",
    detailsLink: "/page-team-details",
    social: {
      instagram: "https://www.instagram.com/infinitysoftwarelabs/?hl=en",
      linkedin: "https://www.linkedin.com/company/infinity-software-labs-official/",
    },
    animation: "fadeInRight",
    delay: "400ms",
  },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section style-team">
      <div className="bg bg-pattern-10"></div>
      <div className="icon-19 bounce-x"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Team</div>
          <h2 className="text-reveal-anim">
            What Success Looks <br />
            From the Back
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-block2 col-lg-4 col-md-6 col-sm-6 wow ${member.animation}`}
              data-wow-delay={member.delay}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon share-icon fal fa-share-alt"></span>
                  <div className="social-links">
                    <Link href={member.social.instagram}>
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <a href={member.social.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <Link href={member.detailsLink}>
                      <img src={member.image} alt={member.name} />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="name">
                    <Link href={member.detailsLink}>{member.name}</Link>
                  </h5>
                  <div className="designation">{member.role}</div>
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
