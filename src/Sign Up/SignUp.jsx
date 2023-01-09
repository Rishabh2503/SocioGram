import React from 'react'
import Heading from '../components/Heading'
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";
import signimg from "../images/SignImage.svg";

const SignUp = () => {

    const Navhandler= useNavigate();

  return (
    <div>
        <Heading />
        <img src={signimg} alt="LogIn-img" id="SignImg" />
        <div id="sign-up">
          <p id="head">Socio Gram</p>
          <div>
            <input placeholder='Enter your email address'/>
            <p className="error" >Enter valid Email Address</p>
          </div>
          <div>
            <input placeholder='Enter your Full Name'/>
            <p className="error" >Enter valid Name</p>
          </div>
          <div>
            <input placeholder='Enter your Username'/>
            <p className="error" >Enter valid Username</p>
          </div>
          <div>
            <input placeholder='Enter your Password'/>
            <p className="error" >Password should be more than 8 characters.</p>
          </div>
          <div id="sign_btn">Sign Up</div>
          <div id="line"></div>
          <div id="google">
        <FcGoogle /> Continue with Google{" "}
      </div>
      <div id="footer_msg">Already have an account?<span onClick={() => Navhandler('/login')}>Log In</span></div>
        </div>
    </div>
  )
}

export default SignUp