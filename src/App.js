import { useEffect, useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Header from './components/Header';
import Search from './components/Search';
import { nanoid } from 'nanoid';

function App() {

  // get notes straight from local host by setting our state to it
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("Notes")) || [])
  const [inputText, setInputText] = useState('')
  const [searchText, setSearchText] = useState('');
  const [editNoteId, setEditNoteId] = useState('');

  // handles change of state everytime a user is typing
  function noteText(event) {
    setInputText(event.target.value);
  }

  // modify the saveNote function to handle both creating a new note and editing an
  //  existing note. You can check if the editNoteId state is not an empty string, 
  // and if so, update the note with the corresponding id. Otherwise, create a new note.
  function saveNote() {
    const newdate = new Date().toLocaleDateString();

    if (editNoteId) {
      const updatedNotes = notes.map(note => {
        if (note.id === editNoteId) {
          return {
            ...note,
            text: inputText,
            date: newdate,
          };
        } else {
          return note;
        }
      });

      setNotes(updatedNotes);
      setEditNoteId('');
    } else {
      setNotes(prevNote => [
        ...prevNote, {
          id: nanoid(),
          text: inputText,
          date: newdate,
        }
      ]);
    }

    setInputText('');
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
      text={note.text}
      date={note.date}
      deleteNote={() => deleteNote(note.id)}
      editNote={() => setEditNoteId(note.id)} //when edit note is clicked we update editNoteId state. this is the same ID we will use in createNote

    />
  )
  return (
    <div>
      <Header />
      <Search handleSearchNote={setSearchText} />
      <div className="notes" >
        {noteEl}
        <CreateNote
          noteText={noteText}
          saveNote={saveNote}
          inputText={inputText}
          editNoteId={editNoteId} //pass id to createNote 
        />
      </div>
    </div>
  );
}

export default App;