import React, { useState, useEffect } from 'react';
import {Sidebar} from './UserCompo/Sidebar';
import {Dashboard} from './UserCompo/Dashboard';
import {Services} from './UserCompo/Services';
import {Payment} from './UserCompo/Payment';
import "./Userdashboard.css";

export const Userdashboard = () => {
  const [currentSection, setCurrentSection] = useState("Dashboard");
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookedServices, setBookedServices] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Sivanesh",
    address: "Panaiyur",
    pincode: "625009",
    email: "22suit15@tcarts.in",
  });
  const [username, setUsername] = useState(personalInfo.name);

  useEffect(() => {
    fetch('/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setWorkers(data);
  })
  .catch(error => {
    console.error('Error fetching the data:', error);
    setLoading(false);
  });

  }, [])
  const renderContent = () => {
    switch (currentSection) {
      case "Dashboard":
        return (
          <Dashboard
            bookedServices={bookedServices}
            setBookedServices={setBookedServices}
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            username={username}
            setUsername={setUsername}
          />
        );
      case "Services":
        return (
          <Services
            workers={workers}
            bookedServices={bookedServices}
            setBookedServices={setBookedServices}
          />
        );
      case "Payment":
        return <Payment />;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="user-dashboard">
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};