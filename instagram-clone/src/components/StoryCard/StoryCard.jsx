import React from 'react'
import "./StoryCard.css"

export default function StoryCard({img , username}) {
    return (
        <div className="storyCard">
            <img src={img} width="70px" height="70px" alt="story image" className="storyImg"/>
           
            <centre>{username}</centre>
        </div>
    )
}
