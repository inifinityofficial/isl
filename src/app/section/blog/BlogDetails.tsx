import React from "react";
import Link from "next/link";
import { BlogPost, BlogFaq, blogPosts, getRelatedBlogPosts } from "../../data/blog";

interface BlogDetailsProps {
  post?: BlogPost;
  relatedPosts?: BlogPost[];
}

const formatDate = (value: string): string =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const BlogDetailsSection: React.FC<BlogDetailsProps> = ({ post, relatedPosts }): JSX.Element => {
  const article = post ?? blogPosts[0];
  const related = relatedPosts ?? getRelatedBlogPosts(article.slug);

  return (
    <section className="blog-details-section">
      <div className="auto-container">
        <div className="row">
          <div className="contents-column col-lg-8">
            <div className="blog-content">
              <h2 className="title">{article.title}</h2>
              <ul className="blog-author">
                <li className="autor-date">{formatDate(article.publishedAt)}</li>
                <li className="author-name">By {article.author}</li>
                <li className="author-comment">{article.category}</li>
                <li className="author-credit">{article.readingTime}</li>
              </ul>
            </div>

            <div className="expert-desc">
              <p>{article.excerpt}</p>
            </div>

            {article.sections.map((section, index) => (
              <div key={`${article.slug}-section-${index}`} className="blog-content2">
                {section.heading ? <h3 className="title">{section.heading}</h3> : null}
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <div className="expert-desc" key={`${article.slug}-paragraph-${index}-${paragraphIndex}`}>
                    <p>{paragraph}</p>
                  </div>
                ))}
                {section.list && section.list.length > 0 ? (
                  <ul className="list-style-two pt-15">
                    {section.list.map((item, itemIndex) => (
                      <li key={`${article.slug}-list-${index}-${itemIndex}`}>
                        <i className="fa fa-check-circle"></i> {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.callout ? (
                  <div className="blog-quote">
                    <p>{section.callout}</p>
                    <figure className="image"><img src="/assets/images/icons/quote.png" alt="Quote icon" /></figure>
                  </div>
                ) : null}
              </div>
            ))}

            {article.faq && article.faq.length > 0 ? (
              <div className="blog-content2 pt-30">
                <h3 className="title">Frequently asked questions</h3>
                <div className="accordion" style={{ marginTop: 20 }}>
                  {article.faq.map((item: BlogFaq, index: number) => (
                    <div className="accordion-item" key={`${article.slug}-faq-${index}`} style={{ marginBottom: 12, border: "1px solid #e7e7e7", padding: 12 }}>
                      <h4 className="title" style={{ margin: 0, fontSize: 18 }}>{item.question}</h4>
                      <p style={{ marginTop: 10, marginBottom: 0 }}>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="row blog-detail" style={{ marginTop: 30 }}>
              <div className="col-lg-12">
                <div className="blog-quote" style={{ marginBottom: 0 }}>
                  <p>
                    Need help building a more effective digital product or AI workflow? Explore our <Link href={article.serviceLink}>{article.serviceLabel}</Link> solutions built for faster execution and measurable business impact.
                  </p>
                  <figure className="image"><img src="/assets/images/icons/quote.png" alt="Quote icon" /></figure>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="blog-sidebar">
              <div className="widget widget_search">
                <div className="search">
                  <form action="/page-blog" method="get" role="search">
                    <input type="text" name="q" placeholder="Search articles" title="Search for:" required />
                    <button type="submit" className="icons">Search</button>
                  </form>
                </div>
              </div>

              <div className="blog-sidebar-area">
                <div className="blog-post">
                  <h3 className="title">Related Posts</h3>
                  <div className="recent-post-wrap">
                    {related.map((related) => (
                      <div className="recent-post" key={related.slug}>
                        <div className="post-content">
                          <h4 className="post-title">
                            <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                          </h4>
                          <div className="post-date">
                            <Link href={`/blog/${related.slug}`}>
                              <i className="icon far fa-folder-open"></i>{related.category}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="widget_tag_cloud">
                  <h3 className="title">Tags</h3>
                  <div className="tagcloud">
                    {article.tags.map((tag) => (
                      <Link href={`/page-blog?q=${encodeURIComponent(tag)}`} key={`${article.slug}-tag-${tag}`}>{tag}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
