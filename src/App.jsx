import React from 'react'
import './app.css'
import AllTrip from './component/AllTrip/AllTrip'
import Navbar from './component/Navbar/Navbar'
import Popular from './component/Popular/Popular'
import Offer from './component/Offers/Offer'
import Travel from './component/Travel/Travel'
import Moment from './component/Moments/Moment'
import HappyTravel from './component/HappyTravel/HappyTravel'
import Footer from './component/Footer/Footer'
import Section from './component/Section/Section'


function App() {
  return (
    <div>
      <Navbar />
      <Section />
      {/* <Travel /> */}
      {/* <Offer /> */}
      {/* <Moment /> */}
      {/* <HappyTravel /> */}
      <Footer />

    </div>
  )
}

export default App