import React, { Component } from 'react'
import Story from './Story'


export default class StatusBar extends Component {
  render() {
    return (
        <div className="flex space-x-12  max-w-[100%] bg-white  border-gray-200 p-4 scroll-smooth scrollbar-hide " >
         <Story />
        </div>
    )
  }
}


{/*  statusbar ---

<div className=" flex space-x-2 overflow-x-scroll max-w-xl bg-white  border-gray-200 p-4 scroll-smooth scrollbar-hide" >
{stories.map(story => <Story key={story.email} img={story.avatar} username={story.first_name+story.last_name} />)}
</div> 
story.js-----
const Story = ({ img, username }) => {
return (
<div>
<img className="h-14 w-14 rounded-full " src={img} alt="" />
<p className="text-xs w-16 truncate text-center">{username}</p>
</div>
)
}
export default Story



*/}
