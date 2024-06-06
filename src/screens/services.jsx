import React, { useState } from 'react';
import './css/homescreen.css'; // Import the CSS file
import { Link } from 'react-router-dom';
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
  const [filter, setFilter] = useState('all'); // State to track selected filter

  const navigation = () => {
    navigate('/login');
  };

  // Define services data with pricing
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
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/services">Services</Link>
            <Link className='link' to="/about">About us</Link>
            <Link className='link' to="/contact">Contact</Link>
          </div>
        </div>
        <button onClick={navigation} className="login-btn px-2">Login</button>
      </nav>
      <div className="container">
        <h2 className="text-center">Our Services</h2>
        <div className="text-center mb-4">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'brakes' ? 'active' : ''}`} onClick={() => setFilter('brakes')}>Brakes</button>
          <button className={`filter-btn ${filter === 'suspension' ? 'active' : ''}`} onClick={() => setFilter('suspension')}>Suspension</button>
          <button className={`filter-btn ${filter === 'oillube' ? 'active' : ''}`} onClick={() => setFilter('oillube')}>Oil & Lube</button>
          <button className={`filter-btn ${filter === 'engine' ? 'active' : ''}`} onClick={() => setFilter('engine')}>Detailing</button>
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
        {/* Footer content */}
      </footer>
    </div>
  );
}
