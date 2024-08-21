import React from 'react'
import './Destination.css'
import citie1 from '../../Assets/citie1.jpg'
import citie2 from '../../Assets/cotie2.jpg'
import citie3 from '../../Assets/citie3.jpg'
import citie4 from '../../Assets/citie4.jpg'
// import citie5 from '../../Assets/citie5.jpg'
// import img7 from '../../Assets/7.jpg'
// import citie1 from '../../Assets/citie1.jpg'
const Offers = [
  {
    id: 1,
    citie1: citie1,
    // destTitle: 'Kathmandu',
    location: 'Kathmandu, Nepal',
    price: '$1200',

  },
  {
    id: 1,
    citie2: citie2,
    // destTitle: 'Kathmandu',
    location: 'Kathmandu, Nepal',
    price: '$1200',

  },
  {
    id: 1,
    citie3: citie3,
    // destTitle: 'Kathmandu',
    location: 'Kathmandu, Nepal',
    price: '$1200',

  },
  {
    id: 1,
    citie4: citie4,
    // destTitle: 'Kathmandu',
    location: 'Kathmandu, Nepal',
    price: '$1200',

  },
  // {
  //   id: 2,
  //   imgSrc: img7,
  //   // destTitle: 'Simra',
  //   location: 'Pokhara, Nepal',
  //   price: '$2000',

  // },

]

function Destination() {
  return (

    <section>
      <div className="header">



        <div className="container-xxl py-5 destination">
          <div className="container">
            <div className="mainheader mt-5">
              <div classname="paragraph">
                <h2>Best cities to visit</h2>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis neque aliquid labore
                  reprehenderit
                  distinctio voluptatibus laboriosam ratione </p>
              </div>
            </div>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              {/* <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6> */}
              {/* <h1 className="mb-5">Popular Destination</h1> */}

            </div>
            <div className="row g-3 mt-5">
              <div className="col-lg-5 col-md-6 " data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <a className="position-relative d-block h-100 overflow-hidden" href>
                  <img className="img-fluid position-absolute w-100 h-100" src={citie1} alt style={{ objectFit: 'cover' }} />
                  <div className="text-light text-light fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">France
                    <h5>(5+ trip)</h5>
                  </div>
                </a>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                
                  <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src={citie4} alt />

                      <div className="text-light text-light fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia
                        <h5>(5+ trip)</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src={citie3} alt />

                      <div className="text-light text-light fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia
                        <h5>(5+ trip)</h5>
                      </div>
                    </a>
                  </div>
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src={citie4} alt />
                      <div className="text-light fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand
                        <h5>(5+ trip)</h5>
                      </div>

                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>























        {/* <div className="headerCount">
          <div className="mainheader">
            <div classname="paragraph">
              <h2>Best cities to visit</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis neque aliquid labore
                reprehenderit
                distinctio voluptatibus laboriosam ratione asperiores earum?</p>
            </div>
          </div>

          <div className="sidecontainer">
            <div className="side">
              <div className="sidebar">
                <div className="image">
                  <img src={citie1} alt />
                </div>
                <div className="title">
                  <h3>France</h3>
                  <h5>(5+ trip)</h5>
                </div>
              </div>
            </div>



            <div className="sidetop">
              <div className="sidetopcont">


                <div className="right">
                  <div className="content2">
                    <div className="image">
                      <img src={citie4} alt="" />
                    </div>
                    <div className="title">
                        <h4>Thailand</h4>
                        <h6>(5+ trip)</h6>
                      </div>
                  </div>


                  <div className="content3">
                    <div className="image">
                      <img src={citie2} alt="" />
                    </div>
                    <div className="title">
                      <h4>Australia</h4>
                      <h6>(5+ trip)</h6>
                    </div>
                  </div>
                </div>


                <div className="content1">
                  <div className="image">
                    <img src={citie3} alt="" />
                  </div>

                  <div className="title">
                        <h4>England</h4>
                        <h6>(5+ trip)</h6>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        {/* <div className="header-cout">
          <div className="paragraph">
            <h2>Best cities to visit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis neque aliquid labore reprehenderit distinctio voluptatibus laboriosam ratione asperiores earum?</p>
          </div>
          <div className="containers">
            <div className="citiesCount">
              <div className="citieDestination">
                <div className="rightDestination">
                  <div className="image">
                    <img src={citie1} alt="" />
                  </div>
                  <div className="title">
                    <h3>France</h3>
                    <h5>(5+ trip)</h5>
                  </div>
                </div>
                <div className="laftDestination">
                  <div className="laftDestinationside">
                    <div className="laftDestinationTop">
                      <div className="image">
                        <img src={citie3} alt="" />

                      </div>
                      <div className="title">
                        <h3>England</h3>
                        <h5>(5+ trip)</h5>
                      </div>
                    </div>
                    <div className="laftDestinationTop">
                      <div className="image">
                        <img src={citie4} alt="" />
                      </div>
                      <div className="title">
                        <h3>Thailand</h3>
                        <h5>(5+ trip)</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="DestinationBut">
                    <div className="image">
                      <img src={citie2} alt="" />
                    </div>
                    <div className="title">
                      <h3>Australia</h3>
                      <h5>(5+ trip)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </section>

  )
}

export default Destination