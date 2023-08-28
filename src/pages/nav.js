import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const links = ["home", "team", "inventory", "income", "profile"];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light-green py-4 px-0 m-pading fixed-top">
        <div className="container-fluid pe-0">
          <Link className="navbar-brand mt-lg-2 d-mobile logo-6" href="/">
            <h6>
              Agro<span>pean</span>
            </h6>
          </Link>
          <div className="ms-auto d-mobile" style={{ marginTop: "-4px" }}>
            <div className="col-20 nav-bottom-item">
              <NavLink
                activeClassName="active"
                to="/login"
                className="btn p-1"
                style={{ gap: "1px", color: "#fff" }}
              >
                <i class="pi pi-user"></i>
                <span>Login</span>
              </NavLink>
            </div>
            {/* <a className="text-reset fw-300 me-2" href="#">
              Login
            </a> */}
          </div>
          <div
            className="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand  mt-lg-2 logo-6" href="/">
              <h6>
                Agro<span>pean</span>
              </h6>
            </a>
            <ul className="navbar-nav ms-auto mb-lg-0">
              {links.map((el) => (
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize fw-300 text-white"
                    href={`/${el}`}
                  >
                    {el}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize fw-300 text-white"
                  href={`/login`}
                >
                  {`Login`}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
