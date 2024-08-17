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
        <div className="header-cout">
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


        </div>
      </div>
    </section>

  )
}

export default Destination