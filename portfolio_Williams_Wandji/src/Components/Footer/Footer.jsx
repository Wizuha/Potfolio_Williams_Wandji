import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="line_footer"></div>
      <div className="footer_content">
        <div className="footer_left">
          <div className="footer_left_top">
            <img src="./Union.svg" />
            <p>WANDJI Williams</p>
          </div>
          <div className="footer_left_bottom">
            <p>Développeur Web Front-end</p>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_right_top">
            <p>Media</p>
          </div>
          <div className="footer_right_bottom">
            <a href="https://github.com/Wizuha"><img src="./Github.svg" alt="logo github" /></a>
            <a href="https://discord.com/channels/@me"><img src="./Vector_discord.png" alt="logo discord"/></a>
          </div>
        </div>
      </div>
      <div className="end">
        <p>© Copyright 2023. Made By Williams</p>
      </div>
    </div>
  );
}
