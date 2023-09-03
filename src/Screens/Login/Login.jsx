// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.scss';
import { Nav,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Login = () => {
  return (
    <main className="login">
      <div className="login-background">

        <div className="large-text-container">
          <div className="box upper-box"></div>
          <p className="large-text">
          EVERY TRAIN IS<br />
          A JOURNEY,<br /> 
          A RHYTHM, <br />
          <span className='highlight'>A STORY<br /></span>
          WAITING <br />
          TO BE TOLD.</p>
          <div className="box lower-box"></div>
        </div>

        <div className="glass-container-extend">
          <h2>Login</h2>
          <div className="name-pass">
            <p>Your Name</p>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="name-pass">
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </div>

          <LinkContainer className="forgot-password-link" to='/forgetPass'>
                <Nav.Link>
                 Forgot Password?
                </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/'>
                <Nav.Link>
                 <Button variant="primary" className='button-extend'>Lets Go &rarr;</Button>
                </Nav.Link>
          </LinkContainer>

          <p className="signup-link">
              Don't have an account? 
              <LinkContainer className='sign-up' to='/register'>
                <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
