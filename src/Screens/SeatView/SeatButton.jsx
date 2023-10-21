import React, { useState } from "react";
import "./SeatButton.scss";
import seatImage from "../../assets/SeatDesign.png";
import lavatoryImage from "../../assets/LavatoryDesign.png";
import doorImage from "../../assets/DoorDesign.png";
import storageImage from "../../assets/StorageDesign.png";

const SeatButton = ({ seat, seatNo, doorRotate, bookedSeat }) => {
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
    rotate: seat[0] === "y" ? "180deg" : "",
    opacity: bookedSeat ? 0.3 : ""
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

  if (seat === "") {
    return null;
  }
  else if (seat === "t") {
    return (<img src={lavatoryImage} className="lavatory"/>)
  }
  else if (seat === "d") {
    return (<img src={doorImage} className="lavatory" style={{rotate: (doorRotate) ? "180deg" : "" }}/>)
   
  }

  else if (seat === "s") {
    return (<img src={storageImage} className="lavatory" />)
   
  }

  return (
    <div className="seat-button-container">
      <img
      src={seatImage}
      alt="Seat"
      style={seatStyle}
      className="seat-image"
      onClick={(bookedSeat) ? null : handleClick}
    />
    <div className="seat-number"
      style=
      {{ top: (seat[0] === "y")? "-58%" : "-38%",
      opacity: bookedSeat ? 0.3 : ""
     }}
    >{seatNo}</div>

    </div>
  );
};

export default SeatButton;
