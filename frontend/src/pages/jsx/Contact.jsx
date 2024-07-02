import React from "react";
import "../css/Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:arifuddin.danin@gmail.com">
        <Button>Contact: arifuddin.danin@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;