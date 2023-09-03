import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { TieredMenu } from "primereact/tieredmenu";
const Nav = () => {
  const links = ["home", "team", "inventory", "income", "profile"];
  const [islogged, SetIslogged] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light-green py-4 px-0 m-pading fixed-top">
        <div className="container-fluid p-0">
          <Link className="navbar-brand mt-lg-2 d-mobile logo-6 ps-1" href="/">
            <img
              alt="logo"
              src="./img/logo.png"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </Link>
          <div className="ms-auto d-mobile" style={{ marginTop: "-4px" }}>
            <div className="col-20 nav-bottom-item">
              {islogged ? (
                <>
                  <div className="btn p-1 mt-0 pe-0 me-1 text-white gap-0">
                    <img
                      alt="user-img"
                      src="./img/b11.avif"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                      }}
                      onClick={() => {
                        setIsMenu(!isMenu);
                      }}
                    />
                    {isMenu ? (
                      <ul
                        className="dropdown-menu dropdown-menu-end d-block  bg-light shadow-2"
                        style={{
                          left: "auto",
                          right: "2px",
                          minWidth: "100px",
                          top: "35px",
                        }}
                      >
                        <li>
                          <Link
                            className="dropdown-item text-capitalize"
                            to={`/profile`}
                          >
                            {`Profile`}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-capitalize"
                            to={`/cart`}
                          >
                            {`Cart`}
                          </Link>
                          <Link
                            className="dropdown-item text-capitalize"
                            to={`/income`}
                          >
                            {`Income`}
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ) : (
                <NavLink
                  activeClassName="active"
                  to="/login"
                  className="btn p-1 mt-0 pe-0 text-white gap-0"
                >
                  <i class="pi pi-user"></i>
                  <span>Login</span>
                </NavLink>
              )}
              {/* <NavLink
                activeClassName="active"
                to="/cart"
                className="btn p-1 mt-0 pe-0 text-white gap-0 d-none"
              >
                <i class="pi pi-shopping-cart"></i>
                <span>Cart</span>
              </NavLink> */}
            </div>
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
              {links
                .filter((el) => el !== "income")
                .map((el) => (
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
