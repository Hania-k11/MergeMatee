import React from 'react'
import Login from './Login'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhyMergeMate from './components/WhyMergeMate'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { AuthContext, UserProvider, useAuth } from './context/AuthContext';
import  { createContext, useState, useContext } from 'react';



const App = () => {

  
  const state = useContext(AuthContext)
  console.log("Contextyy", state)

  return (
    <UserProvider>
 <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

    </UserProvider>
  )
}

export default App