"use client";
import React, { useState } from "react";
import BudgetRange from "../elements/BudgetRange";
import { submitWeb3Form } from "../../../utils/web3form";

type Status = { type: "success" | "error" | "info"; text: string } | null;

const ContactForm: React.FC = (): JSX.Element => {
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
      <div className="contact-form wow fadeInLeft">
        <div className="bg bg-pattern-1"></div>
        <h3 className="title">Request A Quote</h3>

        {/* Contact Form */}
        <form method="post" onSubmit={handleSubmit} id="contact-form">
          <div className="row">
            <input type="hidden" name="access_key" value="79cd5a48-314a-46bc-9542-722ec0bdbb9e" />
            <div className="form-group col-lg-6 col-md-6">
              <input type="text" name="first_name" placeholder="First Name" required />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <input type="text" name="phone" placeholder="Phone" required />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <input type="text" name="company" placeholder="Company" required />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <input type="text" name="address" placeholder="Address" required />
            </div>
            <div className="form-group col-lg-12">
              <BudgetRange />
            </div>
            <div className="form-group col-lg-12">
              <textarea name="message" placeholder="Message" required defaultValue={""} />
            </div>
            <div className="form-group col-lg-12">
              <button
                type="submit"
                className="theme-btn btn-style-one hvr-light"
                name="submit-form"
                disabled={submitting}
              >
                <span className="btn-title">{submitting ? "SUBMITTING..." : "SUBMIT REQUEST"}</span>
              </button>
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
    </>
  );
};

export default ContactForm;