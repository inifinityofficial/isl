"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

const FunfactSectionFive: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="funfact-section-five">
      <div className="outer-box">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/assets/images/resource/home6.jpg)" }}
        ></div>

        {/* Video Box */}
        <div className="video-box">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            onClick={() => setOpen(true)}
          >
            <i className="icon fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default FunfactSectionFive;
