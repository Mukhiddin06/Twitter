import React from 'react'
import { CommentIcon, Dots, LevelIcon, LikeActive, LikeIcon, ReplyIcon, ShareIcon } from '../assets/images/Icons'

function PostItem({ item, posts, setPosts }) {

    function handleClick(value) {
        if (value == "comment") {
            item.isCommented = !item.isCommented
            item.commentCount = item.isCommented ? ++item.commentCount : --item.commentCount
            setPosts([...posts])
        }
        else if (value == "reply") {
            item.isReplied = !item.isReplied
            item.replyCount = item.isReplied ? ++item.replyCount : --item.replyCount
            setPosts([...posts])
        }
        else if (value == "like") {
            item.isLiked =!item.isLiked
            item.likeCount = item.isLiked ? ++item.likeCount : --item.likeCount
            setPosts([...posts])
        }
    }
    return (
        <li className='p-5  border-b-[2px] border-b-[#D8D8D8] relative'>
            <div className='flex space-x-[15px]'>
                <img className='rounded-full h-[60px]' src={item.avatarIcon} alt="Avatar icon" width={60} height={60} />
                <div>
                    <strong className='font-bold mr-[5px] text-[20px] leading-[26px]'>{item.name}</strong>
                    <span className='text-[18px] leading-[23px] text-black opacity-60'>{item.nick}</span>
                    <p className='mt-[5px] text-[18px] leading-[23px]'>{item.postDeck}</p>
                </div>
            </div>
            <button className='absolute top-5 right-5'><Dots /></button>
            {item.postImg ? <img className='rounded-[20px] mt-[15px] pl-[75px]' src={item.postImg} alt='Post img' width={679} height={453} /> : ""}
            <div className='mt-[22px] flex items-center space-x-[100px] pl-[75px]'>
                <button onClick={() => handleClick("comment")} className={`flex items-center space-x-[10px] ${item.isCommented ? "text-blue-500" : ""}`}>
                    <CommentIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button onClick={() => handleClick("reply")} className={`flex items-center space-x-[10px] ${item.isReplied ? "text-green-500" : ""}`}>
                    <ReplyIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.replyCount ? item.replyCount : ""}</span>
                </button>
                <button onClick={() => handleClick("like")} className={`flex items-center space-x-[10px] ${item.isLiked ? "text-red-500" : ""}`}>
                    {item.isLiked ? <LikeActive/> : <LikeIcon />}
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.likeCount ? item.likeCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <ShareIcon />
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <LevelIcon />
                </button>
            </div>
        </li>
    )
}

export default PostItem