import React, { useState } from 'react'
import Heading from '../components/Heading'
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";
import signimg from "../images/SignImage.svg";

const SignUp = () => {

    const Navhandler= useNavigate();
    const [email,setEmail] = useState('');
    const [uname,setUname] = useState('');

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

    function handleUname(e) {
      if((/^[a-zA-Z][a-zA-Z ]*$/).test(e.target.value) || e.target.value === "")
      { 
        setEmail(e.target.value);
        document.getElementById("signupInvName").style.visibility = "hidden";
        if(e.target.value==="")
        document.getElementById("uname").style.borderColor = "black";
        else
        document.getElementById("uname").style.borderColor = "#66DF98";
      }
      else 
      {
        document.getElementById("signupInvName").style.visibility = "visible";
        document.getElementById("uname").style.borderColor = "#CF6679";
      }
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
  return (
    <div>
        <Heading />
        <img src={signimg} alt="LogIn-img" id="SignImg" />
        <div id="sign-up">
          <p id="headi">Socio Gram</p>
          <div>
            <input placeholder='Enter your email address'  onChange={handleEmail} id="email"  type="email" required/>
            <p className="error" id="signupInvEmail">Enter valid Email Address</p>
          </div>
          <div>
            <input placeholder='Enter your Full Name'  onChange={handleUname} id="uname"  type="uname" required/>
            <p className="error" id="signupInvName">Enter valid Name</p>
          </div>
          <div id="sign_btn" onClick={handleSubmit}>Sign Up</div>
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