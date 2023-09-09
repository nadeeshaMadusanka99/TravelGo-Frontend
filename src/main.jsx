import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import HomeScreen from './screens/Home/HeroSection.jsx'
import LoginScreen from './screens/Login/Login'
import RegisterScreen from './screens/Register/Register'
import ProfileScreen from './screens/Profile/Profile'
import MyTicketsScreen from './screens/MyTickets/MyTickets'
import MyFavouritesScreen from './screens/MyFavourites/MyFavourites'
import PassengerDetails from './screens/PassengerDetails/PassengerDetails'
import PriceBreakdown from './screens/PriceBreakdown/PriceBreakdown'
import Payment from './screens/Payment/Payment'

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
      <Route path='/payment' element={<Payment />} />
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
