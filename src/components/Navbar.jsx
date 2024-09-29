import React, { useState } from 'react'
import { BookmarksIcon, BookmarksIconActive, Dots, ExploreIcon, ExploreIconActive, HomeIcon, HomeIconActive, ListsIcon, ListsIconActive, MassagesIcon, MassagesIconActive, MoreIcon, NotificationsIcon, NotificationsIconActive, ProfileFillIcon, ProfileFillIconActive } from '../assets/images/Icons'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import Button from './Button'
import User from '../assets/images/user1.svg'
import Modal from './Modal'

function Navbar() {
    const [showModal, setShowModal] = useState(false)
    const user = JSON.parse(localStorage.getItem("token"))
    const [path, setPath] = useState(JSON.parse(localStorage.getItem("path")) || "/")

    localStorage.setItem("path", JSON.stringify(path))

    const navbarList = [
        {
            id: 1,
            icon: path == "/" ? <HomeIconActive /> : <HomeIcon />,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            icon: path == "/explore" ? <ExploreIconActive /> : <ExploreIcon />,
            title: "Explore",
            path: "/explore"
        },
        {
            id: 3,
            icon: path == "/notifications" ? <NotificationsIconActive /> : <NotificationsIcon />,
            title: "Notifications",
            path: "/notifications"
        },
        {
            id: 4,
            icon: path == "/massages" ? <MassagesIconActive /> : <MassagesIcon />,
            title: "Massages",
            path: "/massages"
        },
        {
            id: 5,
            icon: path == "/bookmarks" ? <BookmarksIconActive /> : <BookmarksIcon />,
            title: "Bookmarks",
            path: "/bookmarks"
        },
        {
            id: 6,
            icon: path == "/lists" ? <ListsIconActive /> : <ListsIcon />,
            title: "Lists",
            path: "/lists"
        },
        {
            id: 7,
            icon: path == "/profile" ? <ProfileFillIconActive /> : <ProfileFillIcon />,
            title: "Profile",
            path: "/profile"
        },
        {
            id: 8,
            icon: path == "/more" ? <Dots /> : <MoreIcon />,
            title: "More",
            path: "/more"
        },
    ]

    function handleLogOut() {
        setShowModal(true)
    }
    function handleNavlinkClick(id) {
        const pathId = navbarList.find(item => item.id == id)
        setPath(pathId.path)
    }
    function handleLogOutBtn(){
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="w-[22%] h-[100vh] relative overflow-y-auto pt-[31px] pl-[50px] pr-[16px] border-r-[2px] border-r-[#D8D8D8]">
            <Link to={"/"}>
                <img src={Logo} alt="Logo" width={40} height={33} />
            </Link>
            <div className="mt-[49px] space-y-[30px]">
                {navbarList.map(item => (
                    <NavLink onClick={() => handleNavlinkClick(item.id)} className="flex font-semibold text-[18px] leading-[23px] items-center space-x-5" key={item.id} to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </div>
            <Button type={"button"} extraStyle={"py-[15px] w-[230px] mt-[30px]"} >Tweet</Button>
            <div className='flex items-center space-x-[10px] absolute bottom-[30px]'>
                <img className='rounded-full' src={User} alt="user" width={50} height={50} />
                <div className='flex items-center space-x-[42px] w-[80%]'>
                    <div>
                        <strong className='font-semibold text-[16px]'>{user.login}</strong>
                        <p className='text-[16px] opacity-60'>@{user.login}_Email</p>
                    </div>
                    <button onClick={handleLogOut}>
                        <Dots />
                    </button>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <p className="text-center mt-5 font-semibold text-gray-700">Are you sure you want to Log out?</p>
                <div className='flex justify-evenly space-x-4 mt-10'>
                    <button onClick={() => setShowModal(false)} className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300'>Cancel</button>
                    <button onClick={handleLogOutBtn} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300'>Log Out</button>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar