import { Button, Container } from "react-bootstrap";
import NewMapContainer from "./NewMapContainer";
import { useGetStationsQuery } from "../../slices/trainApiSlice";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetScheduleMutation } from "../../slices/trainApiSlice";
import "./NewBooking.scss";

const NewBooking = () => {
  const { data, isLoading } = useGetStationsQuery();
  const location = useLocation();
  const { state } = location;
  const [schedule, { isLoading: isload }] = useGetScheduleMutation();
  const [scheduleData, setScheduleData] = useState(null);
  
  // Get the data from the query parameters
  const { fromStation, toStation, date } = state.searchData;
  const [newDate, setNewDate] = useState(date);
  // Get the day of the week from the date
  const dateName = new Date(date);
  const daysOfWeek = [
  "Sunday",
  "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[dateName.getDay()];

  
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  }
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

  let trainNo,
    trainName,
    arrivalTime,
    departureTime,
    arrivalTimeAtDestination,
    arrivalTimeAtSource,
    defaultTotalSeats,
    departureTimeAtSource,
    destinationStationID,
    frequencyName,
    sourceStationID,
    trainType;
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
    console.log("No schedule data available.");
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
        <Container className="search-field">
          <div className="search-form">
            <div className="glass-container-extend">
              <div className="dropdown-class">
                <label className="dropdown-label">From</label>
                <select>
                  <option disabled value="" selected>
                    {fromStation}
                  </option>
                  {data != undefined ? (
                    data.map((station, index) => (
                      <option key={index}>{station.StationName}</option>
                    ))
                  ) : (
                    <>
                      <option>Loading</option>
                    </>
                  )}
                </select>
              </div>

              <div className="dropdown-class">
                <label className="dropdown-label">To</label>
                <select>
                  <option disabled value="" selected>
                    {toStation}
                  </option>
                  {data != undefined ? (
                    data.map((station, index) => (
                      <option key={index}>{station.StationName}</option>
                    ))
                  ) : (
                    <>
                      <option>Loading</option>
                    </>
                  )}
                </select>
              </div>

              <div className="dropdown-class">
                <label className="dropdown-label">Date</label>
                <input type="date" value={newDate} onChange={handleDateChange} />
              </div>

              <div className="search-btn">
                <LinkContainer to="/booking">
                  <Button variant="primary" className="button-extend">
                    Search
                  </Button>
                </LinkContainer>
              </div>
            </div>
          </div>
        </Container>
        {trainData.map((data, index) => (
          <NewMapContainer key={index} {...data} />
        ))}
        <div className="intensity-container">
          <div className="crowd-intensity">
            <div className="low-crowd">
              <span className="low-arrow"></span>Low Crowd
            </div>
            <div className="high-crowd">
              <span className="high-arrow"></span>High Crowd
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewBooking;
