import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([]);

  function allNotes(note) {
    addNotes((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deletItem(id) {
    addNotes((previtems) => {
      return previtems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={allNotes} />
      {notes.map((notelist, index) => (
        <Note
          key={index}
          id={index}
          title={notelist.title}
          content={notelist.content}
          onClick={deletItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
