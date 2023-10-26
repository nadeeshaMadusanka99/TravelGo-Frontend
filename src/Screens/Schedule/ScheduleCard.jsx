/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Schedule.scss";

const MapContainer = ({
  trainName,
  trainType,
  trainNo,
  schedule,
  classes,
  frequencyName,
  loads,
  onButtonClicked,
}) => {
  const colors = [
    "#FFFF00",
    "#FFEE00",
    "#FFDD00",
    "#FFCC00",
    "#FFBB00",
    "#FFAA00",
    "#FF9900",
    "#FF8800",
    "#FF7700",
    "#FF0000",
  ];
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const numberToColor = {};

  numbers.forEach((number, index) => {
    numberToColor[number] = colors[index];
  });

  const handleButtonClick = () => {
    const dataToPass = {
      trainName: trainName,
      trainType: trainType,
      trainNo: trainNo,
      schedule: schedule,
      classes: classes,
      frequencyName: frequencyName,
      loads: loads,
    };
    onButtonClicked(dataToPass); // Call the callback function with the data
  };

  return (
    <div className="map-container">
      <Container fluid="true" className="train-container">
        <Row>
          <Col md="3" sm="12">
            <Row>
              <Col md="11" className="train-details">
                <h4 className="train-name">{trainName}</h4>
                <div className="grey-para">{trainType}</div>
                <div className="grey-para">Train No: {trainNo}</div>
                <div>{frequencyName}</div>
                <div className="grey-para">Classes: {classes}</div>

                {onButtonClicked ? ( // Check if onButtonClicked has props
                  <Button
                    variant="primary"
                    className="btn-book"
                    onClick={handleButtonClick}
                  >
                    Book Tickets
                  </Button>
                ) : (
                  <Button variant="primary" className="btn-book" disabled>
                    Book Tickets
                  </Button>
                )}
              </Col>
              <Col md="1" className="vertical-bar-container">
                <div className="vertical-bar"></div>
              </Col>
              <Row className="horizontal-bar-container">
                <div className="horizontal-bar" />
              </Row>
            </Row>
          </Col>
          <Col md="9" sm="12" className="right-side-train">
            <Row>
              <Col xs="2" className="train-right-label">
                Station
              </Col>
              <Col xs="2" className="start-station">
                {schedule[0].name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Col>
              <Col xs="2" className="source-station">
                {schedule[1].name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                {schedule[2].name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Col>
              <Col xs="2" className="end-station">
                {schedule[3].name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Col>
            </Row>

            {/* Dotted Line Map */}
            <Row className="map-container-lines">
              <Col xs="2" />
              <Col xs="10">
                <div className="dotted-line" />
                <Col xs="1" className="circle-position" />
                <Col xs="1" className="circle-position c-p-source" />
                <Col xs="1" className="circle-position c-p-dest" />
                <Col xs="1" className="circle-position c-p-end" />
              </Col>
            </Row>

            {/* Arrival Times */}
            <Row className="arrival-time-row margin-s">
              <Col xs="2" className="train-right-label">
                Arrival
              </Col>
              <Col xs="2" className="start-station">
                {schedule[0].arrival}
              </Col>
              <Col xs="2" className="source-station">
                {schedule[1].arrival}
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                {schedule[2].arrival}
              </Col>
              <Col xs="2" className="end-station">
                {schedule[3].arrival}
              </Col>
            </Row>

            {/* Dest times */}
            <Row className="margin-s">
              <Col xs="2" className="train-right-label">
                Departure
              </Col>
              <Col xs="2" className="start-station">
                {schedule[0].departure}
              </Col>
              <Col xs="2" className="source-station">
                {schedule[1].departure}
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                {schedule[2].departure}
              </Col>
              <Col xs="2" className="end-station">
                {schedule[3].departure}
              </Col>
            </Row>

            {/* Crowd row */}
            <Row>
              <Col xs="2" sm="2" className="train-right-label">
                Crowd
              </Col>

              <Col xs="9" sm="10" className="crowd-boxes-container">
                <Row>
                  {loads && Array.isArray(loads) ? (
                    loads.map((number, index) => (
                      <Col
                        key={index}
                        className="crowd-boxes"
                        style={{ backgroundColor: numberToColor[number] }}
                      />
                    ))
                  ) : (
                    <p className="no-crowd-data">No Crowd Data Available</p>
                  )}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapContainer;
