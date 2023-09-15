import React, { useState } from 'react';
import './SeatButton.scss';

const SeatButton = ({seat}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className={`button-group ${checked ? 'checked' : ''}`} onClick={handleToggle}>
      <button className={`toggle-button ${checked ? 'active' : ''}`} type="button">
        {seat.label}
      </button>
    </div>
  );
};


export default SeatButton;
