import React from "react";
import "./LogIn.css";
import Heading from "../components/Heading";
import Discription from "../components/Description";

const logoimg = require("../images/LogImage.svg").default;

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
