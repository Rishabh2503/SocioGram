import React from 'react'
import {useNavigate} from "react-router-dom"
import './otp.css'

const Otp = () => {
    const Navhandler= useNavigate();

  return (
    <div id="otpblock">
     <p id="check">Check for OTP</p>
            <p id='content'>Enter your email and we'll send you an otp to get back into your account.</p> 
            <div id="otp_box">
            <input className="otp" />
            <input className="otp" />
            <input className="otp" />
            <input className="otp" />
            </div>
            <div id="footer_msg">Didn't get OTP? <span>Resend OTP</span></div>
            <div id="sign_btn">Verify</div>
    </div>
  )
}

export default Otp;