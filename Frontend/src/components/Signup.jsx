import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginpageimg.png";
import "./Signup.css";
export const Signup = () => {
  return (
    <>
    <body className="Signuppagebody">
          <div className="main-container">
          <form action="" className="signupform">
            <h1>Create an Account</h1>
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" />
            <br />
            <label htmlFor="">Address</label>
            <br />
            <textarea  id="addresstextarea" rows="2" cols="40"></textarea>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <input type="text" />
            <br />
            <br />
            <Link to="/"><button>Sign Up</button></Link>
            <br />
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span>Login</span>
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
