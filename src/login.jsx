import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [active, setActive] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [emailForOTP, setEmailForOTP] = useState('');
  const navigate = useNavigate();

  function backfunc(){
    navigate(`/`);
  }

  const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const signUpValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
  });

  const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const resetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    otp: Yup.string().required('OTP is required'),
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
  });

  const handleSignInSubmit = (values) => {
    axios.post("https://server-1-rro0.onrender.com/api/login", values)
      .then((res) => {
        if (res.data.success) {
          navigate(`/dashboard/${res.data.userId}`);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error('Login Error:', error);
      });
  };

  const handleForgotPasswordSubmit = async (values) => {
    try {


      const res = await axios.post("https://servervehiclecare.onrender.com/api/forgot-password", values);

      if (res.data) {

        setEmailForOTP(values.email);
        setMessage('OTP sent to your email.');
        setForgotPassword(false);
        setResetPassword(true);
      
       
      } else {
        setError(true);
        setMessage(res.data.message);
      }
    } catch (error) {
      console.error('Forgot Password Error:', error);
    }
  };

  const handleResetPasswordSubmit = (values) => {
    axios.post("https://servervehiclecare.onrender.com/api/reset", values)
      .then((res) => {
        if (res.data) {
          setMessage('Password has been reset. Please login with your new password.');
          setResetPassword(false);
          setForgotPassword(false);
          setError(false); 
          setActive(false); 
        } else {
          setError(true);
          setMessage(res.data.message);
        }
      })
      .catch((error) => {
        console.error('Reset Password Error:', error);
      });
  };

  const handleSignUpSubmit = (values) => {
    axios.post("https://server-1-rro0.onrender.com/api/register", values)
      .then((res) => {
        setActive(false);
      })
  };

  return (
    <div className="container1">
      <div style={{position:"relative",zIndex:9999}}>
        <button style={{float:"right",}} onClick={backfunc} className='forget m-2'><i className="fa-solid fa-chevron-left mx-3"></i>back</button>
      </div>
      <div className="forms-container1">
        <div className="signin-signup">
          {!forgotPassword && !resetPassword && !active && (
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={signInValidationSchema}
              onSubmit={handleSignInSubmit}
            >
              {() => (
                <Form className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      type="text"
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  {error && (<div className="error-message">
                    Enter correct email and password
                  </div>)}
                  <ErrorMessage name="password" component="div" className="error-message" />
                  <input type="submit" value="Login" className="btn solid" />
                  <button type="button" className="forget" onClick={() => setForgotPassword(true)}>Forgot Password?</button>
                </Form>
              )}
            </Formik>
          )}
          {forgotPassword && (
            <Formik
              initialValues={{ email: '' }}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={handleForgotPasswordSubmit}
            >
              {() => (
                <Form className="forgot-password-form">
                  <h2 className="title">Forgot Password</h2>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-message" />
                  {message && (<div className="message">{message}</div>)}
                  <input type="submit" value="Send OTP" className="btn solid" />
                  <button type="button" className="forget" onClick={() => setForgotPassword(false)}>Back to Sign In</button>
                </Form>
              )}
            </Formik>
          )}
          {resetPassword && (
            <Formik
              initialValues={{ email: emailForOTP, otp: '', newPassword: '' }}
              validationSchema={resetPasswordValidationSchema}
              onSubmit={handleResetPasswordSubmit}
            >
              {() => (
                <Form className="reset-password-form">
                  <h2 className="title">Reset Password</h2>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      disabled
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-key"></i>
                    <Field
                      type="text"
                      name="otp"
                      placeholder="OTP"
                    />
                  </div>
                  <ErrorMessage name="otp" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                    />
                  </div>
                  <ErrorMessage name="newPassword" component="div" className="error-message" />
                  {message && (<div className="message">{message}</div>)}
                  <input type="submit" value="Reset Password" className="btn solid" />
                  <button type="button" className="forget" onClick={() => setForgotPassword(false)}>Back to Sign In</button>
                </Form>
                
              )}
            </Formik>
          )}
          {active && !forgotPassword && (
            <Formik
              initialValues={{ username: '', email: '', password: '', mobile: '' }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUpSubmit}
            >
              {() => (
                <Form className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <ErrorMessage name="username" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="error-message" />
                  <div className="input-field">
                    <i className="fas fa-phone"></i>
                    <Field
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <ErrorMessage name="mobile" component="div" className="error-message" />
                  <input type="submit" value="Sign up" className="btn solid" />
                  <button type="button" className="btn " onClick={() => setActive(false)}>Back to Sign In</button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>

      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>Vehicle Care</h3>
            <p>
              Welcome to Vehicle Care. Whether you're a car enthusiast or just looking to maintain your vehicle, you've come to the right place.
            </p>
            <button className="btn" id="sign-up-btn"  onClick={() => { setActive(false); setForgotPassword(false);setError(false);  setResetPassword(false); }}>
              Sign up
            </button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn " id="sign-in-btn" onClick={() => { setActive(false); setForgotPassword(false);setError(false);  setResetPassword(false); }}>
              Sign in
            </button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
