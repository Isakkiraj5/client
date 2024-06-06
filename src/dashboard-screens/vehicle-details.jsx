import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useParams } from 'react-router-dom';

export default function AddVehicle() {
  const { userId } = useParams();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      vehicleNumber: '',
      vehicleModel: '',
      vehicleMake: '',
      vehicleYear: ''
    },
    validationSchema: Yup.object({
      vehicleNumber: Yup.string().required('Required'),
      vehicleModel: Yup.string().required('Required'),
      vehicleMake: Yup.string().required('Required'),
      vehicleYear: Yup.number()
        .required('Required')
        .min(1886, 'Enter a valid year')
        .max(new Date().getFullYear(), 'Enter a valid year'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log("vehicle Values", { ...values, user_Id: userId });
      axios.post('https://server-1-rro0.onrender.com/api/vehicle', { ...values, user_Id: userId })
        .then(response => {
          console.log(response);
          setSubmissionSuccess(true);
          resetForm(); // Reset the form fields
          setSubmitting(false);
          setTimeout(() => setSubmissionSuccess(false), 3000); // Hide the success message after 3 seconds
        })
        .catch(error => {
          console.error(error);
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="header">Add Vehicle Details</div>
        {submissionSuccess && <div className="success-popup">Vehicle added successfully!</div>}
        <form onSubmit={formik.handleSubmit}>
          <div className="formbold-mb-5">
            <label htmlFor="vehicleNumber" className="formbold-form-label">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              id="vehicleNumber"
              placeholder="Enter the Vehicle Number"
              className="formbold-form-input"
              {...formik.getFieldProps('vehicleNumber')}
            />
            {formik.touched.vehicleNumber && formik.errors.vehicleNumber ? (
              <div>{formik.errors.vehicleNumber}</div>
            ) : null}
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="vehicleModel" className="formbold-form-label">Vehicle Model</label>
            <input
              type="text"
              name="vehicleModel"
              id="vehicleModel"
              placeholder="Enter the Vehicle Model"
              className="formbold-form-input"
              {...formik.getFieldProps('vehicleModel')}
            />
            {formik.touched.vehicleModel && formik.errors.vehicleModel ? (
              <div>{formik.errors.vehicleModel}</div>
            ) : null}
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="vehicleMake" className="formbold-form-label">Vehicle Make</label>
            <input
              type="text"
              name="vehicleMake"
              id="vehicleMake"
              placeholder="Enter the Vehicle Make"
              className="formbold-form-input"
              {...formik.getFieldProps('vehicleMake')}
            />
            {formik.touched.vehicleMake && formik.errors.vehicleMake ? (
              <div>{formik.errors.vehicleMake}</div>
            ) : null}
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="vehicleYear" className="formbold-form-label">Vehicle Year</label>
            <input
              type="number"
              name="vehicleYear"
              id="vehicleYear"
              placeholder="Enter the Vehicle Year"
              className="formbold-form-input"
              {...formik.getFieldProps('vehicleYear')}
            />
            {formik.touched.vehicleYear && formik.errors.vehicleYear ? (
              <div>{formik.errors.vehicleYear}</div>
            ) : null}
          </div>

          <div>
            <button type="submit" className="formbold-btn" disabled={formik.isSubmitting}>
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
