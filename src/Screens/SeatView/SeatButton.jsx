import React, { useState } from "react";
import "./SeatButton.scss";
import seatImage from "../../assets/SeatDesign.png";

const SeatButton = ({ seat }) => {
  const [checked, setChecked] = useState(false);

  //toggles the checked state of the seat  
  const handleClick = () => {
    setChecked(!checked);
  };
  //styling for the seat button
  const seatStyle = {
    margin: "0.7rem", 
    cursor: "pointer",
    border: checked ? "2px solid green" : "",
    backgroundColor: checked ? "green" : "",
  };
  // const textOverlayStyle = {
  //   position: "absolute", 
  //   top: "50%", 
  //   left: "50%", 
  //   transform: "translate(-50%, -50%)", 
  //   color: checked ? "red" : "black",
  //   fontWeight: "bold",
  // };
  // const seatContainerStyle = {
  //   cursor: "pointer",
  //   position: "relative", 
  // };
 
  return (

      <img
        src={seatImage}
        alt="Seat"
        style={seatStyle}
        className="seat-image"
        onClick={handleClick}
      />

  );
};

export default SeatButton;
