import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginimg from "../assets/loginpageimg.png";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
        {isLogin ? (
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
                  Don't have an account?{" "}
                  <span onClick={handleToggle}> Signup</span>
                </p>
              </form>
            </div>
            <div className="imgcontainer">
              <img src={loginimg} alt="" id="loginimg" />
            </div>
          </div>
        ) : (
          <div className="Main-container">
            <div className="Signup-container">
              <h1>Create your account</h1>
              <form action="" className="form">
                <label htmlFor="email">Email Address</label>
                <br />
                <input type="text" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" />
                <br />
                <label htmlFor="confirm-password">Confirm Password</label>
                <br />
                <input type="password" id="confirm-password" />
                <br />
                <label htmlFor="">Your Address</label>
                <br />
                <input type="text" id="address" />
                <br />
                <label htmlFor="">Pincode</label>
                <br />
                <input type="text" />
                <br />
                <button>Signup</button>
                <p>
                  Already have an account?{" "}
                  <span onClick={handleToggle}>Login</span>
                </p>
              </form>
            </div>
            <div className="imgcontainer">
              <img src={loginimg} alt="Signup" id="signupimg" />
            </div>
          </div>
        )}
    </>
  );
};
