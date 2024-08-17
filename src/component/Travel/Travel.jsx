import React from 'react'
import './travel.css'
import strar from '../../Assets/strar.webp'
import cities5 from '../../Assets/citie5.jpg'

function Travel() {
  return (
    <section>
      <div className="header">
        <div className="travel-cout">
          <div className="paragraph">
            <h2>Travel with us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis neque aliquid labore reprehenderit distinctio voluptatibus laboriosam ratione asperiores earum?</p>
          </div>
          <div className="containers">
            <div className="travelCount">
              <div className="travelDestination">
                <div className="righttravel">
                  <div className="maincount">

                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>

                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>

                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>

                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>


                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>

                    <div className="main">
                      <div className="costom">
                        <div className="image">
                          <img src={strar} alt="" />
                        </div>
                        <p>Costom <br /> Destination</p>
                      </div>

                    </div>
                    
                    <div className="learn">
                      <div className="btn my-3">
                        <a href="#">Learn More</a>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="lafttravel">
                  <div className="image">
                    <img src={cities5} alt="" />
                  </div>
                </div>



              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Travel