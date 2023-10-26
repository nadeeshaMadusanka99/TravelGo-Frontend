import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
    console.log("props",props)
    return (
      <Modal
        {...props}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Terms and Conditions for Train Booking:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>1. Booking and Reservation:</h5>
          <p>
           By using our train booking system, you agree to provide accurate and complete information when making a booking or reservation. This includes personal details, travel information, and payment information.
          </p>
          <h5>2. Payment:</h5>
          <p>
           All bookings must be paid for in full. We accept various payment methods, and your payment is subject to our payment gateway provider's terms and conditions. In case of payment failure or fraud, we reserve the right to cancel your booking.
          </p>
          <h5>3. Cancellation and Refund:</h5>
          <p>
           Cancellation policies vary depending on the type of ticket and the timing of the cancellation. Please review our cancellation and refund policy before making a booking. Refunds are subject to a processing fee.
          </p>
          <h5> 4. Travel Documents:</h5>
          <p>
          It is your responsibility to carry valid travel documents, including tickets, government-issued IDs, and any required visas. Failure to do so may result in denied boarding.
          </p>
          <h5>5. Baggage: </h5>
          <p>
           Our baggage policies and fees are available on our website. Make sure to adhere to baggage rules to avoid additional charges or inconvenience.
          </p>
          <h5>6. Changes and Rescheduling:</h5>
          <p>
           Changes to your booking are subject to availability and applicable fees. Contact our customer support for assistance with rescheduling.
          </p>
          <h5> 7. Safety and Conduct:</h5>
          <p>
            Passengers are expected to adhere to safety regulations and respectful behavior throughout the journey. Disruptive or unlawful conduct may result in removal from the train and legal consequences.
          </p>
          <h5>8.  and Schedule Changes: </h5>
          <p>
           Train schedules are subject to change due to various factors. We are not responsible for any inconvenience or additional costs due to schedule changes or delays.
          </p>
          <h5>9. Liability: </h5>
          <p>
          Our liability for any loss, damage, or injury during your journey is limited to the terms outlined in the applicable law. We recommend you consider travel insurance to cover unforeseen circumstances.
          </p>
          <h5>10. Amendments: </h5>
          <p>
          We reserve the right to modify these terms and conditions. Please check for updates on our website.
          </p>
        </Modal.Body>
        <Modal.Footer>
        
          <Button onClick={()=>{
            props.handleTerms(true);
            props.onHide()
            }}>Agree</Button>
            <Button onClick={(e) => {
                //setTerms(e.target.checked);
                props.onHide(false);
                props.handleTerms(false);
            }}
            style={{ backgroundColor: "maroon" }}
            >Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MyVerticallyCenteredModal;  