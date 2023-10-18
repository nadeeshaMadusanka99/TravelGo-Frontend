import { Container, Button } from "react-bootstrap";
import "./HeroSection.scss";

import { useGetScheduleMutation, useGetStationsQuery } from "../../slices/trainApiSlice";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";

import {
  useGetStationsQuery,
} from "../../slices/trainApiSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const HeroSection = () => {
  //getting stations data from api
  const { data, isLoading } = useGetStationsQuery();

  const [ fromStation , setFromStation ] = useState("");
  const [ toStation , setToStation ] = useState("");
  const [ date , setDate ] = useState("");

  const [schedule, { isLoading: isload}] = useGetScheduleMutation();
  // const { date, setDate } = useState("");

  //function to handle from station
  const handleFromStation = (e) => {
    setFromStation(e.target.value);
  };
  //function to handle to station
  const handleToStation = (e) => {
    setToStation(e.target.value);
  };
  //function to handle date
  const handleDate = (e) => {
    setDate(e.target.value);
  }
  // useEffect(() => {
  //   console.log("fromStation: " + date);
  // }, [date]);

  const handleSubmit = async () => {
    console.log("fromStation: " + fromStation);
    console.log("toStation: " + toStation);
    console.log("date: " + date);

    try {
     const res = await schedule({
        sourceId: fromStation,
        destinationId: toStation,
        date: "Monday"
      }).unwrap();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [date, setDate] = useState("");

  
  const navigate = useNavigate();

  //function to handle from station
  const handleFromStation = (e) => {
    setFromStation(e.target.value);
  };
  //function to handle to station
  const handleToStation = (e) => {
    setToStation(e.target.value);
  };
  //function to handle date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    // Convert the data to an object
    const searchData = {
      fromStation,
      toStation,
      date,
    };
    // Use the history object to navigate to the next page and pass the data as query parameters
    navigate("/booking", { state: { searchData } });
  };
  return (
    <section className="hero-section">
      <div className="hero-background"></div>

      <Container className="hero-content">
        <div>
          <p>Hello Travellers</p>
          <h1>
            make your booking
            <br />
            experience easy!
          </h1>
        </div>

        <div className="search-form">
          <div className="glass-container-extend">
            <div className="dropdown-class">
              {/* Dropdown menu for selecting from station. */}
              <label className="dropdown-label">From</label>
              <select onChange={(e) => handleFromStation(e)}>
                {data != undefined ? (
                  data.map((station) => (
                    <option key={station.StationID} value={station.StationID}>
                      {station.StationName}
                    </option>
                  ))
                ) : (
                  <>
                    <option>Loading</option>
                  </>
                )}
              </select>
            </div>

            <div className="dropdown-class" id="to-select">  
            {/* Dropdown menu for selecting to station. */}

              <label className="dropdown-label">To</label>
              <select onChange={handleToStation}>
                {data != undefined ? (
                  data.map((station) => (
                    <option key={station.StationID} value={station.StationID}>
                      {station.StationName}
                    </option>
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

              <input type="date" placeholder="Date" id="date-select"  onChange={handleDate}/>
            </div>
            <LinkContainer to="/booking">
              <Button variant="primary" className="search-button-extend" onClick={handleSubmit}>

              <input
                type="date"
                placeholder="Date"
                id="date-select"
                onChange={handleDate}
              />
            </div>
            {/* <LinkContainer to="/booking"> */}
              <Button
                variant="primary"
                className="search-button-extend"
                onClick={handleSubmit}
              >
                Search
              </Button>
              {/* </Link> */}
            {/* </LinkContainer> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
