import React, { useState, useEffect } from 'react';

export const Dashboard = ({
  bookedServices,
  setBookedServices,
  personalInfo,
  username,
}) => {
  const [localBookedServices, setLocalBookedServices] = useState(bookedServices);

  useEffect(() => {
    const storedBookedServices = localStorage.getItem('bookedServices');
    if (storedBookedServices) {
      setLocalBookedServices(JSON.parse(storedBookedServices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookedServices', JSON.stringify(localBookedServices));
  }, [localBookedServices]);

  const handleFinishService = (index) => {
    const updatedBookedServices = localBookedServices.filter(
      (_, i) => i !== index
    );
    setLocalBookedServices(updatedBookedServices);
    setBookedServices(updatedBookedServices);
    localStorage.setItem('bookedServices', JSON.stringify(updatedBookedServices)); // Update localStorage
  };

  return (
    <>
      <div className="userdash-header">
        <div className="banner"></div>
        <i className="fa-solid fa-circle-user"></i>
        <h3>{username}</h3>
      </div>
      <h2 className="heading">Ongoing Works</h2>
      <div className="ongoing-works">
        {localBookedServices.length > 0 ? (
          localBookedServices.map((service, index) => (
            <div className="booked-service-card" key={index}>
              <h3>{service.name}</h3>
              <p>Service: {service.service}</p>
              <p>Location: {service.location}</p>
              <p>Rating: {service.rating}</p>
              <button onClick={() => handleFinishService(index)}>
                Finished
              </button>
            </div>
          ))
        ) : (
          <div className="no-ongoing-works">
            <p>No ongoing works.</p>
          </div>
        )}
      </div>
    </>
  );
};
