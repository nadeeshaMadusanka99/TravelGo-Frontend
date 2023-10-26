import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Payment.scss";
import { FaRegCreditCard, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

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
  setTerms(e)
   
  
  console.log("terms",terms);
}
const handlePopup = () => {
  if (terms === false) {
    setModalShow(!modalShow);
  }
  else{
    setTerms(false);
  }
  
};
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
        handleTerms={handleTerms}
      
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
          onChange={handlePopup}
          checked={terms}
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
