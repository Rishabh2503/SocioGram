import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reset_pw.css";

const Reset_pw = () => {
  const Navhandler = useNavigate(); 
  const [pass1,setPass1] = useState('');
  const [pass2,setPass2] = useState('');

  function handlePass1(e) {
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(e.target.value) || e.target.value==="")
    {
      setPass1(e.target.value);
      document.getElementById("InvPass").style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("pass1").style.borderColor = "black";
      else
      document.getElementById("pass1").style.borderColor = "#66DF98";
    }
    else 
    {
      document.getElementById("InvPass").style.visibility = "visible";
      document.getElementById("pass1").style.borderColor = "#CF6679";
    }
  }

  function handlePass2(e) {
    if(pass1===(e.target.value) || e.target.value==="")
    {
      setPass2(e.target.value);
      document.getElementById("InvPass2").style.visibility = "hidden";
      if(e.target.value==="")
      document.getElementById("pass2").style.borderColor = "black";
      else
      document.getElementById("pass2").style.borderColor = "#66DF98";
    }
    else 
    {
      document.getElementById("InvPass2").style.visibility = "visible";
      document.getElementById("pass2").style.borderColor = "#CF6679";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  

  return (
    <div id="box">
      <div>
        <p id="head">Trouble logging in?</p>
        <p id="content">
          Enter your email and we'll send you an otp to get back into your
          account.
        </p>
      </div>
      <div>
        <input placeholder="Enter new password" 
        type="password"  
        onChange={handlePass1}
        id="pass1"
        required/>
        <p className="error" id="InvPass">Password must be more than 8 characters.</p>
      </div>
      <div>
        <input placeholder="Enter your confirmed password" type="password" onChange={handlePass2}
        id="pass2"
        required />
        <p className="error" id="InvPass2">Both passwords should match.</p>
      </div>
      <div id="sign_btn" onClick={handleSubmit}>Send OTP</div>
      <div id="can" onClick={() => Navhandler("/login")}>
        Cancel
      </div>
    </div>
  );
};

export default Reset_pw;
