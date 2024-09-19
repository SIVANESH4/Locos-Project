import React, { useState, useEffect } from 'react';

export const Services = ({
  workers,
  bookedServices,
  setBookedServices,
}) => {
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedLocation, setSelectedLocation] = useState("Default");
  const [selectedRating, setSelectedRating] = useState("Default");

  const services = [
    { title: "Electrical" },
    { title: "Plumbing" },
    { title: "Installation" },
    { title: "Maintenance" },
    { title: "Television" },
    { title: "System" },
    { title: "AC" },
    { title: "RO" },
    { title: "Washing Machine" },
    { title: "Refrigerator" },
    { title: "Microwave Oven" },
    { title: "Cleaning" },

  ];

  const getRatingValue = (rating) => {
    switch (rating) {
      case "more than 4.5":
        return [4.5, 5];
      case "more than 4.0":
        return [4.0, 4.5];
      case "more than 3.5":
        return [3.5, 4.0];
      default:
        return [0, 5];
    }
  };

  const handleBookService = (worker) => {
    const updatedBookedServices = [...bookedServices, worker];
    setBookedServices(updatedBookedServices);
    localStorage.setItem('bookedServices', JSON.stringify(updatedBookedServices)); // Store in localStorage
    alert(`Service booked for ${worker.name}`);
  };

  const filteredWorkers = Array.isArray(workers) ? workers.filter((worker) => {
    const [minRating, maxRating] = getRatingValue(selectedRating);

    return (
      (selectedService === "All Services" || worker.service === selectedService) &&
      (selectedLocation === "Default" || worker.location === selectedLocation) &&
      worker.rating >= minRating &&
      worker.rating <= maxRating
    );
  }) : [];

  return (
    <div className="services-page-dash">
      <h2>{selectedService}</h2>
      <div className="dropdowns">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="All Services">All Services</option>
          {services.map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="Default">By Location</option>
          <option value="Near me">Near Me</option>
          <option value="Madurai">Madurai</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="Default">Ratings</option>
          <option value="more than 4.5">More than 4.5</option>
          <option value="more than 4.0">More than 4.0</option>
          <option value="more than 3.5">More than 3.5</option>
        </select>
      </div>
      <div className="services-grid-dash">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker, index) => (
            <div className="worker-card" key={index}>
              <i className="fa-solid fa-circle-user"></i>
              <h3>{worker.name}</h3>
              <p>Service: {worker.service}</p>
              <p>Location: {worker.location}</p>
              <p>Rating: {worker.rating}</p>
              <button onClick={() => handleBookService(worker)}>
                Book Now
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
