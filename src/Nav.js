import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Input } from 'reactstrap';
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
        
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Tubi_logo.svg/1200px-Tubi_logo.svg.png"
           alt="Tubi"
        />
        <h3  className="nav__browse" style={{color:'white', paddingLeft:'50px'}}>Browse</h3>
        <div className="nav__search">
        <Input className="inner__search" placeholder="🔍 Find movies, TV shows and more"/>
        </div>
        <button className="nav__register">Register</button>
        <h2 className="nav__login">SignIn</h2>

        
      </div>
    </nav>
  );
}

export default Nav;
