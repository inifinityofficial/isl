"use client";

import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  delay?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Danial Brown',
    role: 'MARKETING',
    image: '/assets/images/team/team-image1.jpg',
    delay: '0ms',
  },
  {
    name: 'Robert Naikble',
    role: 'ADMIN',
    image: '/assets/images/team/team-image2.jpg',
    delay: '200ms',
  },
  {
    name: 'Mark Winner',
    role: 'CEO & FOUNDER',
    image: '/assets/images/team/team-image3.jpg',
    delay: '400ms',
  },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Team</div>
          <h2 className="text-reveal-anim">
            What Success Looks <br /> From the Back
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-block2 col-lg-4 col-md-6 col-sm-6 wow fadeInUp`}
              data-wow-delay={member.delay}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon share-icon fal fa-share-alt"></span>
                  <div className="social-links">
                    <Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-team-details">
                      <Image src={member.image} alt={member.name} width={400} height={400} />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
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
