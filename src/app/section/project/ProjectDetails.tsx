"use client";
import React from "react";
import Link from "next/link";

const ProjectDetailsSection: React.FC = (): JSX.Element => {
  return (
    <section className="project-details-section">
      <div className="auto-container">
        {/* Main Image */}
        <div className="image-box">
          <figure className="image">
            <img src="/assets/images/resource/project-details.jpg" alt="Project Details" />
          </figure>
        </div>

        <div className="row">
          {/* Sidebar Column */}
          <div className="project-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-box">
              <div className="project-title">
                <h4 className="title">Project Details</h4>
                <div className="text">
                  But I must explain to you how all about of denouncing pleasure and
                  praising and I will give you a complete
                </div>
              </div>

              <div className="project-name">
                <ul className="project">
                  <li>
                    Client Name: <span>Kodesolution.com</span>
                  </li>
                  <li>
                    Project Date: <span>15.03.2026</span>
                  </li>
                  <li>
                    Location: <span>Design Studio USA</span>
                  </li>
                  <li>
                    Website: <span>www.example.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="content-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-box">
              <div className="col-lg-12">
                {/* Project Description */}
                <div className="project-content">
                  <p className="project-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
                    tempor incididunt ut labore et dolore magna aliq Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupida non proident
                  </p>
                  <p className="project-desc">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  </p>
                </div>

                {/* Overview Section */}
                <div className="expert-title">
                  <h2 className="title">Completed Projects Overview</h2>
                  <p className="project-desc">
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form by injected humour, or
                    randomised words which don't look even slightly believable. If you are
                    going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat
                  </p>
                </div>

                {/* Feature Icons */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="icon-box">
                      <i className="icon fa fa-check-circle"></i>
                      <div className="icon-content">
                        <h6 className="title">Social Media Marketing Projects</h6>
                        <div className="text">
                          Develop a month-long content calendar
                          <br /> with reels stories and carousel
                        </div>
                      </div>
                    </div>

                    <div className="icon-box">
                      <i className="icon fa fa-check-circle"></i>
                      <div className="icon-content">
                        <h6 className="title">Strategy & Analytics Projects</h6>
                        <div className="text">
                          Develop a month-long content calendar
                          <br /> with reels stories and carousel
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="icon-box">
                      <i className="icon fa fa-check-circle"></i>
                      <div className="icon-content">
                        <h6 className="title">SEO & Content Marketing Projects</h6>
                        <div className="text">
                          Develop a month-long content calendar
                          <br /> with reels stories and carousel
                        </div>
                      </div>
                    </div>

                    <div className="icon-box">
                      <i className="icon fa fa-check-circle"></i>
                      <div className="icon-content">
                        <h6 className="title">PPC & Paid Media Projects</h6>
                        <div className="text">
                          Develop a month-long content calendar
                          <br /> with reels stories and carousel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Description */}
                <div className="project-content">
                  <p className="project-desc">
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form by injected humour, or
                    randomised words
                  </p>
                </div>

                {/* Project Images */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="image-box-inner">
                      <figure className="image">
                        <img src="/assets/images/resource/proj2.png" alt="Project Image 1" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="image-box-inner">
                      <figure className="image">
                        <img src="/assets/images/resource/proj.png" alt="Project Image 2" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="project-btn">
                  <Link href="/page-project-details" className="btn">
                    <i className="icon fa fa-angle-left"></i> Previous
                  </Link>
                  <Link href="/page-project-details" className="btn">
                    Next <i className="icon fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
