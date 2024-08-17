import React from 'react'
import './app.css'
import AllTrip from './component/AllTrip/AllTrip'
import Navbar from './component/Navbar/Navbar'
import Popular from './component/Popular/Popular'
import Offer from './component/Offers/Offer'
import Blog from './component/Blog/Blog'
import ContactUs from './component/ContactUs/ContactUs'
import Home from './component/Home/Home'
import Destination from './component/Destination/Destination'
import Travel from './component/Travel/Travel'
import Moment from './component/Moments/Moment'
import HappyTravel from './component/HappyTravel/HappyTravel'
import Footer from './component/Footer/Footer'


function App() {
  return (
    <div>
      {/* <AllTrip /> */}
      <Navbar />
      <Home/>
      <Destination/>
      <Travel/>
      {/* <Popular /> */}
      <Offer />
      <Moment/>
      <HappyTravel/>
      <Footer/>
      {/* <Blog /> */}
      {/* <ContactUs /> */}





    </div>
  )
}

export default App