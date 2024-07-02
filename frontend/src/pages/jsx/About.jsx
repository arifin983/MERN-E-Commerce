import React from "react";
import "../css/About.css";
import { Button, Typography, Avatar } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/arifUddinGitHub";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/drncu37m9/image/upload/v1717338950/avatars/dapbmxoprj9r36ggnbcp.webp"
              alt="Founder"
            />
            <Typography>Arif UdDin</Typography>
            <Button onClick={visitGitHub} color="primary">
              Visit GitHub
            </Button>
            <span>
              This is a sample E-Commerce website made by @arif.UdDin. as a  MERN full Stack web developer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/arifUddinGitHub"
              target="blank"
            >
              <GitHub className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/muhammad-arif-ud-din-a99273230/" target="blank">
              < LinkedIn className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;