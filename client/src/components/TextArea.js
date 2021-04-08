import React, { useState } from "react";
import "./TextArea.css";
import axios from "axios";
// import Note from "./Note";

function TextArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    // time: "12:00 pm"
  });

  function handleChange(event) {
    // console.log("right.js",event.timeStamp);
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    //check console log note here and in submit
  }

  function submitNote(event) {
    event.preventDefault();
    // POST request using axios
    axios.post("/notes/add", note)
    .then((res) => {
      // console.log("added data to moo=ngo00oooo ",res.data);
      {
        props.onAdd(note);
      }
    })
    .catch((error) => {
      console.log("error found: ",error);
    });

    setNote({
      title: "",
      content: "",
    });
  }


  if (!props.add_Note) {
    // console.log("Object.keys(props.display_note)",Object.keys(props.display_note));
    // console.log("props.display_note",props.display_note);
    if (Object.keys(props.display_note).length > 0) {
      return (
        <div className="textarea_container">
          <div className="textarea_note_display"> 
            <label for="title">Title</label>
            <h1>{props.display_note.title}</h1>
            <label for="title">Content</label>
            <p>{props.display_note.content}</p>
          </div>
          {/* <button 
           // onClick= { ()=> props.show_List() }
          className="edit_button" 
          >
          Edit
        </button> */}
        </div>
      );
    } else {
      return (
        
        <div className="conatiner content__textArea">
          {/* {console.log(props.display_note.length)} */}
          <center>
          <form>
            <div class="row">
              <div class="col-25">
                <label for="title">Title</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="title"
                  placeholder="Your Title.."
                  onChange={handleChange}
                  name="title"
                  value={note.title}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="content">Content</label>
              </div>
              <div class="col-75">
                <textarea
                  id="content"
                  name="content"
                  onChange={handleChange}
                  value={note.content}
                  placeholder="Take a note..."
                  rows="6"
                  // style="height:200px"
                />
              </div>
            </div>
            <div class="row">
              <button onClick={submitNote }> Add</button>
            </div>
          </form>
          </center>
        </div>
        
      );
    }
  } 
  else {
    return (
     
      <div className="conatiner content__textArea">
        {/* {console.log(props.display_note.length)} */}
        <center>
        <form>
          <div class="row">
            <div class="col-25">
              <label for="title">Title</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="title"
                placeholder="Your Title.."
                onChange={handleChange}
                name="title"
                value={note.title}
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="content">Content</label>
            </div>
            <div class="col-75">
              <textarea
                id="content"
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="6"
                // style="height:200px"
              />
            </div>
          </div>
          <div class="row">
            <button onClick={submitNote}> Add</button>
          </div>
        </form>
        </center>
      </div>
      
    );
  }
}

export default TextArea;
