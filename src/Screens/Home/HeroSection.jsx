import { Container, Button } from 'react-bootstrap';
import './HeroSection.scss';
import { useGetStationsQuery } from '../../slices/trainApiSlice';


const HeroSection = () => {
  const {data, isLoading} = useGetStationsQuery();


  console.log("🚀 ~ file: HeroSection.jsx:8 ~ HeroSection ~ data:", data)


  return (
    <section className="hero-section">
      <div className="hero-background"></div>

      <Container className="hero-content">
      <p>Hello Travellers</p>
        <h1>make your booking<br />
        experience easy!</h1>
        <div className="search-form">
          <div className="glass-container-extend">
            <select>
              {data.map((station) => (
                <option>{station.StationName}</option>
              ))}
           
            </select>
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
