import React from "react";
import ParkingSlot from "./ParkingSlot";
import { useState,useEffect } from "react";
import { locations } from "./data";



export const Booking = () => {
 
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
    alert(
      `Slot Booked 😄 Payment initiated of rs ${selectedSlots.length * 50}`
    );
    console.log(locations[0].bookedSlots)
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
        <div className="locname">
          <h3>Location:&nbsp;&nbsp;</h3>
          <h4>{selectedLocation.name}</h4>
        </div>
        
      </div>
      <div className="spots">
        <div className="textarea">
          <h3>Available Parking Slots</h3>
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
            <div className="pricecont">
              <button onClick={toggleDiv}>
                Book Now{"  "}
                {selectedSlots.length > 0 && (
                  <>: {selectedSlots.length} selected</>
                )}
              </button>
              <p></p>
            </div>
          </div>

          <div>
            {showDiv && (
              <div className="bookingContainer show">
                <div className="bookingDiv show">
                  <p className="priceper">Price per Slot: 50</p>
                  <p>Total Payable Amount : {selectedSlots.length * 50}</p>
                  <div className="modal">
                    <div className="paymentbox">
                      <h2>Pay Using UPI</h2>
                      <p>Enter your UPI payment details:</p>
                      <input type="text" placeholder="UPI ID" />
                      <div className="paybuttons">
                        <button className="paybtn" onClick={handleBookSlots}>
                          Pay
                        </button>
                        <button
                          style={{ backgroundColor: "rgba(26, 46, 53, 1)" }}
                          className="exit"
                          onClick={toggleDiv}
                        >
                          Exit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};
