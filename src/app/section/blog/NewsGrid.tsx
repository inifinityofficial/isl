"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    image: "/assets/images/resource/news1-1.jpg",
    date: "20",
    month: "Jan",
    comments: 2,
    title: "10 Easy Strategies to Harness the Power of AI",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "",
  },
  {
    id: 2,
    image: "/assets/images/resource/news1-2.jpg",
    date: "26",
    month: "Jan",
    comments: 6,
    title: "Web Accessibility Not Just a Trend, Necessity",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "200ms",
  },
  {
    id: 3,
    image: "/assets/images/resource/news1-3.jpg",
    date: "30",
    month: "Jan",
    comments: 4,
    title: "The Power of Storytelling in Digital Branding",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "400ms",
  },
   {
    id: 4,
    image: "/assets/images/resource/news1-1.jpg",
    date: "20",
    month: "Jan",
    comments: 2,
    title: "10 Easy Strategies to Harness the Power of AI",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "",
  },
  {
    id: 5,
    image: "/assets/images/resource/news1-2.jpg",
    date: "26",
    month: "Jan",
    comments: 6,
    title: "Web Accessibility Not Just a Trend, Necessity",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "200ms",
  },
  {
    id: 6,
    image: "/assets/images/resource/news1-3.jpg",
    date: "30",
    month: "Jan",
    comments: 4,
    title: "The Power of Storytelling in Digital Branding",
    text: "There are many variations of passages of one Lorem Ipsum available",
    delay: "400ms",
  },
];

const NewsSectionTwo: React.FC = (): JSX.Element => {
  return (
    <section className="news-section-two">
      <div className="auto-container">
        <div className="row">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-blog-details">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={370}
                        height={250}
                      />
                    </Link>
                  </figure>
                  <div className="date-box">
                    <div className="date">{item.date}</div>
                    <div className="month">{item.month}</div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="content">
                    <ul className="post-meta">
                      <li>
                        <i className="icon fa fa-comment"></i> {item.comments} Comment
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/page-blog-details">{item.title}</Link>
                    </h4>
                    <div className="text">{item.text}</div>
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
