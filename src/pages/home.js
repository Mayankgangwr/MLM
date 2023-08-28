import React, { useEffect, useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import { useNavigate } from "react-router-dom";
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
        <p className="text-capitalized">Shop by Categories</p>
        <div className="header">
          <div className="header-text">Header</div>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Home;
