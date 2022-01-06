import React from 'react'
import StoryCard from '../../StoryCard/StoryCard'
import story1 from '../../../assets/stories/story1.jpg'
import story2 from '../../../assets/stories/story2.jpg'
import story3 from '../../../assets/stories/story3.jpg'
import story4 from '../../../assets/stories/story4.jpg'
import story5 from '../../../assets/stories/story5.jpg'



import data from "../../../data"
import "./MainArea.css"
import PostCard from '../../PostCard/PostCard'

export default function MainArea({img}) {
    return (
        <div className="mainArea">
            <div className="storyArea">
                {/* {Story Card} */}
                <StoryCard img={story1} username="name1"/>
                <StoryCard img={story2} username="name2"/>
                <StoryCard img={story3} username="name3"/>
                <StoryCard img={story4} username="name4"/>
                <StoryCard img={story5} username="name5"/>
                <StoryCard img={story4} username="name6"/>
                <StoryCard img={story5} username="name7"/>
                <StoryCard img={story1} username="name8"/>
            </div>

            <div className="postsArea">
                {/* <PostCard postImg={post1} likes="1056" />
                <PostCard postImg={post2} likes="156"  /> */}
{
                data.map((p , index) => {
                    return(
                        <PostCard key={index} username={p.username} profileImg={p.dp} postImg={p.postImg} likes={p.likes} />
                    )
                })
}
   </div>
        </div>
    )
}
