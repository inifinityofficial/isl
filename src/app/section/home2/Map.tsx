"use client";
import React from "react";
import Link from "next/link";

const MapSection: React.FC = (): JSX.Element => {
  return (
    <section className="map-section">
      <div className="auto-container">
        <div className="content">
          <div className="contact-list-box">
            <h5 className="title">Contact Info</h5>
            <ul className="contact-list-three">
             {/*  <li>
                <div className="icon-box">
                  <i className="icon fa fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  Gregory Cartwright, 4059 Carling Avenue, Ugglebarnby
                </div>
              </li> */}
              <li>
                <div className="icon-box">
                  <i className="icon fal fa-phone"></i>
                </div>
                <div className="text">
                  <Link href="tel:+923235711406">+92 323 5711406</Link>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <i className="icon fal fa-envelope"></i>
                </div>
                <div className="text">
                  <Link href="mailto:contact@infinitysoftwarelabs.com">contact@infinitysoftwarelabs.com</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1789037537357!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;