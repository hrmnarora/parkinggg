import React, { useState} from "react";
import { locations } from "./data";


const Server = () => {
    console.log(locations[0].totalSlots)
    const [availableSlots, setAvailableSlots] = useState(
        locations[0].totalSlots - locations[0].bookedSlots.length
      );
    var [pricing, setPricing] = useState(locations[0].pricing);

    const handleUpdatePricing = () => {
        setPricing +=10;
      };

  return (
    <div className="location-owner-page">
      <h1></h1>
      <div className="location-details">
        <p>Address: {locations[0].name}</p>
        <p>Total Slots:{locations[0].totalSlots} </p>
      </div>

      <div className="pricing-section">
        <h2>Pricing</h2>
        <p>Price per Slot: {pricing} </p>
        <button onClick={() => handleUpdatePricing()}>Raise Price by 10</button>
      </div>

      <div className="booking-management">
        <h2>Booking Management</h2>
        <p>Available Slots:{availableSlots}</p>
        <button>Cancel Booking</button>
      </div>

      {/* Add more sections and functionality as needed */}
    </div>
      
  );
};

export default Server;
