import React, { useEffect, useState } from 'react';
import booking from '../assets/img/booking.svg';
import tracker from '../assets/img/tracker.svg';
import vehicle from '../assets/img/vehicle.svg';
import user from '../assets/img/user.svg';
import '../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import expense from  '../assets/img/expenses.svg'
import { useNavigate } from 'react-router-dom';

export default function Homescreen() {
  const { userId } = useParams(); 
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const appointmentId = userId;
        const baseUrl = 'https://server-1-rro0.onrender.com/';
        const response = await axios.get(`${baseUrl}/api/user/${appointmentId}`);
        setUserdata(response.data);
      } catch (err) {
        console.error('Error fetching appointment:', err.response.data);
        setError('Error fetching appointment details');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [userId]);

  const navigate=useNavigate()

  function appointment(){
      navigate(`/dashboard/${userId}/appointment`)
     
  }
  function servicehistory(){
    navigate(`/dashboard/${userId}/servicehistory`)

}
function vehicleexpenses(){
  navigate(`/dashboard/${userId}/vehicleexpenses`)
  
}

function addvehicle(){
navigate(`/dashboard/${userId}/vehicle`)

}

  return (
    <div className='row p-3'>
      <div className='col-md-3'>
        <div className="card shadow-lg mb-5 bg-white rounded py-2">
          <img height={150} src={booking} className="card-img-top img-fluid" alt="Booking" />
          <div className="card-body text-center">
            <h5 className="card-title">Book Appointment</h5>
            <p className="card-text">Schedule your vehicle service appointment easily and conveniently.</p>
             <button onClick={appointment} className='btn'>Book Now</button>
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card shadow-lg mb-5 bg-white rounded py-2">
          <img src={vehicle} className="card-img-top img-fluid" alt="Add Vehicle" />
          <div className="card-body text-center">
            <h5 className="card-title">Add Vehicle</h5>
            <p className="card-text">Add your vehicle details for a better service experience.</p>
           
            <button onClick={addvehicle} className='btn'>Add Now</button>
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card shadow-lg mb-5 bg-white rounded py-2">
          <img height={150} src={tracker} className="card-img-top img-fluid" alt="Service History" />
          <div className="card-body text-center">
            <h5 className="card-title">Service History</h5>
            <p className="card-text">Monitor the status of your vehicle service easily.</p>
            <button onClick={servicehistory} className='btn'>Track Now</button>
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card shadow-lg mb-5 bg-white rounded py-2">
          <img height={150} src={expense} className="card-img-top img-fluid" alt="Booking" />
          <div className="card-body text-center">
            <h5 className="card-title"> Vehicle Expense</h5>
            <p className="card-text">Calculate the vehile expense Individually</p>
            
            <button onClick={vehicleexpenses} className='btn'>Calculate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
