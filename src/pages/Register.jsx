import React, { useContext, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import LoadingIcon from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../context/AuthContext'

function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { setRegister} = useContext(Context)


  function handleRegisterSubmit(e){
    e.preventDefault()
    const data = {
      login: e.target.name.value,
      password: e.target.phone.value
    }
    setIsLoading(true)
    toast.success("Successfully registered")
    setTimeout(() => {
      setRegister(data)
      navigate(-1)
    }, 1000)
  }

  return (
    <form onSubmit={handleRegisterSubmit} className='w-[670px] mx-auto mt-[30px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false}/>
      <img className='mx-auto' src={Logo} alt="Logo" width={40} height={33}/>
      <h2 className='font-bold text-[30px] leading-[40px] mb-[35px] mt-[43px]'>Create an account</h2>
      <LoginInput placeholder={"Name"} type={"text"} name={"name"}/>
      <LoginInput placeholder={"Phone number"} type={"tel"} name={"phone"} extraStyle={"mt-[25px] mb-[30px]"}/>
      <Link to={"/"} className='text-[18px] leading-[24px] text-[#1DA1F2] cursor-pointer mb-[40px] block'>Sign In</Link>
      <h3 className='font-bold text-[18px] leading-[24px] mb-[10px]'>Date of birth</h3>
      <p className='text-[16px] leading-[24px] mb-[60px] opacity-60'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      <Button extraStyle={"h-[59px]"} type={"submit"}>
       {isLoading? <img className='scale-[3] mx-auto' src={LoadingIcon} alt="Loading" width={22}/> : 'Next'}
      </Button>
    </form>
  )
}

export default Register