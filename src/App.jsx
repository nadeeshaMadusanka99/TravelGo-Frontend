// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default App