import React from "react";
import "./style.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className = 'nav'>
          <img className = 'nav-logo' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
          <ul className = 'nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
             
      </header>
    </div>
  );
}