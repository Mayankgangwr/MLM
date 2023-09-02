import React, { useEffect, useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./banner";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import Cat from "./cat";
const arr = [1, 2, 3, 4, 5];
const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "b1.webp",
      name: "Amritam",
    },
    {
      id: 2,
      img: "b2.webp",
      name: "Aura",
    },
    {
      id: 3,
      img: "b3.webp",
      name: "Balsahali",
    },
    {
      id: 4,
      img: "b4.avif",
      name: "Brinjal",
    },
    {
      id: 5,
      img: "b11.avif",
      name: "Brutal",
    },
    {
      id: 6,
      img: "b22.avif",
      name: "DAP",
    },
    {
      id: 7,
      img: "b33.avif",
      name: "Fresh",
    },
    {
      id: 8,
      img: "b44.avif",
      name: "Tomatoes",
    },
  ]);
  return (
    <>
      <Nav />
      <div className="main px-0">
        <Banner slider={products} />
        <p className="text-uppercase fs-6 p-1 pb-0 mt-2 mb-0 fst-italic fw-bold">
          Shop by Categories
        </p>
        <Cat slider={products} />
        <p className="text-uppercase fs-6 p-1 pb-0 mt-2 mb-0 fst-italic fw-bold">
          Popular Products
        </p>
        <div className="row mx-1 p-0 mb-5">
          {products.length > 0 &&
            products.map((el) => (
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 p-0 mt-5">
                <div key={el.id} className="pcard">
                  <Link to={`/`}>
                    <img
                      src={`./img/${el.img}`}
                      className="pro-img"
                      style={{ width: "92.5%" }}
                    />
                  </Link>
                  <p>{el.name}</p>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      lineHeight: "10px",
                      marginBottom: "5px",
                      fontSize: "11px",
                    }}
                  >
                    <i
                      class="fas fa-indian-rupee-sign"
                      style={{
                        fontSize: "11px",
                        marginRight: "2px",
                        lineHeight: "10px",
                      }}
                    ></i>
                    <span>123</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
