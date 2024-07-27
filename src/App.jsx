import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Appointment from "./Appointment";
import Contact_us from "./Contact_us";
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot'
import Doctor from './Doctor'
import AllAppointments from './AllAppointments';

function App() {
  return (
    <div>
       <BrowserRouter>   
  <Routes>
    
    <Route path='/' element={<Login/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/Appointment" element={<Appointment/>}></Route>
    <Route path="/Contact_us" element={<Contact_us/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route path='/Forgot' element={<Forgot/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Doctor' element={<Doctor/>}></Route>
    <Route path='/AllAppointments' element={<AllAppointments/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
