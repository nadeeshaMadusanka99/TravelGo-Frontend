import React, {useState} from "react";
import "./SeatView.scss";
import {Container , Row, Col, ToggleButton, ButtonGroup} from "react-bootstrap"; 
import {MdOutlineTrain} from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import SeatButton from "./SeatButton";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



const SeatView = () => {
    const [checked, setChecked] = useState(false);
    const seats = [
        { id: 1, label: '01' },
        { id: 2, label: '02' },
        { id: 3, label: '03' },
        { id: 4, label: '04' },
        { id: 5, label: '05' },
        { id: 6, label: '06' },
        { id: 7, label: '07' },
        { id: 8, label: '08' },
        { id: 9, label: '09' },
        { id: 10, label: '10' },
        { id: 11, label: '11' },
        { id: 12, label: '12' },
        { id: 13, label: '13' },
        { id: 14, label: '14' },
        { id: 15, label: '15' },
        { id: 16, label: '16' },
        { id: 17, label: '17' },
        { id: 18, label: '18' },
        { id: 19, label: '19' },
        { id: 20, label: '20' },
        { id: 21, label: '21' },
        { id: 22, label: '22' },
        { id: 23, label: '23' },
        { id: 24, label: '24' },
        { id: 25, label: '25' },
        { id: 26, label: '26' },
        { id: 27, label: '27' },
        { id: 28, label: '28' },
      ];
    

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
                                    <h4 id="list-item-1">Wagon 1</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6}>
                                                            <div className="left-window"></div>
                                                            {/* Renders the first column two seats in each row*/}
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

                                    <h4 id="list-item-2">Wagon 2</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6} >
                                                        <div className="left-window"></div>
                                                        {/* Renders the first column two seats in each row*/}
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
                                    <h4 id="list-item-3">Wagon 3</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6}>
                                                        <div className="left-window"></div>
                                                        {/* Renders the first column two seats in each row*/}
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
                                    <h4 id="list-item-4">Wagon 4</h4>
                                    <div className="wagon">
                                        <div className="wagon-row">
                                                {seatsInRows.map((row, rowIndex) => (
                                                    <div key={rowIndex} className="row">
                                                        <Col xs={6}>
                                                        <div className="left-window"></div>
                                                        {/* Renders the first column two seats in each row*/}
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
                    </Col>
                    <Col xs={4} className="non-scrollable">
                        <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#list-item-1">
                                1st Wagon
                            </a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">2nd Wagon</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">3rd Wagon</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-4">4th wagon</a>
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