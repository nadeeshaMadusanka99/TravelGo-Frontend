import { Container, Button } from 'react-bootstrap';
import './HeroSection.scss';



const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>

      <Container className="hero-content">
      <div><p>Hello Travellers</p>
        <h1>make your booking<br />
        experience easy!</h1></div>
      
        <div className="search-form">
          <div className="glass-container-extend">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Date" />
            
            <Button variant="primary" className='button-extend'>Search</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
