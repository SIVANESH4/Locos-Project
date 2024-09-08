import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../assets/heroimg2.png";
import "./Techsignup.css";
export const Techsignup = () => {
  return (
    <>
      <body className="Partnersignuppagebody">
        <div className="partner-main-container">
          <form action="" className="partnersignupform">
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
            <label htmlFor="">Phone No</label>
            <br />
            <input type="text" required/>
            <br />
            <label htmlFor="">Services You Offer</label>
            <br />
            <select id="services-drop" name="services" required>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="television">Television</option>
              <option value="system">System</option>
              <option value="ac">AC</option>
              <option value="ro">RO</option>
              <option value="washing-machine">Washing Machine</option>
              <option value="refrigerator">Refrigerator</option>
              <option value="microwave-oven">Microwave Oven</option>
              <option value="cleaning">Cleaning</option>
            </select><br />
            <label htmlFor="">Address</label>
            <br />
            <textarea id="addresstextarea" rows="2" cols="40" required></textarea>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <input type="text" required/>
            <br />
            <br />
            <Link to="/techlogin">
              <button>Sign Up</button>
            </Link>
            <br />
            <p>
              Already have an account?{" "}
              <Link to="/techlogin">
                <span>Login</span>
              </Link>
            </p>
          </form>
          <div className="img-container">
            <h1>Grow With Us a Partner</h1>
            <img src={loginimg} alt="" />
          </div>
        </div>
      </body>
    </>
  );
};
