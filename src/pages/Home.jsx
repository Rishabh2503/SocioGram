import React, { Component } from 'react'
import UserProfile from '../components/Post Card/UserProfile'
// import Sidebar from '../components/SideBar'
import StatusBar from '../components/Status/StatusBar'

export default class Home extends Component {
  render() {
    return (<>
   
     <div>
      <StatusBar />
     </div>
     <div>
      
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      
      </div> 
     
     </>
    )
  }
}
