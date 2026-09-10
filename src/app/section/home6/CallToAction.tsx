"use client";
import React from "react";
import {useState} from "react";
import ModalVideo from 'react-modal-video';


const reviewsData = [
  {
    icon: "/assets/images/icons/trustpilot.png",
    thumbs: [
      "/assets/images/resource/thumb-1.jpg",
      "/assets/images/resource/thumb-2.jpg",
      "/assets/images/resource/thumb-3.jpg",
      "/assets/images/resource/thumb-4.jpg",
    ],
    rating: 4,
    totalReviews: 450,
  },
  {
    icon: "/assets/images/icons/google.png",
    thumbs: [
      "/assets/images/resource/thumb-5.jpg",
      "/assets/images/resource/thumb-6.jpg",
      "/assets/images/resource/thumb-7.jpg",
      "/assets/images/resource/thumb-8.jpg",
    ],
    rating: 4,
    totalReviews: 450,
  },
];

const CallToActionFive: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="call-to-action-five pull-down">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/1.jpg)" }}
      ></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="icon-30 bounce-y"></div>
          <div className="content-box">
            <h2 className="title text-reveal-anim">
              Helping Your Businesses in a Smartest Way <br />
              Possible
            </h2>
            <div className="exp-box wow fadeInUp" data-wow-delay="300ms">
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                className="circular-text">
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
                  data-fancybox="gallery"
                  data-caption="">
                  <i className="icon fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-box">
            {reviewsData.map((review, index) => (
              <div className="info-box-inner" key={index}>
                <div className="image">
                  <img src={review.icon} alt="Image" />
                </div>
                <div className="content">
                  <div className="author-images">
                    {review.thumbs.map((thumb, i) => (
                      <div className="thumb" key={i}>
                        <img src={thumb} alt="Image" />
                      </div>
                    ))}
                  </div>
                  <div className="info">
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={i < review.rating ? "fas fa-star" : "fal fa-star"}
                        ></i>
                      ))}
                    </div>
                    <div className="text">{review.totalReviews}+ Reviews</div>
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

export default CallToActionFive;
