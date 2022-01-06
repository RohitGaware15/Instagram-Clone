import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search.svg";
import {AiFillHome} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {ImCompass2} from "react-icons/im";
import {AiOutlineHeart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";

export default function Header() {
    return (

    <div className="header">
        <div className="header__logo">    
            <img src={logo} alt="logo" width="103px" height="29px"/>
        </div>

        <div className="header__search">
            <img src={searchicon} alt="search icon" width="15px" />
            <input type="search" placeholder="Search" />
        </div>

        <div className="header__icons">
            <AiFillHome className="header_icon" />
            <RiMessengerLine className="header_icon" />
            <ImCompass2 className="header_icon" />
            <AiOutlineHeart className="header_icon" />
            <FaUserCircle className="header_icon"/>
        </div>



    </div>
    )
}
