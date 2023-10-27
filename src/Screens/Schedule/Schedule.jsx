import { Button, Container } from "react-bootstrap";
import ScheduleCard from "./ScheduleCard";
import { useGetStationsQuery } from "../../slices/trainApiSlice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetScheduleMutation } from "../../slices/trainApiSlice";
import "./Schedule.scss";

const NewBooking = () => {

  const { data, isLoading } = useGetStationsQuery();
  const location = useLocation();
  const { state } = location;
  const [schedule, { isLoading: isload }] = useGetScheduleMutation();
  const [scheduleData, setScheduleData] = useState(null);

  // Get the data from the query parameters
  const {
    fromStation,
    toStation,
    date,
    fromStationName,
    toStationName,
    minDate,
  } = state.searchData;

  const [fromStationId, setFromStationId] = useState(fromStation);
  const [toStationId, setToStationId] = useState(toStation);
  const [fromStationNameAssign, setFromStationNameAssign] =
    useState(fromStationName);
  const [toStationNameAssign, setToStationNameAssign] = useState(toStationName);
  const [newDate, setNewDate] = useState(date);

  // Get the day of the week from the date
  const dateName = new Date(newDate);
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
  };

  const handleFromStation = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const stationId = selectedOption.getAttribute("data-station-id");
    setFromStationId(stationId);
    setFromStationNameAssign(selectedValue);
  };

  const handleToStation = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const stationId = selectedOption.getAttribute("data-station-id");
    setToStationId(stationId);
    setToStationNameAssign(selectedValue);
  };

  async function fetchScheduleData() {
    try {
      const result = await schedule({
        sourceId: fromStationId,
        destinationId: toStationId,
        date: dayOfWeek,
      }).unwrap();
      setScheduleData(result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchScheduleData();
  }, []);

  console.log("scheduleData: " , scheduleData);

  const navigate = useNavigate();
  const handleButtonClicked = (data) => {
    const trainData = {
      data: data,
      classes: scheduleData[0].classes,
      scheduleData: scheduleData,
      date: newDate,
    };
    navigate("/booking", { state: { trainData } });
  };

  let trainNo,
    trainName,
    arrivalTime,
    departureTime,
    arrivalTimeAtDestination,
    arrivalTimeAtSource,
    defaultTotalSeats,
    departureTimeAtSource,
    departureTimeAtDestination,
    destinationStationID,
    frequencyName,
    sourceStationID,
    trainEndStation,
    trainStartStaion,
    classNames = [],
    trainType,
    loads = [];

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
    departureTimeAtDestination = firstItem.DepartureTimeAtDestination;
    frequencyName = firstItem.FrequencyName;
    trainType = firstItem.TrainType;
    loads = firstItem.load;
    trainEndStation = firstItem.TrainEndStation;
    trainStartStaion = firstItem.TrainStartStation;

    // Setting class names
    if (firstItem.classes && firstItem.classes.length > 0) {
      firstItem.classes.forEach((classItem) => {
        if (classItem.Class) {
          let classAbbreviation = classItem.Class;

          if (classAbbreviation.includes("First")) {
            classAbbreviation = "1st";
          } else if (classAbbreviation.includes("Second")) {
            classAbbreviation = "2nd";
          } else if (classAbbreviation.includes("Third")) {
            classAbbreviation = "3rd";
          }

          classNames.push(classAbbreviation);
        }
      });
    } else {
      console.log("No schedule data available.");
    }
  }

  const trainData = [
    {
      trainName: trainName,
      trainType: trainType,
      trainNo: trainNo,
      frequencyName: frequencyName,
      classes: classNames.join(" , "),
      schedule: [
        {
          name: trainStartStaion,
          arrival: "",
          departure: arrivalTime,
        },
        {
          name: fromStationNameAssign,
          arrival: arrivalTimeAtSource,
          departure: departureTimeAtSource,
        },
        {
          name: toStationNameAssign,
          arrival: arrivalTimeAtDestination,
          departure: departureTimeAtDestination,
        },
        {
          name: trainEndStation,
          arrival: departureTime,
          departure: "",
        },
      ],
      loads: loads,
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
                <select onChange={handleFromStation}>
                  <option disabled value="" selected>
                    {fromStationNameAssign}
                  </option>
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

              <div className="dropdown-class">
                <label className="dropdown-label">To</label>
                <select onChange={handleToStation}>
                  <option disabled value="" selected>
                    {toStationNameAssign}
                  </option>
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

              <div className="dropdown-class">
                <label className="dropdown-label">Date</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={handleDateChange}
                  min={minDate}
                />
              </div>

              <div className="search-btn">
                <Button
                  variant="primary"
                  className="button-extend"
                  onClick={fetchScheduleData}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {scheduleData && scheduleData.length > 0 ? (
          <div>
            {trainData.map((data, index) => (
              <ScheduleCard
                onButtonClicked={handleButtonClicked}
                key={index}
                {...data}
              />
            ))}
          </div>
        ) : (
          <p className="no-train-text">
            No train schedules available for this date. Please try another date.
          </p>
        )}
        {scheduleData && scheduleData.length > 0 && (
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
        )}
      </div>
    </main>
  );
};

export default NewBooking;
