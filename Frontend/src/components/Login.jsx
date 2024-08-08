import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import loginimg from "../assets/loginpageimg.png";
export const Login = () => {
  return (
    <>
        <div className="Main-container">
          <div className="Login-container">
            <h1>Welcome back! </h1>
            <form action="" className="form">
              <label htmlFor="">Email Address</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="password" />
              <br />
              <br />
              <p>
                Lost password? <span> Forgot password</span>
              </p>
              <button>Login</button>
              <p>
                Don't have an account? <span> Signup</span>
              </p>
            </form>
          </div>
          <div className="imgcontainer">
            <img src={loginimg} alt="" id="loginimg" />
          </div>
        </div>
    </>
  );
};
