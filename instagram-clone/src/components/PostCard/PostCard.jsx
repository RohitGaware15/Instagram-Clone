import React from 'react'
import "./PostCard.css"

import {BiDotsHorizontalRounded} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {BsChat} from "react-icons/bs"
import {FiSend} from "react-icons/fi"
import {BsBookmark} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa";
import {BsEmojiSmile} from "react-icons/bs";

export default function PostCard({likes , profileImg , postImg , username}) {
    return (
        <div className="postCard">

            <div className="postCard__header">

                <div>
                    {/* <FaUserCircle className="postIcon" /> */}
                    <img src={profileImg} alt="profile" width="20px" height="20px"/>

                    <a href="https://bit.ly/3kY1V8u" target="_blank" className="a"><b>{username}</b></a>                    
                </div>
                
                    <span>
                        <BiDotsHorizontalRounded />                        
                    </span>  
            </div>

             <img src={postImg} width="100%" alt="post image" />            

             <div className="postAction">
                <div>
                    <AiOutlineHeart className="postIcon" />
                    <BsChat className="postIcon" /> 
                    <FiSend className="postIcon" />
                </div>

                <BsBookmark className="postIcon" />                
            </div>

            <div className="postcard__Content">
                <span><b>{likes} Likes</b></span>
                <span><b>@CaptianMarvel</b></span>
                <span style={{fontWeight:"lighter" ,color:"gray",}}>View all 100 comments</span>
                <span><b>Mohit123</b> 🦾 </span>
                <span className="lighter">1 DAY AGO</span>
            </div>
            
            <div className= "postCard_commentarea">
                <BsEmojiSmile  className="posticon"/>
                <input type="text" placeholder="Add a comment" />
                <a href=" " >Post </a>
            </div>


        </div>



    )
}

