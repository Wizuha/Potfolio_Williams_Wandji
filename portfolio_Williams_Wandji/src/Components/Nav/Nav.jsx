import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div id="content">
      <div className="content">
        <div className="left">
            <img src="Union.svg" />
            <p> WANDJI Williams</p>
        </div>
        <div className="right">
          <a href=""><p>#home</p></a>
          <a href=""><p>#works</p></a>
          <a href=""><p>#about-me</p></a>
          <a href=""><p>#contacts</p></a>
        </div>
      </div>
    </div>
  );
}
