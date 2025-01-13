import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Signup from './Signup';

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default AppRoutes