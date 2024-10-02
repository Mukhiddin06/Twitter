import React, { useState } from 'react'
import PostItem from '../../components/PostItem'
import User from '../../assets/images/user1.svg'
import User2 from '../../assets/images/User1.png'
import { Pinned } from '../../assets/images/Icons'

function Tweet() {
    const user = JSON.parse(localStorage.getItem("token"))
    const [userPosts, setUserPosts] = useState([
        {
            id: 1,
            avatarIcon: User,
            name: user.login,
            nick: `@${user.login} Apr 1`,
            postDeck: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
            commentCount: "10",
            replyCount: "1",
            likeCount: "8",
            postImg: null,
            isCommented: false,
            isReplied: false,
            isLiked: false
        },
        {
            id: 2,
            avatarIcon: User,
            name: user.login,
            nick: `@${user.login} Apr 1`,
            postDeck: "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas.",
            commentCount: null,
            replyCount: "5",
            likeCount: "9",
            postImg: null,
            isCommented: false,
            isReplied: false,
            isLiked: false
        },
        {
            id: 3,
            avatarIcon: User,
            name: user.login,
            nick: `@${user.login} Apr 1`,
            postDeck: "A bo'pti maskamasman",
            commentCount: "10",
            replyCount: "1",
            likeCount: "8",
            postImg: User2,
            isCommented: false,
            isReplied: false,
            isLiked: false
        }
    ])

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