import { useEffect, useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Header from './components/Header';
import { nanoid } from 'nanoid';

function App() {

  const [notes, setNotes] = useState([])
  const [inputText, setInputText] = useState('')

  // handles change of state everytime a user is typing
  function noteText(event) {
    setInputText(event.target.value);
  }

  function saveNote() {


  }

  function deleteNote(id) {

  }

  const noteEl = notes.map(note =>
    <Note

    />
  )
  return (
    <div>
      <Header />
      <div className="notes" >
        {noteEl}
        <CreateNote noteText={noteText} saveNote={saveNote} inputText={inputText} />
      </div>
    </div>
  );
}

export default App;