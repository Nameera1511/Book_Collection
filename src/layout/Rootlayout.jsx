import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
const Rootlayout = () => {
  return (
    <>
    <Navbar/>
<Outlet/>
    </>
  )
}

export default Rootlayout