import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Outlet, Link, useParams } from "react-router-dom";
import "./banner.css";
const settings = {
  infinite: true,
  draggAble: true,
  swipeAble: true,
  customTransition: "all ease 3.5s",
  transitionDuration: 0,
  showDots: false,
  arrows: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 3500,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 12, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  },
};
const Cat = ({ slider }) => {
  return (
    <>
      <div className="container-fluid banner pb-1 px-0">
        <div className="col-12 d-mobile p-0 m-0">
          <Carousel {...settings}>
            {slider.length > 0 &&
              slider.map((el) => (
                <div
                  className="mt-2 text-center d-flex align-items-center justify-content-center"
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="circle">
                    <img src={`./img/${el.img}`} alt="Circular Image" />
                  </div>
                  <span>{el.name}</span>
                </div>
              ))}
          </Carousel>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Cat;
