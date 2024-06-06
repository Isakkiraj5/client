import React from 'react';
import './css/homescreen.css'
import { Link ,NavLink} from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import diagnostic from '../assets/img/Diagnostic.jpg'
import Detailing from '../assets/img/Detailing.jpg'
import engine from '../assets/img/engine.jpg'
import brakes from '../assets/img/brake.jpg'
import oillube from '../assets/img/oillube.jpg'
import suspension from '../assets/img/suspension.jpg'
import userdata from '../assets/img/user.png'

export default function Home() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/login');
  };
  return (
    <>
      <nav className="navbar px-3 py-2">
        <div className="img"><img src={logo} alt="" height={50} /></div>
        <div>
          <div>
            <NavLink className='link' activeClassName='active1' exact to="/">Home</NavLink>
            <NavLink className='link' activeClassName='active1' to="/services">Services</NavLink>
            <NavLink className='link' activeClassName='active1' to="/about">About us</NavLink>
            <NavLink className='link' activeClassName='active1' to="/contact">Contact</NavLink>
          </div>
        </div>
        <button onClick={navigation} className="login-btn px-2">Login</button>
      </nav>
      <div className="img-background text-center">
        <div className='blurimg'></div>
        <h2>Welcome to Vehicle Care</h2>
        <h5>Your Trusted Partner in Vehicle Care</h5>
        <p>
          At Vehicle Care, we are committed to delivering top-notch auto repair and maintenance services to
          ensure your vehicle remains in peak condition and you stay safe on the road. Our team of experienced
          technicians uses state-of-the-art equipment and the latest industry techniques to provide you with reliable
          and efficient service every time.
        </p>
        <button className="contact" onClick={navigation}>Login</button>
      </div>
      <div className="container choose-us">
        <h3 className="text-center mb-4">Why Choose Us</h3>
        <div className="row text-center">
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid" src={diagnostic} alt="Diagnostic" />
              <h5 className="my-2">Diagnostic</h5>
              <p>If your car needs a mobile diagnostic check done at your home or office, let Vehicle Care come to you.</p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid" src={Detailing} alt="Dent & Paint" />
              <h5 className="my-2">Dent & Paint</h5>
              <p>Vehicle Care specializes in car dent repair and car painting services for a range of models.</p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid" src= {brakes} alt="Brakes" />
              <h5 className="my-2">Brakes</h5>
              <p>
                The brake system consists of different parts that can be fixed individually. A detailed quote is
                given to you after we perform our systematic brake evaluation.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid" src={suspension} alt="Suspension" />
              <h5 className="my-2">Suspension</h5>
              <p>
                The suspension system of your vehicle protects you from bouncing up and down due to the bad road
                conditions and bumps in the road.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid" src={oillube} alt="Oil Lube" />
              <h5 className="my-2">Oil Lube</h5>
              <p>
                Vehicle Care proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance
                while extending the life of your vehicle.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
            <div className="choose-details">
              <img className="img-fluid"  src={engine} alt="Detailing" />
              <h5 className="my-2">Detailing</h5>
              <p>
                Vehicle Care offers professional car detail services at an affordable price. Our interior
                cleaning, detailing, and restoration services can help you recapture that new car look and
                smell.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="text-center mb-4">How It Works</h3>
        <h6 className="text-center mb-5">We Offer Full Service Auto Repair & Maintenance</h6>
        <div className="row text-center">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="card-black">
              <div className="card-title">
                <h1>1</h1>
                <h3>Choose</h3>
                <p>Choose Your Service From Our Wide Range Of Offerings</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="card-black">
              <div className="card-title">
                <h1>2</h1>
                <h3>Book</h3>
                <p>Make An Appointment With Us</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="card-black">
              <div className="card-title">
                <h1>3</h1>
                <h3>Fair Pricing</h3>
                <p>Always Get a Fair Quote</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="card-black">
              <div className="card-title">
                <h1>4</h1>
                <h3>At Your Doorstep</h3>
                <p>Get a Door Step Pick up & Drop Facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="reviews" className="reviews-area pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Heading */}
              <div className="section-heading text-center mb-4">
                <h2 className="text-uppercase">What Our Customers Are Saying</h2>
                <div className="divider mx-auto"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Review 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 rounded shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="rating">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                  <p className="text-primary mt-3 mb-3">"Great support!!"</p>
                  <p className="review-text">
                    "I had an urgent issue with my brakes and the team at Vehicle Care got me in right away. Their quick response and excellent service gave me peace of mind. I highly recommend them to anyone in need of auto repairs."
                  </p>
                  <img className="avatar rounded-circle mb-3" src={userdata} alt="John Doe" />
                  <h5 className="mb-1">John Doe</h5>
                 
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 rounded shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="rating">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                  <p className="text-primary mt-3 mb-3">"Highly recommend!"</p>
                  <p className="review-text">
                    "Vehicle Care provided excellent service when my car needed a thorough inspection. They explained everything clearly and their prices were very fair. I will definitely come back for future maintenance."
                  </p>
                  <img className="avatar rounded-circle mb-3" src={userdata} alt="Jane Smith" />
                  <h5 className="mb-1">Jane Smith</h5>
                 
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 rounded shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="rating">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                  <p className="text-primary mt-3 mb-3">"Excellent service!"</p>
                  <p className="review-text">
                    "The team at Vehicle Care is knowledgeable and friendly. They fixed my car quickly and I felt confident driving again. Great customer service and fair prices."
                  </p>
                  <img className="avatar rounded-circle mb-3" style={{height:"50px"}} src={userdata} alt="Michael Lee" />
                  <h5 className="mb-1">Michael Lee</h5>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white pt-5 pb-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Vehicle Care</h5>
              <p>
                Vehicle Care mission is to enable premium quality care for your luxury car service at affordable pricing. We ensure real-time updates for complete car care needs with a fair and transparent pricing mechanism.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Services</h5>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Periodic Maintenance Service</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Dent & Paint</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Bumper Repair</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Accidental Repair</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Scratch Removal</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Links</h5>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Home</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>About</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>FAQ</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Blog</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Contact Us</a></p>
              <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Privacy Policy</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-header">Contact</h5>
              <p><i className="fas fa-home mr-3"></i>Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance Smart, Wagholi, coimbatore</p>
              <p><i className="fas fa-envelope mr-3"></i> contact@Vehicle Care.com</p>
              <p><i className="fas fa-phone mr-3"></i> +73 9797 9797</p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-facebook"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-linkedin"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-instagram"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
