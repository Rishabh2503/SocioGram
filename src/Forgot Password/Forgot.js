import React from 'react'
import {useNavigate} from "react-router-dom";
import "./Forgot.css";

const Forgot = () => {

    const Navhandler= useNavigate();

  return (
    <div id="box">
            <p id="head">Trouble logging in?</p>
            <p id='content'>Enter your email and we'll send you an otp to get back into your account.</p>
            <div id="place"><input placeholder='Enter your email address'/></div>
            <div id="sign_btn">Send OTP</div>
            <div id="footer_msg">Create a new account.<span onClick={() => Navhandler('/signup')}>Sign Up</span></div>
        
    </div>
  )
}

export default Forgot