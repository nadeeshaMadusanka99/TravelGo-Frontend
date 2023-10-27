import { Container, Button } from "react-bootstrap";
import "./HeroSection.scss";
import { useGetStationsQuery } from "../../slices/trainApiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  //getting stations data from api
  const { data, isLoading } = useGetStationsQuery();
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [date, setDate] = useState("");
  const [fromStationName, setFromStationName] = useState("");
  const [toStationName, setToStationName] = useState("");
  
  const navigate = useNavigate();
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [minDate, setMinDate] = useState(getCurrentDate());
  
  //function to handle from station
  const handleFromStation = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const stationId = selectedOption.getAttribute('data-station-id');
    setFromStation(stationId);
    setFromStationName(selectedValue);
  };

  //function to handle to station
  const handleToStation = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const stationId = selectedOption.getAttribute('data-station-id');
    setToStation(stationId);
    setToStationName(selectedValue);
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
      fromStationName,
      toStationName,
      minDate,

    };
    // console.log("searchData: ", searchData);
    // Use the history object to navigate to the next page and pass the data as query parameters
    navigate("/schedule", { state: { searchData } });
  };
  

  return (
    <section className="hero-section">
      <div className="hero-background"></div>

      <Container className="hero-content">
        <div className="traveler-div">
          <p  className="traveler-para">Hello Travellers</p>
          <h1 className="header-content">
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
              <select onChange={handleFromStation}>
                {data != undefined ? (
                  data.map((station) => (
                    <option 
                      key={station.StationID} 
                      value={station.StationName} 
                      data-station-id={station.StationID}
                    >
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
                    <option 
                      key={station.StationID} 
                      value={station.StationName} 
                      data-station-id={station.StationID}
                    >
                      {station.StationName}
                    </option>
                  ))
                ) : (
                  <>
                    <option>Loading</option>
                  </>
                )}
              </select>
              <input type="hidden" id="stationName" />
            </div>
            <div className="dropdown-class">
              <label className="dropdown-label">Date</label>
              <input
                type="date"
                placeholder="Date"
                id="date-select"
                onChange={handleDate}
                min={minDate}
              />
            </div>
            <Button
              variant="primary"
              className="search-button-extend"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
