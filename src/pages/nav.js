import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { TieredMenu } from "primereact/tieredmenu";
const Nav = () => {
  const navigate = useNavigate();
  const links = ["home", "team", "inventory", "income", "profile"];
  const [islogged, setIslogged] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [user, setUser] = useState(null);
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
  useEffect(() => {
    let userData = null;
    userData = JSON.parse(localStorage.getItem("userData"));
    if (userData != null) {
      setUser(userData);
      setIslogged(true);
    }
  }, []);
  const NameAvtar = () => {
    const nameArr = user.user.name.split(" ");
    return (
      <>
        <div>{nameArr[0].charAt(0)}</div>
        <div
          style={{
            textTransform: "uppercase",
            transform: "scaleX(-1)",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {nameArr[1].charAt(0)}
        </div>
      </>
    );
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light-green py-4 px-0 m-pading fixed-top">
        <div className="container-fluid p-0">
          <Link className="navbar-brand mt-lg-2 d-mobile logo-6 ps-1" to="/">
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
                  <div
                    className="btn text-white p-0 m-0 mt-2 me-1"
                    style={{
                      width: "37.5px",
                      height: "37.5px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#512DA8",
                    }}
                  >
                    {!user.user.image ? (
                      isMenu ? (
                        <span
                          style={{
                            fontSize: "22px",
                            display: "flex",
                          }}
                          onClick={() => {
                            setIsMenu(!isMenu);
                          }}
                        >
                          <i className="pi pi-times"></i>
                        </span>
                      ) : (
                        <img
                          alt="user-img"
                          src="./img/b11.avif"
                          style={{
                            width: "37px",
                            height: "37px",
                            borderRadius: "50%",
                          }}
                          onClick={() => {
                            setIsMenu(!isMenu);
                          }}
                        />
                      )
                    ) : isMenu ? (
                      <span
                        style={{
                          fontSize: "22px",
                          display: "flex",
                        }}
                        onClick={() => {
                          setIsMenu(!isMenu);
                        }}
                      >
                        <i className="pi pi-times"></i>
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: "22px",
                          display: "flex",
                        }}
                        onClick={() => {
                          setIsMenu(!isMenu);
                        }}
                      >
                        {NameAvtar()}
                      </span>
                    )}

                    {isMenu ? (
                      <ul
                        className="dropdown-menu dropdown-menu-end d-block  bg-light shadow-2"
                        style={{
                          left: "auto",
                          right: "2px",
                          minWidth: "100px",
                          top: "41px",
                        }}
                      >
                        <li style={{ padding: "4px 0px" }}>
                          <Link
                            activeClassName="active"
                            to="/profile"
                            className="btn p-1 mt-0 pe-0 d-flex justify-content-start align-items-center"
                            style={{
                              flexDirection: "row",
                              gap: "8px",
                              marginLeft: "1rem",
                            }}
                          >
                            <i class="far fa-user"></i>
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li style={{ padding: "4px 0px" }}>
                          <Link
                            activeClassName="active"
                            to="/cart"
                            className="btn p-1 mt-0 pe-0 d-flex justify-content-start align-items-center"
                            style={{
                              flexDirection: "row",
                              gap: "8px",
                              marginLeft: "1rem",
                            }}
                          >
                            <i class="pi pi-shopping-cart"></i>
                            <span>Cart</span>
                          </Link>
                        </li>
                        {/* <li style={{ padding: "4px 0px" }}>
                          <Link
                            activeClassName="active"
                            to="/income"
                            className="btn p-1 mt-0 pe-0 d-flex justify-content-start align-items-center"
                            style={{
                              flexDirection: "row",
                              gap: "8px",
                              marginLeft: "1rem",
                            }}
                          >
                            <i class="fas fa-indian-rupee-sign"></i>
                            <span>Income</span>
                          </Link>
                        </li> */}
                        <li style={{ padding: "4px 0px" }}>
                          <div
                            className="btn p-1 mt-0 pe-0 d-flex justify-content-start text-capitalize align-items-center"
                            style={{
                              flexDirection: "row",
                              gap: "8px",
                              marginLeft: "1rem",
                              fontWeight: "300",
                              textAlign: "center",
                              boxShadow: "none",
                            }}
                            onClick={handleLogout}
                          >
                            <i class="fas fa-arrow-right-from-bracket"></i>
                            <span>Logout</span>
                          </div>
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
                  className="btn p-1 mt-2 pe-0 text-white gap-0"
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
