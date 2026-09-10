"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  date: string;
  month: string;
  comments: number;
  title: string;
  description: string;
  image: string;
  delay?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "20",
    month: "Jan",
    comments: 2,
    title: "10 Easy Strategies to Harness the Power of AI",
    description:
      "There are many variations of passages of one Lorem Ipsum available.",
    image: "/assets/images/resource/news1-1.jpg",
  },
  {
    id: 2,
    date: "26",
    month: "Jan",
    comments: 6,
    title: "Web Accessibility Not Just a Trend, Necessity",
    description:
      "There are many variations of passages of one Lorem Ipsum available.",
    image: "/assets/images/resource/news1-2.jpg",
    delay: "200ms",
  },
  {
    id: 3,
    date: "30",
    month: "Jan",
    comments: 4,
    title: "The Power of Storytelling in Digital Branding",
    description:
      "There are many variations of passages of one Lorem Ipsum available.",
    image: "/assets/images/resource/news1-3.jpg",
    delay: "400ms",
  },
];

const NewsSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="news-section-two">
      <div className="bg bg-pattern-11"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Blog posts</div>
          <h2 className="text-reveal-anim">
            Recent Updates & <br /> Insights from Our Blog
          </h2>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              key={post.id}
              data-wow-delay={post.delay || "0ms"}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <div className="date-box">
                    <div className="date">{post.date}</div>
                    <div className="month">{post.month}</div>
                  </div>
                </div>

                <div className="content-box">
                  <div className="content">
                    <ul className="post-meta">
                      <li>
                        <i className="icon fa fa-comment"></i>{" "}
                        {post.comments} Comment
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/page-blog-details">{post.title}</Link>
                    </h4>
                    <div className="text">{post.description}</div>
                  </div>

                  <div className="btn-box">
                    <Link href="/page-blog-details" className="text">
                      Read More
                    </Link>
                    <Link href="/page-blog-details" className="readmore">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
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

export default NewsSectionTwo;