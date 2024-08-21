import React from 'react'
import './travel.css'
import strar from '../../Assets/strar.webp'
import cities5 from '../../Assets/citie5.jpg'

function Travel() {
  return (
    <section>
      <div className="header">

        <div className="container-xxl py-0 destination">
          <div className="container">
            <div className="text-center ">
              {/* <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6> */}
              {/* <h1 className="mb-5">Popular Destination</h1> */}

            </div>
            <div className="row g-3 mt-5 image-count">
              <div className="col-lg-7 col-md-6">
                <div className="w-100">
                  <h2>Travel with us</h2>
                  <p className='w-100 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis neque aliquid labore reprehenderit distinct</p>
                </div>


                <div className="row g-3">
                  <div className=" image shadow text-center col-4"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>

                  <div className=" image shadow text-center col-4"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>
                  <div className=" image col-4 shadow text-center"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>

                  <div className=" image col-4 shadow text-center"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>

                  <div className=" image col-4 shadow text-center"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>

                  <div className=" image col-4 shadow text-center"><img src={strar} alt className="w-50 h-50" />
                    <div className="John text-secondary">Costom <br /> Destinatio</div>
                    {/* <div class="jceo">JCEO</div> */}
                  </div>


                </div>
                <div className="learn">
                  <div className="btn my-3">
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <a className="position-relative d-block h-100 overflow-hidden" href>
                  <img className="img-fluid position-absolute w-100 h-100" src={cities5} alt style={{ objectFit: 'cover' }} />

                </a>
              </div>


            </div>
          </div>
        </div>



  
      </div>
    </section>
  )
}

export default Travel