import React, { useState } from "react";
import "./SeatButton.scss";
import seatImage from "../../assets/SeatDesign.png";

const SeatButton = ({ seat }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  const seatStyle = {
    margin: "0.7rem", 
    cursor: "pointer",
    border: checked ? "2px solid green" : "",
    backgroundColor: checked ? "green" : "",
  };
  const textOverlayStyle = {
    position: "absolute", // Position the text absolutely within the container
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Center both horizontally and vertically
    color: checked ? "red" : "black",
    fontWeight: "bold",
  };
  const seatContainerStyle = {
    cursor: "pointer",
    position: "relative", // Set the container's position to relative
  };
 
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
