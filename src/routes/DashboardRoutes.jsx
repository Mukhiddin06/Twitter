import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sitebar from '../components/Sitebar'
import Loading2 from '../assets/images/Spinner.png'
import { Likes, Media, Replies, Tweet } from '../pages'

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../pages/Home")), 1000)
}))

const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../pages/Profile/Profile")), 1000)
}))

function DashboardRoutes() {
  return (
    <div className='flex'>
      <Navbar />
      <div className='w-[50%]'>
        <Routes>
          <Route path='/' element={<Suspense fallback={<img className='mx-auto mt-[150px] scale-[3]' src={Loading2} alt='Loading...' width={100}/>}><Home/></Suspense>} />
          <Route path='/profile' element={<Suspense fallback={<img className='mx-auto mt-[150px] scale-[3]' src={Loading2} alt='Loading...' width={100}/>}><Profile/></Suspense>}>
            <Route path='/profile' element={<Tweet/>}/>
            <Route path='tweets-replies' element={<Replies/>}/>
            <Route path='media' element={<Media/>}/>
            <Route path='likes' element={<Likes/>}/>
          </Route>
        </Routes>
      </div>
      <Sitebar />
    </div>
  )
}

export default DashboardRoutes