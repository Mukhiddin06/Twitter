import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Arrow, BallIcon, CalendarIcon, LinkIcon, LocationIcon } from '../../assets/images/Icons'
import BgPhoto from '../../assets/images/Bg-photo.png'
import User from '../../assets/images/user1.svg'
import Empty from '../../assets/images/empty.png'
import Modal from '../../components/Modal'
import Button from '../../components/Button'


function Profile() {
  const [isUpdateModal, setIsUpdateModal] = useState(false)
  const [profileImg, setProfileImg] = useState(User)
  const [profileActive, setProfileActive] = useState("Tweets")
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"))

  const [ userInfo, setUserInfo] = useState({
      avatarImg:profileImg,
      name:JSON.parse(localStorage.getItem("token")).login,
      email:`${JSON.parse(localStorage.getItem("token")).login}@gmail.com`,
      jobTitle:"UX&UI designer at ",
      companyName:"@abutechuz"
  })

  function handleSubmitUser(e){
    e.preventDefault()
    const data = {
      avatarImg:profileImg,
      name:e.target.name.value,
      email:e.target.email.value,
      jobTitle:e.target.info.value,
      companyName:e.target.company.value
    }
    setUserInfo(data)
    setIsUpdateModal(false)
  }

  return (
    <div className='border-r-[2px] border-[#C4C4C4] h-[100vh] overflow-y-auto'>
      <div className='py-[20px] pl-[31px] border-b-[2px] border-[#C4C4C4] flex items-center space-x-10'>
        <button onClick={() => navigate(-1)}>
          <Arrow/>
        </button>
        <div className='flex flex-col space-x-[2px]'>
          <strong className='font-bold text-[20px] leading-[26px]'>{user.login}</strong>
          <span className='text-[16px] leading-[21px] text-black opacity-60'>1,070 Tweets</span>
        </div>
      </div>
      <img src={BgPhoto} alt="Bg-photo"  width={"100%"} height={280}/>
      <div className='flex items-end -mt-[75px] justify-between px-[25px]'>
        <img className='rounded-full p-1 bg-white' src={profileImg} alt="Profile Img" width={150} height={150}/>
        <button onClick={() => setIsUpdateModal(true)} className='font-bold text-[18px] py-[10px] border-[1px] border-[#C4C4C4] rounded-[50px] w-[120px]'>Edit profile</button>
      </div>
      <div className='mt-[10px] px-[25px]'>
        <strong className='text-[24px]'>{userInfo.name}</strong>
        <p className='text-[16px] opacity-60'>{userInfo.email}</p>
        <p className='my-[15px] text-[18px]'>{userInfo.jobTitle}<span className='text-blue-500'>{userInfo.companyName}</span></p>
      </div>
      <ul className='px-[25px] mb-[15px] flex items-center space-x-[29px]'>
        <li className='flex items-center space-x-[5px]'>
          <LocationIcon/>
          <span className='text-[18px] opacity-60 leading-[23px]'>Mashag’daman</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <LinkIcon/>
          <span className='text-[18px] text-blue-500'>t.me/{userInfo.email}</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <BallIcon/>
          <span className='text-[18px] opacity-60 leading-[23px]'>Born 24, 2000</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <CalendarIcon/>
          <span className='text-[18px] opacity-60 leading-[23px]'>Joined May 2020</span>
        </li>
      </ul>
      <ul className='px-[25px] mb-[40px] flex items-center space-x-[30px]'>
        <li className='flex items-center space-x-[5px]'>
          <strong className='text-[18px] leading-[23px]'>67</strong>
          <span className='text-[18px] opacity-60 leading-[23px]'>Following</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <strong className='text-[18px] leading-[23px]'>47</strong>
          <span className='text-[18px]  opacity-60 leading-[23px]'>Followers</span>
        </li>
      </ul>
      <div className='flex items-center justify-between px-[25px] border-b-[2px] border-[#C4C4C4]'>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`text-[18px] pb-[19px] inline-block relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == "Tweets" ? "before:left-0 font-bold" : ""}`} to={"/profile"}>Tweets</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`text-[18px] pb-[19px] inline-block relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == "Tweets & replies" ? "before:left-0 font-bold" : ""}`} to={"tweets-replies"}>Tweets & replies</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`text-[18px] pb-[19px] inline-block relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == "Media" ? "before:left-0 font-bold" : ""}`} to={"media"}>Media</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`text-[18px] pb-[19px] inline-block relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == "Likes" ? "before:left-0 font-bold" : ""}`} to={"likes"}>Likes</Link>
      </div>
      <Outlet/>
      <Modal setShowModal={setIsUpdateModal} showModal={isUpdateModal}>
        <form onSubmit={handleSubmitUser} autoComplete='off'>
          <label htmlFor="file">
            <input onChange={(e) => setProfileImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' id="file" />
            <img className='mx-auto cursor-pointer' src={profileImg == User ? Empty : profileImg} alt="Empty" width={"50%"}/>
          </label>
          <input className='p-2 w-full mt-5 rounded-md outline-none border-[2px] border-[#C4C4C4]' type="text" name='name' required placeholder='Enter your name' />
          <input className='p-2 w-full mt-5 rounded-md outline-none border-[2px] border-[#C4C4C4]' type="email" name='email' required placeholder='Enter your email' />
          <input className='p-2 w-full mt-5 rounded-md outline-none border-[2px] border-[#C4C4C4]' type="text" name='info' required placeholder='Enter your job' />
          <input className='p-2 w-full mt-5 rounded-md outline-none border-[2px] border-[#C4C4C4]' type="text" name='company' required placeholder='Enter your company name' />
          <Button type={"submit"} extraStyle={'w-full mt-5 py-3 text-[22px] hover:rounded-md'}>Uptade user</Button>
        </form>
      </Modal>
    </div>
  )
}

export default Profile