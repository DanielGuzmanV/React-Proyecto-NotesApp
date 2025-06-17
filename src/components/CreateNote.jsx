import { useContext, useState } from "react"
import { NoteContext } from "../context/notecontext"
import './CreateNote.css'

function CreateNote() {
  const {addNewNotes} = useContext(NoteContext);
  const [noteTitle, setNoteTitle] = useState("");
  
  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  const handleInput = (event) => {
    setNoteTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!noteTitle) return;

    const newNote = {
      id: createId(),
      title: noteTitle,
      marked: false,
    }
    addNewNotes(newNote);
    setNoteTitle("");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>

      <input
        type="text" 
        className="note-title"
        placeholder="Nueva nota"
        value={noteTitle}
        onChange={handleInput}
      />

      <button className="create-btn">+</button>

    </form>
  )
}

export default CreateNote