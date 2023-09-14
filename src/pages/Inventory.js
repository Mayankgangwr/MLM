import React, { useEffect, useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import "./inventory.css";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Apicalls from "../DataProvider/Apicalls";
import { v4 as uuid } from "uuid";
const header = (
  <img
    alt="Card"
    src="https://primefaces.org/cdn/primereact/images/usercard.png"
  />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">
    <Button label="Save" icon="pi pi-check" />
    <Button
      label="Cancel"
      icon="pi pi-times"
      className="p-button-outlined p-button-secondary"
    />
  </div>
);
const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState(false);

  const handleGetProducts = (e) => {
    Apicalls.handleGetProducts()
      .then((response) => {
        setProducts(response.data);
        console.log("Product Add successfully", response.data);
      })
      .catch((error) => {
        console.error("Product Add failed", error);
      });
  };
  useEffect(() => {
    handleGetProducts();
  }, [1]);
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
        <div className="d-flex justify-content-center">
          {/*
           <Link to={`/`}>
            <i className="pi pi-arrow-left fs-6 p-2 m-2 fw-bold rounded btn"></i>
          </Link> 
          */}
          <p className="text-center fs-6 p-1 pb-0 my-0 fw-400 fst-italic fw-bold">
            All Products
          </p>
          {/* <div className="d-flex">
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
                style={{
                  borderRadius: "0px 13px 13px 0px",
                }}
              ></i>
            </div>
          </div> */}
        </div>
        {/*  Search button 

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
        */}
        <div className="row mx-1 p-0" style={{ marginBottom: "3.5rem" }}>
          {products.length > 0 &&
            products.map((el) => (
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 p-0 mt-5">
                <div key={el.id} className="pcard">
                  <Link to={`/`}>
                    <img
                      src={`./img/${el.imageUrl}`}
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
                    <div className="d-flex" style={{ gap: "3px" }}>
                      <span className="pro-price">{el.price}</span>
                      <span className="pro-mrp">{el.mrp}</span>
                    </div>
                  </div>
                </div>
                <i
                  className="pi pi-cart-plus"
                  onClick={() =>
                    Apicalls.handleAddCartItem({
                      ...el,
                      cartId: uuid(),
                      qty: 1,
                    })
                  }
                ></i>
              </div>
            ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Inventory;
