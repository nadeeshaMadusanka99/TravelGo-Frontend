import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Schedule.scss';

// Reusable component for class details
const ClassDetails = ({ seatClass, price }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className='book-container'>
      <Row>
        <Col className='booking-class'>{seatClass}</Col>
        <Col className='booking-ele'>
          <p>60 seats</p>
          <p>{price}LKR</p>
        </Col>
        <Col className='booking-count'>
          <p>Available: 25</p>
          <p>Booked:35</p>
        </Col>
        <Col className='booking-ele'>
        <Row>
        <Col className='ticket-count'>
        <span style={{ marginTop: '-30px' }}>{counter}</span>
        </Col>
          <Col className='booking-ele'>
            <Row>
              <Button variant="primary" className="btn-inc" onClick={increment}>
              +
              </Button>
            </Row>
            <Row>
              <Button variant="primary" className="btn-dec"  onClick={decrement}>
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
              <Col className='train-details' xs={3}> 
              <Col >
                  <h4 className='body-paragraph'>GALU KUMARI</h4>
                  <p className='gray-paragraph'>Colombo Commuter</p>
                  <p className='gray-paragraph'>Train No. 8057</p>
                  <h5 className='body-paragraph'>Daily</h5>         
                  <p className='gray-paragraph'>Classes: 1st,2nd,3rd</p>
              </Col>               
                  
              <Col >
                <div className='vertical-line'></div>
              </Col>
              </Col>
              
              <Col className='station-details' xs={2}>               
                  <p className='gray-paragraph'>Station</p>            
                  <p className='gray-paragraph'>Arrival</p>
                  <p className='gray-paragraph'>Departure</p>                
                  <p className='gray-paragraph'>Crowd</p>               
              </Col>
              <Col xs={7} className='short-map'>
                <div>
                 <div className='lines'>
                  <div className='circle'>

                  </div>
                 </div> 
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className="text-container">
          <h1>How many seats do you want to book?</h1>
          <Form className='radio-switch'>
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="custom-switch">Return ticket?</label>
              <Form.Check type="switch" id="custom-switch" />
            </div>
          </Form>
        </div>
        <div className='choose-class-container'>
          <div className="choose-class">
            <ClassDetails seatClass="First-Class" price="1850" />
          </div>
          <div className="choose-class">
            <ClassDetails seatClass="Second Class" price="950" />
          </div>
          <div className="choose-class">
            <ClassDetails seatClass="Third Class" price="550" />
          </div>
        </div>
      <Container>
      <Row className='rowa'>
  <Col xs={6} className='d-flex align-items-center'>

    <div>
    <div className='d-flex align-items-center'>
    <p className='ticket-count'>2 First Class</p><p className='seat-para'> Seats selected</p>
    </div>
      
      <div className="d-flex align-items-center">
      <p className='ticket-price'>3100 LKR</p>
      <p className='cost-para'> Costs can vary due to offers and other promotional matters</p>
    </div>
    </div>
  </Col>
  <Col xs={6} className='d-flex align-items-center justify-content-end'>
    <Button variant="primary" className="btn-book">Continue</Button>
  </Col>
</Row>

      </Container>
      </div>
    </main>
  );
};

export default Schedule;
