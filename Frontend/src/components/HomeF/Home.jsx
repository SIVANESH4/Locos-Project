import React from "react";
import "./Home.css";
import heroImg from "../../assets/heroimg.png";
import userEx from "../../assets/userexpi.png";
import howitworks from "../../assets/heroimg5.png";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      {/* Header Section */}
      <header className="container">
        <nav className="navbar">
          <h3 className="logo">
            <i class="fa-solid fa-gears"></i> LO<span>COs</span>
          </h3>
          <ul className="navbar-compo">
            <li>
              <a href="#" className="navcompo">
                Home
              </a>
            </li>
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
              <Link to="/userdashboard"><i
                class="fa-solid fa-circle-user"
              ></i></Link>
            </li> */}

            <li>
              <Link to="/userlogin">
                <button id="login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <main className="hero">
        <p>
          Hi there{" "}
          <i
            class="em em-wave"
            aria-role="presentation"
            aria-label="WAVING HAND SIGN"
          ></i>
        </p>
        <h1>
          Find the <span>Best Technicians</span>
        </h1>
        <h1>for Your Needs</h1>
        <p>
          Connect with local professionals for plumbing, electrical work,
          cleaning, and more
        </p>
        <img src={heroImg} alt="" id="heroimage" />
        <div className="cta-btn">
          <Link to="/usersignup">
            <button id="client-btn">Find Technicians</button>
          </Link>
          <Link to="/techsignup">
            <button id="worker-btn">Post a Job</button>
          </Link>
        </div>
      </main>
      {/* Beneficial Section */}
      <section id="benefit-section">
        <h2>Why Choose Us?</h2>
        <div id="cards-section">
          <div id="secure" className="cards">
            <i class="fa-solid fa-lock"></i>
            <h3>Secure Payments</h3>
            <p>
              Our platform ensures secure transactions with trusted payment
              gateways, protecting both freelancers and clients.
            </p>
          </div>
          <div id="prof" className="cards">
            <i class="fa-solid fa-user-tie"></i>
            <h3>Verified Professionals</h3>
            <p>
              We rigorously vet our freelancers to ensure you work with
              qualified and reliable professionals.
            </p>
          </div>
          <div id="talent" className="cards">
            <i class="fa-solid fa-ranking-star"></i>
            <h3>Quality Talent</h3>
            <p>
              Access a diverse pool of skilled freelancers with a range of
              expertise to meet your project needs.
            </p>
          </div>
          <div id="support" className="cards">
            <i class="fa-solid fa-user-clock"></i>
            <h3>24/7 Support</h3>
            <p>
              Our dedicated support team is available around the clock to assist
              with any queries or issues.
            </p>
          </div>
          <div id="communi" className="cards">
            <i class="fa-solid fa-phone-volume"></i>
            <h3>Easy Communication</h3>
            <p>
              Seamlessly communicate with freelancers and clients through our
              integrated messaging system.
            </p>
          </div>
          <div id="transparent" className="cards">
            <i class="fa-solid fa-comments"></i>
            <h3>Transparent Reviews</h3>
            <p>
              Read honest reviews and ratings from previous clients and
              freelancers to make informed decisions.
            </p>
          </div>
        </div>
      </section>
      {/* flexing section */}
      <section id="flexing">
        <ul>
          <li>
            <i class="fa-solid fa-users-gear"></i>
            <h3>100+</h3>
            <h5>Technicians</h5>
          </li>
          <li>
            <i class="fa-solid fa-users"></i>
            <h3>100+</h3>
            <h5>Customers</h5>
          </li>
          <li>
            <i class="fa-solid fa-gears"></i>
            <h3>100+</h3>
            <h5>Services</h5>
          </li>
        </ul>
      </section>
      {/* Testimonial section */}
      <section class="testimonials">
        <h2>What Our Users Say</h2>
        <img src={userEx} alt="" id="user-exp" />
        <div class="testimonial-cards">
          <div class="reviewcards">
            <p>
              "This platform helped me find high-quality freelancers for my
              project quickly and easily. The process was smooth and secure!"
            </p>
            <h4>Jane Doe</h4>
            <p>Client</p>
          </div>
          <div class="reviewcards">
            <p>
              "I was able to connect with amazing clients and work on exciting
              projects. The support team is also fantastic!"
            </p>
            <h4>John Smith</h4>
            <p>Freelancer</p>
          </div>
          <div class="reviewcards">
            <p>
              "The website is user-friendly, and I love the transparency in the
              review system. It's a great platform for freelancers and clients
              alike."
            </p>
            <h4>Emily Johnson</h4>
            <p>Client</p>
          </div>
          <div class="reviewcards">
            <p>
              "The best part is the 24/7 support. Whenever I had a question or
              needed assistance, help was just a message away."
            </p>
            <h4>Michael Lee</h4>
            <p>Freelancer</p>
          </div>
          <div class="reviewcards">
            <p>
              "I appreciate how easy it is to communicate with clients through
              the platform. It makes managing projects so much simpler."
            </p>
            <h4>Sarah Williams</h4>
            <p>Freelancer</p>
          </div>
          <div class="reviewcards">
            <p>
              "The secure payment system is a huge plus. I always feel confident
              that my payments are handled properly."
            </p>
            <h4>David Brown</h4>
            <p>Client</p>
          </div>
        </div>
      </section>
      {/* Sample Services section */}
      <section class="services">
        <h2>Our Services</h2>
        <div class="service-cards">
          <div class="service-card">
            <h3>Plumbing</h3>
            <p>
              Experienced plumbers ready to handle any issue, from leaks to
              installations.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service-card">
            <h3>Electrical</h3>
            <p>
              Certified electricians to assist with wiring, repairs, and
              installations.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service-card">
            <h3>Mechanical</h3>
            <p>Skilled mechanics for vehicle repairs, maintenance, and more.</p>
            <a href="#">Learn More</a>
          </div>
          <div class="service-card">
            <h3>Cleaning</h3>
            <p>
              Professional cleaners for homes, offices, and more, ensuring a
              spotless environment.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service-card">
            <h3>Landscaping</h3>
            <p>
              Expert landscapers to enhance your outdoor spaces and gardens.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service-card">
            <h3>Home Renovation</h3>
            <p>
              Transform your living space with our comprehensive renovation
              services.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section id="how-it-works">
        <h2>How It works</h2>
        <img src={howitworks} alt="" id="howitworksimg" />
        <div id="container">
          <div className="steps">
            <div className="circles">1</div>
            <h3>Sign Up</h3>
            <p>Create an account to get started.</p>
          </div>
          <div className="steps-even">
            <div className="circles-even">2</div>
            <h3>Post a Job or Find a Freelancer</h3>
            <p>Post your job or browse through freelancers.</p>
          </div>
          <div className="steps">
            <div className="circles">3</div>
            <h3>Connect and Collaborate</h3>
            <p>Start working with your chosen freelancer or client.</p>
          </div>
          <div className="steps-even">
            <div className="circles-even">4</div>
            <h3>Secure Payment</h3>
            <p>Complete transactions securely through our platform.</p>
          </div>
        </div>
      </section>
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
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#footer">About</a>
              </li>
              <Link to="/service">
                <li>
                  <a href="#">Services</a>
                </li>
              </Link>
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
  );
};
