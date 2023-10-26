import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Payment.scss";
import { FaRegCreditCard, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Terms and Conditions for Train Booking:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>1. Booking and Reservation:</h5>
        <p>
         By using our train booking system, you agree to provide accurate and complete information when making a booking or reservation. This includes personal details, travel information, and payment information.
        </p>
        <h5>2. Payment:</h5>
        <p>
         All bookings must be paid for in full. We accept various payment methods, and your payment is subject to our payment gateway provider's terms and conditions. In case of payment failure or fraud, we reserve the right to cancel your booking.
        </p>
        <h5>3. Cancellation and Refund:</h5>
        <p>
         Cancellation policies vary depending on the type of ticket and the timing of the cancellation. Please review our cancellation and refund policy before making a booking. Refunds are subject to a processing fee.
        </p>
        <h5> 4. Travel Documents:</h5>
        <p>
        It is your responsibility to carry valid travel documents, including tickets, government-issued IDs, and any required visas. Failure to do so may result in denied boarding.
        </p>
        <h5>5. Baggage: </h5>
        <p>
         Our baggage policies and fees are available on our website. Make sure to adhere to baggage rules to avoid additional charges or inconvenience.
        </p>
        <h5>6. Changes and Rescheduling:</h5>
        <p>
         Changes to your booking are subject to availability and applicable fees. Contact our customer support for assistance with rescheduling.
        </p>
        <h5> 7. Safety and Conduct:</h5>
        <p>
          Passengers are expected to adhere to safety regulations and respectful behavior throughout the journey. Disruptive or unlawful conduct may result in removal from the train and legal consequences.
        </p>
        <h5>8.  and Schedule Changes: </h5>
        <p>
         Train schedules are subject to change due to various factors. We are not responsible for any inconvenience or additional costs due to schedule changes or delays.
        </p>
        <h5>9. Liability: </h5>
        <p>
        Our liability for any loss, damage, or injury during your journey is limited to the terms outlined in the applicable law. We recommend you consider travel insurance to cover unforeseen circumstances.
        </p>
        <h5>10. Amendments: </h5>
        <p>
        We reserve the right to modify these terms and conditions. Please check for updates on our website.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={
          props.onHide
          }>Agree</Button>
      </Modal.Footer>
    </Modal>
  );
}





const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    cardExpiryMM: "",
    cardExpiryYY: "",
    cardCVV: "",
    saveCardDetails: false,
  });
const [terms,setTerms] = useState(false);
const [modalShow, setModalShow] = React.useState(false);

const handleTerms = (e) => {
  setTerms(e.target.checked);
  setModalShow(!terms);
  console.log("terms",terms);
  

 
}
//console.log("terms",terms);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    console.log("f data",formData);
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  return (
    <main className="payment">
        {/* pop up window */}
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* Payment box */}
      <Container className="payment-container">
        <Row className="content-inside-upper">
          <p className="payment-heading">Payment Method</p>
          <div className="centered-container">
            <FaRegCreditCard size="1.5rem" className="card-icon" />
            Please select your payment method
          </div>
          
          <Col className="form-check-inline">
            <input
              className="form-check-input-radio"
              type="radio"
              name="payment-method"
              id="visa"
              value="card"
            />
            <label className="form-check-payment-methods" htmlFor="visa">
              <RiVisaLine></RiVisaLine>
            </label>
          </Col>
          <Col className="form-check-inline">
            <input
              className="form-check-input-radio"
              type="radio"
              name="payment-method"
              id="master"
              value="paypal"
            />
            <label className="form-check-payment-methods" htmlFor="master">
              <FaCcMastercard></FaCcMastercard>
            </label>
          </Col>
          <Col className="form-check-inline">
            <input
              className="form-check-input-radio"
              type="radio"
              name="payment-method"
              id="paypal"
              value="cash"
            />
            <label className="form-check-payment-methods" htmlFor="paypal">
              <FaPaypal></FaPaypal>
            </label>
          </Col>
        </Row>
        <Row className="divider"></Row>
       
      <Col >
        <div className="content-inside-bottom">
          <div className="new-card mb-4">
            <p className="new-card-content">
              <FaRegCreditCard size="1.5rem" className="card-icon" />
              Add a new Card
            </p>
          </div>
          <form className="card-form">
          <Row>
            <Col className="card-number" xs={12} md={6}>
              <div className="form-group">
                <label htmlFor="card-number" className="card-label">
                  Card Number
                </label>
                <input
                  type="text"
                  className="card-inputs"
                  id="card-number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col className="card-holder" xs={12} md={6}>
              <div className="form-group">
                <label htmlFor="card-holder" className="card-label">
                  Card Holder's Name
                </label>
                <input
                  type="text"
                  className="card-inputs"
                  id="card-holder"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
          </Row>
         
          <Row>
            <Col xs={12} md={6}>
              <div className="form-group">
                <label htmlFor="card-expiry" className="card-label">
                  Card Expiry Date
                </label>
                <div className="d-flex">
                  <input
                    type="number"
                    className="card-inputs-date"
                    id="card-expiry-mm"
                    name="cardExpiryMM"
                    placeholder="MM"
                    maxLength="2"
                    value={formData.cardExpiryMM}
                    onChange={handleInputChange}
                    min="0"
                    max="12"
                  />
                  <span className="slash">/</span>
                  <input
                    type="number"
                    className="card-inputs-date"
                    id="card-expiry-yy"
                    name="cardExpiryYY"
                    placeholder="YY"
                    maxLength="2"
                    value={formData.cardExpiryYY}
                    onChange={handleInputChange}
                    min="10"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="form-group">
                <label htmlFor="card-cvv" className="card-label">
                  CVV
                </label>
                <input
                  type="number"
                  className="card-inputs-cvv"
                  id="card-cvv"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  max="999"
                  min="0"
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="save-card"
                name="saveCardDetails"
                checked={formData.saveCardDetails}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="save-card">
                Save Card Details
              </label>
            </div>
          </div>
        </form>
        </div>
      </Col>
      </Container>
        {/* Terms and conditions */}
        
      <div className="terms-check mt-3">
        <input
          type="checkbox"
          className="form-check-input mx-2"
          id="agree-checkbox"
          onChange={handleTerms}
        />
        <label className="terms-check-label" htmlFor="agree-checkbox">
          Agree to the terms & conditions
        </label>
      </div>
      {/* Price breakdown total - footer*/}
      <div className="divider-outside mb-2"></div>

      <Container fluid={true} className="bottom-price">
        <Row className="bottom-row">
          <Col className="total-price" xs={6} md={4}>
            <p className="total mt-2">Total Price : </p>
          </Col>
          <Col className="total-price-val" xs={6} md={4}>
            <p className="total-value mt-2"> 3632.50 LKR</p>
          </Col>
          <Col xs={12} md={4} className="btncontainer">
            <LinkContainer to="/eticket">
              <button className="btn btn-primary  btn-lg check-btn">
                Confirm and Pay
              </button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Payment;
