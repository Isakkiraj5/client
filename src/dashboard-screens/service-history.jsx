import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

export default function ServiceHistory() {
  const { userId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`https://server-1-rro0.onrender.com/api/appointments/${userId}`);
        setAppointments(response.data.serviceDetail);
        console.log()
      } catch (err) {
        console.error('Error fetching appointments:', err.response?.data || err.message);
        setError('Error fetching appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const categorizeAppointments = () => {
    const now = new Date();
    const pastAppointments = [];
    const upcomingAppointments = [];
    const ongoingAppointments = [];
    
    appointments.forEach((appointment) => {
      const appointmentDate = new Date(appointment.date);
      const appointmentDateTime = new Date(
        appointmentDate.getFullYear(),
        appointmentDate.getMonth(),
        appointmentDate.getDate(),
        ...appointment.time.split(':').map(Number)
      );
      
      // Calculate time difference in hours
      const timeDifferenceHours = (appointmentDateTime.getTime() - now.getTime()) / (1000 * 3600);
  
      if (timeDifferenceHours < -12) {
        pastAppointments.push(appointment);
      } else if (timeDifferenceHours >= -12 && timeDifferenceHours < 0) {
        ongoingAppointments.push(appointment);
      } else if (
        appointmentDateTime.toDateString() === now.toDateString() &&
        timeDifferenceHours >= 12
      ) {
        upcomingAppointments.push(appointment);
      } else {
        upcomingAppointments.push(appointment);
      }
    });
  
    return { pastAppointments, upcomingAppointments, ongoingAppointments };
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { pastAppointments, upcomingAppointments, ongoingAppointments } = categorizeAppointments();

  return (
    <div className="service-history-wrapper">
      <div className="header">Service History</div>
      <div className="appointments-section">
        <h2>Ongoing Services</h2>
        {renderTable(ongoingAppointments)}
      </div>
      <div className="appointments-section">
        <h2>Upcoming Services</h2>
        {renderTable(upcomingAppointments)}
      </div>

      <div className="appointments-section">
        <h2>Past Services</h2>
        {renderTable(pastAppointments)}
      </div>

      

     
    </div>
  );
}

function renderTable(appointments) {
  return appointments.length === 0 ? (
    <div>No services</div>
  ) : (
    <table className="appointment-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Vehicle</th>
          <th>Date</th>
          <th>Time</th>
          <th>Services</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment._id}>
            <td>{appointment.name}</td>
            <td>{appointment.vehicle}</td>
            <td>{new Date(appointment.date).toLocaleDateString()}</td>
            <td>{appointment.time}</td>
            <td>{appointment.services.join(', ')}</td>
            <td>{appointment.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
