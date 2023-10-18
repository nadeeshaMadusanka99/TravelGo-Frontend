import React, {useState} from "react";
import "./SeatView.scss";
import {Container , Row, Col} from "react-bootstrap"; 
import {MdOutlineTrain} from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import SeatButton from "./SeatButton";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



const SeatView = () => {
    // Reserving 28 seats per a wagon
    const seats = [];

    for (let i = 1; i <= 28; i++) {
    const label = i < 10 ? `0${i}` : `${i}`;
    seats.push({ id: i, label });
    }
     

    const seatsInRows = [];

    //  Loop through the seats array and group seats in rows of 4
    for (let i = 0; i < seats.length; i += 4) {
        const leftSeats = seats.slice(i, i + 2);
        const rightSeats = seats.slice(i + 2, i + 4);
        seatsInRows.push([leftSeats, rightSeats]);
    }

    return(
        <main className="seat-view">
            <div className="seat-view-container">
                <Row>
                    <Col xs={4} className="non-scrollable">        
                        <div className="train-box">
                                <Row>
                                    <div className="train-box-container">
                                        <MdOutlineTrain className="box-train-icon" />
                                        <div className="verticle-line"></div>
                                        <p className="left-box-heading-text">GALU KUMARI</p>
                                    </div>
                                </Row>
                                
                                <Row className="box-text-container">
                                    <Col xs={6}>
                                        <p className="left-main-data">Start Station : </p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="box-right-data">Colombo Fort</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="left-main-data">End Station : </p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="box-right-data">Ambalangoda</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="left-main-data">Selected Class : </p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="box-right-data">1st class</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className="left-main-data">No. Of Tickets : </p>
                                    </Col>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={6}>
                                                <p className="box-right-data">2 </p>
                                            </Col>
                                            <Col xs={6}>
                                                <LinkContainer to="/schedule">
                                                    <p className="edit-train-box">edit</p>
                                                </LinkContainer>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    <Col xs={4} className="scrollable overflow-auto" >
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                            <div className="seat-view-container">
                                {/* Iterate through each wagon in wagonSeats
                                {wagonSeats.map((wagon, wagonIndex) => (
                                    console.log('wagonIndex:', wagonIndex),
                                    <div key={wagonIndex}>
                                        <h4 id={`wagon-${wagonIndex + 1}`}>Wagon {wagonIndex + 1}</h4>
                                        <div  className="wagon">
                                            <div className="wagon-row">
                                                Iterate through the rows of seats in the current wagon
                                                {wagon.map((row, rowIndex) => (
                                                    console.log('rowIndex:', rowIndex),
                                                    <div key={(wagonIndex * 1000) + rowIndex} className="row">
                                                        Render seats for the first column
                                                        <Col xs={6}>
                                                            <div className="left-window"></div>
                                                            {row[0].map((seat) => (
                                                                <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                        </Col>
                                                        Render seats for the second column
                                                        <Col xs={6}>
                                                            {row[1].map((seat) => (
                                                                <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                            <div className="right-window"></div>
                                                        </Col>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                            </div> */}


                                    <h4 id="wagon-1">Wagon 1</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {/* Iterate through the rows of seats in the current wagon */}
                                                
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6}>
                                                            <div className="left-window"></div>
                                                            {/* Renders the first column two seats in each row */}
                                                            {row[0].map((seat) => (
                                                                <SeatButton key={seat.id} seat={seat} />
                                                                ))}
                                                        </Col>
                                                            
                                                        {/* Renders the second column two elemnts in each row */}
                                                        <Col xs={6}>
                                                        {row[1].map((seat) => (
                                                            <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                            <div className="right-window"></div>
                                                        </Col>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    <h4 id="wagon-2">Wagon 2</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6} >
                                                        <div className="left-window"></div>
                                                        {/* Renders the first column two seats in each row */}
                                                        {row[0].map((seat) => (
                                                            <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                        </Col>
                                                            
                                                        {/* Renders the second column two elemnts in each row */}
                                                        <Col xs={6}>
                                                        {row[1].map((seat) => (
                                                            <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                            <div className="right-window"></div>
                                                        </Col>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <h4 id="wagon-3">Wagon 3</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6}>
                                                        <div className="left-window"></div>
                                                        {/* Renders the first column two seats in each row */}
                                                        {row[0].map((seat) => (
                                                            <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                        </Col>
                                                            
                                                        {/* Renders the second column two elemnts in each row */}
                                                        <Col xs={6}>
                                                        {row[1].map((seat) => (
                                                            <SeatButton key={seat.id} seat={seat} />
                                                            ))}
                                                            <div className="right-window"></div>
                                                        </Col>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                    </Col>
                  
                    <Col xs={4} className="non-scrollable">
                        <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#wagon-1">1st Wagon</a>
                            <a className="list-group-item list-group-item-action" href="#wagon-2">2nd Wagon</a>
                            <a className="list-group-item list-group-item-action" href="#wagon-3">3rd Wagon</a>
                        </div>
                        <div className="button-container"> 
                            <LinkContainer to="/pricebreakdown">
                                <Button variant="primary" className="button-proceed">Proceed</Button>
                            </LinkContainer>
                        </div>
                        
                    </Col>
                    
                </Row>
               
            </div>

        </main>
    );
}

export default SeatView;