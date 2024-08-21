import React from 'react'
import './footer.css'
function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__1">
            <a href="index.html text" className="footer text-dark">
              <h5>Element City Tour</h5>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil quam culpa veniam est
            </p>
          </div>
          <div className="footer__2">
            <h5>Our Agency</h5>
            <ul className="permalink">
              <li><a href="index.html">Services</a></li>
              <li><a href="About.html">Insurance</a></li>
              <li><a href="Courses.html">Agency</a></li>
              <li><a href="Contact.html">Tourism</a></li>
              <li><a href="Contact.html">Payment</a></li>
            </ul>
          </div>
          <div className="footer__3">
            <h5>Paetners</h5>
            <ul className="primmacy">
              <li><a href="#">Booking</a></li>
              <li><a href="#">RentalCar</a></li>
              <li><a href="#">HostelWorld</a></li>
              <li><a href="#">Trivago</a></li>
              <li><a href="#">TripAdvisor</a></li>
            </ul>
          </div>
          <div className="footer__4">
            <h5>Last Minute</h5>
            <ul className="primmacy">
              <li><a href="#">London</a></li>
              <li><a href="#">California</a></li>
              <li><a href="#">Indonesia</a></li>
              <li><a href="#">Europe</a></li>
              <li><a href="#">Oceania</a></li>
            </ul>

          </div>

        </div>
      </footer>
    </section>

  )
}

export default Footer