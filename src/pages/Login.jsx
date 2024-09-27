import React, { useContext, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import LoadingIcon from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../context/AuthContext'

function Login() {
  const {setToken, register} = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value
    }

    if(register){
      if(data.login == register.login && data.password == register.password){
        setIsLoading(true)
        toast.success("Welcome to Twitter " + data.login)
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
        }, 1000)
      }
      else{
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          toast.error("User is not found!")
        },1000)
      }
    }
    else{
      if(data.login == "Komiljon" && data.password == "123"){
        setIsLoading(true)
        toast.success("Welcome to Twitter " + data.login)
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
        }, 1000)
      }
      else{
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          toast.error("User is not found!")
        },1000)
      }
    }
    }



  return (
    <form onSubmit={handleSubmit} className='w-[450px] mx-auto mt-[60px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false}/>
      <img src={Logo} alt="Logo" width={50} height={41}/>
      <h2 className='font-roboto font-black text-[42px] leading-[49px] my-[36px]'>Log in to Twitter</h2>
      <LoginInput placeholder={"Phone number, email address"} type={"text"} name={"login"}/>
      <LoginInput placeholder={"Password"} type={"password"} name={"password"} extraStyle={"my-[25px]"}/>
      <Button extraStyle={"h-[59px]"} type={"submit"}>
       {isLoading? <img className='scale-[3] mx-auto' src={LoadingIcon} alt="Loading" width={22}/> : 'Log In'}
      </Button>
      <div className='flex justify-between items-center mt-10'>
        <p className='text-[18px] leading-[24px] text-[#1DA1F2] cursor-pointer'>Forgot password?</p>
        <Link to={'/sign-up'} className='text-[18px] leading-[24px] text-[#1DA1F2]'>Sign up to Twitter</Link>
      </div>
    </form>
  )
}

export default Login