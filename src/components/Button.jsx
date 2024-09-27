import React from 'react'

function Button({type, children, extraStyle}) {
  return (
    <button className={`p-[18px] font-bold text-[18px] leading-[24px] rounded-[76px] bg-[#1DA1F2] text-white w-full hover:opacity-75 duration-300 ${extraStyle}`} type={type}>
        {children}
    </button>
  )
}

export default Button