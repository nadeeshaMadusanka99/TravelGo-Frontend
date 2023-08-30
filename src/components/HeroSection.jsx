import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <Container className="hero-content">
        <h1>Welcome to Train Booking System</h1>
        <p>Your journey starts here</p>
        <div className="search-form">
          <div className="glass-container">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Date" />
            <Button variant="primary">Search</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
