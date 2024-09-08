import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../assets/loginpageimg.png";
import "./Usersignup.css";
export const Usersignup = () => {
  return (
    <>
    <body className="Signuppagebody">
          <div className="main-container">
          <form action="" className="signupform">
            <h1>Create an Account</h1>
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" required/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" required/>
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" required/>
            <br />
            <label htmlFor="">Address</label>
            <br />
            <textarea  id="addresstextarea" rows="2" cols="40" required></textarea>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <input type="text" required/>
            <br />
            <br />
            <Link to="/userlogin"><button>Sign Up</button></Link>
            <br />
            <p>
              Already have an account?{" "}
              <Link to="/userlogin">
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
