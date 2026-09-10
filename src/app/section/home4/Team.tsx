'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
  delay?: string;
};

const team: TeamMember[] = [
  {
    name: 'Danial Brown',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-1.jpg',
    profileUrl: '/page-team-details',
  },
  {
    name: 'Wade Warren',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-2.jpg',
    profileUrl: '/page-team-details',
    delay: '200ms',
  },
  {
    name: 'Russel Haipner',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-3.jpg',
    profileUrl: '/page-team-details',
    delay: '400ms',
  },
  {
    name: 'Robert Grodge',
    role: 'MARKETING',
    image: '/assets/images/resource/team1-4.jpg',
    profileUrl: '/page-team-details',
    delay: '600ms',
  },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section style-one">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Team</div>
          <h2 className="text-reveal-anim">
            What Success Looks <br /> From the Back
          </h2>
        </div>
        <div className="row">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={member.profileUrl}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        priority
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="name">
                    <Link href={member.profileUrl}>{member.name}</Link>
                  </h5>
                  <div className="designation">{member.role}</div>
                  <div className="icon-box">
                    <span className="icon share-icon fal fa-share-alt" />
                    <div className="social-links">
                      <Link href="https://www.linkedin.com/company/infinity-software-labs-official/" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link href="https://www.linkedin.com/company/infinity-software-labs-official/" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in" />
                      </Link>
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
