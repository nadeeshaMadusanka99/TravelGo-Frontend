import React from 'react';
import { Button, Container,Row,Col } from 'react-bootstrap';
import './NewBooking.scss';
import NewMapContainer from './NewMapContainer'; // Import the MapContainer component
import { useGetStationsQuery } from '../../slices/trainApiSlice';
import { LinkContainer } from 'react-router-bootstrap';


const NewBooking = () => {
  // Define your data for different train journeys
  const {data, isLoading} = useGetStationsQuery();


  console.log("🚀 ~ file: HeroSection.jsx:8 ~ HeroSection ~ data:", data)
  const trainData = [
    {
      trainName: 'GALU KUMARI',
      trainType: 'Colombo Commuter',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    {
      trainName: 'Rajarata Rajina',
      trainType: 'Express Train',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    {
      trainName: 'GALU KUMARI',
      trainType: 'Colombo Commuter',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    // Add more train journeys here
  ];

  return (
    <main className="booking">
    
        
      <div className="booking-background">
      <Container className='search-field'>
      <div className="search-form">
          <div className="glass-container-extend">
            <div className='dropdown-class'>
            <label className='dropdown-label'>From</label>
            <select>
              {(data!=undefined) ? data.map((station) => (
                <option>{station.StationName}</option>
              )) : <><option>Loading</option></>}
           
            </select>
            </div>
            

            <div className='dropdown-class'>
            <label className='dropdown-label'>To</label>
            <select>
              {(data!=undefined) ? data.map((station) => (
                <option>{station.StationName}</option>
              )) : <><option>Loading</option></>}
           
            </select>
            </div>

            <div className='dropdown-class'>
            <label className='dropdown-label'>Date</label>
            <input type="date" placeholder="Date" />


            </div>

            
            
            <div className='search-btn'>
            <LinkContainer to="/booking">
            <Button variant="primary" className='button-extend'>Search</Button>
            </LinkContainer>
            </div>
          </div>
        </div>
         </Container>
      
        {trainData.map((data, index) => (
          <NewMapContainer key={index} {...data} />
        ))}
       <div className='intensity-container'>
       <div className='crowd-intensity'>
       <div className='low-crowd'>
       <span className='low-arrow'></span>Low Crowd</div> 
       <div className='high-crowd'>
       <span className='high-arrow'>
       </span>High Crowd</div>
       </div> 
        
      </div>
      </div>
      
    </main>
  );
};

export default NewBooking;
