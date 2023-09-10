import React from "react";
import "./PriceBreakdown.scss";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PriceBreakdown = () =>{
    return(
        <main className="pricebreakdown">
            <Container className='pricebreakdown-container'>
                <p className='summary-heading'>Summary</p>
                <div className="divider mb-2"></div>
                <Row className='pricebreakdown-row'>
                    <Col className='pricebreakdown-col' xs={4}>
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
                    <Col className='pricebreakdown-col' xs={4}>
                    </Col>
                    <Col className='pricebreakdown-col' xs={4}>
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
                <div className="divider mb-2"></div>
                <Row className='pricebreakdown-row'>
                    <Col className='pricebreakdown-col' xs={4}>
                        <p className="left-headings">Seat Charges</p>
                        <p className="left-headings">Taxes</p>
                        <p className="left-headings">Booking Charges</p>
                    </Col>
                    <Col className='pricebreakdown-col' xs={4}>
                    </Col>
                    <Col className='pricebreakdown-col' xs={4}>
                        <p className="right-data">3100 LKR</p>
                        <p className="right-data">232.50 LKR</p>
                        <p className="right-data">300 LKR</p>
                    </Col>
                </Row>
            </Container>
            <div className="divider-outside mb-2"></div>
            <Container fluid={true}>
                <Row className="bottom-row">
                    <Col xs={4}>
                        <p className="total">Total Price : </p>
                    </Col>
                    <Col xs={4}>
                        <p className="total-value"> 3632.50 LKR</p>
                    </Col>
                    <Col xs={4}>
                        <LinkContainer to="/payment">
                            <button className="btn btn-primary btn-block btn-lg checkout-btn">Checkout</button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
                
        </main>
    );
}

export default PriceBreakdown;