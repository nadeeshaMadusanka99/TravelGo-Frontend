import React, { useEffect, useState } from 'react';
import './PassengerDetails.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineTrain } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const PassengerDetails = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    phone: '',
  });

  const [passengerInfo, setPassengerInfo] = useState([
    {
      title: '',
      type: '',
      identificationNumber: '',
    },
  ]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
     
    });
    console.log('Form Data:', formData);
    console.log('form name,', formData.firstName);
    console.log('form passengerInfo,', formData.title);
  };

  const handlePassengerChange = (e, index) => {
    console.log('Passenger Info:', passengerInfo);
    const { name, value } = e.target;
    const updatedPassengerInfo = [...passengerInfo];
    updatedPassengerInfo[index][name] = value;
    setPassengerInfo(updatedPassengerInfo);
  };

  const addPassenger = () => {
    setPassengerInfo([...passengerInfo, { title: '', type: '', identificationNumber: '' }]);
  };

  const removePassenger = (index) => {
    const updatedPassengerInfo = passengerInfo.filter((_, i) => i !== index);
    setPassengerInfo(updatedPassengerInfo);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    
    const submitData = {
        // fromStation,
        formData, 
        passengerInfo,
        };  
    console.log('Submit Data:', submitData);   

    navigate("/pricebreakdown",{state:{submitData}});
    // Access formData and passengerInfo for further processing
    console.log('Form Data:', formData);
    console.log('Passenger Info:', passengerInfo);
    // You can perform any additional processing or submit this data as needed.
  };

  return (
    <main className="passenger-details">
      <Container className='passenger-details-container'>
        <Row className='first-row'>
          <Col xs={12} sm={3}>
            <p className='main-heading'>Primary Passenger Details</p>
          </Col>
          <Col xs={12} sm={9}>
            <p className='fill-links'>Primary Passenger is the account owner?</p>
          </Col>
        </Row>
        <div className="divider mb-3"></div>
        <form id="passenger-details-form" onSubmit={handleSubmit}>
          <Row>
            <Col xs={3} sm={2} className='title-content'>
              <label htmlFor="title" className='label-heading'><span className='important-fields'>*</span> Title</label><br></br>
              <select id="title" className='inputs' name="title" required onChange={handleFormChange}>
                <option value="Mr" className='options'>Mr</option>
                <option value="Mrs" className='options'>Mrs</option>
                <option value="Ms" className='options'>Ms</option>
              </select>
            </Col>
            <Col xs={9} sm={5} className='fname-content'>
              <label htmlFor="firstName" className='label-heading'><span className='important-fields'>*</span> First Name</label><br></br>
              <input type="text" id="firstName" className='inputs' name="firstName" required onChange={handleFormChange}></input>
            </Col>
            <Col xs={12} sm={5} className='lname-content'>
              <label htmlFor="lastName" className='label-heading'><span className='important-fields'>*</span> Last Name</label><br></br>
              <input type="text" id="lastName" className='inputs' name="lastName" required onChange={handleFormChange}></input>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="email" className='label-heading mt-2'><span className='important-fields'>*</span> Email</label><br></br>
              <input type="email" id="email" className='inputs' name="email" required onChange={handleFormChange}></input>
              <p className='important-tags'>You must enter a valid email address to receive ticket details via Email</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <label htmlFor="nic" className='label-heading'><span className='important-fields'>*</span> NIC</label><br></br>
              <input type="text" id="nic" className='inputs' name="nic" required onChange={handleFormChange}></input>
            </Col>
            <Col xs={6}>
              <label htmlFor="phone" className='label-heading'><span className='important-fields'>*</span> Mobile number</label><br></br>
              <input type="tel" id="phone" className='inputs' name="phone" required pattern="[0-9]*" onChange={handleFormChange}></input>
            </Col>
          </Row>
          <Row>
            <div className="same-line">
              <MdOutlineTrain className='train-icon' />
              <p className='other-passengers'> Other Passengers Info</p>
            </div>
            <p className='name-tags'>Please enter details of all other passengers</p>
          </Row>
          <Row>
                        <Col xs={4} className='label-heading'>
                            <label htmlFor = "name" className='label-names'> Passenger </label><br></br>
                        </Col>
                        <Col xs={4} className='label-heading'>
                            <label htmlFor = "name" className='label-names'> Type </label><br></br>
                        </Col>
                        <Col xs={4} className='label-heading'>
                            <label htmlFor = "name" className='label-names'> Identification number </label><br></br>
                        </Col>
          </Row>
                        
          <div className="divider mb-2"></div>
          {passengerInfo.map((passenger, index) => (
            <Row key={index}>
              <Col xs={4} className='label-heading'>
                <label htmlFor={`title-${index}`} className='label-names'> Passenger {index + 1}</label><br></br>
              </Col>
              <Col xs={4} className='label-heading'>
                <select id={`title-${index}`} className='inputs-age middle-selection' name="title" onChange={(e) => handlePassengerChange(e, index)}>
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                  <option value="Infant">Infant</option>
                </select>
              </Col>
              <Col xs={4}>
                <input
                  type="text"
                  id={`nic-${index}`}
                  className='inputs'
                  name="nic"
                  onChange={(e) => handlePassengerChange(e, index)}
                ></input>
              </Col>
              
              <Col xs={6} md={2}>
                <button type="button" onClick={() => removePassenger(index)}>Remove</button>
              </Col>
            </Row>
          ))}
          
          <p className='important-tags mb-3'>
            If the passenger is not of legal adult age, please provide the guardian's identity number
          </p>
          <Col className="col-auto" xs={6} md={2}>
                <button type="button" onClick={addPassenger}>Add Passenger</button>
            </Col>
          <p>
            <strong>Mandatory fields are marked with</strong> <span className='important-fields'>*</span>
          </p>
          <div className="divider mb-2"></div>
          <Row className='btnC'>
           
            <Col className="col-auto">
              <button type="submit" className="btn btn-primary btn-passenger-details" >Submit</button>
            </Col>
            <LinkContainer to="/pricebreakdown">
              <Col className="col-auto">
                <button type="cancel" className="btn btn-secondary btn-passenger-details" >Cancel</button>
              </Col>
            </LinkContainer>
          </Row>
        </form>
      </Container>
    </main>
  );
};

export default PassengerDetails;
