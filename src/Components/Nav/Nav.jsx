import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [view,setview] = useState(false)
  const onclickNavbar=()=>{
    setview(!view)
  }
  return (
  <>  <div id="content-nav">
      <div className="content">
        <div className="left">
            <img src="Union.svg" />
            <p> WANDJI Williams</p>
        </div>
        <div className="right">
          <a href=""><p><span>#</span>home</p></a>
          <a href="#project"><p><span>#</span>project</p></a>
          <a href="#skills"><p><span>#</span>skills</p></a>
          <a href="#about-me"><p><span>#</span>about-me</p></a>
          <a href="#contact-me"><p><span>#</span>contacts</p></a>
        </div>
        <div className="navbar-mobile" onClick={onclickNavbar}>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
    
      </div>
      </div>
      {view? 
         <div className="navbar-contains-mobile" onClick={onclickNavbar}>
          <div className="left">
            <img src="Union.svg" />
            <p> WANDJI Williams</p>
          </div>
          <a href=""><p><span>#</span>home</p></a>
          <a href="#project"><p><span>#</span>project</p></a>
          <a href="#skills"><p><span>#</span>skills</p></a>
          <a href="#about-me"><p><span>#</span>about-me</p></a>
          <a href="#contact-me"><p><span>#</span>contacts</p></a>
        </div>:<></>}
    </>
  );
}
