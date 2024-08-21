import React from 'react'
import './footer.css'
function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__1">
            <a href="index.html text" className="footer text-dark">
              <h4>Element City Tour</h4>
            </a>
            <p cl>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil quam culpa veniam est ex amet? Provident nulla minus porro?
            </p>
          </div>
          <div className="footer__2">
            <h4>Our Agency</h4>
            <ul className="permalink">
              <li><a href="index.html">Services</a></li>
              <li><a href="About.html">Insurance</a></li>
              <li><a href="Courses.html">Agency</a></li>
              <li><a href="Contact.html">Tourism</a></li>
              <li><a href="Contact.html">Payment</a></li>
            </ul>
          </div>
          <div className="footer__3">
            <h4>Paetners</h4>
            <ul className="primmacy">
              <li><a href="#">Booking</a></li>
              <li><a href="#">RentalCar</a></li>
              <li><a href="#">HostelWorld</a></li>
              <li><a href="#">Trivago</a></li>
              <li><a href="#">TripAdvisor</a></li>
            </ul>
          </div>
          <div className="footer__4">
            <h4>Last Minute</h4>
            <ul className="primmacy">
              <li><a href="#">London</a></li>
              <li><a href="#">California</a></li>
              <li><a href="#">Indonesia</a></li>
              <li><a href="#">Europe</a></li>
              <li><a href="#">Oceania</a></li>
            </ul>

          </div>
        </div>
        {/* <div className="copyRight">
          <div className="footerrigth">
            <nav className="navbar">
              <div className="container-fluid ">
                <div className="navbar-brand navbarfooter">Travel Element By WP travel</div>
                <div className="navbar-brand navbarfooter">Copyright 2024 Travel Element, All Right Reserved</div>
              </div>
            </nav>

          </div>
        </div> */}

      </footer>
    </section>

  )
}

export default Footer