import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = ({ currentSection, setCurrentSection }) => {
  return (
    <div className="sidebar">
      <h3 className="logo">
        <i class="fa-solid fa-screwdriver-wrench"></i> LOCOS
      </h3>
      <ul>
        <li
          className={currentSection === "Dashboard" ? "active" : ""}
          onClick={() => setCurrentSection("Dashboard")}
        >
          <i class="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
        </li>
        <li
          className={currentSection === "Services" ? "active" : ""}
          onClick={() => setCurrentSection("Services")}
        >
          <i class="fa-solid fa-wrench"></i> &nbsp; Services
        </li>
        <li
          className={currentSection === "Payment" ? "active" : ""}
          onClick={() => setCurrentSection("Payment")}
        >
          <i class="fa-solid fa-sack-dollar"></i> &nbsp; Payment
        </li>
        <Link to="/">
          <li>
            <i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

