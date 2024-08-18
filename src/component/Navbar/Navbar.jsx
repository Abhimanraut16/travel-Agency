import React, { useState } from 'react'
import './navbar.css';
import { GiWorld } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";



import HeadNavbar from '../HeadNavbar/HeadNavbar';
import { Link } from 'react-router-dom';
function Navbar() {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar  activeNavbar')
  }
  const removNav = () => {
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    }
    else {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <>
    <HeadNavbar/>
      <section className='navBarSection'>
        <div className={transparent}>

          <div className="logoDiv">
            <Link to="/" className='logo'>

              <h4>
                <GiWorld className='icon' />
                Elemento City Tour
              </h4>
            </Link>
          </div>

          <div className={active}>
            <ul className="navLists flex mx-5">

              <li className="navItem active">
                <Link to="/" className="navLink active">Home</Link>
              </li>
              <li className="navItem">
                <a href="alltrip" className="navLink">All trip</a>
              </li>
              <li className="navItem">
                <a href="destination" className="navLink">Distination</a>
                
              </li>
              <li className="navItem">
                <a href="blog" className="navLink">Blog</a>
              </li>
              <li className="navItem">
                <a href="contact" className="navLink"> Contact Us</a>
              </li>
              {/* <li className="navItem">
                <a href="#" className="navLink"> Account</a>
              </li> */}

              {/* <div className="headerBtns flex">
                <button className='btn loginBtn'>
                  <a href="#">Login</a>
                </button>
                <button className='btn'>
                  <a href="#">Sign Up</a>
                </button>
              </div> */}

            </ul>

            <div onClick={removNav} className="clossNavbar">
              <IoIosCloseCircle className='icon' />
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon' />
          </div>
        </div>

      </section>
    </>

  )
}

export default Navbar