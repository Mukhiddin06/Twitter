import { createContext, useState } from "react";
import User from '../assets/images/user1.svg'
import User2 from '../assets/images/User1.png'



export const Context = createContext()

export const AuthContext = ({children}) => {
    const [ token, setToken ] = useState( JSON.parse(localStorage.getItem("token")) || null) 
    const [path, setPath] = useState(JSON.parse(localStorage.getItem("path")) || "/")
    const [register, setRegister ] = useState(null)
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

    localStorage.setItem("token", JSON.stringify(token))

    return (
        <Context.Provider value={{token, setToken, register, setRegister ,path, setPath, userPosts, setUserPosts}}>{children}</Context.Provider>
    )
}