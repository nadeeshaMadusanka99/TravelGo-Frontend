import { Container, Button } from 'react-bootstrap';
import './HeroSection.scss';
import { useGetStationsQuery } from '../../slices/trainApiSlice';
import { LinkContainer } from 'react-router-bootstrap';

const HeroSection = () => {
  const {data, isLoading} = useGetStationsQuery();


  console.log("🚀 ~ file: HeroSection.jsx:8 ~ HeroSection ~ data:", data)


  return (
    <section className="hero-section">
      <div className="hero-background"></div>

      <Container className="hero-content">
      <div><p>Hello Travellers</p>
        <h1>make your booking<br />
        experience easy!</h1></div>
      
        <div className="search-form">
          <div className="glass-container-extend">
            <div className='dropdown-class'>
              <label className='dropdown-label'>From</label>
              <select>
                {(data!=undefined) ? data.map((station) => (
                  <option key={station.StationId}>{station.StationName}</option>
                )) : <><option>Loading</option></>}
              </select>
            </div>
            

            <div className='dropdown-class'>
              <label className='dropdown-label'>To</label>
              <select>
                  {(data!=undefined) ? data.map((station) => (
                    <option key={station.StationId}>{station.StationName}</option>
                  )) : <><option>Loading</option></>}
              </select>
            </div>
            <div className='dropdown-class'>
              <label className='dropdown-label'>Date</label>
              <input type="date" placeholder="Date" />
            </div>
            <LinkContainer to="/booking">
                <Button variant="primary" className='search-button-extend'>Search</Button>
              </LinkContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
