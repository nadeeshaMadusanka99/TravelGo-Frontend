// eslint-disable-next-line no-unused-vars
import React from "react";
import './MyFavourites.scss';
import { Button,Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const myFavourites = () => {
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
                <LinkContainer to='/bookinghistory'>
                    <Button variant="primary" className="mt-4 button-extend">
                        My Tickets  &gt;
                    </Button>
                </LinkContainer>
                    <Button variant="primary" className="mt-4 glass-container-button button-extend" >
                        Favourites
                    </Button>
              </Col>
              <Col className='col-change'>
                <div className="glass-container-extend">
                    <Row>
                        <p className='main-title'>Favourites</p>
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

export default myFavourites;
