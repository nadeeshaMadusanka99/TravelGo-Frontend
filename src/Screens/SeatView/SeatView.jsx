/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./SeatView.scss";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineTrain } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import SeatButton from "./SeatButton";
import Button from "react-bootstrap/Button";
import tableImage from "../../assets/TableDesign.png";
import { useGetSeatsQuery } from "../../slices/trainApiSlice";
import Loader from "../../components/Loader";
import { useLocation , useNavigate } from "react-router-dom";

const SeatView = () => {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [trainName, setTrainName] = useState("");
  const [wagonClasses, setWagonClasses] = useState([]);
  const [trainData, setTrainData] = useState(null);

  const { data, isLoading } = useGetSeatsQuery({
    trainNo: 1001,
    startStation: 267,
    endStation: 373,
    date: "2023-10-19",
  });
  const seatBookingIDs = data && data.BookedSeats.map((seat) => seat.SeatNo);
  // console.log(seatBookingIDs);

  const location = useLocation();

  async function fetchData() {
    const { state } = location;
    const trainData = state && state.submitData;
    if (trainData) {
      setStartStation(trainData.startStation);
      setEndStation(trainData.endStation);
      setTrainName(trainData.trainName);
      setWagonClasses(trainData.seatClassData);
      setTrainData(trainData);
    } else {
      console.log("No train data available");
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [location]);
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    const submitData ={
      ...trainData,
      seatBookingIDs: seatBookingIDs,
    };
    console.log(submitData);
    navigate("/passengerdetails", { state: { submitData } });
  }
  //take this from earlier page
  const wagons = [
    [1, 0],
    [1, 0],
    [1, 0],
    [2, 1],
  ];

  var seatNo = 0;

  return (
    <main className="seat-view">
      <div className="seat-view-container">
        <Row>
          <Col xs={4} className="non-scrollable">
            <div className="train-box">
              <Row>
                <div className="train-box-container">
                  <MdOutlineTrain className="box-train-icon" />
                  <div className="verticle-line"></div>
                  <p className="left-box-heading-text">{trainName}</p>
                </div>
              </Row>

              <Row className="box-text-container">
                <Col xs={6}>
                  <p className="left-main-data">Start Station : </p>
                </Col>
                <Col xs={6}>
                  <p className="box-right-data">
                    {startStation
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </p>
                </Col>
                <Col xs={6}>
                  <p className="left-main-data">End Station : </p>
                </Col>
                <Col xs={6}>
                  <p className="box-right-data">
                    {endStation
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </p>
                </Col>
                
                {Object.entries(wagonClasses).map(
                  ([className, ticketCount], index) => (
                    <React.Fragment key={index}>
                      <Col xs={6}>
                        <p className="left-main-data">{`${className} : `}</p>
                      </Col>
                      <Col xs={6}>
                        <p className="box-right-data">{`${ticketCount} tickets`}</p>
                      </Col>
                    </React.Fragment>
                  )
                )}
                      
              </Row>
            </div>
          </Col>

          <Col md={4} className="scrollable overflow-auto">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              tabIndex="0"
            >
              <div className="seat-view-container">
                {wagons.map((wagon, wagonIndex) => {
                  // Find the object with the specified "WagonID"
                  const desiredObject =
                    data &&
                    data.WagonTypes.find((item) => item.WagonID === wagon[0]);

                  // Extract the "SeatNoScheme" array from the found object
                  const seatNoSchemeArray = desiredObject
                    ? desiredObject.SeatNoScheme
                    : null;

                  const hasTables = desiredObject
                    ? desiredObject.HasTables
                    : null;

                  const WagonClass = desiredObject ? desiredObject.Class : null;

                  return (
                    <div>
                      <h4 id={wagonIndex} className="wagon-text">
                        Wagon {wagonIndex + 1} -{" "}
                        <span className="wagon-text-span">{WagonClass}</span>
                      </h4>
                      <div className="wagon">
                        <div className="wagon-row">
                          {/* Iterate through the rows of seats in the current wagon */}

                          {seatNoSchemeArray &&
                            seatNoSchemeArray.map((row, rowIndex) => {
                              var isRoatatableDoor = false;
                              return (
                                <div key={rowIndex} className="row">
                                  {row[0][0] === "y" && hasTables ? (
                                    <>
                                      <Col className="centering" xs={4}>
                                        <img
                                          src={tableImage}
                                          className="table"
                                        />
                                      </Col>
                                      <Col xs={2}></Col>
                                      <Col className="centering" xs={6}>
                                        <img
                                          src={tableImage}
                                          className="table"
                                        />
                                      </Col>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  <Col>
                                    <div className="left-window"></div>
                                    <Row>
                                      {row.map((seat) => {
                                        if (seat === "") {
                                          isRoatatableDoor = true;
                                        }
                                        if (seat === "x" || seat === "y") {
                                          seatNo++;
                                        }
                                        return (
                                          <Col
                                            key={seat.id}
                                            className="centering"
                                          >
                                            <SeatButton
                                              seat={seat}
                                              seatNo={seatNo}
                                              doorRotate={isRoatatableDoor}
                                              bookedSeat={seatBookingIDs.includes(
                                                seatNo
                                              )}
                                            />
                                          </Col>
                                        );
                                      })}
                                    </Row>
                                    <div className="right-window"></div>
                                  </Col>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>

          <Col xs={4} className="non-scrollable">
            <div id="list-example" className="list-group">
              {wagons.map((wagon, wagonIndex) => {
                const wagonId = `#${wagonIndex}`;
                return (
                  <a
                    className="list-group-item list-group-item-action"
                    href={wagonId}
                    key={wagonIndex}
                  >
                    Wagon {wagonIndex + 1}
                  </a>
                );
              })}
            </div>
            <div className="button-container">
                <Button variant="primary" className="button-proceed" onClick={handleSubmit}>
                  Proceed
                </Button>
            </div>
          </Col>
        </Row>
      </div>
      {isLoading && <Loader />}
    </main>
  );
};

export default SeatView;
