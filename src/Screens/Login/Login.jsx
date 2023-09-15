// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState, useEffect } from 'react';
import './Login.scss';
import { Nav, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');

    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
      
    }
  };

  return (
    <main className="login">
      <Form onSubmit={submitHandler}>
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
              <p>Username</p>
              <input 
                type="email"
                // placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="name-pass">
              <p>Password</p>
              <input 
                type="password" 
                // placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>

            <LinkContainer className="forgot-password-link" to='/forgetPass'>
              <Nav.Link>
                Forgot Password?
              </Nav.Link>
            </LinkContainer>

            <Button variant="primary" disabled={isLoading} type='submit' className='button-extend'>Let's Go &rarr;</Button>

         

            <p className="signup-link">
              Don't have an account?
              <LinkContainer className='sign-up' to='/register'>
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </p>
          </div>
        </div>
      </Form>
      {isLoading && <Loader />}
    </main>
  );
};

export default Login;
