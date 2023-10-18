import React from "react";
import "./PriceBreakdown.scss";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PriceBreakdown = () => {
  return (
    <main className="pricebreakdown">
      {/* Price breakdown display */}
      <Container className="pricebreakdown-container mb-4">
        <p className="summary-heading">Summary</p>
        <div className="divider-upper mb-2"></div>
        <Row className="pricebreakdown-row">
          <Col className="pricebreakdown-col-left" xs={4}>
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
          <Col className="pricebreakdown-col-mid" xs={4}></Col>
          <Col className="pricebreakdown-col-right" xs={4}>
            <p className="right-data">8057 Galu Kumari</p>
            <p className="right-data">Colombo Fort</p>
            <p className="right-data">Ambalangoda</p>
            <p className="right-data">17-01-2024</p>
            <p className="right-data">6.45 - 9.17</p>
            <p className="right-data">1st Class</p>
            <p className="right-data">2</p>
            <p className="right-data">1550 LKR</p>
            <p className="right-data-select">Select</p>
          </Col>
        </Row>
        <div className="divider-below mb-2"></div>
        <Row className="pricebreakdown-row">
          <Col className="pricebreakdown-col-left" xs={4}>
            <div className="sum-charge">
              <p className="left-headings">Seat Charges</p>
              <p className="left-headings">Taxes</p>
              <p className="left-headings">Booking Charges</p>
            </div>
          </Col>
          <Col className="pricebreakdown-col-mid" xs={4}></Col>
          <Col className="pricebreakdown-col-right" xs={4}>
            <div className="sum-charge">
              <p className="right-data">3100 LKR</p>
              <p className="right-data">232.50 LKR</p>
              <p className="right-data">300 LKR</p>
            </div>
          </Col>
        </Row>
      </Container>
    
        {/* Price breakdown total - footer*/}
      <div className="divider-outside mb-2"></div>
      <Container fluid={true}>
        <Row className="bottom-row">
          <Col xs={4} className="price-colomn">
            <p className="total-a mt-2">Total Price : </p>
          </Col>
          <Col xs={4} className="price-colomn">
            <p className="total-val mt-2"> 3632.50 LKR</p>
          </Col>
          <Col xs={4} className="checkout">
            <LinkContainer to="/payment">
              <button className="btn btn-primary btn-block btn-lg checkout-btn">
                Checkout
              </button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PriceBreakdown;
