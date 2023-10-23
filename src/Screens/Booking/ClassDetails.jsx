import useCounter from "./useCounter";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./Booking.scss";
import { useState } from "react";

const ClassDetails = ({
    seatClass,
    price,
    seatsCount,
    availableSeats,
    bookedSeats,
    updateTicketCounts,
    updateCost,
    
  }) => {
    const { count, increment, decrement } = useCounter();
    const [available,setAvailableSeats]=useState(availableSeats);
    const setSeatCount=(newCount,count)=>{
        if (newCount < count) {
            
        setAvailableSeats(available-count);
    }
    else{
        setAvailableSeats(available+count);
    }
}
    
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
                    updateCost(parseInt(price),count+1,count);
                    console.log(bookedSeats);
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
                    updateCost(parseInt(price),count-1,count);
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

 export default ClassDetails; 