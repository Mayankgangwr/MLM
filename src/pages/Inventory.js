import React, { useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import "./inventory.css";
import { Link } from "react-router-dom";
const Inventory = () => {
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
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState(false);
  const filterPro = (inp) => {
    const val = inp.target.value;

    products.filter((pro) => pro.name.indexOf(val));
  };

  if (sort) {
    products.sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    products.sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  return (
    <>
      <Nav />
      <div className="main px-0">
        <div className="d-flex justify-content-between">
          <Link to={`/`}>
            <i className="pi pi-arrow-left fs-6 p-2 m-2 fw-bold rounded btn"></i>
          </Link>
          <p className="text-center fs-6 p-1 pb-0 my-2 fw-400">All Products</p>
          <div className="d-flex">
            <i
              className="pi pi-search fs-6 p-2 m-2 fw-bold rounded btn"
              onClick={() => {
                setShow(!show);
              }}
            ></i>
            <div
              className={
                show
                  ? "input-group bg-light search px-2"
                  : "input-group bg-light search px-2 d-none"
              }
            >
              <input
                type="search"
                className="form-control shadow"
                placeholder="Search"
                onKeyUp={filterPro}
                style={{ borderRadius: "13px 0px 0px 13px" }}
              />
              <i
                className="pi pi-times shadow d-grid place-items-center input-group-text"
                onClick={() => {
                  setShow(!show);
                }}
                style={{ borderRadius: "0px 13px 13px 0px" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="d-flex mt-2 mb-0 px-2 justify-content-between">
          <button
            className="btn rounded-2 py-2 px-4"
            onClick={() => {
              setSort(!sort);
            }}
          >
            <i
              className={
                sort ? "pi pi-sort-alpha-up me-2" : "pi pi-sort-alpha-down me-2"
              }
            ></i>
            Sort
          </button>
          <button className="btn rounded-2 py-2 px-4">
            <i className="pi pi-sliders-h me-2"></i>
            Filter
          </button>
        </div>
        <div className="row mx-1 p-0" style={{marginBottom: '3.5rem'}}>
          {products.length > 0 &&
            products.map((el) => (
              // <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 p-0">
              //   {/* <div key={el.id} className="pcard">
              //     <img className="pro-img" src={`./img/chair.png`} />
              //     <p>{el.name}</p>
              //     <div
              //       className="d-flex align-items-center"
              //       style={{ lineHeight: "10px", marginBottom: "5px" }}
              //     >
              //       <i
              //         class="fas fa-indian-rupee-sign"
              //         style={{ fontSize: "13px", marginRight: "2px" }}
              //       ></i>
              //       <span>000</span>
              //     </div>
              //   </div> */}
              //   {/* <div key={el.id} className="card m-1">
              //     <div className="card-body p-0">
              //       <Link to={`/`}>
              //         <img
              //           src={`./img/chair.png`}
              //           className="slider-img"
              //           style={{ height: "100px" }}
              //         />
              //       </Link>
              //     </div>
              //   </div> */}
              // </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 p-0 mt-5">
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
                    style={{ lineHeight: "10px", marginBottom: "5px" }}
                  >
                    <i
                      class="fas fa-indian-rupee-sign"
                      style={{ fontSize: "13px", marginRight: "2px" }}
                    ></i>
                    <span>000</span>
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

export default Inventory;
