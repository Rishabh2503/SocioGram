import React, { useState } from "react";
import "./LogIn.css";
import Heading from "../components/Heading";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";


const logoimg = require("../images/LogImage.svg").default;

function LogIn() {

  const Navhandler= useNavigate();
  const  [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

   function handleEmail(e) {
    if((/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(e.target.value) || e.target.value === "")
    { 
      setEmail(e.target.value);
      document.getElementById("loginInvEmail").style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("email").style.borderColor = "black";
      else
      document.getElementById("email").style.borderColor = "#66DF98";
    }
    else 
    {
      document.getElementById("loginInvEmail").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "#CF6679";
    }
  }

  function handlePass(e) {
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(e.target.value) || e.target.value==="")
    {
      setPass(e.target.value);
      document.getElementById("loginInvpass").style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("pass").style.borderColor = "black";
      else
      document.getElementById("pass").style.borderColor = "#66DF98";
    }
    else 
    {
      document.getElementById("loginInvPass").style.visibility = "visible";
      document.getElementById("pass").style.borderColor = "#CF6679";
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
   return (
    <>
      <Heading />
      <img src={logoimg} alt="LogIn-img" id="LogImg" />
      <div id="log-in">
      <p id="head">Socio Gram</p>
      <input
        onChange={handleEmail}
        type="email"
        placeholder="Enter Email"
        id="email"
        required
      />
      <p className='error' id="loginInvEmail">Invalid Email Address</p>
    <input
        onChange={handlePass}
        type="password"
        placeholder="Enter Your Password"
        id="pass"
        required
      />
      <p className='error' id="loginInvPass">Wrong Password</p>
      <div id="log_btn" onClick={handleSubmit}>Log In</div>
      <div id="line"></div>
      <div id="google">
        <FcGoogle /> Continue with Google{" "}
      </div>
      <div id="footer_msg">Don't have an account? <span onClick={() => Navhandler('/signup')}>Sign Up</span></div>
      
    </div>
    </>
  );
}

export default LogIn;
