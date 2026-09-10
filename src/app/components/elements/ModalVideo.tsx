"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

interface ModalVideoProps {
  videoId?: string;
  channel?: "youtube" | "vimeo";
  autoplay?: boolean;
  buttonText?: string;
  buttonClassName?: string;
}

const ModalVideoComponent: React.FC<ModalVideoProps> = ({
  videoId = "L61p2uyiMSo",
  channel = "youtube",
  autoplay = true,
  buttonText = "VIEW DEMO",
  buttonClassName = "btn-primary",
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ModalVideo
        channel={channel}
        autoplay={autoplay}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <button className={buttonClassName} onClick={() => setOpen(true)}>
        {buttonText}
      </button>
    </div>
  );
};

export default ModalVideoComponent;
export { ModalVideoComponent as ModalVideo };
