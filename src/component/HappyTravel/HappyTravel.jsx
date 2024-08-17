import React from 'react'
import './happytravel.css'
import user from '../../Assets/costomer.webp'

function HappyTravel() {
  return (
    <section className='moment'>
      <div className="secmement">
        <div className="secmomenttitle">
          <h2 className="secTitlemoment">
            happy Moments
          </h2>
          <div className='histro'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis dolor iure necessitatibus quisquam. Nam quibusdam odio possimus facilis libero.
          </div>
        </div>

        <div className="happyTravel">
          <div className="happytrevelCEO">

            <div className="happyCEO">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt illo quae eveniet vitae? Illum nostrum quaerat fuga similique veniam?</p>
              <div className="user">
                <div className="image">
                  <img src={user} alt="" />
                </div>
                <div className="ceo">
                  <div className="name">jong den</div>
                  <span>CEO</span>
                </div>
              </div>
            </div>

            <div className="happyCEO">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt illo quae eveniet vitae? Illum nostrum quaerat fuga similique veniam?</p>
              <div className="user">
                <div className="image">
                  <img src={user} alt="" />
                </div>
                <div className="ceo">
                  <div className="name">jong den</div>
                  <span>CEO</span>
                </div>
              </div>
            </div>
            <div className="happyCEO">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt illo quae eveniet vitae? Illum nostrum quaerat fuga similique veniam?</p>
              <div className="user">
                <div className="image">
                  <img src={user} alt="" />
                </div>
                <div className="ceo">
                  <div className="name">jong den</div>
                  <span>CEO</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </section>
  )
}

export default HappyTravel