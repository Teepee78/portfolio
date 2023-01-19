import "./header.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="header">
      <div className="logo-name text-border">
        <p id="logo-name">toluwalase-phillips</p>
      </div>

      <div
        className={`hamburger-icon ${navbarOpen ? " showMenu" : ""}`}
        onClick={handleToggle}
      >
        {/* {navbarOpen ? (
          <MdClose className='open-icon'/>
        ) : (<FiMenu className='close-icon'/>)} */}
        <FiMenu className="close-icon" />
      </div>

      <div className={`navbar ${navbarOpen ? " showMenu" : ""}`}>
        <div className="midbar">
          <div className="text-border">
            <p id="hello">_hello</p>
          </div>

          <div className="text-border">
            <a href="#aboutMe" onClick={handleToggle}>
              <p>_about-me</p>
            </a>
          </div>

          <div className="text-border">
            <a href="#projects" onClick={handleToggle}>
              <p>_projects</p>
            </a>
          </div>
        </div>

        {/* <div className='place-holder text-border'></div> */}

        <div className="contact-me">
          <a href="mailto:eniolatoluwalase78@gmail.com" onClick={handleToggle}>
            <p>_contact-me</p>
          </a>
        </div>
      </div>

      {/* <div className='contact-two'><p>_contact-me</p></div> */}
    </div>
  );
}

export default Header;
