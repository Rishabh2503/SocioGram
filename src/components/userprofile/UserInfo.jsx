import React, { Component } from 'react'
import Profilepic from "..//../images/download (11).jfif"
import "./user.css"
import avatar from "..//..//images/android-chrome-192x192.png"

export default class UserInfo extends Component {
  render() {
    return (
      <>
      <div className='cardP1'>
      <div className='discriptionP1'>
        <img src={Profilepic} alt="" className='Pic1'/>
        <img className="Pic2" src={avatar} alt="" />
      </div>
      <div className='DetailP'>
     <h1>Rishabh Gupta</h1>
     <h3> Follower-1K</h3>
     <h3> Following - 1k</h3>
     <h4> Id NAame</h4>
      </div>
      </div>
      </>
    )
  }
}
