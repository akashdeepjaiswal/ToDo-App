import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(props) {

  return (
    <div id="nav" className="container" >
     
        <ul className="nav__items nav__buttons">
         <button 
         onClick= { ()=> props.add_Note(true) }
         className="add_button" 
         >
         New Note
        
         </button>
        </ul>
        <ul className="nav__items">
          <li>
            <input
              key="random1"
              placeholder="search notes"    
            />
          </li>
        </ul>     
    </div>
  );
}

export default Navbar;

