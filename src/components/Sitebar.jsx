import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../assets/images/Icons'
import Mem from '../assets/images/meme.png'

function Sitebar() {
  const [path, setPath] = useState("/")
  // setPath(location.pathname)
  useEffect(() => {
    setPath(window.location.pathname) 
  }, []) 
  console.log(window.location.pathname)
  
  return (
    <div className='w-[28%] h-[100vh] pt-[20px] pl-[28px] pr-[29px]'>
      <label className='flex items-center space-x-5 py-[15px] pl-5 pr-5 bg-[#EFF3F4] rounded-[31px] mb-5'>
        <div>
          <SearchIcon/>
        </div>
        <input type="text" placeholder='Search Twitter' className='w-full bg-[#EFF3F4] outline-none text-[18px] leading-[23px] placeholder:text-[#5C6C79]'/>
      </label>
      <img className={`${path === "/" ? "hidden" : ""}`} src={Mem} alt="Img" width={373} height={178}/>
    </div>
  )
}

export default Sitebar