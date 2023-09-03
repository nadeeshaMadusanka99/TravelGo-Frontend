// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Register.scss';
import { Nav,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Register = () => {
  return (
    <main className="register">
      <div className="register-background">
        <div className="large-text-container">
          <div className="box upper-box"></div>
          <p className="large-text">ADVENTURE<br />
          AWAITS,<br /> 
          JUST AROUND, <br />
          THE <br />
          BEND OF THE <br />
          <span className='highlight'>
             TRACKS.<br />
          </span>
          </p>
          <div className="box lower-box"></div>
      </div>

        <div className="glass-container-extend">
          <h2>Register</h2>
          <form className="registration-form">
          <div className='name-row'>
                <div className="name-pass">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
              </div>

              <div className="name-pass">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
              </div>
          </div>
              

              <div className="name-pass">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
              </div>

              <div className="name-pass">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
              </div>

              <div className="name-pass">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
              </div>
        </form>
          <div className="register-terms">
              <p className="signup-link">
                  Already have an account?<br />
                <LinkContainer className='register' to='/login'>
                  <Nav.Link>Log In Here</Nav.Link>
                </LinkContainer>
              </p>
              <LinkContainer to='/'>
                    <Nav.Link>
                    <Button variant="primary" className="button-extend">Register &rarr;</Button>
                    </Nav.Link>
              </LinkContainer>
           </div>
      </div>
     </div>
    </main>
  );
};

export default Register;
