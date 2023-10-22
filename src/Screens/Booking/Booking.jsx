import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./Booking.scss";
import { LinkContainer } from "react-router-bootstrap";
import useCounter from "./useCounter";

const ClassDetails = ({
  seatClass,
  price,
  seatsCount,
  availableSeats,
  bookedSeats,
  updateTicketCounts,
}) => {
  const { count, increment, decrement } = useCounter();
  let available = 25;
  return (
    <Container fluid="true" className="count-container">
      <Row>
        <Col md="4" sm="6" xs="6" className="seat-class">
          <h2>{seatClass}</h2>
        </Col>
        <Col md="2" sm="6" xs="6">
          <Row className="seat-cnt">{seatsCount} seats</Row>
          <Row className="tkt-price">{price} LKR</Row>
        </Col>
        <Col md="4" sm="6" xs="6">
          <Row className="seat-grey">
            <Col xs={6}>
              <p>Available:</p>
            </Col>
            <Col xs={6}>
              <p className="avai-para">{availableSeats - count}</p>
            </Col>
          </Row>
          <Row className="seat-grey">
            <Col xs={6}>Booked:</Col>
            <Col xs={6} className="booked-para">
              {seatsCount - availableSeats}
            </Col>
          </Row>
        </Col>
        <Col
          md="2"
          sm="6"
          xs="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Col md="6" sm="6" xs="6">
            <span className="count-span" style={{ marginTop: "-30px" }}>
              {count}
            </span>
          </Col>
          <Col md="6" sm="6" xs="6">
            <Row>
              <Button
                variant="primary"
                className="btn-inc"
                onClick={() => {
                  increment();
                  updateTicketCounts(seatClass, count + 1);
                }}
              >
                +
              </Button>
            </Row>
            <Row>
              <Button
                variant="primary"
                className="btn-dec"
                onClick={() => {
                  decrement();
                  updateTicketCounts(seatClass, count - 1);
                }}
              >
                -
              </Button>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

const NewSchedule = () => {
  const crowdColors = [
    "#e6f360",
    "#a7b047",
    "#e9621e",
    "#b1605b",
    "#b05927",
    "#e9621e",
    "#ff9800",
  ];
  const [ticketCounts, setTicketCounts] = useState({ "": 0 });

  // Update ticket counts
  const updateTicketCounts = (ticketClass, newCount) => {
    setTicketCounts((prevCounts) => {
      if (prevCounts[""] === 0) {
        // Remove the initial empty class count
        delete prevCounts[""];
      }
      if (newCount < 0) {
        return prevCounts;
      } else {
        return {
          ...prevCounts,
          [ticketClass]: newCount,
        };
      }
    });
  };
  return (
    <Container fluid="true" className="schedule-container">
      <Container fluid="true" className="train-container">
        <Row>
          <Col md="3" sm="12">
            <Row>
              <Col md="11" className="train-details">
                <h4 className="train-name">Galu Kumari</h4>
                <div>Colombo Commuter</div>
                <div>Train No: 8067</div>
                <div>Daily</div>
                <div>Classes: 1st 2nd 3rd</div>
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
            <Row className="arrival-time-row">
              <Col xs="2" className="train-right-label">
                Arrival
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Dest times */}
            <Row>
              <Col xs="2" className="train-right-label">
                Departure
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Crowd row */}
            <Row>
              <Col xs="2" sm="2" className="train-right-label">
                Crowd
              </Col>

              <Col xs="9" sm="10" className="crowd-boxes-container">
                <Row>
                  {crowdColors.map((index) => (
                    <Col
                    key={index}
                      className="crowd-boxes"
                      style={{ backgroundColor: `${index}` }}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid="true" className="headingContainer">
        <Row>
          <Col md="9" sm="12">
            <h1 className="head-question">How many seats do you want to book?</h1>
          </Col>
          <Col md="3">
            <Form className="radio-switch">
              <div className="d-flex justify-content-center align-items-center">
                <label htmlFor="custom-switch">Return ticket?</label>
                <Form.Check type="switch" id="custom-switch" />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <ClassDetails
        seatClass="First Class"
        price="1850"
        seatsCount="30"
        availableSeats="20"
        bookedSeats="10"
        updateTicketCounts={updateTicketCounts}
      />
      <ClassDetails
        seatClass="Second Class"
        price="950"
        seatsCount="66"
        availableSeats="40"
        bookedSeats="26"
        updateTicketCounts={updateTicketCounts}
      />{" "}
      <ClassDetails
        seatClass="Third Class"
        price="550"
        seatsCount="92"
        availableSeats="58"
        bookedSeats="34"
        updateTicketCounts={updateTicketCounts}
      />
      <Container className="buttonContainer">
        <Row>
          <Col md="9" sm="12">
            <Row>
              <Col xs={12} sm={12} xl={12} className="ticket-pricing">
                {Object.entries(ticketCounts).map(
                  ([ticketClass, count], index) => (
                    <p className="ticket-count" key={index}>
                      {index === 0 ? (
                        <span className="class-fonts">
                          {count} {ticketClass}
                        </span>
                      ) : (
                        <span className="class-fonts">
                          , {count} {ticketClass}{" "}
                        </span>
                      )}
                    </p>
                  )
                )}
                <span className="seat-para"> Seats selected</span>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={4} xl={2}>
                <p className="ticket-price">3100 LKR</p>
              </Col>
              <Col xs={12} sm={8}>
                <p className="cost-para">
                  Costs can vary due to offers and other promotional matters
                </p>
              </Col>
            </Row>
          </Col>
          <Col md="3" sm="12" className="book-btnc">
            <LinkContainer to="/seatview">
              <Button variant="primary" className="btnBook">
                Continue
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NewSchedule;
