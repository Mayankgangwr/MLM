import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid card login-card">
        <Link
          to="/"
          style={{ width: "100%", paddingLeft: "10px", marginTop: "10px" }}
        >
          <i className="pi pi-arrow-left" style={{ cursor: "pointer" }}></i>
        </Link>
        <form
          className="login-form"
          onSubmit={() => {
            alert("Login Successfull");
            navigate("/");
          }}
        >
          <div className="login-logo-block">
            {" "}
            <img alt="" src="./img/logo1.png" className="login-logo mx-auto" />
          </div>

          {/* <span className="login-header">Agro Pean</span> */}
          <div className="form-outline login-field">
            <input
              value={name}
              type="text"
              name="username"
              onChange={(e) => setName(e.target.value)}
              className="form-control login-field-input"
              autoComplete="off"
            />
            <label className="form-label">Username</label>
          </div>
          <div className="form-outline login-field mb-1">
            <input
              value={password}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control login-field-input"
              autoComplete="off"
            />
            <label className="form-label">Password</label>
          </div>
          <div className="text-end">
            <a href="#!">Forgot password?</a>
          </div>
          <div className="text-end my-4">
            <button
              type="submit"
              className="btn btn-rounded w-100"
              style={{
                backgroundColor: "#4158D0",
                backgroundImage:
                  "linear-gradient(63deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
