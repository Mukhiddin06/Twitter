import React, { useState } from 'react'
import { DataIcon, GifIcon, ModeIcon, SaveIcon, SmileIcon, StatusIcon } from '../assets/images/Icons'
import User from '../assets/images/user1.svg'
import Button from '../components/Button'
import Designsta from '../assets/images/Designsta.svg'
import Cloutexhibition from '../assets/images/cloutexhibition.svg'
import CreativePhoto from '../assets/images/CreativePhoto.svg'
import Kebab from '../assets/images/kebab.png'
import PostItem from '../components/PostItem'
import Loading from '../assets/images/loading.png'
import Clear from '../assets/images/clear.svg'


function Home() {
  const  [inputValue, setInputValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [postImgUrl,  setPostImgUrl] = useState(null)
  const [posts, setPosts] = useState([
    {
      id:1,
      avatarIcon:Designsta,
      name: "Designsta",
      nick: "@inner · 25m",
      postDeck:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      postImg:null
    },
    {
      id:2,
      avatarIcon:Cloutexhibition,
      name: "cloutexhibition",
      nick: "@RajLahoti · 22m",
      postDeck:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: null,
      replyCount: "5",
      likeCount: "9",
      postImg:null
    },
    {
      id:3,
      avatarIcon:CreativePhoto,
      name: "CreativePhoto",
      nick: "@cloutexhibition · 1h",
      postDeck:"Обетда..... Кечиринглар",
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      postImg: Kebab
    }
  ])

  function handleSubmitPosts(e){
    e.preventDefault()
    const data = {
      id:posts.length ? posts[posts.length - 1].id + 1  : 1 ,
      avatarIcon: "https://picsum.photos/800/800",
      name: JSON.parse(localStorage.getItem("token")).login,
      nick: `@${JSON.parse(localStorage.getItem("token")).login} · 5m`,
      postDeck:inputValue,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      postImg:postImgUrl
    }
    setIsLoading(true)
    setTimeout(() => {
      setPosts([data, ...posts])
      setPostImgUrl(null)
      e.target.reset()
      setIsLoading(false)
    }, 1000);
  }
  

  return (
    <div className='border-r-[2px] border-r-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='flex items-center justify-between p-5 border-b-[2px] border-b-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-[31px]'>Home</h2>
        <button>
          <ModeIcon/>
        </button>
      </div>
      <form onSubmit={handleSubmitPosts} className='p-5 border-b-[2px] relative border-b-[#D8D8D8]' autoComplete='off'>
        <div className={`flex ${postImgUrl ? "items-start" : "items-center"} space-x-[15px]`}>
          <img className='rounded-full' src={User} alt="User" width={60} height={60} />
          <div>
            <input onChange={(e) => setInputValue(e.target.value)} required className='w-[80%] text-[22px] placeholder:text-[#828282] leading-[29px] p-1 outline-none font-semibold' type="text" placeholder='What’s happening' name='tweetData'/>
            {postImgUrl ? 
            <div className='bg-slate-300 rounded-lg p-2 mt-8 relative'>
              <img src={postImgUrl} alt="Choose Img" width={579} height={353} />
              <button onClick={() => setPostImgUrl(null)} type='button' className='absolute top-3 right-3 p-2 rounded-md bg-white'>
                <img src={Clear} alt="Clear" width={18} height={18}/>
              </button>
            </div> : ""}
          </div>
        </div>
        <div className='flex items-center space-x-5 pl-[77px] mt-8 mb-[26px]'>
          <label className='cursor-pointer'>
            <input onChange={(e) => setPostImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
            <SaveIcon/>
          </label>
          <GifIcon/>
          <StatusIcon/>
          <SmileIcon/>
          <DataIcon/>
        </div>
        <Button type={inputValue ?  "submit" : "button"} extraStyle={`w-[108px] absolute right-[15px] bottom-[5px] ${inputValue ? "" : "cursor-not-allowed opacity-40 hover:opacity-30"}`}>
          {isLoading ? <img className='mx-auto scale-[3]' src={Loading} alt='Loading' width={22}/> : "Tweet"}
        </Button>
      </form>
      <ul>{posts.map(item => <PostItem key={item.id} item={item}/>)}</ul>
    </div>
  )
}

export default Home