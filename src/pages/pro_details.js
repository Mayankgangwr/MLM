import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./pro_details.css";
const ProDetails = () => {
  const history = useNavigate();
  return (
    <>
      <div className="container-fluid p-0">
        <div className="prod-header fixed-top">
          <i
            className="pi pi-arrow-left prod-header-arrow-icon"
            onClick={() => history(-1)}
          ></i>
          <i className="fas fa-shopping-cart prod-header-cart-icon">
            <span>10000</span>
          </i>
        </div>
        <div className="prod-img-preview">
          <img alt="Image Preview" src="./img/prod1.png" />
        </div>
        <div className="prod-details">
          <span className="prod-title">T-Shart for man</span>
          <span className="prod-description">
            Check your build process. Make sure you are bundling and compiling
            your JavaScript and CSS files correctly using tools like webpack or
            create-react-app. Sometimes issues can arise from misconfigured
            build processes.
          </span>
        </div>
        <div className="fixed-bottom" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="prod-footer">
            <div className="prod-price">
              ₹900<span>₹1000</span>
            </div>

            <NavLink className="btn btn-dark prod-add-cart">
              <i class="fas fa-cart-plus " style={{ paddingRight: "4px" }}></i>
              Add to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProDetails;
