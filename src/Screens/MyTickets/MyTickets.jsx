// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MyTickets.scss';
import { Button,Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const myTickets = () => {
  return (
    <main className="profile">
        <div className="profile-background">

          <div className="text-container">
            <h1>Hello Mahinda!</h1>
          </div>
          <Container>
            <Row>
              <Col xs={2} className='col-change'>
              <LinkContainer to='/profile'>
                  <Button variant="primary" className="button-extend">
                      About Me &gt;
                  </Button>
              </LinkContainer>
                  <Button variant="primary" className="mt-4 glass-container-button button-extend">
                      My Tickets
                  </Button>
              <LinkContainer to='/myfavourites'>
                  <Button variant="primary" className="mt-4 button-extend" >
                      Favourites &gt;
                  </Button>
              </LinkContainer>
              </Col>

              <Col className='col-change'>
                <div className="glass-container-extend">
                    <Row>
                        <p className='main-title'>My Tickets</p>
                        <div className="divider mt-1"></div>
                    </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </main>
  );
};

export default myTickets;
