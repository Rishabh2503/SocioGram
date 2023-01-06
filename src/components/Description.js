import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";

function Description() {
  
   return (
    <div id="log-in" >
      <p>Socio Gram</p>
      <input
          type="text"
          lable="Email Address"
          placeholder="Enter Email"
          message="Enter Valid Email Address"
          autoComplete="off"
         
        />
        <input
          type="password"
          lable="Password"
          placeholder="Enter Your Password"
          message="Must be at least 8 characters."
          autoComplete="off"
      
          />
          <button>Log In</button>
          <div id="line"></div>
          <div id="google">
          <FcGoogle /> Continue with Google </div>    
          <span>Don't have an account?<a href="#">Sign In</a></span>  
    </div>
  )
}

export default Description