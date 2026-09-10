"use client";
import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import bgImage from "/public/assets/images/icons/img.jpg";

const FunfactSectionThree: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="funfact-section-three relative">
      {/* Pattern background */}
      <div className="bg bg-pattern-16"></div>

      <div className="outer-box relative">
        {/* Background shape */}
        <div className="bg-shape relative">
          <div
            className="bg bg-image absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="auto-container relative z-10">
          <div className="video-box text-center">
            {/* Video play button */}
            <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"
                onClick={() => setOpen(true)}>
                <i className="icon fa fa-play"
                aria-hidden="true">
                </i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default FunfactSectionThree;
