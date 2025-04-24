import './App.css'
import React from "react";
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx';
import ErrorPage404 from "./pages/ErrorPage404.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/404" element={<ErrorPage404 />} />
      </Routes>
  )
}

export default App
