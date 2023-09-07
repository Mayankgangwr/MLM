import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("prince@gmail.com");
  const [password, setPassword] = useState("Prince@99");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    debugger;
    axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Login successful", response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <>
      <div className="container-fluid card login-card">
        <Link
          to="/"
          style={{ width: "100%", paddingLeft: "10px", marginTop: "10px" }}
        >
          <i className="pi pi-arrow-left" style={{ cursor: "pointer" }}></i>
        </Link>
        <div className="login-form">
          <div className="login-logo-block">
            {" "}
            <img alt="" src="./img/logo1.png" className="login-logo mx-auto" />
          </div>

          {/* <span className="login-header">Agro Pean</span> */}
          <div className="form-outline login-field">
            <input
              value={email}
              type="text"
              name="email"
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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
              onClick={() => {
                handleLogin();
              }}
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
        </div>
      </div>
    </>
  );
};
export default Login;
