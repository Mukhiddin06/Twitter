import React, { useContext } from 'react'
import PostItem from '../../components/PostItem'
import { Pinned } from '../../assets/images/Icons'
import { Context } from '../../context/AuthContext'

function Tweet() {
    const {userPosts, setUserPosts} = useContext(Context)
 

    return (
        <>
            <div className='flex items-center space-x-[15px] mt-[15px] pl-[66px]'>
                <Pinned/>
                <p className='font-semibold text-[16px] leading-[21px] text-[#536471]'>Pinned Tweet</p>
            </div>
            <ul>{userPosts.map(item => <PostItem posts={userPosts} setPosts={setUserPosts} key={item.id} item={item} />)}</ul>
        </>
    )
}

export default Tweet