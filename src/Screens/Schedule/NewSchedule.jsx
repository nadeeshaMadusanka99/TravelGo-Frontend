import React,{useState} from "react";
import { Col, Container, Row ,Button,Form} from "react-bootstrap";
import "./NewSchedule.scss";
import { LinkContainer } from "react-router-bootstrap";


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
  return(
    <Container fluid="true" className="count-container">
          <Row>
            <Col md="3" sm="6" xs='6'>
                  <h2>{seatClass}</h2>
            </Col>
            <Col md="2" sm="6" xs='6'>
                  <Row>60 seats</Row>
                  <Row>{price} LKR</Row>
            </Col>
            <Col md="3" sm="6" xs='6'>
                  <Row>Available:25</Row>
                  <Row>Booked:35</Row>
            </Col>
            <Col md="4" sm="6" xs='6' className="d-flex justify-content-center align-items-center">
              <Col md="6" sm="6" xs='6'>
              <span style={{ marginTop: '-30px' }}>{counter}</span>
              </Col>
              <Col md="6" sm="6" xs='6'>
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
            </Col>
          </Row>        
        
      </Container>
  );
};

const NewSchedule = () => {

  const crowdColors = ['#e6f360', '#a7b047', '#e9621e', '#b1605b', '#b05927', '#e9621e', '#ff9800' ]
  return (
    <Container fluid="true" className="schedule-container">
      <Container fluid="true" className="train-container">
        <Row>
          <Col md="3" sm="12">
            <Row>
              <Col md="11" className="train-details">
                <h4 className="train-name">Galu Kumari</h4>
                <div>Colombo Commuter</div>
                <div>Train No: 8067</div>
                <div>Daily</div>
                <div>Classes: 1st 2nd 3rd</div>
              </Col>
              <Col md="1" className="vertical-bar-container">
                <div className="vertical-bar"></div>
              </Col>
              <Row className="horizontal-bar-container">
                <div className="horizontal-bar" />
              </Row>
            </Row>
          </Col>
          <Col md="9" sm="12" className="right-side-train">
            <Row>
              <Col xs="2" className="train-right-label">
                Station
              </Col>
              <Col xs="2" className="start-station">
                Colombo
              </Col>
              <Col xs="2" className="source-station">
                Mount Lavinia
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                Ambalangoda
              </Col>
              <Col xs="2" className="end-station">
                Beliatta
              </Col>
            </Row>

            {/* Dotted Line Map */}
            <Row className="map-container-lines">
              <Col xs="2" />
              <Col xs="10">
                <div className="dotted-line" />
                <Col xs="1" className="circle-position" />
                <Col xs="1" className="circle-position c-p-source" />
                <Col xs="1" className="circle-position c-p-dest" />
                <Col xs="1" className="circle-position c-p-end" />
              </Col>
            </Row>


            {/* Arrival Times */}
            <Row className="arrival-time-row">
              <Col xs="2" className="train-right-label">
                Arrival
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Dest times */}
            <Row>
              <Col xs="2" className="train-right-label">
                Departure
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="2" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Crowd row */}
            <Row>
              <Col xs="2" sm="2" className="train-right-label">
                Crowd
              </Col>

              <Col xs='9' sm='10' className="crowd-boxes-container">
                <Row>
                { crowdColors.map((index) => (
                <Col className="crowd-boxes" style={{backgroundColor: `${index}`}}/>
              ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid="true" className="heading-container">
         <Row>
          <Col md="9" sm="12">
            <h1>How many seats do you want to book?</h1>        
          </Col>
          <Col md="3">
          <Form className='radio-switch'>
            <div className="d-flex justify-content-center align-items-center">
              <label htmlFor="custom-switch">Return ticket?</label>
              <Form.Check type="switch" id="custom-switch" />
            </div>
          </Form>
          </Col>
         </Row>
         </Container>
         <ClassDetails seatClass="First-Class" price="1850" />
         <ClassDetails seatClass="Second Class" price="950" />
         <ClassDetails seatClass="Third Class" price="550" />
        <Container className="button-container" md='12'>
          <Row className="jus" style={{ margin: '20px'}}>
                <Col md="9" sm="12" className='d-flex align-items-start justify-content-start'>
                    <Row><p className='ticket-count'>2 First Class</p><p className='seat-para'> Seats selected</p></Row>
                    <Row>
                    <p className='ticket-price'>3100 LKR</p>
                    <p className='cost-para'> Costs can vary due to offers and other promotional matters</p>
                    </Row>
                </Col>
                <Col md="3" sm="12" className='d-flex align-items-center justify-content-end'>
                  <LinkContainer to="/seatview">
                    <Button variant="primary" className="btn-book">Continue</Button>
                  </LinkContainer>
                </Col>
          </Row>
          </Container>
    </Container>
    
  );
};

export default NewSchedule;