import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Schedule.scss";
import { LinkContainer } from "react-router-bootstrap";
import useCounter from "./useCounter";

// eslint-disable-next-line react/prop-types
const ClassDetails = ({seatClass,price,seatsCount,availableSeats,bookedSeats,}) => {

  const { count, increment, decrement } = useCounter(); 
  
  return (
    <Container className="book-container">
      <Row>
        <Col sm={11} md={6} className="booking-class">
          {seatClass}
        </Col>
        <Col className="booking-seats">
          <p>{seatsCount} Seats</p>
          <p>{price}LKR</p>
        </Col>
        <Col className="booking-count">
          <p>Available:{availableSeats}</p>
          <p>Booked: {bookedSeats}</p>
        </Col>
        <Col>
          <Row>
            <Col className="ticket-count">
              <span style={{ marginTop: "-30px" }}>{count}</span>
            </Col>
            <Col className="booking-ele">
              <Row>
                <Button
                  variant="primary"
                  className="btn-inc"
                  onClick={increment}
                >
                  +
                </Button>
              </Row>
              <Row>
                <Button
                  variant="primary"
                  className="btn-dec"
                  onClick={decrement}
                >
                  -
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const Schedule = () => {
  return (
    <main className="schedule">
      <div className="schedule-background">
        <div className="map-container">
          <Container>
            <Row>
              <Col className="train-details" xs={3}>
                <Col>
                  <h4 className="body-paragraph">GALU KUMARI</h4>
                  <p className="gray-paragraph">Colombo Commuter</p>
                  <p className="gray-paragraph">Train No. 8057</p>
                  <h5 className="body-paragraph">Daily</h5>
                  <p className="gray-paragraph">Classes: 1st,2nd,3rd</p>
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
                  <div className="circle">
                    <p className="next-station">Colombo Fort</p>
                    <p className="arrival-time">06:30 am</p>
                    <p className="departure-time">06:45 am</p>
                  </div>
                  <div className="circle">
                    <p className="next-station">Mount Lavinia</p>
                    <p className="arrival-time">07:15 am</p>
                    <p className="departure-time">07:17 am</p>
                  </div>
                  <div className="circle">
                    <p className="next-station">Ambalangoda</p>
                    <p className="arrival-time">09:15 am</p>
                    <p className="departure-time">09:17 am</p>
                  </div>
                  <div className="circle">
                    <p className="next-station">Beliatta</p>
                    <p className="arrival-time">11:15 am</p>
                    <p className="departure-time"></p>
                  </div>
                </div>
                <div className="crowd-line">
                  <div className="crowd-rectangle one"></div>
                  <div className="crowd-rectangle two"></div>
                  <div className="crowd-rectangle three"></div>
                  <div className="crowd-rectangle four"></div>
                  <div className="crowd-rectangle five"></div>
                  <div className="crowd-rectangle six"></div>
                  <div className="crowd-rectangle seven"></div>
                  <div className="crowd-rectangle eight"></div>
                  <div className="crowd-rectangle nine"></div>
                  <div className="crowd-rectangle ten"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-container">
          <h1>How many seats do you want to book?</h1>
          <Form className="radio-switch">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="custom-switch">Return ticket?</label>
              <Form.Check type="switch" id="custom-switch" />
            </div>
          </Form>
        </div>
        <div className="choose-class-container">
          <div className="choose-class">
            <ClassDetails
              seatClass="First Class"
              price="1850"
              seatsCount="30"
              availableSeats="20"
              bookedSeats="10"
            />
          </div>
          <div className="choose-class">
            <ClassDetails
              seatClass="Second Class"
              price="950"
              seatsCount="66"
              availableSeats="40"
              bookedSeats="26"
            />
          </div>
          <div className="choose-class">
            <ClassDetails
              seatClass="Third Class"
              price="550"
              seatsCount="92"
              availableSeats="58"
              bookedSeats="34"
            />
          </div>
        </div>
        <Container className="bottom-row-conotainer">
          <Col xs={6} className="d-flex align-items-center">
            <div>
              <div className="d-flex align-items-center">
                <p className="ticket-count">2 First Class</p>
                <p className="seat-para"> Seats selected</p>
              </div>

              <div className="d-flex align-items-center">
                <p className="ticket-price">3100 LKR</p>
                <p className="cost-para">
                  {" "}
                  Costs can vary due to offers and other promotional matters
                </p>
              </div>
            </div>
          </Col>
          <Col xs={6} className="d-flex align-items-center justify-content-end">
            <LinkContainer to="/seatview">
              <Button variant="primary" className="btn-book">
                Continue
              </Button>
            </LinkContainer>
          </Col>
        </Container>
      </div>
    </main>
  );
};

export default Schedule;
