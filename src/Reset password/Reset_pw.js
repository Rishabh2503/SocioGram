import React from 'react'
import {useNavigate} from "react-router-dom";
import './Reset_pw.css'


const Reset_pw = () => {

    const Navhandler = useNavigate() 

  return (
    <div id="box">
            <p id="head">Trouble logging in?</p>
            <p id='content'>Enter your email and we'll send you an otp to get back into your account.</p>
            <input placeholder='Enter new password' type="password"/>
            <input placeholder='Enter your confirmed password' type="password"/>
            <div id="sign_btn">Send OTP</div>
            <div id="can" onClick={() => Navhandler('/login')}>Cancel</div>



    </div>
  )
}

export default Reset_pw