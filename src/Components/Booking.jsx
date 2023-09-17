import React from "react";
import ParkingSlot from "./ParkingSlot";
import { useState } from "react";

export const Booking = () => {
  const locations = [
    {
      id: 1,
      name: "Nexus Elante Mall",
      totalSlots: 25,
      bookedSlots: [3, 6, 9],
    },
    { id: 2, name: "Sukhna Lake", totalSlots: 15, bookedSlots: [1, 2, 7] },
    { id: 3, name: "VR Punjab", totalSlots: 25, bookedSlots: [5, 12, 20] },
    { id: 4, name: "Airport", totalSlots: 20, bookedSlots: [8, 15] },
    {
      id: 5,
      name: "Bestech Square Mall",
      totalSlots: 10,
      bookedSlots: [10, 25, 29],
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState(selectedLocation.bookedSlots);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setSelectedSlots([]);
    setBookedSlots(location.bookedSlots);
  };

  const handleSelectSlot = (slotId) => {
    if (!bookedSlots.includes(slotId)) {
      if (selectedSlots.includes(slotId)) {
        setSelectedSlots(selectedSlots.filter((slot) => slot !== slotId));
      } else {
        setSelectedSlots([...selectedSlots, slotId]);
      }
    }
  };

  const handleBookSlots = () => {
    setBookedSlots([...bookedSlots, ...selectedSlots]);
    setSelectedSlots([]);
    toggleDiv();
  };



  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };


  return (
    <div className="mainBooking">
      <div className="Bookingheading">
        <h1>
          Lets Book <br />
          Your Parking Slot
        </h1>
        <h3>Location:</h3>
        <br />
        <h4>{selectedLocation.name}</h4>
      </div>
      <div className="spots">
        <div className="textarea">
          <h3>Available Parking SLots</h3>
          <div className="location-selector">
            <label>Select Location: </label>
            <select
              value={selectedLocation.id}
              onChange={(e) =>
                handleSelectLocation(
                  locations.find((loc) => loc.id === parseInt(e.target.value))
                )
              }
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="slots">
          <div className="App">
            <div className="parking-lot">
              {[...Array(selectedLocation.totalSlots).keys()].map((index) => (
                <ParkingSlot
                  key={index}
                  id={index}
                  isAvailable={!bookedSlots.includes(index)}
                  isSelected={selectedSlots.includes(index)}
                  onSelectSlot={handleSelectSlot}
                />
              ))}
            </div>
            {selectedSlots.length > 0 && (
              <div className="pricecont">
                
                <button onClick={toggleDiv}>Book Now</button>
                <p></p>
              </div>
            )}
          </div>


          <div>
          {showDiv && (
        <div className="bookingContainer show">
          <div className="bookingDiv show">
            <p className="priceper">Price per Spot: 50</p>
            <p>Total Payable Amount : {selectedSlots.length * 50}</p>
          <button  className="book-button" onClick={handleBookSlots}>
                  Book Now ({selectedSlots.length} selected)
                </button>
          <button onClick={toggleDiv} >Exit</button>
          </div>
        </div>
      )}
    </div>



        </div>
      </div>
    </div>
  );
};
