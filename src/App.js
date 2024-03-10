import './App.css';
import NodeLists from "./components/NoteLists";
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "09/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "01/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "05/03/2024",
    },

  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  //retreving saved notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
//check if retrevie any notes from local storage
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])


  //saving data in local storage
  useEffect(() => {
    try {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  }, [notes]);


  const addNote = (text) => {
    // console.log(text);/

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NodeLists notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote} handleDeleteNote={deleteNode} />
      </div>
    </div>
  );
}

export default App;
