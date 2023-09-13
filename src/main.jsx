import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'


import HomeScreen from './Screens/Home/HeroSection.jsx'
import LoginScreen from './Screens/Login/Login'
import RegisterScreen from './Screens/Register/Register.jsx'
import ProfileScreen from './Screens/Profile/Profile'
import SeatView from './Screens/SeatView/SeatView'
import MyTicketsScreen from './Screens/MyTickets/MyTickets'
import MyFavouritesScreen from './Screens/MyFavourites/MyFavourites'
import PassengerDetails from './Screens/PassengerDetails/PassengerDetails'
import PriceBreakdown from './Screens/PriceBreakdown/PriceBreakdown'
import ScheduleScreen from './Screens/Schedule/ScheduleScreen.jsx'
import Payment from './Screens/Payment/Payment'
import Eticket from './Screens/ETicket/Eticket'
import BookingScreen from './Screens/Booking/BookingScreen';


// Create the link element for Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap';
link.crossOrigin = 'true'; // Add the crossorigin attribute

document.head.appendChild(link);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} /> 
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/bookinghistory' element={<MyTicketsScreen />} />
      <Route path='/myfavourites' element={<MyFavouritesScreen />} />
      <Route path='/passengerdetails' element={<PassengerDetails />} />
      <Route path='/pricebreakdown' element={<PriceBreakdown />} />
      <Route path='/schedule' element={<ScheduleScreen />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/eticket' element={<Eticket />} />
      <Route path='/seatview' element={<SeatView />} />
      <Route path='/booking' element={<BookingScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
