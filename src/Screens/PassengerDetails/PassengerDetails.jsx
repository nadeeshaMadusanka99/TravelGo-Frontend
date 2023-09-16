import React, { useState } from 'react';
import './PassengerDetails.scss';
import { Col,Row, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {MdOutlineTrain} from 'react-icons/md';


const PassengerDetails = () => {
    return(
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
                <form id="passenger-details-form">
                    <Row>
                        <Col xs={3} sm={2}className='title-content'>
                        <label htmlFor = "name" className='label-heading'><span className='important-fields'>*</span> Title </label><br></br>
                            <select id="title" className='inputs' name="title" required>
                                {/* <option value="" disabled selected>Select</option> */}
                                <option value="Mr" className='options'>Mr</option>
                                <option value="Mrs" className='options'>Mrs</option>
                                <option value="Ms" className='options'>Ms</option>
                            </select>
                        </Col>
                        <Col xs={9} sm={5} className='fname-content'>
                            <label htmlFor = "fname" className='label-heading'><span className='important-fields'>*</span> First Name</label><br></br>
                            <input type="text" id="fname" className='inputs' name="name" required></input>
                        </Col>
                        <Col xs={12} sm={5} className='lname-content'>
                            <label htmlFor = "lname" className='label-heading'><span className='important-fields'>*</span> Last Name</label><br></br>
                            <input type="text" id="lname" className='inputs' name="name" required></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <label htmlFor = "email" className='label-heading mt-2'><span className='important-fields'>*</span> Email</label><br></br>
                            <input type="email" id="email" className='inputs' name="email" required></input>
                            <p className='important-tags'>You must enter a valid email address to recieve ticket details via Email</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <label htmlFor = "NIC" className='label-heading'><span className='important-fields'>*</span> NIC</label><br></br>
                            <input type="text" id="nic" className='inputs' name="nic" required></input>
                        </Col>
                        <Col xs={6}>
                            <label htmlFor = "phone" className='label-heading'><span className='important-fields'>*</span> Mobile number</label><br></br>
                            <input type="tel" id="phone" className='inputs' name="phone" required pattern="[0-9]*"></input>
                        </Col>
                    </Row>
                    <Row>
                        <div className="same-line">
                            <MdOutlineTrain className='train-icon'/>
                            <p className='other-passengers'> Other Passengers Info</p>
                        </div>
                        <p className='name-tags'>Please enter details of the all other passengers</p>
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
                        <div className="divider-mid mb-2"></div>
                        <Row>
                            <Col xs={4}>
                                <label htmlFor = "name" className='name-tags'> Passenger 1 </label><br></br>
                            </Col>
                            <Col xs={4}>
                                <select id="title" className='inputs-age middle-selection' name="title">
                                    {/* <option value="" disabled selected>Select</option>  */}
                                    <option value="Mr">Adult</option>
                                    <option value="Mrs">Child</option>
                                    <option value="Ms">Infant</option>
                                </select>
                            </Col>
                            <Col xs={4}>
                                <input type="text" id="nic" className='inputs' name="nic"></input>
                            </Col>
                        </Row>
                        <p className='important-tags mb-3'> If the passenger is not of legal adult age, please provide the guardian's identity number </p>
                        <p> <strong>Mandatory fields are marked with</strong> <span className='important-fields'>*</span></p>
                    </Row>
                    <div className="divider mb-2"></div>
                        <Row className='justify-content-end'>
                            <Col className="col-auto">
                                <button type="submit" className="btn btn-primary btn-passenger-details">Submit</button>
                            </Col>
                            <LinkContainer to="/seatview">
                                <Col className="col-auto">
                                    <button type="cancel" className="btn btn-secondary btn-passenger-details">Cancel</button>
                                </Col>
                            </LinkContainer>
                        </Row>
                </form> 
            </Container>
        </main>
    );
};

export default PassengerDetails;