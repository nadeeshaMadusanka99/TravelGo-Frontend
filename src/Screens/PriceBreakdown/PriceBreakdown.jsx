import React from "react";
import "./PriceBreakdown.scss";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const PriceBreakdown = () => {
  const [trainData, setTrainData] = useState(null);
  const [trainNumber, setTrainNumber] = useState(null);
  const [trainName, setTrainName] = useState(null);
  const [startStation, setStartStation] = useState(null);
  const [endStation, setEndStation] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [trainClass, setTrainClass] = useState(null);
  const [numberOfPassengers, setNumberOfPassengers] = useState(null);
  const [pricePerSeat, setPricePerSeat] = useState(null);

  
  const location = useLocation();
  async function fetchData() {
    const { state } = location;
    const trainData = state && state.submitData;
    if (trainData) {
      setTrainData(trainData);
      setTrainName(trainData.trainData.trainName);
      setStartStation(trainData.trainData.startStation);
      setEndStation(trainData.trainData.endStation);
      setTrainNumber(trainData.trainData.scheduleData[0].TrainNo);
      setDepartureDate(trainData.trainData.date);
      setStartTime(trainData.trainData.scheduleData[0].ArrivalTimeAtSource);
      setEndTime(trainData.trainData.scheduleData[0].ArrivalTimeAtDestination);
      setTrainClass(trainData.trainData.seatClassData);
    } else {
      console.log("No train data available");
    }
  }
  console.log(trainClass);
  useEffect(() => {
    fetchData();
  }, [location]);

const navigate = useNavigate();
const handleSubmit = () => {
  
  const submitData = {
      trainData,
      };  
  console.log('Submit Data:', submitData);   
  navigate("/payment",{state:{submitData}});
};
  return (
    <main className="pricebreakdown">
      {/* Price breakdown display */}
      <Container className="pricebreakdown-container mb-4">
        <p className="summary-heading">Summary</p>
        <div className="divider-upper mb-2"></div>
        <Row className="pricebreakdown-row">
          <Col className="pricebreakdown-col-left" md={4} xs={6}>
            <p className="left-headings">Train Number & Name</p>
            <p className="left-headings">Start Station</p>
            <p className="left-headings">End Station</p>
            <p className="left-headings">Departure Date</p>
            <p className="left-headings">Start Time &rarr; End Time</p>
            <p className="left-headings">Train Class</p>
            <p className="left-headings">Number of Passengers</p>
            <p className="left-headings">Price Per Seat</p>
            <p className="left-headings">Discounts</p>
          </Col>
          <Col className="pricebreakdown-col-mid" md={4} xs={1}></Col>
          <Col className="pricebreakdown-col-right" md={4} xs={5}>
            <p className="right-data">
              {trainNumber} {trainName}
            </p>
            {startStation && (
              <p className="right-data">
                {startStation
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </p>
            )}
            {endStation && (
              <p className="right-data">
                {endStation
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </p>
            )}
            <p className="right-data">{departureDate}</p>
            <p className="right-data">{startTime} - {endTime}</p>
            <p className="right-data">2nd Class</p>
            <p className="right-data">2</p>
            <p className="right-data">1550 LKR</p>
            <p className="right-data-select">Select</p>
          </Col>
        </Row>
        <div className="divider-below mb-2"></div>
        <Row className="pricebreakdown-row">
          <Col className="pricebreakdown-col-left" md={4} xs={6}>
            <div className="sum-charge">
              <p className="left-headings">Seat Charges</p>
              <p className="left-headings">Taxes</p>
              <p className="left-headings">Booking Charges</p>
            </div>
          </Col>
          <Col className="pricebreakdown-col-mid" md={4} xs={1}></Col>
          <Col className="pricebreakdown-col-right" md={4} xs={5}>
            <div className="sum-charge">
              <p className="right-data">3100 LKR</p>
              <p className="right-data">232.50 LKR</p>
              <p className="right-data">300 LKR</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Price breakdown total - footer*/}
      <div className="divider-outsid mb-2"></div>
      <Container fluid={true} className="out-content">
        <Row className="bottom-row">
          <Col md={4} xs={6} className="price-colomn-a">
            <p className="total-a mt-2">Total Price : </p>
          </Col>
          <Col md={4} xs={6} className="price-colomn">
            <p className="total-val mt-2"> 3632.50 LKR</p>
          </Col>
          <Col md={4} xs={12} className="checkout">
              <button className="btn btn-primary btn-block btn-lg checkout-btn" onClick={handleSubmit}>
                Checkout
              </button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PriceBreakdown;
