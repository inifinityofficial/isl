"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "../../data/blog";

const NewsSectionTwo: React.FC = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = (searchParams?.get("q") || "").trim().toLowerCase();

  const visiblePosts = blogPosts
    .filter((post) => {
      if (!query) {
        return true;
      }

      const haystack = [
        post.title,
        post.excerpt,
        post.category,
        post.primaryKeyword,
        ...post.secondaryKeywords,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <section className="news-section-two">
      <div className="auto-container">
        <div className="row">
          {visiblePosts.length > 0 ? (
            visiblePosts.map((item, index) => (
              <div
                key={item.id}
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={index % 3 === 0 ? "" : `${index * 120}ms`}
              >
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content">
                      <ul className="post-meta">
                        <li>
                          <i className="icon fa fa-folder-open"></i> {item.category}
                        </li>
                        <li>
                          <i className="icon fa fa-calendar"></i> {new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <div className="text">{item.excerpt}</div>
                    </div>
                    <div className="btn-box">
                      <Link href={`/blog/${item.slug}`} className="text">
                        Read More
                      </Link>
                      <Link href={`/blog/${item.slug}`} className="readmore">
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <div className="alert alert-info mb-0">No blog articles matched your search.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSectionTwo;
