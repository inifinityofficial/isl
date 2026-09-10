"use client";
import React from "react";
import Link from "next/link";

const BlogDetailsSection: React.FC = (): JSX.Element => {
  return (
    <section className="blog-details-section">
        <div className="auto-container">
            <div className="row">
                <div className="contents-column col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-content">
                                <h2 className="title">Behind the Pixels Meet the Creative </h2>
                                <ul className="blog-author">
                                    <li className="autor-date">October 23,2026</li>
                                    <li className="author-name">By Jaka smid</li>
                                    <li className="author-comment">Do it yourself</li>
                                    <li className="author-credit">Business.creative.computer</li>
                                </ul>
                            </div>
                            <div className="image-box">
                                <figure className="image"><Link href="page-blog-details"><img src="/assets/images/resource/blg-details.jpg" alt="Image"/></Link></figure>
                            </div>
                            <ul className="blog-author-coment">
                                    <li className="autor-like"><i className="icon far fa-heart"></i> 0 Likes</li>
                                    <li className="author-coment"><i className="icon far fa-comments"></i> Comments (05)</li>
                                </ul>
                            <div className="expert-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore to
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .At
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="expert-desc">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                            </div>
                            <div className="blog-quote">
                                <p>Crafting compelling digital experiences that captivate audiences and  drive meaningful connections. Our digital agency combines innovation,  strategy, and expertise to fuel your online success.</p>
                                <figure className="image"><img src="/assets/images/icons/quote.png" alt="Image"/></figure>
                            </div>
                            <div className="blog-content2">
                                <h3 className="title">Latest News more Information</h3>
                            </div>
                            <div className="expert-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore to
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .At
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="expert-desc">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-contents pt-15">
                                        <h3 className="title">Important Details</h3>
                                    </div>
                                    <ul className="list-style-two pt-15">
                                        <li><i className="fa fa-check-circle"></i> Spa services are all about relaxation</li>
                                        <li><i className="fa fa-check-circle"></i> Beauty services, on the other tend to focus</li>
                                        <li><i className="fa fa-check-circle"></i> Treatments to enhance your natural beauty.</li>
                                        <li><i className="fa fa-check-circle"></i> Designed to provide moisture to dry</li>
                                        <li><i className="fa fa-check-circle"></i> For theatrical performances or Halloween</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image-box pt-25">
                                        <figure className="image"><img src="/assets/images/resource/blg-d.jpg" alt="Image"/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog-detail">
                                <div className="col-lg-4">
                                    <div className="icon-inner-box">
                                        <i className="icon fa fa-arrow-left"></i>
                                        <div className="content-box">
                                            <h5 className="title">Previous post</h5>
                                            <h6 className="title2">Our passion, your success</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="social-icon-five">
                                        <li><Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <div className="icon-inner-box">
                                        <div className="content-box">
                                            <h5 className="title">Next post</h5>
                                            <h6 className="title2">Worth of standard</h6>
                                        </div>
                                        <i className="icon fa fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-comment">
                                <h3 className="title">1 Comment</h3>
                                <div className="blog-details-comment-thumb">
                                    <img src="/assets/images/resource/blg-author.png" alt="autor"/>
                                </div>

                                <div className="blog-details-comment-content">
                                    <h5 className="name">Firoj Ahmed</h5>
                                    <span className="blg-date">12 August, 2026</span>
                                    <p>However, here are some well-regarded car dealerships known for their  customer service,<br/> inventory, and overall reputation. It’s always a good  idea to research
                                    </p>
                                    <div className="blog-details-comment-reply">
                                    <Link href="#">Reply</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-title">
                        <h3 className="title">Write your comment</h3>
                    </div>
                    <div className="contact-form-four">
                        <form method="post" action="#" id="contact-form">
                            <div className="row">
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <textarea name="message" placeholder="Write a Message" required></textarea>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" id="Yname" name="Yname" placeholder="Your Name" required/>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" id="Yemail" name="Yemail" placeholder="Email Address" required/>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="btn-box">
                                        <button className="theme-btn btn-style-five"><span className="btn-title">send here</span></button>
                                        <Link href="page-contact.html" className="readmore"></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            <div className="col-lg-4">
                <div className="blog-sidebar">
                        <div className="widget widget_search">
                        <div className="search">
                            <form action="#" method="post">
                                <input type="text" name="s" placeholder="Type Here" title="Search for:" required/>
                                <button type="submit" className="icons">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="blog-sidebar-area">
                        <div className="blog-post">
                            <h3 className="title">Recent Posts</h3>
                            <div className="recent-post-wrap">
                                <div className="recent-post">
                                    <div className="post-img">
                                        <Link href="page-blog-details"><img src="/assets/images/resource/sidebar.jpg" alt="post img"/></Link>
                                    </div>
                                    <div className="post-content">
                                        <h4 className="post-title"><Link href="page-blog-details">We deliver extraordinary spa treatments.</Link></h4>
                                        <div className="post-date">
                                            <Link href="page-blog-details"><i className="icon far fa-folder-open"></i>Category</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-post">
                                    <div className="post-img">
                                        <Link href="page-blog-details"><img src="/assets/images/resource/sidebar2.jpg" alt="post img"/></Link>
                                    </div>
                                    <div className="post-content">
                                        <h4 className="post-title"><Link href="page-blog-details">We deliver extraordinary spa treatments.</Link></h4>
                                        <div className="post-date">
                                            <Link href="page-blog-details"><i className="icon far fa-folder-open"></i>Category</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-post">
                                    <div className="post-img">
                                        <Link href="page-blog-details"><img src="/assets/images/resource/sidebar3.jpg" alt="post img"/></Link>
                                    </div>
                                    <div className="post-content">
                                        <h4 className="post-title"><Link href="page-blog-details">We deliver extraordinary spa treatments.</Link></h4>
                                        <div className="post-date">
                                            <Link href="page-blog-details"><i className="icon far fa-folder-open"></i>Category</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-media">
                            <h3 className="title">Social Media</h3>
                            <ul>
                                <li><i className="icon fab fa-instagram"></i>By Rovert</li>
                                <p className="text">Instralation accecories of tyree  of readroom starline of shits ofline by
                                at http/www.tweeter feeds/story.</p>
                            </ul>
                            <ul>
                                <li><i className="icon fab fa-instagram"></i>By Steven</li>
                                <p className="text">Instralation accecories of tyree  of readroom starline of shits ofline by
                                at http/www.tweeter feeds/story.</p>
                            </ul>
                            <ul>
                                <li><i className="icon fab fa-instagram"></i>By Richard</li>
                                <p className="text">Instralation accecories of tyree  of readroom starline of shits ofline by
                                at http/www.tweeter feeds/story.</p>
                            </ul>
                        </div>
                        <div className="blog-categories">
                            <h3 className="title">Archive</h3>
                            <ul>
                                <li>
                                    <Link href="#">January 2025</Link> <span>(16)</span>
                                </li>
                                <li>
                                    <Link href="#">February 2025</Link> <span>(12)</span>
                                </li>
                                <li>
                                    <Link href="#">March 2025</Link> <span>(8)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="widget_tag_cloud">
                          <h3 className="title">Tags</h3>
                          <div className="tagcloud">
                            <Link href="page-blog-details">Elevate</Link> <Link href="page-blog-details">Technology</Link> <Link href="page-blog-details">Industry</Link> <Link href="page-blog-details">Marketing</Link> <Link href="page-blog-details">Creatix</Link> <Link href="page-blog-details">Design</Link>
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
