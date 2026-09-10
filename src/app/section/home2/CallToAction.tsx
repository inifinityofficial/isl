"use client";
import React, {useState} from "react";
import Image from "next/image";
import ModalVideo from 'react-modal-video';

const CallToActionTwo: React.FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="call-to-action-two pull-down">
      {/* Background Image */}
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/1.jpg)" }}
      ></div>

      <div className="auto-container">
        <div className="outer-box">
          {/* Animated Icon */}
          <div className="icon-30 bounce-y"></div>

          {/* Main Content */}
          <div className="content-box">
            <h2 className="title text-reveal-anim">
              Helping Your Businesses in a Smartest Way <br /> Possible
            </h2>

            {/* Play Reel Circle */}
            <div className="exp-box fade-up" style={{ animationDelay: "300ms" }}>
              <svg viewBox="0 0 100 100" width="100" height="100" className="circular-text">
                <defs>
                  <path
                    id="circle2"
                    d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath xlinkHref="#circle2">
                    PLAY REEL * PLAY REEL * PLAY REEL * PLAY REEL * PLAY REEL *
                  </textPath>
                </text>
              </svg>
              <div className="video-box">
                <a
                  onClick={() => setOpen(true)}
                  className="play-btn"
                  target="_blank"
                >
                  <i className="icon fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Review Info Boxes */}
          <div className="info-box">
            {[
              {
                logo: "/assets/images/icons/trustpilot.png",
                thumbs: [1, 2, 3, 4],
              },
              {
                logo: "/assets/images/icons/google.png",
                thumbs: [5, 6, 7, 8],
              },
            ].map((item, idx) => (
              <div className="info-box-inner" key={idx}>
                <div className="image">
                  <Image
                    src={item.logo}
                    alt="Platform Logo"
                    width={120}
                    height={40}
                  />
                </div>
                <div className="content">
                  <div className="author-images">
                    {item.thumbs.map((t) => (
                      <div className="thumb" key={t}>
                        <Image
                          src={`/assets/images/resource/thumb-${t}.jpg`}
                          alt={`Reviewer ${t}`}
                          width={50}
                          height={50}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="info">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                    <div className="text">450+ Reviews</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default CallToActionTwo;