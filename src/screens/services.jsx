import React, { useState } from 'react';
import './css/homescreen.css';
import { Link,NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import diagnostic from '../assets/img/Diagnostic.jpg';
import Detailing from '../assets/img/Detailing.jpg';
import engine from '../assets/img/engine.jpg';
import brakes from '../assets/img/brake.jpg';
import oillube from '../assets/img/oillube.jpg';
import suspension from '../assets/img/suspension.jpg';

export default function Services() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); 

  const navigation = () => {
    navigate('/login');
  };


  const services = [
    { category: 'all', image: diagnostic, title: 'Diagnostics', description: 'Accurate and thorough diagnostics to identify and address any issues with your vehicle. Our advanced diagnostic tools and techniques ensure precise detection and quick resolution.', price: '$50' },
    { category: 'all', image: Detailing, title: 'Dent and Paint Repairs', description: 'Professional dent removal and paint repair services to restore your vehicle\'s appearance. We use top-quality materials and techniques to ensure a flawless finish.', price: '$100 - $500' },
    { category: 'brakes', image: brakes, title: 'Brake System Repairs', description: 'Expert brake system repairs to ensure your safety on the road. Our services include brake pad replacement, rotor resurfacing, and complete brake system overhauls.', price: '$150' },
    { category: 'suspension', image: suspension, title: 'Suspension System Services', description: 'Comprehensive suspension system services to enhance your vehicle\'s handling and comfort. We provide suspension inspections, repairs, and upgrades to ensure a smooth ride.', price: '$200 - $400' },
    { category: 'oillube', image: oillube, title: 'Oil and Lube Changes', description: 'Regular oil and lube changes to keep your engine running smoothly. Our services include oil filter replacement and a thorough inspection of your vehicle\'s fluid levels.', price: '$30' },
    { category: 'engine', image: engine, title: 'Professional Detailing', description: 'High-quality detailing services to keep your vehicle looking its best inside and out. Our detailing packages include interior cleaning, exterior washing, waxing, and polishing.', price: '$80 - $200' }
  ];


  const filteredServices = filter === 'all' ? services : services.filter(service => service.category === filter);

  return (
    <div className="">
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
      <div className="container">
        <h2 className="text-center">Our Services</h2>
        <div className="text-center mb-4">
          <button className={`filter-btn ${filter === 'all' ? 'active1' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'brakes' ? 'active1' : ''}`} onClick={() => setFilter('brakes')}>Brakes</button>
          <button className={`filter-btn ${filter === 'suspension' ? 'active1' : ''}`} onClick={() => setFilter('suspension')}>Suspension</button>
          <button className={`filter-btn ${filter === 'oillube' ? 'active1' : ''}`} onClick={() => setFilter('oillube')}>Oil & Lube</button>
          <button className={`filter-btn ${filter === 'engine' ? 'active1' : ''}`} onClick={() => setFilter('engine')}>Detailing</button>
        </div>
        <div className="row mx-0 text-center mt-4">
          {filteredServices.map((service, index) => (
            <div className="col-md-4 service-card" key={index}>
              <img src={service.image} style={{ height: '100px' }} alt="" className='img-fluid' />
              <h5 className="mt-3">{service.title}</h5>
              <p>{service.description}</p>
              <p>Price: {service.price}</p>
            </div>
          ))}
        </div>
      </div>
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
              <p><i className="fas fa-phone mr-3"></i> +91 8009 000000</p>
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
    </div>
  );
}
