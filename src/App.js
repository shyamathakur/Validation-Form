import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/Login';
import Signup from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";
import Card from "./card/Card";
import NoPage from "./NoPage"

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Card />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default Router
