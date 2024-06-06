import React from 'react'
import './css/homescreen.css'
import { Link } from 'react-router-dom';
import logo  from '../assets/img/logo.svg';
import about  from '../assets/img/about.svg';
import history  from '../assets/img/history.svg';
import { useNavigate } from 'react-router-dom';
export default function About() {
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
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/services">Services</Link>
            <Link className='link' to="/about">About us</Link>
            <Link className='link' to="/contact">Contact</Link>
          </div>
        </div>
        <button onClick={navigation} className="login-btn px-2">Login</button>
      </nav>
    <div className="container mt-5">
    <h2>About Us</h2>
    <div className='row'>
    <div className='col-md-6'>
    <p>
      Welcome to Vehicle Care, where our mission is to provide top-quality auto repair and maintenance services to keep your vehicle in peak condition. Our team of experienced technicians is committed to delivering reliable and efficient service using state-of-the-art equipment and the latest industry techniques.
    </p>
    <p>
      Our services include diagnostics, dent and paint repairs, brake system repairs, suspension system services, oil and lube changes, and professional detailing. We take pride in offering fair pricing and exceptional customer service to ensure your complete satisfaction.
    </p>
    <p>
      Contact us today to learn more about how we can help maintain your vehicle and keep you safe on the road.
    </p>

    </div>
    <div className='col-md-6'>
     <img src={about}  style={{height:"300px",width:"100%"}} alt="" className='img-fluid'/>
    </div>
    </div>
   
    <h3>Our Values</h3>
    <div className="row text-center mt-4">
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shield"
        >
          <path d="M12 22s8-4.56 8-10V5l-8-3-8 3v7c0 5.44 8 10 8 10z" />
        </svg>
        <h5 className="mt-3">Integrity</h5>
        <p>We believe in being honest and ethical in all our interactions with customers and employees.</p>
      </div>
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-award"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20.65 17 23 15.79 13.88" />
        </svg>
        <h5 className="mt-3">Quality</h5>
        <p>We strive to deliver services that meet the highest standards of quality and excellence.</p>
      </div>
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
          <path d="M5.33 11a4 4 0 1 0 3.34-3.34" />
          <path d="M20.33 11a4 4 0 1 1-3.34-3.34" />
        </svg>
        <h5 className="mt-3">Teamwork</h5>
        <p>We work together as a team to achieve our goals and provide the best possible service to our customers.</p>
      </div>
    </div>

    <h3 className="mt-5">Our History</h3>
    <div className="row align-items-center">
        <div className='col-md-6 col-sm-12'>
            <img src={history} alt="" className='img-fluid'/>
        </div>
        <div className='col-md-6 col-sm-12'>
        <p>
      Established in 1990, Vehicle Care has been serving the community for over three decades. Our founder, John Doe, started the company with a passion for cars and a commitment to customer satisfaction. Over the years, we have grown from a small workshop to a full-service auto repair center, equipped with the latest technology and a highly skilled team of technicians.
    </p>
    <p>
      We have built a reputation for providing reliable and efficient services, earning the trust of countless customers. Our dedication to excellence has been recognized with numerous awards and accolades in the industry.
    </p>

        </div>
    </div>
    <h3 className="mt-5">Our Commitment</h3>
    <p>
      At Vehicle Care, we are committed to providing exceptional service and ensuring the safety and satisfaction of our customers. We continuously invest in training and development to stay updated with the latest advancements in the automotive industry.
    </p>
    <p>
      Thank you for choosing Vehicle Care. We look forward to serving you and keeping your vehicle in top condition.
    </p>
   
    <h3 className="mt-5">Meet Our Team</h3>
    <div className="row text-center mt-4">
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <h5 className="mt-3">John Doe</h5>
        <p>Founder & Chief Mechanic</p>
      </div>
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <h5 className="mt-3">Jane Smith</h5>
        <p>Senior Technician</p>
      </div>
      <div className="col-md-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <h5 className="mt-3">Michael Lee</h5>
        <p>Service Advisor</p>
      </div>
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
              <p><i className="fas fa-home mr-3"></i>Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance Smart, Wagholi, Pune, Maharashtra – 412207</p>
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
