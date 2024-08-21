import React, { useEffect } from 'react'
import './offer.css'
import { IoTimeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img6 from '../../Assets/offer5.jpg'
import img7 from '../../Assets/offer6.jpg'
import img8 from '../../Assets/9.jpg'
// import img9 from '../../Assets/9.jpg'
import offer from '../../Assets/offer.jpg'
import offer1 from '../../Assets/offer1.jpg'
import offer2 from '../../Assets/offer4.jpg'


// import img10 from '../../Assets/10.jpg'

// import Aos from 'aos'
// import 'aos/dist/aos.css'


const Offers = [
  {
    id: 1,
    imgSrc: img6,
    // destTitle: 'Kathmandu',
    location: 'Italy',
    price: '$1200',
    Pax: "36 pax",
    time: '4 Day, 3 night'

  },
  {
    id: 2,
    imgSrc: img7,
    // destTitle: 'Simra',
    location: 'Tokyo, japan',
    price: '$2000', Pax: "36 pax",
    time: '4 Day, 3 night'

  },
  {
    id: 3,
    imgSrc: img8,
    // destTitle: 'BRj',
    location: 'New York, USA',
    price: '$1500', Pax: "36 pax",
    time: '4 Day, 3 night'

  },

  {
    id: 4,
    imgSrc: offer,
    // destTitle: 'taj mahal',
    location: 'Austrelia',
    price: '$100', Pax: "36 pax",
    time: '4 Day, 3 night'

  },
  {
    id: 4,
    imgSrc: offer1,
    // destTitle: 'taj mahal',
    location: 'Dubai',
    price: '$100', Pax: "36 pax",
    time: '4 Day, 3 night'


  },
  {
    id: 4,
    imgSrc: offer2,
    // destTitle: 'taj mahal',
    location: 'Istanbul',
    price: '$100', Pax: "36 pax",
    time: '4 Day, 3 night'

  },


  // {
  //   id: 5,
  //   imgSrc: img10,
  //   destTitle: 'BRj',
  //   location: 'KTM',
  //   price: '$300',

  // },
]

function Offer() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // }, [])
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div data-aos="fade-up" className="secIntro">
          <div className="paragraph">
            <h2 className="secTitle px-0">
              Popular Cities Tours
            </h2>
            <p className='text-secondary'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quo cupiditate beatae recusandae facere maiores, sit temporibus similique dignissimos illo.
            </p>
          </div>
        </div>

        <div className="mainContent grid">

          {
            Offers.map(({ imgSrc, price, location, destTitle, Pax, time }
            ) => {
              return (
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                    <span className='discount'>
                      30% off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {price}
                      </h4>
                      <span className='status'>
                        Book Now
                      </span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <HiUserGroup />
                        <small>{Pax}</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdBathtub className='icon' />
                        <small>Trip</small>
                      </div>

                      <div className="singleAmenity flex">
                        <IoTimeSharp />
                        <small>{time}</small>
                      </div>
                    </div>
                    <div className="location flex">
                      <MdLocationOn className='icon' />
                      <small>250 Vine #200, {location}</small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className='icon' />
                    </button>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Offer