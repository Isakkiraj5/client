import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const { userId } = useParams();
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);
    formik.setFieldValue('paymentMethod', selectedPaymentMethod);
  };

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`https://server-1-rro0.onrender.com/api/vehicle/${userId}`);
        setUserdata(response.data.userDetail);
    
      } catch (err) {
        console.error('Error fetching appointment:', err.response?.data || err.message);
        setError('Error fetching appointment details');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [userId]);

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
      paymentMethod: '',
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
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const total = getTotalPrice();

      if (values.paymentMethod === 'razorpay') {
        try {
          const orderResponse = await axios.post('http://localhost:3000/api/create-order', {
            amount: total,
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
          });

          const options = {
            key: 'rzp_test_1uFgghWu3HRlkf',
            amount: orderResponse.data.amount,
            currency: orderResponse.data.currency,
            name: "Vehicle Care",
            description: "Service Appointment",
            order_id: orderResponse.data.id,
            handler: async function (response) {
              await axios.post('http://localhost:3000/api/appointment', { ...values, user_Id: userId, total, paymentId: response.razorpay_payment_id });
              setPopupData({
                name: values.name,
                vehicle: values.vehicle,
                date: values.date,
                time: values.time,
                total: total,
                paymentMethod: values.paymentMethod
              });
              setAppointmentBooked(true);
              resetForm();
              formik.setFieldValue('services', []);
            },
            prefill: {
              name: values.name,
              email: userdata.email,
              contact: userdata.contact,
            },
            notes: {
              address: "Vehicle Care Corporate Office"
            },
            theme: {
              color: "#F37254"
            }
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error('Error creating Razorpay order:', error.response?.data || error.message);
        }
      } else {
        try {
          await axios.post('http://localhost:3000/api/appointment', { ...values, user_Id: userId, total });
          setPopupData({
            name: values.name,
            vehicle: values.vehicle,
            date: values.date,
            time: values.time,
            total: total,
            paymentMethod: values.paymentMethod
          });
          setAppointmentBooked(true);
          resetForm();
          formik.setFieldValue('services', []);
        } catch (error) {
          console.error('Error booking appointment:', error.response?.data || error.message);
        }
      }
      setSubmitting(false);
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
  const navigate=useNavigate()
  function addvehicle(){
    navigate(`/dashboard/${userId}/vehicle`)
   
  }
 
  const today = new Date().toISOString().split('T')[0];

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
              {userdata.length === 0 ? (
    <div>
        <p>No vehicles found. Please add a vehicle.</p>
        
        <button className='btn' onClick={addvehicle}>Add Vehicle</button>
    </div>
) : (
    userdata.map(vehicle => (
        <option key={vehicle.id} value={vehicle.vehicleNumber}>
            {vehicle.vehicleModel}-{vehicle.vehicleNumber}
        </option>
    ))
)}
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

          <div className="formbold-mb-5">
            <label className="formbold-form-label" htmlFor="date">Choose Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="formbold-form-input"
              min={today} 
              {...formik.getFieldProps('date')}
            />
            {formik.touched.date && formik.errors.date ? <div>{formik.errors.date}</div> : null}
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label" htmlFor="time">Choose Time (9 AM - 12 PM)</label>
            <input
              type="time"
              name="time"
              id="time"
              className="formbold-form-input"
              {...formik.getFieldProps('time')}
            />
            {formik.touched.time && formik.errors.time ? <div>{formik.errors.time}</div> : null}
          </div>

          <div className="formbold-mb-5">
            <label className="formbold-form-label" htmlFor="paymentMethod">Choose Payment Method</label>
            <select
              name="paymentMethod"
              id="paymentMethod"
              className="formbold-form-input"
              value={formik.values.paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash</option>
              <option value="razorpay">Razorpay</option>
            </select>
            {formik.touched.paymentMethod && formik.errors.paymentMethod ? <div>{formik.errors.paymentMethod}</div> : null}
          </div>

          <div>
            <button type="submit" className="formbold-btn">Submit</button>
          </div>
        </form>

        {appointmentBooked && popupData && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-header">
                <h3>Appointment Confirmation</h3>
              </div>
              <div className="popup-body">
                <p><strong>Name:</strong> {popupData.name}</p>
                <p><strong>Vehicle:</strong> {popupData.vehicle}</p>
                <p><strong>Date:</strong> {popupData.date}</p>
                <p><strong>Time:</strong> {popupData.time}</p>
                <p><strong>Total:</strong> ${popupData.total}</p>
                <p><strong>Payment Method:</strong> {popupData.paymentMethod}</p>
              </div>
              <div className="popup-footer">
                <button className="popup-button" onClick={handlePopupClose}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
