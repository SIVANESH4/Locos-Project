import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginpageimg.png";
import "./Login.css";
export const Login = () => {
  return (
    <>
    <body className="loginpagebody">
          <div className="main-container">
          <form action="" className="loginform">
            <h1>Welcome Back</h1>
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <br />
            <p>
              Lost Password? <span>click here</span>
            </p>
            <br />
            <Link to="/"><button>Login</button></Link>
            <br />
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                <span>Signup</span>
              </Link>
            </p>
          </form>
          <div className="img-container">
            <img src={loginimg} alt="" />
          </div>
        </div>
        </body>
    </>
  );
};
