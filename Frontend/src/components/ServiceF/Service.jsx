import React from 'react'
import { Link } from "react-router-dom";
import "./Service.css"
export const Service = () => {
  return (
    <>
    {/* Header Section */}
      <header className="container">
        <nav className="navbar">
          <h3 className="logo">
            <i class="fa-solid fa-gears"></i> LO<span>COs</span>
          </h3>
          <ul className="navbar-compo">
            <Link to="/" className="navcompo">
            <li className='scompo'>Home</li></Link>
            <li>
              <a href="#footer" className="navcompo">
                About us
              </a>
            </li>
            <Link to="/service" className="navcompo">
              <li className="scompo">Services</li>
            </Link>
            <Link to="/techsignup" className="navcompo">
              <li className="scompo">Service Partner</li>
            </Link>
            <li>
              <a href="#footer" className="navcompo">
                Contact us
              </a>
            </li>
            {/* <li id="profile">
              <i class="fa-solid fa-circle-user"></i>
            </li> 
            */}
            <li>
              <Link to="/login">
                <button id="login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* hero section */}
      <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>Electrical</h2>
          <p>Reliable electrical services for installations and repairs.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Plumbing</h2>
          <p>Expert plumbing services for residential and commercial needs.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Installation</h2>
          <p>Professional installation services for all types of equipment.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Maintenance</h2>
          <p>Regular maintenance services to keep your equipment running smoothly.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Television</h2>
          <p>Television repair and installation services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>System</h2>
          <p>Computer system repair and maintenance services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>AC</h2>
          <p>Air conditioning installation and repair services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>RO</h2>
          <p>RO water purifier installation and maintenance services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Washing Machine</h2>
          <p>Washing machine repair and maintenance services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Refrigerator</h2>
          <p>Refrigerator repair and maintenance services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Microwave Oven</h2>
          <p>Microwave oven repair and maintenance services.</p>
          <button>Book Now</button>
        </div>
        <div className="service-card">
          <h2>Cleaning</h2>
          <p>Professional cleaning services for homes and offices.</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
     {/* footer section */}
     <footer id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are dedicated to connecting talented freelancers with clients
              seeking top-notch services. Our platform ensures a seamless
              experience for both freelancers and clients through a secure and
              user-friendly environment
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
             <Link to="/">  <li>
                <a href="#">Home</a>
              </li></Link>
              <li>
                <a href="#footer">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                Email: <a href="mailto:support@locos.com">support@locos.com</a>
              </li>
              <li>Phone: 123456789</li>
              <li>Address: 123 kk nagar, Madurai, India</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="#" aria-label="Facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Locos. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
