import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Input } from 'reactstrap';
function Nav() {
  const [show, setShow] = useState(true)
  const controlNavbar = () =>{
    if (window.scrollY > 500){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', 
    controlNavbar)
  
    return () => {
      window.removeEventListener('scroll', 
      controlNavbar)
    };
  }, []);
  

  return (
   
    <nav className={`nav__bar ${show && 'nav_black'}`}>
      {  (show) &&
      
      <div className={'nav__contents'}>
        
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
        <h3 className="nav__login">Login</h3>
        
        
        
      </div>
     
}
    </nav>
    
  );
}

export default Nav;
