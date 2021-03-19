import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(props) {

  return (
    <div id="nav" className="container" >
     <h2 className="heading"><i class="far fa-clipboard"></i> Keep your Daily Notes</h2>
        <ul className="nav__items">
         <button 
         onClick= { ()=> props.add_Note(true) }
         className="add_button" 
         >
         New Note
        
         </button>
        </ul>  
    </div>
  );
}

export default Navbar;






//please ignore
{/* <ul className="nav__items">
<li>
  <input
    key="random1"
    placeholder="search notes"    
  />
</li>
</ul>    */}
