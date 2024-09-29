import React, { useContext } from 'react'
import { Dots, SearchIcon, SettingsIcon } from '../assets/images/Icons'
import Mem from '../assets/images/meme.png'
import { Context } from '../context/AuthContext'
import User2 from '../assets/images/mushtary.svg'
import User3 from '../assets/images/shukhrat.svg'

function Sitebar() {
  const { path } = useContext(Context)


  return (
    <div className='w-[28%] pt-[20px] pl-[28px] pr-[29px] h-[100vh] overflow-y-auto'>
      <label className='flex items-center space-x-5 py-[15px] pl-5 pr-5 bg-[#EFF3F4] rounded-[31px] mb-5'>
        <div>
          <SearchIcon />
        </div>
        <input type="text" placeholder='Search Twitter' className='w-full bg-[#EFF3F4] outline-none text-[18px] leading-[23px] placeholder:text-[#5C6C79]' />
      </label>
      <img className={`${path === "/" ? "hidden" : ""} mb-5`} src={Mem} alt="Img" width={373} height={178} />
      <div className={`${path === "/" ? "flex flex-col-reverse" : ""}`}>
        <div className='pt-5 pb-[25px] px-[15px] bg-[#F7F9F9] rounded-[10px]'>
          <h2 className='font-bold text-[24px] leading-[32px] mb-[25px]'>You might like</h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={User2} alt="User2" width={60} height={60} />
              <div className='ml-[13px]'>
                <h3 className='font-semibold text-[18px] leading-[24px]'>Mushtariy</h3>
                <p className='opacity-60 text-[18px] leading-[24px] text-black'>@Mushtar565266</p>
              </div>
            </div>
            <div className='py-[10px] px-[18px] bg-black text-white font-bold text-[18px] leading-[18px] rounded-[50px]'>Follow</div>
          </div>
          <div className='flex items-center justify-between mt-[25px]'>
            <div className='flex items-center justify-between'>
              <img src={User3} alt="User2" width={60} height={60} />
              <div className='ml-[13px]'>
                <h3 className='font-semibold text-[18px] leading-[24px]'>Shuhratbek</h3>
                <p className='opacity-60 text-[18px] leading-[24px] text-black'>@mrshukhrat</p>
              </div>
            </div>
            <div className='py-[10px] px-[18px] bg-black text-white font-bold text-[18px] leading-[18px] rounded-[50px]'>Follow</div>
          </div>
          <p className='mt-[30px] text-[#1DA1F2] text-[18px] leading-[18px] cursor-pointer'>Show more</p>
        </div>
        <div className='mt-5 pt-5 pb-[25px] px-[15px] bg-[#F7F9F9] rounded-[10px] mb-5'>
          <div className='flex justify-between'>
            <h2 className='font-bold text-[24px] leading-[32px] mb-[25px]'>Trends for you</h2>
            <SettingsIcon/>
          </div>
          <div className='mt-5'>
            <div className='flex items-center justify-between'>
              <p className='text-[16px] leading-[21px] text-[#393B41]'>Trending in Germany</p>
              <Dots/>
            </div>
            <h3 className='font-semibold text-[20px] leading-[26px] mt-[2px] mb-[3px]'>Revolution</h3>
            <p className='text-[16px] leading-[21px] text-[#393B41]'>50.4K Tweets</p>
          </div>
          <div className='mt-[15px]'>
            <div className='flex items-center justify-between'>
              <p className='text-[16px] leading-[21px] text-[#393B41]'>Trending in Germany</p>
              <Dots/>
            </div>
            <h3 className='font-semibold text-[20px] leading-[26px] mt-[2px] mb-[3px]'>Revolution</h3>
            <p className='text-[16px] leading-[21px] text-[#393B41]'>50.4K Tweets</p>
          </div>
          <div className='mt-[15px]'>
            <div className='flex items-center justify-between'>
              <p className='text-[16px] leading-[21px] text-[#393B41]'>Trending in Germany</p>
              <Dots/>
            </div>
            <h3 className='font-semibold text-[20px] leading-[26px] mt-[2px] mb-[3px]'>Revolution</h3>
            <p className='text-[16px] leading-[21px] text-[#393B41]'>50.4K Tweets</p>
          </div>
          <p className='mt-[30px] text-[#1DA1F2] text-[18px] leading-[18px] cursor-pointer'>Show more</p>
        </div>
      </div>
      <p className={`${path === "/" ? "" : "hidden"} text-[#536471] text-[16px] leading-[21px] mt-[30px] mb-[20px]`}>Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
    </div>
  )
}

export default Sitebar