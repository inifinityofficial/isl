"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  month: string;
  author: string;
  comments: number;
  title: string;
  text: string;
  delay?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/assets/images/resource/news1-1.jpg",
    date: "20",
    month: "Jan",
    author: "Devid Backman",
    comments: 2,
    title: "10 Easy Strategies to Harness the Power of AI",
    text: "There are many variations of passages of one Lorem Ipsum available",
  },
  {
    id: 2,
    image: "/assets/images/resource/news1-2.jpg",
    date: "26",
    month: "Jan",
    author: "Devid Backman",
    comments: 2,
    title: "How to Scale Your Business Without Losing Control",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "200ms",
  },
  {
    id: 3,
    image: "/assets/images/resource/news1-3.jpg",
    date: "30",
    month: "Jan",
    author: "Devid Backman",
    comments: 2,
    title: "Operational Efficiency Hacks for Small Businesses",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "400ms",
  },
];

const NewsSectionThree: React.FC = (): JSX.Element => {
  return (
    <section className="news-section-three">
      <div className="shape-21"></div>
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
              key={post.id}
              className="news-block2 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={post.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={260}
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
                        <i className="icon fa-solid fa-circle-user"></i>{" "}
                        {post.author}
                      </li>
                      <li>
                        <i className="icon fa fa-comment"></i> {post.comments}{" "}
                        Comment
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/page-blog-details">{post.title}</Link>
                    </h4>
                    <div className="text">{post.text}</div>
                  </div>

                  <div className="btn-box">
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

export default NewsSectionThree;
