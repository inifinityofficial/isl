import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'Danial Brown',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-1.jpg',
    delay: '0ms',
  },
  {
    id: 2,
    name: 'Wade Warren',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-2.jpg',
    delay: '200ms',
  },
  {
    id: 3,
    name: 'Russel Haipner',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-3.jpg',
    delay: '400ms',
  },
  {
    id: 4,
    name: 'Robert Grodge',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-4.jpg',
    delay: '600ms',
  },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section">
      <div className="bg bg-pattern-10" />
      <div className="icon-19 bounce-x" />
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Team</div>
          <h2 className="text-reveal-anim">
            What Success Looks <br /> From the Back
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
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
                        loading="lazy"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h5>
                  <div className="designation">{member.role}</div>
                  <div className="icon-box">
                    <span className="icon share-icon fal fa-share-alt" />
                    <div className="social-links">
                      <Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in" /></Link>
                      <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram" /></Link>
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