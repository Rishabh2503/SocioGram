import React from "react";
import { useNavigate } from "react-router-dom";
import "./Reset_pw.css";

const Reset_pw = () => {
  const Navhandler = useNavigate();

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
        <input placeholder="Enter new password" type="password" />
        <p className="error">Password must be more than 8 characters.</p>
      </div>
      <div>
        <input placeholder="Enter your confirmed password" type="password" />
        <p className="error">Both passwords should match.</p>
      </div>
      <div id="sign_btn">Send OTP</div>
      <div id="can" onClick={() => Navhandler("/login")}>
        Cancel
      </div>
    </div>
  );
};

export default Reset_pw;
