import React, { useEffect, useState } from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import { Link } from "react-router-dom";
import Banner from "./banner";
import Apicalls from "../DataProvider/Apicalls";

//import { useDispatch, useSelector } from "react-redux";
import Cat from "./cat";
const arr = [1, 2, 3, 4, 5];

const Home = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  // const users = useSelector((state) => state.addReducer.users);
  // const dispatch = useDispatch();
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
    const user = JSON.parse(localStorage.getItem("userData"));
    user && setUser(user);
  }, []);
  return (
    <>
      <Nav key={1} />
      <div className="main px-0">
        <Banner key={2} slider={products} />
        <p className="text-uppercase fs-6 p-1 pb-0 mt-1 mb-0 fst-italic fw-bold">
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
                  <Link to={`/pro_detail`}>
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
              </div>
            ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
