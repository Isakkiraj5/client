import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout.jsx';
import Login from './login.jsx';
import Mainlayout from './Mainlayout.jsx';
import Home from './screens/Homescreen.jsx';
import About from './screens/About.jsx';
import Services from './screens/services.jsx';
import ContactUs from './screens/contact.jsx';
import Dashboard from './Dashboard.jsx';
import Appointment from './dashboard-screens/appointment-page.jsx';
import Homescreen from './dashboard-screens/homescreen.jsx';
import Vehicle from './dashboard-screens/vehicle-details.jsx';
import ServiceHistory from './dashboard-screens/service-history.jsx';
import Vehicleexpense from './dashboard-screens/vehicleexpenses.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Home />} />
      <Route path='about'  element={<About/>}/>
      <Route path='services'  element={<Services/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path="login" element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="dashboard/:userId" element={<Dashboard />}>
      <Route path='vehicle' element={<Vehicle />}></Route>
     <Route path='appointment' element={<Appointment />}></Route>
     <Route path='servicehistory' element={<ServiceHistory />}></Route>
     <Route path='vehicleexpenses' element={<Vehicleexpense />}></Route>
     <Route index element={<Homescreen />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
