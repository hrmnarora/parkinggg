// ParkingSlot.js

import React, { useState } from 'react';
import './ParkingSlot.css';

const ParkingSlot = ({ id, isAvailable, isSelected, onSelectSlot }) => {
  const handleClick = () => {
    if (isAvailable) {
      onSelectSlot(id);
    }
  };

  return (
    <div
      className={`parking-slot ${isAvailable ? (isSelected ? 'selected' : 'available') : 'filled'}`}
      onClick={handleClick}
    >
      {id}
    </div>
  );
};

export default ParkingSlot;
