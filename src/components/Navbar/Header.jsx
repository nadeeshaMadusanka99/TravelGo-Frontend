import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Header.scss'
import logo from '../../assets/LogoBlack.png';
import NavLinks from './NavLinks';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';

const Header = () => {

  const { userInfo } = useSelector((state) => state.auth);
  var isLoggedIn = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    
    if (userInfo) {
      isLoggedIn = true;
    }
  })

  return (
    <header>
      <Navbar expand='lg' collapseOnSelect className='nav-style'>
        <Container fluid={true}>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              className="logo"
            />{' '}
            TravelGo
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          
            <Nav className="me-auto nav-content">
              <NavLinks />
            </Nav>
            <Nav >
              {userInfo ? (
                // Render user icon when the user is logged in
                <>
                  <NavDropdown title={userInfo.firstname} id='name'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                // Render "Sign In" and "Sign Up" links when the user is not logged in
                <>

                  <LinkContainer to='/login'>
                    <Nav.Link className="small-icon-link">
                      <FaSignInAlt   /> <span className="nav-link-text">Sign In</span>
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                   <Nav.Link className="small-icon-link">
                      <FaSignOutAlt /> <span className="nav-link-text">Sign Up</span>
                    </Nav.Link>
                  </LinkContainer>


                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;