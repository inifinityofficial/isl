"use client";

import React, { useState } from "react";
import Image from "next/image";
import { submitWeb3Form } from "../../../utils/web3form";

type Status = { type: "success" | "error" | "info"; text: string } | null;

const ContactSectionThree: React.FC = (): JSX.Element => {
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ type: "info", text: "Please wait..." });
    setSubmitting(true);
    try {
      const message = await submitWeb3Form(form);
      setStatus({ type: "success", text: message });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong!",
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="contact-section-three">
      <div className="outer-box">
        <div className="bg bg-pattern-18"></div>
        <div className="shape-33"></div>
        <div className="auto-container">
          <div className="row">
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <Image
                    src="/assets/images/resource/contact-img.jpg"
                    alt="Contact"
                    width={600}
                    height={500}
                  />
                </figure>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="sub-title">Contact us</div>
                  <h2 className="text-reveal-anim">Get in Touch</h2>
                </div>
                {/* Contact Form */}
                <div className="contact-form-two">
                  <form
                    onSubmit={handleSubmit}
                    id="contact-form"
                    method="post">
                    <div className="row">
                       <input type="hidden" name="access_key" value="79cd5a48-314a-46bc-9542-722ec0bdbb9e"/>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          id="Yname"
                          name="Yname"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="email"
                          id="Yemail"
                          name="Yemail"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          id="Ysubject"
                          name="Ysubject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="tel"
                          id="Ytel"
                          name="Ytel"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          name="message"
                          placeholder="Write a Message"
                          required
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="btn-box">
                          <button type="submit" className="theme-btn-main" disabled={submitting}>
                            <span className="theme-btn-arrow-left">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                            <span className="theme-btn">{submitting ? "Sending..." : "Send a message"}</span>
                            <span className="theme-btn-arrow-right">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {status && (
                      <div className={`w3f-status show ${status.type}`}>
                        {status.type === "success" ? <i className="fa fa-check-circle"></i> : null}
                        {status.type === "error" ? <i className="fa fa-exclamation-circle"></i> : null}
                        {status.type === "info" ? <i className="fa fa-spinner fa-spin"></i> : null}
                        {status.text}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionThree;
