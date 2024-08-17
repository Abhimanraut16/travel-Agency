import React from 'react'
import './head.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";



function HeadNavbar() {
  return (
    <div>

      <header>
        <div className="header-container">
          <div className="header-count">
            <div className="soModia">
              <div className="num"><FaPhoneAlt className='cont' />
                +977 3215459870
              </div>
              <div className="email"><a href="#"> <MdEmail className='cont' />
                info@example.com
              </a></div>
            </div>

            <div className="icon ">
              <div className="facebook socail">
                <FaFacebook className='icons ' />
              </div>
              <div className="inst socail">
                <FaTwitter className='icons' />
              </div>
              <div className="what socail">
                <FaYoutube className='icons' />
              </div>
              <div className="viber">
                <FaUserAlt className='accbox' />
                <p className='userAcount'>Account</p>
              </div>
              {/* .facebook */}
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}

export default HeadNavbar

