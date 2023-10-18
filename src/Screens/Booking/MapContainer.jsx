// MapContainer.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Booking.scss';
import { LinkContainer } from 'react-router-bootstrap';


// eslint-disable-next-line react/prop-types
const MapContainer = ({ trainName, trainType, trainNo, schedule, classes }) => {
  
  const colors = ['#e6f360', '#a7b047', '#e9621e', '#ff0000', '#ff0000', '#e9621e', '#ff9800', '#a7b047', '#e6f360', '#e6f360'];

  const crowdRectangleStyles = Array.from({ length: 10 }).map((_, index) => ({
    backgroundColor: colors[index],
    height: '100%',
    width: '9.7%',
    position: 'relative',
    left: `calc(${index + 1} * 10% - 10%)`,
    bottom: `calc(${index + 1} * 100%)`,
  }));
  
 
  
  return (
    <div className="map-container">
      <Container>
        <Row>
          <Col className="train-details"  xs={12} sm={3}>
            <Col>
              <h5 className="body-paragraph">{trainName}</h5>
              <p className="gray-paragraph">{trainType}</p>
              <p className="gray-paragraph">Train No. {trainNo}</p>
              <h6 className="body-paragraph">Daily</h6>
              <p className="gray-paragraph">Classes: {classes}</p>
              <LinkContainer to="/schedule">
                <Button variant="primary" className="btn-book">
                  <p>Book Tickets</p>
                </Button>
              </LinkContainer>
            </Col>

            <Col >
              <div className="vertical-line"></div>
            </Col>
          </Col>

          <Col className="station-details" xs={12} sm={2}>
            <p className="station-paragraph">Station</p>
            <p className="arrival-paragraph">Arrival</p>
            <p className="departure-paragraph">Departure</p>
            <p className="crowd-paragraph">Crowd</p>
          </Col>

          <Col xs={12} sm={7} className="short-map">
            <div className="lines">
              {/* eslint-disable-next-line react/prop-types */}
              {schedule.map((station, index) => (
                <div className="circle" key={index}>
                  <p className="next-station">{station.name}</p>
                  <p className="arrival-time">{station.arrival}</p>
                  <p className="departure-time">{station.departure}</p>
                </div>
              ))}
            </div>
            <div className="crowd-line">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className={`crowd-rectangle ${index + 1}`} key={index} style={crowdRectangleStyles[index]}></div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapContainer;
