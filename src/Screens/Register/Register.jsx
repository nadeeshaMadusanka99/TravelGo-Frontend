// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Register.scss';
import { Nav, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { setCredentials } from '../../slices/authSlice';
import { LOGIN } from '../../config';

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();   //refrains from default behaviour when submitting form. prevents page reload.

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password
        }).unwrap();
        navigate(LOGIN);
        toast.success('Registration Successful! Please login')

      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }


  }

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
          <Form className="registration-form" onSubmit={submitHandler}>
            <div className='name-row'>
              <div className="name-pass">
                <label htmlFor="firstName">First Name</label>
                <input
                  className='inputs'
                  type="text"
                  value={firstName}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)} />
              </div>

              <div className="name-pass">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className='inputs'
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>


            <div className="name-pass">
              <label htmlFor="email">Email Address</label>
              <input
                className='inputs'
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="name-pass">
              <label htmlFor="password">Password</label>
              <input
                className='inputs'
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="name-pass">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className='inputs'
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className="register-terms">
              <p className="signup-link">
                Already have an account?<br />
                <LinkContainer className='register-link' to='/login'>
                  <Nav.Link className="login_link">Log In Here</Nav.Link>
                </LinkContainer>
              </p>

              <Button type='submit' variant="primary" className="button-extend">Register &rarr;</Button>

            </div>

          </Form>

        </div>
      </div>
    </main>
  );
};

export default Register;
