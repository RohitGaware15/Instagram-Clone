import React from 'react'
import "./ProfileCard.css"

export default function ProfileCard({profile , username , name , btnText , width , height}) {
    return (
        <div className="profileCard">
            <img src={profile} alt="profile pic" width={width} height={height}/>

            <div className="profileCard__Names" >
                <span className="profileCard__Username"><small>{username}</small></span>
                <span className="profileCard__Name" >{name}</span>
            </div>
            
            <a href="#"><small>{btnText}</small></a>
        </div>
    )
}
