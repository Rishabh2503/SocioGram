import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import "./Forgot.css";

const Forgot = () => {

    const Navhandler= useNavigate();
    const [email,setEmail] = useState('');

    function handleEmail(e) {
      if((/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(e.target.value) || e.target.value === "")
      { 
        setEmail(e.target.value);
        document.getElementById("signupInvEmail").style.visibility = "hidden";
        if(e.target.value==="")
        document.getElementById("email").style.borderColor = "black";
        else
        document.getElementById("email").style.borderColor = "#66DF98";
      }
      else 
      {
        document.getElementById("signupInvEmail").style.visibility = "visible";
        document.getElementById("email").style.borderColor = "#CF6679";
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <div id="box">
            <p id="head">Trouble logging in?</p>
            <p id='content'>Enter your email and we'll send you an otp to get back into your account.</p>
            <div id="place"><input placeholder='Enter your email address'  onChange={handleEmail} id="email"  type="email" required/>
            <p className='error' id="signupInvEmail">Invalid Email Address</p></div>
            <div id="sign_btn" onClick={handleSubmit} >Send OTP</div>
            <div id="footer_msg">Create a new account.<span onClick={() => Navhandler('/signup')}>Sign Up</span></div>
        
    </div>
  )
}

export default Forgot