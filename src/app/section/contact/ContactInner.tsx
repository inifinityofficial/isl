"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { submitWeb3Form } from '../../../utils/web3form';

type Status = { type: "success" | "error" | "info"; text: string } | null;

const ContactInner: React.FC = (): JSX.Element => {
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
        <>
    <section className="contact-section-five">
      <div className="outer-box">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div
              className="content-column col-xl-7 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2 className="text-reveal-anim">Contact With Us</h2>
                </div>
                <div className="contact-form-three">
                    <form method="post" onSubmit={handleSubmit} id="contact-form">
                        <div className="row">
                           <input type="hidden" name="access_key" value="79cd5a48-314a-46bc-9542-722ec0bdbb9e"/>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="text" id="Yname" name="Yname" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="email" id="Yemail" name="Yemail" placeholder="Email Address" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="tel" id="Ytel" name="Ytel" placeholder="Phone" required/>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                <textarea name="message" placeholder="Write a Message" required></textarea>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn btn-style-three upper" disabled={submitting}><span className="btn-title">{submitting ? "Sending..." : "Send Message"}</span></button>
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
            {/* Contact Info Column */}
            <div className="contact-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="inner-box">
                  <h6 className="title">Number</h6>
                  <div className="text">+92 323 5711406</div>
                </div>
               {/*  <div className="inner-box">
                  <h6 className="title">Address</h6>
                  <div className="text">4517 Washington Ave. Manchester,</div>
                  <div className="text">Kentucky 39495</div>
                </div> */}
                <div className="inner-box">
                  <h6 className="title">Email</h6>
                  <div className="text">contact@infinitysoftwarelabs.com</div>
                </div>
                <ul className="social-icon-four">
                  <li>
                    <Link href="https://www.linkedin.com/company/infinity-software-labs-official/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}
export default ContactInner
