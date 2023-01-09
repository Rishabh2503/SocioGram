import React from "react";
import "./LogIn.css";
import Heading from "../components/Heading";
import { FcGoogle } from "react-icons/fc";


const logoimg = require("../images/LogImage.svg").default;

function LogIn() {
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
      <button>Log In</button>
      <div id="line"></div>
      <div id="google">
        <FcGoogle /> Continue with Google{" "}
      </div>
      <span>
        Don't have an account?<a href="#">Sign In</a>
      </span>
    </div>
    </>
  );
}

export default LogIn;
