import React from "react";
import "./LogIn.css";
import Heading from "../components/Heading";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";


const logoimg = require("../images/LogImage.svg").default;

function LogIn() {

  const Navhandler= useNavigate();

  return (
    <>
      <Heading />
      <img src={logoimg} alt="LogIn-img" id="LogImg" />
      <div id="log-in">
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
      <div id="log_btn">Log In</div>
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
