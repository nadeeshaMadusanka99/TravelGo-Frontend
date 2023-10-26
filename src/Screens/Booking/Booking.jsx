import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./Booking.scss";
import ClassDetails from "./ClassDetails";
import { useNavigate, useLocation } from "react-router-dom";
import ScheduleCard from "../Schedule/ScheduleCard";

const NewSchedule = () => {
  const [ticketCounts, setTicketCounts] = useState({ "": 0 });
  const [totalCost, setTotalCost] = useState(0);
  const [isReturnTicket, setIsReturnTicket] = useState(false);
  const [returndate, setDate] = useState("");
  const [seatClassData, setSeatClassData] = useState({});
  const [wagonClasses, setWagonClasses] = useState([]);
  const [dataSchedule, setDataSchedule] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    const trainData = state && state.trainData;
    if (trainData) {
      setDataSchedule(trainData.data);
      setWagonClasses(trainData.classes);
    } else {
      console.log("No trian data available");
    }
  }, [location]);

  //update total cost according to ticket count
  const updateCost = (ticketCost, newCount, count) => {
    setTotalCost((prevTotalCost) => {
      if (newCount < 0) {
        return prevTotalCost;
      } else if (newCount > count) {
        return prevTotalCost + ticketCost;
      } else {
        return prevTotalCost - ticketCost;
      }
    });
  };
  // Update ticket counts
  const updateTicketCounts = (ticketClass, newCount) => {
    setTicketCounts((prevCounts) => {
      if (prevCounts[""] === 0) {
        // Remove the initial empty class count
        delete prevCounts[""];
      }
      if (newCount < 0) {
        return prevCounts;
      } else {
        return {
          ...prevCounts,
          [ticketClass]: newCount,
        };
      }
    });
  };

  const handleSeatCountChange = (seatClass, newCount) => {
    // Update the seatClassData object with the new data
    setSeatClassData((prevData) => ({
      ...prevData,
      [seatClass]: newCount,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Convert the data to an object
    const submitData = {
      // fromStation,
      isReturnTicket,
      returndate,
      seatClassData,
    };
console.log(seatClassData);
    // Use the history object to navigate to the next page and pass the data as query parameters
    navigate("/seatview", { state: { submitData } });
  };

  //Handling date input
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split("T")[0];

  return (
    <Container fluid="true" className="schedule-container">
      {dataSchedule && <ScheduleCard {...dataSchedule} />}

      <Container fluid="true" className="headingContainer">
        <Row>
          <Col md="9" sm="12">
            <h1 className="head-question">
              How many seats do you want to book?
            </h1>
          </Col>
          <Col md="3">
            <Form className="radio-switch">
              <div className="d-flex justify-content-center align-items-center">
                <label htmlFor="custom-switch" className="return-ticket-text">Return ticket?</label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={isReturnTicket}
                  onChange={() => setIsReturnTicket(!isReturnTicket)}
                />
              </div>
            </Form>
            {isReturnTicket && (
              <div className="d-flex justify-content-center align-items-center">
                {/* Input field for return ticket data */}
                <input
                  type="date"
                  placeholder="Enter return ticket data"
                  onChange={handleDate}
                  min={currentDateString}
                  className="return-date"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
 
      {wagonClasses && Array.isArray(wagonClasses) && wagonClasses.length > 1 && (
  <>
    {wagonClasses[0] && wagonClasses[0].Class && (
      <ClassDetails
        seatClass={wagonClasses[0].Class}
        price="1850"
        seatsCount={wagonClasses[0].Capacity}
        availableSeats="20"
        bookedSeats="10"
        updateTicketCounts={updateTicketCounts}
        updateCost={updateCost}
        onSeatCountChange={handleSeatCountChange}
      />
    )}
    {wagonClasses[1] && wagonClasses[1].Class && (
      <ClassDetails
        seatClass={wagonClasses[1].Class}
        price="950"
        seatsCount="66"
        availableSeats={wagonClasses[1].Capacity}
        bookedSeats="26"
        updateTicketCounts={updateTicketCounts}
        updateCost={updateCost}
        onSeatCountChange={handleSeatCountChange}
      />
    )}
  </>
)}

      <Container className="buttonContainer">
        <Row>
          <Col md="9" sm="12">
            <Row>
              <Col xs={12} sm={12} xl={12} className="ticket-pricing">
                {Object.entries(ticketCounts).map(
                  ([ticketClass, count], index) => (
                    <p className="ticket-count" key={index}>
                      {index === 0 ? (
                        <span className="class-fonts">
                          {count} {ticketClass}
                        </span>
                      ) : (
                        <span className="class-fonts">
                          , {count} {ticketClass}{" "}
                        </span>
                      )}
                    </p>
                  )
                )}
                <span className="seat-para"> Seats selected</span>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={4} xl={2}>
                <p className="ticket-price">{totalCost} LKR</p>
              </Col>
              <Col xs={12} sm={8}>
                <p className="cost-para">
                  Costs can vary due to offers and other promotional matters
                </p>
              </Col>
            </Row>
          </Col>
          <Col md="3" sm="12" className="book-btnc">
            <Button
              variant="primary"
              className="btnBook"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NewSchedule;
