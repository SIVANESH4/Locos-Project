import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react";
import "./Userdashboard.css";
export const Userdashboard = () => {
  const [currentSection, setCurrentSection] = useState('Dashboard');

  // Render different content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case 'Profile':
        return <>
        <div className="profhead">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        <div className="profmain">
          <h2>Personal Details</h2>
          
        </div>
        </>;
      case 'Dashboard':
        return <div>Dashboard Content</div>;
      case 'Services':
        return <div>Services Content</div>;
      case 'Payment':
        return <div>Payment Content</div>;
    }
  };

  return (
    <>
       <div className="user-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
      <h3 className="logo">
            <i class="fa-solid fa-gears"></i> LO<span>COs</span>
          </h3>
        <ul>
          <li className={currentSection === 'Profile' ? 'active' : ''} onClick={() => setCurrentSection('Profile')}>Profile</li>
          <li className={currentSection === 'Dashboard' ? 'active' : ''} onClick={() => setCurrentSection('Dashboard')}>Dashboard</li>
          <li className={currentSection === 'Services' ? 'active' : ''} onClick={() => setCurrentSection('Services')}>Services</li>
          <li className={currentSection === 'Payment' ? 'active' : ''} onClick={() => setCurrentSection('Payment')}>Payment</li>
          <Link to="/"><li><a href="#">Logout</a></li></Link>        
        </ul>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
    </>
    );
};
