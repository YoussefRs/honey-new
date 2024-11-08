import React, { useState } from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import honey from "../../../assets/home/honey.png";
import low from "../../../assets/home/low.png";
import Ddivider from "../divider/Ddivider";

function Testimonials() {
  const testimonials = [
    {
      name: "Jamie McLauren",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam deserunt. Dolore minima ex asperiores",
    },
    {
      name: "Jamie McLauren",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam deserunt. Dolore minima ex asperiores",
    },
    {
      name: "Jamie McLauren",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam deserunt. Dolore minima ex asperiores",
    },
    {
      name: "Jamie McLauren",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam deserunt. Dolore minima ex asperiores",
    },
    {
      name: "Jamie McLauren",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam deserunt. Dolore minima ex asperiores",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(3);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    onBreakpoint: (breakpoint) => {
      // Adjust currentSlidesToShow based on breakpoint
      if (breakpoint >= 1400) {
        setCurrentSlidesToShow(3);
      } else if (breakpoint >= 1200) {
        setCurrentSlidesToShow(2);
      } else {
        setCurrentSlidesToShow(1);
      }
    },
  };

  // Function to determine if the slide is in the middle
  const isMiddleSlide = (index) => {
    const middleIndex = activeSlide + Math.floor(currentSlidesToShow / 2); // Calculate the middle index dynamically
    return index === middleIndex;
  };

  return (
    <div className="testimonials-container">
      <div className="px-5">
        <div className="slider-container">
          <Ddivider />
          <h2>Testimony</h2>
          <img style={{ maxWidth: 287 }} src={low} />
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={isMiddleSlide(index) ? "active" : "blur"}
              >
                <div className="wrapper">
                  <div className="profile-card js-profile-card">
                    <div className="profile-card__cnt js-profile-cnt">
                      <div className="profile-card__name">
                        {testimonial.name}
                      </div>
                      <div className="profile-card__txt">
                        {testimonial.text}
                      </div>
                      <div className="profile-card__txt">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_487_503)">
                            <path
                              d="M5.17831 7.82605L7.90184 9.46853L7.18129 6.37085L9.58532 4.28765L6.41625 4.01573L5.17831 1.09521L3.94039 4.01573L0.771301 4.28765L3.17533 6.37085L2.45478 9.46853L5.17831 7.82605Z"
                              fill="#DAA05D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_487_503">
                              <rect
                                width="8.81402"
                                height="8.81402"
                                fill="white"
                                transform="translate(0.771301 0.874756)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_487_503)">
                            <path
                              d="M5.17831 7.82605L7.90184 9.46853L7.18129 6.37085L9.58532 4.28765L6.41625 4.01573L5.17831 1.09521L3.94039 4.01573L0.771301 4.28765L3.17533 6.37085L2.45478 9.46853L5.17831 7.82605Z"
                              fill="#DAA05D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_487_503">
                              <rect
                                width="8.81402"
                                height="8.81402"
                                fill="white"
                                transform="translate(0.771301 0.874756)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_487_503)">
                            <path
                              d="M5.17831 7.82605L7.90184 9.46853L7.18129 6.37085L9.58532 4.28765L6.41625 4.01573L5.17831 1.09521L3.94039 4.01573L0.771301 4.28765L3.17533 6.37085L2.45478 9.46853L5.17831 7.82605Z"
                              fill="#DAA05D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_487_503">
                              <rect
                                width="8.81402"
                                height="8.81402"
                                fill="white"
                                transform="translate(0.771301 0.874756)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_487_503)">
                            <path
                              d="M5.17831 7.82605L7.90184 9.46853L7.18129 6.37085L9.58532 4.28765L6.41625 4.01573L5.17831 1.09521L3.94039 4.01573L0.771301 4.28765L3.17533 6.37085L2.45478 9.46853L5.17831 7.82605Z"
                              fill="#DAA05D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_487_503">
                              <rect
                                width="8.81402"
                                height="8.81402"
                                fill="white"
                                transform="translate(0.771301 0.874756)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_487_503)">
                            <path
                              d="M5.17831 7.82605L7.90184 9.46853L7.18129 6.37085L9.58532 4.28765L6.41625 4.01573L5.17831 1.09521L3.94039 4.01573L0.771301 4.28765L3.17533 6.37085L2.45478 9.46853L5.17831 7.82605Z"
                              fill="#DAA05D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_487_503">
                              <rect
                                width="8.81402"
                                height="8.81402"
                                fill="white"
                                transform="translate(0.771301 0.874756)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="bottom-image-container">
                        <img src={honey} alt="profile" class="bottom-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
