// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Profile.scss';
import { Button,Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HomeIcon from '../../assets/HomeIcon.png';
import WorkIcon from '../../assets/WorkIcon.png';


const profile = () => {
  return (
    <main className="profile">
        <div className="profile-background">

          <div className="text-container">
            <h1>Hello Mahinda!</h1>
          </div>
          <Container>
            <Row>
            
              <Col xs={2} className='col-change'>
                    <Button variant="secondary" className=" glass-container-button button-extend">About Me </Button>
                    <Button variant="primary" className="mb-4 mt-4 button-extend">My Tickets &gt;</Button>
                    <Button variant="primary" className="button-extend">Favourites &gt;</Button>
              </Col>
          
              <Col className='col-change'>
                <div className="glass-container-extend">
                    <Row>
                      <Col xs={6}>
                        <p className='main-title'>Personal Details</p>
                        <p className='edit-link'>edit</p>
                        <div className="divider mt-1"></div>
                        <Row>
                      <Col xs={3}>
                    <div className='left-column'>

                        <p className='left-title'>Name :</p>
                        <p className='left-title'>Email :</p>
                        <p className='left-title'>Phone :</p>
                      </div>
                      </Col>
                      <Col xs={3}>
                      <div className='right-column'>
                        <p className='right-data'>Mahinda Rajapaksa</p>
                        <p className='right-data'>mahindarajapaksa@gmail.com</p>
                        <p className='right-data'>0691234567</p>
                      </div>
                      </Col>
                    </Row>
                      </Col>
                      <Col xs={6}>
                       <Row>
                        <p className='main-title '> Addresses</p>
                        <div className="divider mt-1"></div>
                        <Col></Col>
                        <Col xs={6} className='m-2'>
                          <LinkContainer to='/addnewaddress'>
                              <p className = "edit-link-extend">+Add new address</p>
                          </LinkContainer>
                        </Col>
                       </Row>
                       <Row>
                        <p className='main-title'> NIC</p>
                        <div className="divider mt-1"></div>
                        <Col></Col>
                        <Col xs={6} className='m-2'>
                           <LinkContainer to='/addnicnum'>
                              <p className = "edit-link-extend">+Add NIC number</p>
                            </LinkContainer>
                          </Col>
                       </Row>
                      </Col>
                    </Row>
                    <div className="divider mt-2 mb-2"></div>
                    <Row>
                      <Col xs={6}>
                       <p className='main-title'>My Smart Cards</p>
                       <div className="divider mt-2 mb-2"></div>
                       <p> You currently have <strong>0 Smart Cards </strong>registered.</p>
                       <LinkContainer to='/registersmartcard'>
                          <p className = "edit-link-extend">+Register a smart card &gt;</p>
                      </LinkContainer>
                       </Col>
                       <Col xs={6}>
                       <p className='main-title'>My Favourite Places</p>
                       <div className="divider mt-2 mb-2"></div>
                       <p> Make your life easier by listing favourite journeys.</p>
                       <Row>
                       
                          <Col xs={3}>
                            <img src={HomeIcon} alt="Home Icon" className="home-work-icons"/>
                          </Col>
                          <Col xs={6}>
                              <LinkContainer to='/addhome'>
                                 <p className = "edit-link-icon">Save your home &gt;</p>
                              </LinkContainer>
                          </Col>
                        
                       </Row>
                       <div className="divider mb-2 mt-2"></div>
                       <Row >
                          <Col xs={3}>
                            <img src={WorkIcon} alt="Work Icon" className="home-work-icons"/>
                          </Col>
                          <Col xs={6}>
                            <LinkContainer to='/addwork'>
                                <p className = "edit-link-icon">Save your work &gt;</p>
                            </LinkContainer>
                          </Col>
                       </Row>
                       </Col>
                    </Row>

                </div>
              </Col>
            
            </Row>
            
          </Container>
        </div>

    </main>
  );
};

export default profile;
