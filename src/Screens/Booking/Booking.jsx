
import { Button, Container } from "react-bootstrap";
import "./Booking.scss";
import MapContainer from "./MapContainer";
import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import { useGetScheduleMutation } from "../../slices/trainApiSlice";

const Booking = () => {

  const location = useLocation();
  const { state } = location;
  const [schedule, { isLoading: isload }] = useGetScheduleMutation();
  const [scheduleData, setScheduleData] = useState(null);
  
  // Get the data from the query parameters
  const { fromStation, toStation, date } = state.searchData;
// Get the day of the week from the date
const dateName = new Date(date);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[dateName.getDay()];

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const result = await schedule({
          sourceId: fromStation,
          destinationId: toStation,
          date: dayOfWeek, 
        }).unwrap();
        setScheduleData(result); 

      } catch (error) {
        console.log(error);
      }
    }

    if (fromStation && toStation && date) {
      fetchSchedule(); 
    }
  }, [fromStation, toStation, date]); 
  
  let trainNo, trainName, arrivalTime, departureTime, arrivalTimeAtDestination, arrivalTimeAtSource, defaultTotalSeats, departureTimeAtSource, destinationStationID, frequencyName, sourceStationID, trainType;

if (scheduleData && scheduleData.length > 0) {
  const firstItem = scheduleData[0];
  trainNo = firstItem.TrainNo;
  trainName = firstItem.TrainName;
  arrivalTime = firstItem.ArrivalTime;
  departureTime = firstItem.DepartureTime;
  arrivalTimeAtDestination = firstItem.ArrivalTimeAtDestination;
  arrivalTimeAtSource = firstItem.ArrivalTimeAtSource;
  defaultTotalSeats = firstItem.DefaultTotalSeats;
  departureTimeAtSource = firstItem.DepartureTimeAtSource;
  destinationStationID = firstItem.DestinationStationID;
  frequencyName = firstItem.FrequencyName;
  sourceStationID = firstItem.SourceStationID;
  trainType = firstItem.TrainType;
} else {
  console.log('No schedule data available.');
}
// console.log("trainNo:", trainNo);
// console.log("trainName:", trainName);
// console.log("arrivalTime:", arrivalTime);
// console.log("departureTime:", departureTime);
// console.log("arrivalTimeAtDestination:", arrivalTimeAtDestination);
// console.log("arrivalTimeAtSource:", arrivalTimeAtSource);
// console.log("defaultTotalSeats:", defaultTotalSeats);
// console.log("departureTimeAtSource:", departureTimeAtSource);
// console.log("destinationStationID:", destinationStationID);
// console.log("frequencyName:", frequencyName);
// console.log("sourceStationID:", sourceStationID);
// console.log("trainType:", trainType);


  const trainData = [
    {
      trainName: trainName,
      trainType: trainType,
      trainNo: trainNo,
      frequencyName: frequencyName,
      classes: "1st, 2nd, 3rd",
      schedule: [
        { name: "Colombo Fort", arrival: "06:30 am", departure: "06:45 am" },
        { name: "Mount Lavinia", arrival: "07:15 am", departure: "07:17 am" },
        { name: "Ambalangoda", arrival: "09:15 am", departure: "09:17 am" },
        { name: "Beliatta", arrival: "11:15 am", departure: "" },
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
