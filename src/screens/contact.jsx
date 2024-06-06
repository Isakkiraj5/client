
import React from 'react';
import "./css/homescreen.css";
import { Link,NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/login');
  };
  return (
    <>
      <nav className="navbar px-3 py-2">
        <div className="img"><img src={logo} alt="logo" height={50} /></div>
        <div className="navbar-links">
        <NavLink className='link' activeClassName='active1' exact to="/">Home</NavLink>
            <NavLink className='link' activeClassName='active1' to="/services">Services</NavLink>
            <NavLink className='link' activeClassName='active1' to="/about">About us</NavLink>
            <NavLink className='link' activeClassName='active1' to="/contact">Contact</NavLink>
        </div>
        <button onClick={navigation} className="login-btn px-2">Login</button>
      </nav>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                        <input type="text" className="form-control form-group" placeholder="Name" />
                        <input type="text" className="form-control form-group" placeholder="Email" />
                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_contact_social_icon d-flex align-items-end">
                      <div className="social_item_inner d-flex">
                        <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset"></i>
                    <span>+91 8009 000000</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>info@Vehicle Care.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Coimbatore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                <div className="map_bind">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.76834761107!2d76.80241458935072!3d11.014261493529576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716652487664!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white pt-5 pb-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row mx-0text-center text-md-left">
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

          <div className="row mx-0align-items-center">
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
       