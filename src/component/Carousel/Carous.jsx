import React from 'react'
import './carousel.css'
import carosl1 from '../../Assets/travel3.png'
import carosl2 from '../../Assets/tr1.png'
import carosl3 from '../../Assets/travel3.png'
import carosl4 from '../../Assets/tr4.jpg'
// import carosl2 from '../../Assets/travel2.png'
// import carosl3 from '../../Assets/travel2.jpeg'
// import carosl4 from '../../Assets/travel3.png'



function Carous() {
  return (
    <div>
      <section className='moment'>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container d-flex">

            <div className="owl-carousel owl-theme w-100 d-flex">
              <div className="item">
                <img src={carosl1} alt />
              </div>
              <div className="item">
              <img src={carosl2} alt />
              </div>
              <div className="item">
              <img src={carosl3} alt />
              </div>
              <div className="item">
              <img src={carosl4} alt />
              </div>


            </div>


          </div>
        </div>


      </section>
    </div>
  )
}

export default Carous