"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressBar2 from '../../components/elements/ProgressBar2';

const skills = [
  { title: "Facial Treatment", value: 70 },
  { title: "Thai Massage", value: 89 },
  { title: "Sauna Relax", value: 78 },
];

const achievements = [
  {
    img: "/assets/images/icons/icon-img3.png",
    years: "2015-2017",
    title: "Lead Generation Legend",
    text: "There's a company called Lead Gen Legends that specializes in helping businesses grow by generating high-quality leads tailored strategies.",
  },
  {
    img: "/assets/images/icons/icon-img2.png",
    years: "2015-2017",
    title: "Lead Generation Legend",
    text: "There's a company called Lead Gen Legends that specializes in helping businesses grow by generating high-quality leads tailored strategies.",
  },
  {
    img: "/assets/images/icons/icon-img.png",
    years: "2015-2017",
    title: "Lead Generation Legend",
    text: "There's a company called Lead Gen Legends that specializes in helping businesses grow by generating high-quality leads tailored strategies.",
  },
];

const TeamDetailsSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-details-section">
      <div className="auto-container">
        <div className="row">
          {/* Left Column */}
          <div className="image-column col-lg-4">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/page-team-details">
                    <Image
                      src="/assets/images/resource/tm-details.png"
                      alt="Jessica Brown"
                      width={400}
                      height={400}
                      priority
                    />
                  </Link>
                </figure>
              </div>

              <div className="content-box">
                <div className="team-title">
                  <h4 className="title">Jessica Brown</h4>
                  <div className="text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </div>
                </div>

                <div className="email">
                  <h5 className="title">Email:</h5>
                  <div className="text">jackson.graham@example.com</div>
                </div>

                <div className="location">
                  <h5 className="title">Location:</h5>
                  <div className="text">6391 Elgin St. Celina, Delaware 10299</div>
                </div>

                <div className="website">
                  <h5 className="title">Website:</h5>
                  <div className="text">www.exampleyourdomain.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="content-column col-lg-8">
            <div className="inner-box">
              <div className="team-content">
                <p className="team-desc pb-15">
                  <span className="drop-cap">B</span> ut I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain gives you a complete account of the system, and expound the actual
                  teachings of the great explorer of truth, the master-builder of human happiness.
                </p>

                <p className="team-desc">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt mollitia animi.
                </p>
              </div>

              {/* Personal Skills */}
              <div className="expert-title">
                <h3 className="title">Personal Skills</h3>
              </div>

              <div className="skills">
                {skills.map((skill, i) => (
                  <div key={i} className="skill-item upper2">
                    <div className="skill-header">
                      <div className="skill-title">{skill.title}</div>
                    </div>
                    <ProgressBar2 percentage={skill.value} duration={3000} />
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="expert-title">
                <h3 className="title">Achievements</h3>
              </div>
              <div className="expert-desc">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occupation.
                </p>
              </div>

              {achievements.map((item, i) => (
                <div key={i} className="icon-box">
                  <figure className="image">
                    <Image src={item.img} alt={item.title} width={70} height={70} />
                  </figure>
                  <div className="icon-content">
                    <h6 className="sub-title">{item.years}</h6>
                    <h6 className="title">{item.title}</h6>
                    <div className="text">{item.text}</div>
                  </div>
                </div>
              ))}

              {/* Contact Me */}
              <div className="expert-title pt-20">
                <h3 className="title">Contact Me</h3>
              </div>
              <div className="expert-desc">
                <p>
                  I’d love to hear from you! Whether you're looking for help with digital marketing, want to collaborate
                  on a new idea, or simply have a question, feel free to reach out.
                </p>
              </div>

              <div className="contact-form-three pt-10">
                <form method="post" action="#" id="contact-form">
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" id="Yname" name="Yname" placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" id="Yemail" name="Yemail" placeholder="Email Address" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="tel" id="Ytel" name="Ytel" placeholder="Phone" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea name="message" placeholder="Write a Message" required></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="btn-box">
                        <button className="theme-btn-main">
                          <span className="theme-btn-arrow-left">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                          <span className="theme-btn">Send a message</span>
                          <span className="theme-btn-arrow-right">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsSection;
