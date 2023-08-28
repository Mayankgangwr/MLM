import React, { useEffect, useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./banner";
import axios from "axios";

const arr = [1, 2, 3, 4, 5];
const Home = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        const slide = response.data.filter((item) => {
          return item.tag.includes("slider");
        });
        setSlider(slide);
      });
  }
  return (
    <>
      <Nav />
      <div className="container-fluid main px-0">
        <Banner slider={slider} />
        <p className="text-uppercase fs-6 p-1 pb-0 mb-0">Shop by Categories</p>
        <div className="row my-0 mx-1">
          {slider.length > 0 &&
            slider.map((el) => (
              <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 mt-2">
                <div className="circle">
                  <img src={el.img} alt="Circular Image" />
                </div>
                <span>Name</span>
              </div>
            ))}
          {slider.length > 0 &&
            slider.slice(0, 3).map((el) => (
              // <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 cat-block">
              //   <Link to={`/movie/${el.id}`}>
              //     <img src={el.img} className="cat-img" />
              //   </Link>
              // </div>
              <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 mt-2">
                <div className="circle">
                  <img src={el.img} alt="Circular Image" />
                </div>
                <span>Name</span>
              </div>
            ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Home;
