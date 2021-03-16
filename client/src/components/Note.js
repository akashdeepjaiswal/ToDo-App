import React from "react";
import { Link } from 'react-router-dom';
import "./Note.css"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" >
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      
      <a
        href="#"
        onClick={() => {
          
            props.onDelete(props.note._id);
          
        }}
      >
        Delete
      </a>
    </div>
  );
}

export default Note;
