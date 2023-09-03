import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import "primeicons/primeicons.css";

const BottomNav = () => {
  return (
    <>
      <div className="container-fluid d-mobile bg-light-grey px-0 m-pading fixed-bottom">
        <div className="row">
          <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" className={`btn p-1`} to="/">
              <i className="pi pi-home"></i>
              <span>Home</span>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink
              activeClassName="active"
              className={`btn p-1`}
              to="/inventory"
            >
              <i className="pi pi-shopping-bag"></i>
              <span>Inventory</span>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" to="/team" className="btn p-1">
              <i class="fas fa-users"></i>
              <span>Team</span>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" to="/orders" className="btn p-1">
              <i class="pi pi-gift"></i>
              <span>Orders</span>
            </NavLink>
          </div>
          {/* Hide Income tab for some time */}
          {/* <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" to="/income" className="btn p-1">
              <i class="fas fa-indian-rupee-sign"></i>
              <span>Income</span>
            </NavLink>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default BottomNav;
