import React from 'react';
import { Link } from "react-router-dom";
import "./Service.css";

export const Service = () => {
  // Array of service objects
  const services = [
    { title: "Electrical", description: "Reliable electrical services for installations and repairs." },
    { title: "Plumbing", description: "Expert plumbing services for residential and commercial needs." },
    { title: "Installation", description: "Professional installation services for all types of equipment." },
    { title: "Maintenance", description: "Regular maintenance services to keep your equipment running smoothly." },
    { title: "Television", description: "Television repair and installation services." },
    { title: "System", description: "Computer system repair and maintenance services." },
    { title: "AC", description: "Air conditioning installation and repair services." },
    { title: "RO", description: "RO water purifier installation and maintenance services." },
    { title: "Washing Machine", description: "Washing machine repair and maintenance services." },
    { title: "Refrigerator", description: "Refrigerator repair and maintenance services." },
    { title: "Microwave Oven", description: "Microwave oven repair and maintenance services." },
    { title: "Cleaning", description: "Professional cleaning services for homes and offices." },
  ];

  return (
    <>
      {/* Header Section */}
      <header className="container">
        <nav className="navbar">
          <h3 className="logo">
            <i className="fa-solid fa-gears"></i> LO<span>COs</span>
          </h3>
          <ul className="navbar-compo">
            <Link to="/" className="navcompo"><li className='scompo'>Home</li></Link>
            <li><a href="#footer" className="navcompo">About us</a></li>
            <Link to="/service" className="navcompo"><li className="scompo">Services</li></Link>
            <Link to="/techsignup" className="navcompo"><li className="scompo">Service Partner</li></Link>
            <li><a href="#footer" className="navcompo">Contact us</a></li>
            <li>
              <Link to="/userlogin">
                <button id="login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="services-page">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/userlogin"><button>Book Now</button></Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are dedicated to connecting talented freelancers with clients
              seeking top-notch services. Our platform ensures a seamless
              experience for both freelancers and clients through a secure and
              user-friendly environment.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/"><li><a href="#">Home</a></li></Link>
              <li><a href="#footer">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:support@locos.com">support@locos.com</a></li>
              <li>Phone: 123456789</li>
              <li>Address: 123 kk nagar, Madurai, India</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li><a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" aria-label="Twitter"><i className="fa-brands fa-square-x-twitter"></i></a></li>
              <li><a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Locos. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
