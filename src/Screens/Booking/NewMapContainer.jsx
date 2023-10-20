import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './NewBooking.scss';
import { LinkContainer } from 'react-router-bootstrap';


const MapContainer = ({ trainName, trainType, trainNo, schedule, classes ,frequencyName }) => {
  const colors = ['#e6f360', '#a7b047', '#e9621e', '#ff0000', '#ff0000', '#e9621e', '#ff9800', '#a7b047', '#e6f360', '#e6f360'];  
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
                <div >{frequencyName}</div>
                <div className="grey-para">Classes: {classes}</div>
                <LinkContainer to="/schedule">
                    <Button variant="primary" className="btn-book">
                        Book Tickets
                    </Button>
                </LinkContainer>
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
                  Colombo
              </Col>
              <Col xs="2" className="source-station">
                Mount Lavinia
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                Ambalangoda
              </Col>
              <Col xs="2" className="end-station">
                Beliatta
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
            <Row className='margin-s'>
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

              <Col xs='9' sm='10' className="crowd-boxes-container">
                <Row>
                { colors.map((index) => (
                <Col className="crowd-boxes" style={{backgroundColor: `${index}`}}/>
              ))}
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
