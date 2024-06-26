import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import logo from './assets/img/logo.svg';
import './App.css'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
export default function Dashboard() {
        const {userId}=useParams()
    const [userdata, setUserdata] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAppointment = async () => {
          try {
            const appointmentId = userId;
           
         
            const response =  await axios.get(`https://server-1-rro0.onrender.com/api/user/${appointmentId}`);
           
            setUserdata(response.data); 
          } catch (err) {
            console.error('Error fetching appointment:', err.response.data);
            setError('Error fetching appointment details');
          } 
        };
      
        fetchAppointment();
      }, [userId]);

    const navigate=useNavigate()
    function home(){
        navigate(`/dashboard/${userId}`)
      
    }
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
   <div className="row mx-0">
    <div className='col-1 px-0'>
    <div className='menu'>
     <div><img src={logo} height={40} className='img-fluid' alt="" /></div>
     <div className='mt-3 d-flex justify-content-center align-items-center flex-column'>
     <Tooltip title="Home" placement="right-start">
     <button onClick={home} className='dashboarditems'>
        
        <i className="fa-solid fa-house"></i>
        </button>
            </Tooltip>
            <Tooltip title="Appointment" placement="right-start">
            <button onClick={appointment} className='dashboarditems'>
     <i className="fa-solid fa-calendar-check"></i>
     </button>
            </Tooltip>
            <Tooltip title="Add Vehicle" placement="right-start">
            <button onClick={addvehicle} className='dashboarditems'>
            <i className="fa-solid fa-car-side"></i>
     </button>
            </Tooltip>
            <Tooltip title="Service History" placement="right-start">
            <button onClick={servicehistory} className='dashboarditems'>
     <i className="fa-solid fa-magnifying-glass"></i>
     </button>
            </Tooltip>
            <Tooltip title="Track Expense" placement="right-start">
            <button onClick={vehicleexpenses} className='dashboarditems'>
            <i className="fa-solid fa-sack-dollar"></i>
     </button>
            </Tooltip>
     </div>
    </div>
    </div>
    <div className='col-11 px-0'>
        <Navbar data={userdata}/>
        <div className='scroll-data'>
        <Outlet />
        </div>
       
    </div>
   </div>
  )
}
