import "./App.css";
import "./Components/Landing";
import "./Components/AddButton";
import LandingComponent from "./Components/Landing";
import UserInputForm from "./Components/UserInputForm";
import { useEffect, useState } from "react";

import AddButton from "./Components/AddButton";
import NoteItem from "./Components/NoteItem";
function App() {
  const [allNotes, setAllNotes] = useState(function(){
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : []; 
  });
  const[isAddButtonClicked, setAddButtonClicked] = useState(false);
  // const [isFormSubmitted, setFormSubmitted] = useState(false);
  const addClickHandler = function () { 
    setAddButtonClicked(true);
  };
  const formSubmitHandler = function (reminder) {
    setAddButtonClicked(false);    
    const newNote = {
      id:Date.now(),
      note:reminder
    }
    setAllNotes((prevNotes) => [...prevNotes,newNote]);
    
  }
  const closeFormHandler = () => setAddButtonClicked(false);
  const deleteNote = function (id) {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
  useEffect(function () {
    localStorage.setItem('notes',JSON.stringify(allNotes));
  },[allNotes]);
  return (
    <div className="App">
     {!allNotes.length > 0 && <LandingComponent /> }
     {isAddButtonClicked && 
     <UserInputForm submit={formSubmitHandler} close={closeFormHandler}/>
}
<div className="notes-container"> {/* Add a container for the notes */}
      {allNotes.map((note) => {
          return <NoteItem key={note.id} note={note} onDelete={deleteNote}/>
      })}
      </div>
      <AddButton add={addClickHandler}/>
    </div>
  );
}

export default App;
