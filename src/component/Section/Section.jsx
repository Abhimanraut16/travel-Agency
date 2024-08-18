import React from 'react'
import AllTrip from '../AllTrip/AllTrip'
import Home from '../Home/Home'
import Destination from '../Destination/Destination'
import Blog from '../Blog/Blog'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'

function Section() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alltrip' element={<AllTrip />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default Section