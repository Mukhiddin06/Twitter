import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../pages'
import Navbar from '../components/Navbar'
import Sitebar from '../components/Sitebar'

function DashboardRoutes() {
  return (
    <div className='flex'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Sitebar />
    </div>
  )
}

export default DashboardRoutes