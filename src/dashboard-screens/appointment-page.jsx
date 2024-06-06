import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useParams } from 'react-router-dom';


export default function Appointment() {
  
  const { userId } = useParams();
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
       
        const response = await axios.get(`https://server-1-rro0.onrender.com/api/vehicle/${userId}`);
        setUserdata(response.data.userDetail); // Assuming response.data.userDetail is the correct path
        console.log("data", response.data.userDetail);
      } catch (err) {
        console.error('Error fetching appointment:', err.response?.data || err.message);
        setError('Error fetching appointment details');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, []);

  const services = [
    { id: 1, name: 'Full Service', price: 100 },
    { id: 2, name: 'Oil Change', price: 50 },
    { id: 3, name: 'Tire Rotation', price: 30 },
    { id: 4, name: 'Brake Service', price: 80 },
  ];

  const [filteredServices, setFilteredServices] = useState(services);

  const formik = useFormik({
    initialValues: {
      name: '',
      vehicle: '',
      services: [],
      date: '',
      time: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      vehicle: Yup.string().required('Required'),
      services: Yup.array().min(1, 'Select at least one service'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required').test(
        'is-between-9-and-12',
        'Time must be between 9:00 AM and 12:00 PM',
        value => {
          const [hours, minutes] = value.split(':').map(Number);
          return hours >= 9 && (hours < 12 || (hours === 12 && minutes === 0));
        }
      ),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const total = getTotalPrice(); // Calculate total price
      axios.post('https://server-1-rro0.onrender.com/api/appointment', {...values, user_Id: userId, total: total})
        .then(response => {
          console.log(response);
          setPopupData({
            name: values.name,
            vehicle: values.vehicle,
            date: values.date,
            time: values.time,
            total: total
          });
          setAppointmentBooked(true);
          resetForm(); // Reset the form
          formik.setFieldValue('services', []); // Uncheck checkboxes
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
    
  });

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredServices(services.filter(service => service.name.toLowerCase().includes(searchTerm)));
  };

  const getTotalPrice = () => {
    return formik.values.services.reduce((acc, serviceName) => {
      const service = services.find(s => s.name === serviceName);
      return acc + (service ? service.price : 0);
    }, 0);
  };
  const handlePopupClose = () => {
    setPopupData(null);
    setAppointmentBooked(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="header">Book Appointment</div>
        <form onSubmit={formik.handleSubmit}>
          <div className="formbold-mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="formbold-form-input"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
          
          <div className="formbold-mb-5">
            <select
              name="vehicle"
              id="vehicle"
              className="formbold-form-input"
              {...formik.getFieldProps('vehicle')}
            >
              <option value="">Select Vehicle</option>
              {userdata.map(vehicle => (
                <option key={vehicle.id} value={vehicle.vehicleNumber}>
                  {vehicle.vehicleModel}-{vehicle.vehicleNumber}
                </option>
              ))}
            </select>
            {formik.touched.vehicle && formik.errors.vehicle ? <div>{formik.errors.vehicle}</div> : null}
          </div>

          <div className="formbold-mb-5">
            <input
              type="text"
              placeholder="Filter Services"
              onChange={handleFilterChange}
              className="formbold-form-input"
            />
          {filteredServices.map(service => (
  <div key={service.id} className="checkbox-container">
    <input
      type="checkbox"
      id={`checkbox-${service.id}`}
      className="checkbox-input"
      name="services"
      value={service.name}
      checked={formik.values.services.includes(service.name)}
      onChange={e => {
        const isChecked = e.target.checked;
        if (isChecked) {
          formik.setFieldValue('services', [...formik.values.services, service.name]);
        } else {
          formik.setFieldValue('services', formik.values.services.filter(s => s !== service.name));
        }
      }}
    />
    <label htmlFor={`checkbox-${service.id}`} className="checkbox-label">
      <span className="checkbox-custom"></span>
      {service.name} - ${service.price}
    </label>
  </div>
))}

            {formik.touched.services && formik.errors.services ? <div>{formik.errors.services}</div> : null}
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label">Total Price: ${getTotalPrice()}</label>
          </div>

          <div className="flex flex-wrap formbold--mx-3">
            <div className="w-full sm:w-half formbold-px-3">
              <div className="formbold-mb-5 w-full">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="formbold-form-input"
                  {...formik.getFieldProps('date')}
                />
                {formik.touched.date && formik.errors.date ? <div>{formik.errors.date}</div> : null}
              </div>
            </div>
            <div className="w-full sm:w-half formbold-px-3">
              <div className="formbold-mb-5">
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="formbold-form-input"
                  min="09:00"
                  max="12:00"
                  {...formik.getFieldProps('time')}
                />
                {formik.touched.time && formik.errors.time ? <div>{formik.errors.time}</div> : null}
              </div>
            </div>
          </div>

          <div>

            <button type="submit" className="formbold-btn" disabled={formik.isSubmitting}>
              Book Appointment
            </button>
          </div>
          {appointmentBooked && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={handlePopupClose}>&times;</span>
                  <h2 className='mt-4'>Appointment Booked!</h2>
                  <p>Thank you for booking your appointment.</p>
                  <p>Name: {popupData.name}</p>
                  <p>Vehicle: {popupData.vehicle}</p>
                  <p>Date: {popupData.date}</p>
                  <p>Time: {popupData.time}</p>
                  <p>Total Price: ${popupData.total}</p>
                </div>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}
