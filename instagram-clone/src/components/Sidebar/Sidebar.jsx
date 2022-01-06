import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./Sidebar.css"

import profile from "../../assets/Profiles/profile.JPG"
import profile1 from "../../assets/Profiles/profile1.JPG"
import profile2 from "../../assets/Profiles/profile2.JPG"
import profile3 from "../../assets/Profiles/profile3.JPG"
import profile4 from "../../assets/Profiles/profile4.JPG"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ProfileCard profile={profile} username="rohitgaware123" name="Rohit Gaware" btnText="Switch" width="50px" heigth="50px" />

            <div className="suggestionsArea">
                <span>Suggestions for you</span>
                <a href="#"><small>See all</small></a>
            </div>
            
            <div className="suggestion">
                <ProfileCard profile={profile1} username="vishvesh_1299" name="Followed by foodie" btnText="Follow" width="30px" height="30px"/>
                <ProfileCard profile={profile2} username="stfunainaaaa" name="Followed by _aka_ksha" btnText="Follow" width="30px" height="30px"/>
                <ProfileCard profile={profile3} username="_ankesh_gupta_" name="New to Instagram" btnText="Follow" width="30px" height="30px"/>
                <ProfileCard profile={profile4} username="duhhhhh.9" name="Suggested for you" btnText="Follow" width="30px" height="30px"/>
            </div>

            <div className="sidebarLinks">
                <span> About.</span> 
                <span> Help.</span> 
                <span> Press.</span> 
                <span> API.</span> 
                <span> Jobs.</span> 
                <span> Privacy.</span> 
                <span> Terms.</span> 
                <span> Locations.</span> 
                <span> Top.</span>  
                <span> Accounts.</span> 
                <span> Hashtags.</span> 
                <span> Language.</span> 
                <span> English (UK).</span> <br /><br />
                <span id="footerCreator">© 2021 INSTAGRAM FROM META</span>
            </div>

        </div>

    )
}
