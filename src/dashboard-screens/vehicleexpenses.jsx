import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';

export default function VehicleExpense() {
  const { userId } = useParams();
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://server-1-rro0.onrender.com/api/vehicle/${userId}`);
        setUserdata(response.data.userDetail);
        console.log("data", response.data.userDetail);
      } catch (err) {
        console.error('Error fetching user data:', err.response?.data || err.message);
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`https://server-1-rro0.onrender.com/api/appointments/expenses/${userId}`);
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error('Error fetching expenses:', error);
        setExpenses({});
      }
    };

    fetchExpenses();
  }, [userId]);

  const formik = useFormik({
    initialValues: {
      vehicle: ''
    },
    validationSchema: Yup.object({
      vehicle: Yup.string().required('Vehicle is required')
    }),
    onSubmit: values => {
      console.log('Form values:', values);
      // Handle form submission
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container mt-4'>
       <div className="header">Expense Details</div>
      <form onSubmit={formik.handleSubmit}>
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
                {vehicle.vehicleModel} - {vehicle.vehicleNumber}
              </option>
            ))}
          </select>
          {formik.touched.vehicle && formik.errors.vehicle ? (
            <div>{formik.errors.vehicle}</div>
          ) : null}
        </div>
        
      </form>
      <div>
        {/* Display expenses for selected vehicle */}
        {formik.values.vehicle && expenses[formik.values.vehicle] && (
          <div>
            <p className='expenses'>Expenses for {formik.values.vehicle}:</p>
            <table >
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(expenses[formik.values.vehicle].monthly).map(([month, total]) => (
                  <tr key={month}>
                    <td>{month}</td>
                    <td>{total.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>{expenses[formik.values.vehicle].total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
