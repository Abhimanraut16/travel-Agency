import React from 'react'
import './home.css'
import slider from '../../Assets/citie1.jpg'
import Travel from '../Travel/Travel'
import Offer from '../Offers/Offer'
import Moment from '../Moments/Moment'
import HappyTravel from '../HappyTravel/HappyTravel'
import Destination from '../Destination/Destination'
import { Carousel } from 'bootstrap'
import Carous from '../Carousel/Carous'
// import { Carousel } from 'bootstrap'
function Home() {
  return (
    <>
      <section className='home'>


        <div className="secContainer container" >

          <div className="homeText">

            <h2 data-aos="fade-up" className="title">
              Trip To Rome, Italy
            </h2>
            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Travel to your favourite city with respectful of the enironment
            </p>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="#">Book Trip</a>
            </button>

          </div>

          <div className="homeCard grid" >

            <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location"></label>
              <input type="text" placeholder='Tri Type' />
            </div>

            <div data-aos="fade-right" data-aos-duration="2500" className="disDiv">
              <label htmlFor="distance"></label>
              <input type="text" placeholder='Destination' />
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price"></label>
              <input type="text" placeholder='E.G Trecking' />
            </div>
            <button data-aos="fade-left" data-aos-duration="2000" className='btn'>Search</button>


          </div>
          <button className="carousel-control-prev pe-5" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next ps-5" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

        </div>

        {/* <Travel /> */}
        {/* <Offer /> */}
        {/* <Moment /> */}
        {/* <HappyTravel /> */}

      </section>
      <Destination />
      <Travel />
      <Offer />
      <Moment />
      <HappyTravel />
     <Carous/>
    </>

  )
}

export default Home