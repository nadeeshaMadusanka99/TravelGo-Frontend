import React from "react";
import "./ETicket.scss";
import { Col, Row, Container } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import logo from "../../assets/LogoBlack.png";
import QR from "../../assets/QR.png";
import { BsDownload } from "react-icons/bs";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; 

const Eticket = () => {
  function downloadpdf() {
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "landscape",
    });
  
    const eticketContainer = document.querySelector(".eticket-container");
  
    html2canvas(eticketContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
  
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
  
      const contentWidth = canvas.width ;
      const contentHeight = canvas.height;
  
      const scaleWidth = pageWidth / contentWidth;
      const scaleHeight = pageHeight / contentHeight;
     
      const scale = Math.min(scaleWidth, scaleHeight);
  
      const centerX = (pageWidth - contentWidth * scale) / 2 +5;
      const centerY = (pageHeight - contentHeight * scale) / 2;
  
      // Add the image to the PDF, scaling and positioning it properly
      doc.addImage(imgData, "JPEG", centerX, centerY, contentWidth * scale -10, contentHeight * scale);
  
      doc.save("eticket.pdf");
    });
  }

  return (
    <main className="eticket">
      <container className="heading-container">
        <BsFillCheckCircleFill className="success-icon" />
        <div className="heading"> Payment Successful!</div>
        <p className="important-notice">
          {" "}
          Please carry the Mail sent to your email address provided or a printed
          ticket while travelling{" "}
        </p>
      </container>
      {/* E-Ticket container */}
      <Container className="eticket-container">
        <Row className="container-header">
          <Col xs={2} className="m-2 mx-4">
            <img className="logo-inside" src={logo} alt="logo"></img>
          </Col>
          <Col xs={7} className="d-flex align-items-center">
            <p className="header-text text-center">FIRST CLASS</p>
          </Col>
        </Row>
        <div className="content-inside px-4 pt-1">
          <Row className="main-row">
            <Col xs={10} className="content-col">
              <Row className="content-row">
                <Col xs={4} className="content-col">
                  <p className="content-text">NAME OF THE PASSENGER : </p>
                </Col>
                <Col xs={6} className="content-col">
                  <p className="content-text-data"> MR. MAHINDA RAJAPAKSA</p>
                </Col>
              </Row>
              <Row className="content-row">
                <Col xs={2} className="content-col">
                  <p className="content-text">FROM : </p>
                </Col>
                <Col xs={4} className="content-col">
                  <p className="content-text-data">COLOMBO FORT</p>
                </Col>
                <Col xs={2} className="content-col">
                  <p className="content-text">TO : </p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text-data">AMBALANGODA</p>
                </Col>
              </Row>
              <Row className="content-row">
                <Col xs={2} className="content-col">
                  <p className="content-text">DATE : </p>
                </Col>
                <Col xs={4} className="content-col">
                  <p className="content-text-data">24/08/2023</p>
                </Col>
                <Col xs={2} className="content-col">
                  <p className="content-text">TIME : </p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text-data">8.00 AM</p>
                </Col>
              </Row>
              <Row className="content-row">
                <Col xs={3} className="content-col">
                  <p className="content-text text-center">TRAIN NO : </p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text text-center">WAGON NO :</p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text text-center">SEAT NO : </p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text text-center">SEATS :</p>
                </Col>
              </Row>
              <Row className="content-row">
                <Col xs={3} className="content-col">
                  <p className="content-text-data text-center">8057</p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text-data text-center">2</p>
                </Col>
                <Col xs={3} className="content-col">
                  <p className="content-text-data text-center">3</p>
                </Col>
                <Col xs={3} className="content-col">
                  <Row>
                    <Col className="col-md-5">
                      <div className="box text-center">
                        <p className="seat-text-data">A 39 </p>
                      </div>
                    </Col>
                    <Col className="col-md-5">
                      <div className="box text-center">
                        <p className="seat-text-data">A 40 </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex align-items-center text-center">
              <img src={QR} alt="QR" className="qr"></img>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Download Area */}
      <BsDownload size="2rem" className="download-btn mb-2" onClick={downloadpdf}></BsDownload>
      <p className="download-text"> Download from here</p>
    </main>
  );
};

export default Eticket;
