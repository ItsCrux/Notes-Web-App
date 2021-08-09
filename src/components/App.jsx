import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  
  const [noteArr, setNoteArr] = useState([]);



  function createNote(note, e) {
    
    setNoteArr((prevArr) => {
      return [...prevArr, note];
    });
    e.preventDefault();
  }

  function deleteNote(id){
    setNoteArr( (prevArr) =>{
      return noteArr.filter( (item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote} />
      {noteArr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;


