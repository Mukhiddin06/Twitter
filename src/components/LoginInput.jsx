import React from 'react'

function LoginInput({name, placeholder, type, extraStyle}) {
  return (
    <input className={`py-[23px] outline-none w-full pl-5 text-[18px] leading-[23px] border-[1px] border-[#00000033] rounded-[6px] ${extraStyle}`} type={type} placeholder={placeholder} required name={name}/>
  )
}

export default LoginInput