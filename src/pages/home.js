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
      <div
        className="main px-0"
        style={{
          overflow: "scroll",
        }}
      >
        <Banner slider={slider} />
        <p className="text-uppercase fs-6 p-1 pb-0 my-2 fw-bold">
          Shop by Categories
        </p>
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
              <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 mt-2">
                <div className="circle">
                  <img src={el.img} alt="Circular Image" />
                </div>
                <span>Name</span>
              </div>
            ))}
        </div>
        <p className="text-uppercase fs-6 p-1 pb-0 my-2 fw-bold">
          Popular Products
        </p>
        <div className="row mx-1 p-0">
          {slider.length > 0 &&
            slider.map((el) => (
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 p-0 m-0">
                <div key={el.id} className="card mx-1 my-1">
                  <div className="card-body p-0">
                    <Link to={`/`}>
                      <img
                        src={`https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=996&t=st=1693219826~exp=1693220426~hmac=8706e521cf2b26ccc9af8e05b7d22b9aea32028dee41609a53c43a88a3b715d6`}
                        className="pro-img"
                      />
                    </Link>
                  </div>
                </div>
                <span>Pro Name</span>
              </div>
            ))}
          {slider.length > 0 &&
            slider.slice(0, 3).map((el) => (
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 p-0 m-0">
                <div key={el.id} className="card mx-1 my-1">
                  <div className="card-body p-0">
                    <Link to={`/`}>
                      <img
                        src={`https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=996&t=st=1693219826~exp=1693220426~hmac=8706e521cf2b26ccc9af8e05b7d22b9aea32028dee41609a53c43a88a3b715d6`}
                        className="pro-img"
                      />
                    </Link>
                  </div>
                </div>
                <span>Pro Name</span>
              </div>
            ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Home;
