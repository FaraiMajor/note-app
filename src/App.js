import { useEffect, useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Header from './components/Header';
import Search from './components/Search';
import { nanoid } from 'nanoid';

function App() {

  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("Notes")) || [])
  const [inputText, setInputText] = useState('')
  const [searchText, setSearchText] = useState('');

  // handles change of state everytime a user is typing
  function noteText(event) {
    setInputText(event.target.value);
  }

  function saveNote() {
    const date = new Date()
    setNotes(prevNote => [
      ...prevNote, {
        id: nanoid(),
        text: inputText,
        date: date.toLocaleDateString
      }
    ])

    setInputText("")

  }

  // delete note by id by filter method
  function deleteNote(id) {
    const deletedNote = notes.filter(note => note.id !== id)
    setNotes(deletedNote)

  }
  // get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  // filter off and notes from the search using searchText state
  const noteEl = notes.filter(note => note.text.toLowerCase().includes(searchText)).map(note =>
    <Note
      text={note.text} date={note.date} deleteNote={() => deleteNote(note.id)}
    />
  )
  return (
    <div>
      <Header />
      <Search handleSearchNote={setSearchText} />
      <div className="notes" >
        {noteEl}
        <CreateNote noteText={noteText} saveNote={saveNote} inputText={inputText} />
      </div>
    </div>
  );
}

export default App;