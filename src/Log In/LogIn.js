import React from "react";
import "./LogIn.css";
import Heading from "../Components/Heading";
import Discription from "../Components/Description";

const logoimg = require("../Images/LogImage.svg").default;

function LogIn() {
  return (
    <>
      <Heading />
      <img src={logoimg} alt="LogIn-img" id="LogImg" />
      <Discription />
    </>
  );
}

export default LogIn;
