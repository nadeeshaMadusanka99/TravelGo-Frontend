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
            <select>
              {(data!=undefined) ? data.map((station) => (
                <option>{station.StationName}</option>
              )) : <><option>Loading</option></>}
           
            </select>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Date" />
            
            <LinkContainer to="/booking">
            <Button variant="primary" className='button-extend'>Search</Button>
            </LinkContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
