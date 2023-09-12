// MapContainer.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Booking.scss';


const MapContainer = ({ trainName, trainType, trainNo, schedule, classes }) => {
  return (
    <div className="map-container">
      <Container>
        <Row>
          <Col className="train-details" xs={3}>
            <Col>
              <h5 className="body-paragraph">{trainName}</h5>
              <p className="gray-paragraph">{trainType}</p>
              <p className="gray-paragraph">Train No. {trainNo}</p>
              <h6 className="body-paragraph">Daily</h6>
              <p className="gray-paragraph">Classes: {classes}</p>
              <Button variant="primary" className="btn-book">
                Book Tickets
              </Button>
            </Col>

            <Col>
              <div className="vertical-line"></div>
            </Col>
          </Col>

          <Col className="station-details" xs={2}>
            <p className="station-paragraph">Station</p>
            <p className="arrival-paragraph">Arrival</p>
            <p className="departure-paragraph">Departure</p>
            <p className="crowd-paragraph">Crowd</p>
          </Col>

          <Col xs={7} className="short-map">
            <div className="lines">
              {schedule.map((station, index) => (
                <div className="circle" key={index}>
                  <p className="next-station">{station.name}</p>
                  <p className="arrival-time">{station.arrival}</p>
                  <p className="departure-time">{station.departure}</p>
                </div>
              ))}
            </div>
            <div className="crowd-line">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className={`crowd-rectangle ${index + 1}`} key={index}></div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapContainer;
