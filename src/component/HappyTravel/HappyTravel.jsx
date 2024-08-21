import React from 'react'
import './happytravel.css'
import user from '../../Assets/costomer.webp'

function HappyTravel() {
  return (
    <section className='moment'>


      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container carousel carousel-dark slide">

          <div className="text-center">
            {/* <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6> */}
            <h4 className="mb-3">Happy Travel </h4>
            <div className="w-75 ms-5 para ps-5">
              <p className='w-100 text-secondary  ps-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, tempora repellat culpa at ratione saepe illum obcaecati ab corporis beatae itaque placeat consequuntur dicta. </p>
            </div>
          </div>


          <div className="owl-carousel tearm-cont testimonial-carousel d-flex position-relative  ">

            <div className="testimonial-item bg-white text-center tearm p-4">
              <div className="mb-0 w-100 bg-white text-center border h-75  bg-body-secondary text-body-tertiary">
                <p className=" text-secondary w-100 mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
              <div className="d-flex ms-5 mt-3">
                <img className=" rounded-circle shadow p-1 mx-auto mb-0" src={user} style={{ width: 60, height: 60, left: 20 }} />
                <div className="name mt-3">
                  <h6 className="me-3 pe-5 text-black-50">John Doe </h6>
                  <span className='me-5  pe-5 text-info fw-medium'>CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-item bg-white text-center  p-4">
              <div className="mb-0 w-100 bg-white text-center border h-75  bg-body-secondary text-body-tertiary">
                <p className=" w-100 mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>

              <div className="d-flex ms-5 mt-3">
                <img className=" rounded-circle shadow p-1 mx-auto mb-0" src={user} style={{ width: 60, height: 60, left: 20 }} />
                <div className="name mt-3">
                  <h6 className="me-3 pe-5 text-black-50">John Doe </h6>
                  <span className='me-5  pe-5 text-info fw-medium'>CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-item bg-white text-center  p-4">
              <div className="mb-0 w-100 bg-white text-center border h-75  bg-body-secondary text-body-tertiary">
                <p className=" w-100 mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
              <div className="d-flex ms-5 mt-3">
                <img className=" rounded-circle shadow p-1 mx-auto mb-0" src={user} style={{ width: 60, height: 60, left: 20 }} />
                <div className="name mt-3">
                  <h6 className="me-3 pe-5 text-black-50">John Doe </h6>
                  <span className='me-5  pe-5 text-info fw-medium'>CEO</span>
                </div>
              </div>
            </div>




          </div>
          <div>
            <button className="carousel-control-prev mt-5 pe-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon " aria-hidden="true" />
              <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next mt-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon " aria-hidden="true" />
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
        </div>     </div>



    </section>
  )
}

export default HappyTravel