import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";
import TextArea from "./components/TextArea";
// import myList from "./components/list";

function App() {
  const [notes, setNotes] = useState([]);
  const [showNote, setShowNote] = useState({});
  const [blankNote, setblankNote] = useState(false);
  console.log("initial", blankNote);

  function addNote(newNote) {
    // console.log(note)
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    axios.delete("http://localhost:5000/notes/" + id).then((response) => {
      console.log(response.data);
    });

    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note._id !== id;
      });
    });
  }

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const fetchdata = async () => {
      await axios
        .get("http://localhost:5000/notes")
        .then((res) => {
          console.log(res.data);
          setNotes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchdata();
  }, []);

  function show_Note(item) {
    setShowNote(item);
    add_blankNote(false);
  }

  //only setting to true so that when add button is clicked
  function add_blankNote(status) {
    console.log("add_new_note working before", blankNote);
    setblankNote(status);
  }

  return (
    <Router>
      <div className="app">
        <div className="app__navbar"></div>
        <Navbar add_Note={add_blankNote} />

        <div className="app__content">
          <Route path="/">
            <Lists
              list={notes}
              delete_Note={deleteNote}
              whenClicked={show_Note}
            />

            <TextArea
              onAdd={addNote}
              display_note={showNote}
              add_Note={blankNote}
              // remove_Note={remove_blankNote}
              // whenClicked={show_Note}
            />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
