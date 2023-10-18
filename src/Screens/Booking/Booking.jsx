import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Booking.scss";
import MapContainer from "./MapContainer";
import { LinkContainer } from "react-router-bootstrap";

const Booking = () => {
  const trainData = [
    {
      trainName: "GALU KUMARI",
      trainType: "Colombo Commuter",
      trainNo: "7034",
      classes: "1st, 2nd, 3rd",
      schedule: [
        { name: "Colombo Fort", arrival: "06:30 am", departure: "06:45 am" },
        { name: "Mount Lavinia", arrival: "07:15 am", departure: "07:17 am" },
        { name: "Ambalangoda", arrival: "09:15 am", departure: "09:17 am" },
        { name: "Beliatta", arrival: "11:15 am", departure: "" },
      ],
    },
    {
      trainName: "GALU KUMARI",
      trainType: "Express Train",
      trainNo: "8057",
      classes: "1st, 2nd, 3rd",
      schedule: [
        { name: "Colombo Fort", arrival: "01:30 pm", departure: "01:55 pm" },
        { name: "Mount Lavinia", arrival: "02:35 pm", departure: "02:35 pm" },
        { name: "Ambalangoda", arrival: "07:15 pm", departure: "07:30 pm" },
        { name: "Beliatta", arrival: "09:15 pm", departure: "" },
      ],
    },
    {
      trainName: "GALU KUMARI",
      trainType: "Colombo Commuter",
      trainNo: "8057",
      classes: "3rd",
      schedule: [
        { name: "Colombo Fort", arrival: "08:45 am", departure: "08:50 am" },
        { name: "Mount Lavinia", arrival: "09:15 am", departure: "09:20 am" },
        { name: "Ambalangoda", arrival: "01:15 pm", departure: "01:17 pm" },
        { name: "Beliatta", arrival: "05:15 am", departure: "" },
      ],
    },
  ];

  return (
    <main className="booking">
      <div className="booking-background">
        <div className="glass-wrapper">
          <div className="glass">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Date" />

            <Button variant="primary" className="button-extend">
              Search
            </Button>
          </div>
        </div>

        {/* rendering train data from trainData array */}

        {trainData.map((data, index) => (   
          <MapContainer key={index} {...data} />
        ))}
        
        <div className="intensity-container">
          <div className="crowd-intensity">
            <div className="low-crowd">
              <span className="low-arrow"></span>
              <p className="crowd-text"> Low Crowd</p>
            </div>
            <div className="high-crowd">
              <span className="high-arrow"></span>
              <p className="crowd-text"> High Crowd</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
